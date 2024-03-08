import useConfig from './useConfig'

export default function () {
  return {
    createLink,
  }
}

async function createLink() {
  const { host } = useConfig()

  const tabs = await browser.tabs.query({ active: true, currentWindow: true });
  const tab = tabs[0]

  const url = `${host}/links`
  const res = await fetch(
    url,
    {
      credentials: 'include',
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ link: { url: tab.url } }),
    },
  )

  const { title, message } = res.ok
    ? { title: i18n.global.t('save-link.success.title'), message: i18n.global.t('save-link.success.message') }
    : { title: i18n.global.t('save-link.failure.title'), message: i18n.global.t('save-link.failure.message') }

  const notificationId = await browser.notifications.create(
    {
      type: 'basic',
      iconUrl: 'logo.png',
      title,
      message,
    },
  )

  setTimeout(() => browser.notifications.clear(notificationId), 3000)
}
