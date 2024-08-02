<script setup>
import {Field, Form} from "vee-validate";
import {reactive, ref} from "vue";
import * as yup from 'yup';

import SliderComponent from "@/components/SliderComponent.vue";
import {login} from "@/services/auth.service.js";
import router from "@/router.js";

const error = ref(null);
const loading = ref(false);
const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

async function handleSubmit(values) {
  try {
    loading.value = true;
    const response = await login(values);
    error.value = null;
    localStorage.setItem('token', response.token);
    await router.push({name: 'Instance'});
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="w-screen min-h-screen bg-[#F5F5F5] flex justify-center items-center">
    <section
        class="px-12 h-[500px] lg:p-0 lg:w-[950px] lg:h-[654px] bg-white rounded-xl flex overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.04)]">
      <!--   form   -->
      <div class="w-full lg:w-6/12 flex flex-col gap-6 items-center justify-center relative">
        <h1 class="text-xl font-[500]">پنل کاربری سرویس های ابری</h1>
        <!--  form  -->
        <Form @submit="handleSubmit" :validation-schema="schema" v-slot="{errors}">
          <div v-if="error" class="bg-red-500 px-4 py-2 rounded-md text-white text-sm">{{ error }}</div>
          <!--   wrapper input   -->
          <div class="flex flex-col gap-6 mt-6">
            <Field name="username"
                   class="bg-gray-50 py-2 rounded-md w-[300px] px-4 border-2 transition-all duration-300 border-gray-100 focus:border-blue-500 outline-none "
                   :class="{'border-red-400' :errors.username}"
                   autofocus
                   placeholder="نام کاربری"/>
            <Field name="password" type="password"
                   class="bg-gray-50 py-2 rounded-md w-[300px] px-4 border-2 transition-all duration-300 border-gray-100 focus:border-blue-500 outline-none "
                   :class="{'border-red-400' :errors.password}"
                   placeholder="کلمه عبور"/>
            <button type="submit" :disabled="loading"
                    class="bg-[#333] hover:bg-[#444] flex items-center justify-center transition-colors duration-300 py-3 text-white rounded-md disabled:cursor-not-allowed">
              <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                   fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span v-else>ورود به سرویس ابری</span>
            </button>
          </div>
        </Form>
        <!--  team  -->
        <div class="absolute bottom-8 text-center flex flex-col gap-2 text-xs">
          <p class="text-black/70">تیم توسعه سرویس های ابری فرا ارتباط</p>
          <p class="text-black/70">درصورت بروز هرگونه مشکل با پشتیبانی تماس بگیرید.</p>
          <p class="text-black/70 tracking-[2px]">051-31668185</p>

        </div>
      </div>
      <!--   slider   -->
      <div class="w-6/12 hidden lg:block">
        <SliderComponent/>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>