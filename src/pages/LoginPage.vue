<script setup>
import {Field, Form} from "vee-validate";
import SliderComponent from "@/components/SliderComponent.vue";


</script>

<template>
  <div class="w-screen min-h-screen bg-[#F5F5F5] flex justify-center items-center">
    <section class="w-[950px] h-[654px] bg-white rounded-xl flex overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.04)]">
      <!--   form   -->
      <div class="w-6/12 flex flex-col gap-6 items-center justify-center relative">
        <h1 class="text-xl font-[500]">پنل کاربری سرویس های ابری</h1>
        <!--  form  -->
        <Form>
          <!--   wrapper input   -->
          <div class="flex flex-col gap-6 mt-6">
            <Field name="username"
                   class="bg-gray-50 py-2 rounded-md w-[300px] px-4 border-2 transition-all duration-300 border-gray-100 focus:border-blue-500 outline-none "
                   autofocus
                   placeholder="نام کاربری"/>
            <Field name="password" type="password"
                   class="bg-gray-50 py-2 rounded-md w-[300px] px-4 border-2 transition-all duration-300 border-gray-100 focus:border-blue-500 outline-none "
                   placeholder="کلمه عبور"/>
            <button type="submit"
                    class="bg-[#333] hover:bg-[#444] transition-colors duration-300 py-3 text-white rounded-md">ورود به
              سرویس ابری
            </button>
          </div>
        </Form>
        <!--  team  -->
        <div class="absolute bottom-8 text-center flex flex-col gap-2 text-xs">
          <p class="text-black/70">گروه برنامه نویسی فرا ارتباط</p>
          <p class="text-black/70">درصورت بروز هرگونه مشکل با پشتیبانی تماس بگیرید.</p>
          <p class="text-black/70">051-31668185</p>

        </div>
      </div>
      <!--   slider   -->
      <div class="w-6/12">
        <SliderComponent/>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>