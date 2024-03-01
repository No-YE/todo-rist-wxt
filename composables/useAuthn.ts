import { Ref, onMounted, ref } from 'vue'
import useConfig from './useConfig'

const { host } = useConfig()

export default function () {
  const isSignedIn: Ref<boolean | null> = ref(null)

  onMounted(async() => {
    isSignedIn.value = await fetchMe()
  })

  browser.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (changeInfo.status == 'loading') {
      const targetUrl = `${host}/direct_close`
      if (tab.url == targetUrl) {
        browser.tabs.remove(tabId);
        isSignedIn.value = await fetchMe()
      }
    }
  });

  return { isSignedIn }
}

async function fetchMe() {
  const url = `${host}/users/me.json`
  
  try {
    const res = await fetch(url, { credentials: 'include' })
    return res.status === 200
  } catch (e) {
    return false
  }
}
