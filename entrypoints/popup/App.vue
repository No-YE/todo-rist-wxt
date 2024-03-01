<script lang="ts" setup>
import Header from '@/components/Header.vue';
import NotSignedIn from '@/components/NotSignedIn.vue';
import SignedIn from '@/components/SignedIn.vue';
import useAuthn from '@/composables/useAuthn';

const { isSignedIn } = useAuthn();
</script>

<template>
  <Header></Header>

  <SignedIn v-if="isSignedIn === true"></SignedIn>
  <NotSignedIn v-else-if="isSignedIn === false"></NotSignedIn>
</template>
