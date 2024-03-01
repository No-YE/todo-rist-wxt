import useLink from '@/composables/useLink';

export default defineBackground(() => {
  const { createLink } = useLink();

  browser.commands.onCommand.addListener((command) => {
    if (command === 'create_link') {
      createLink()
    }
  });

  browser.runtime.onInstalled.addListener(() => {
    browser.contextMenus.create({
      id: 'todorist',
      title: 'create link',
      contexts: ['page'],
    });
  })

  browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'todorist') {
      createLink()
    }
  });
});

