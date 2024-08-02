<script setup>
import {onMounted, reactive} from 'vue';
import {getUrl} from "@/services/instance.service.js";
import {useRouter} from "vue-router";

import {check} from "@/services/instance.service.js";

const router = useRouter();
const state = reactive({
  instance: '',
  loading: false
});

function logout() {
  localStorage.clear();
  router.push({name: 'Login'});
}

async function checkAccess(interval) {
  try {
    await check();
  } catch (e) {
    if (e.response.status === 401) {
      localStorage.clear();
      clearInterval(interval);
      await router.push({name: 'LoginPage'});
    }
  }
}

onMounted(async () => {
  try {
    const interval = setInterval(() => checkAccess(interval), 5000);
    state.loading = true;
    const response = await getUrl();
    state.instance = response.instance;
  } catch (error) {
    localStorage.clear();
    await router.push({name: 'LoginPage'});
  } finally {
    state.loading = false;
  }
});
</script>

<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <span class="font-black" v-if="state.loading">در حال بارگذاری ...</span>
    <iframe v-else :src="state.instance" class="w-full h-full"></iframe>
    <button @click="logout" class="fixed top-10 right-4 z-10 bg-white rounded-lg px-4 py-2 text-sm">خروج از سیستم
    </button>
  </div>
</template>

<style scoped>

</style>