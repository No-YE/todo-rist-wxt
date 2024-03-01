<script lang="ts" setup>
const { t } = useI18n();

const setShortcut = () => {
  const url = 'chrome://extensions/shortcuts'
  browser.tabs.create({ url})
}
</script>

<template>
  <div class="box">
    <h3>{{ t('signed-in.title') }}</h3>
    <button class="btn-set-shortcut" @click="setShortcut">
      {{ t('signed-in.set-shortcut') }}
    </button>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
}
      
.btn-set-shortcut {
  margin-top: 1em;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  background-color: var(--color-primary);
  color: white;
  text-align: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.75rem;

}
.btn-set-shortcut:hover {
  background-color: var(--color-primary-light);
}
</style>
