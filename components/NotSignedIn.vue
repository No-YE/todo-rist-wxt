<script lang="ts" setup>
import useConfig from '@/composables/useConfig';

const { t } = useI18n();
const { host } = useConfig();

const signIn = async () => {
  const url = `${host}/users/sign_in?chrome_extension=true`
  browser.windows.create({ url, width: 200, height: 500 })
};
</script>

<template>
  <div class="box">
    <h3>{{ t('not-signed-in.title') }}</h3>
    <button class="btn-sign-in" @click="signIn">
      {{ t('not-signed-in.sign-in') }}
    </button>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
}
      
.btn-sign-in {
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
.btn-sign-in:hover {
  background-color: var(--color-primary-light);
}
</style>
