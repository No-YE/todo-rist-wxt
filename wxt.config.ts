import { defineConfig } from 'wxt';
import vue from '@vitejs/plugin-vue';
import vueI18n from '@intlify/unplugin-vue-i18n/vite';

// See https://wxt.dev/api/config.html
export default defineConfig({
  imports: {
    addons: {
      vueTemplate: true,
    },
  },
  vite: () => ({
    plugins: [
      vue(),
      vueI18n({
        include: ['assets/locales/*.json'],
        strictMessage: false,
      }),
    ],
  }),
  manifest: {
    permissions: ['tabs', 'notifications', 'storage', 'management', 'contextMenus'],
    host_permissions: [
      "http://localhost:3001/*",
      "https://todorist.com/*"
    ],
    commands: {
      create_link: {
        suggested_key: {
          "default": "Ctrl+K",
          "mac": "Command+K"
        },
        description: 'Create a link',
      },
    },
    default_locale: 'ko',
    action: {
      default_icon: 'logo.png',
    },
  },
});
