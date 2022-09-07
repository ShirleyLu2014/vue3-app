<template>
  <el-row class="min-h-screen">
    <el-col
      :lg="16"
      :md="12"
      class="bg-indigo-500 flex items-center justify-center text-light-50"
    >
      <div class="text-center">
        <div class="font-bold text-5xl mb-4">欢迎光临</div>
        <div class="text-gray-50">vue3+vite中后台项目菜单管理权限管理</div>
      </div>
    </el-col>
    <el-col
      :lg="8"
      :md="12"
      class="bg-light-50 flex items-center justify-center flex-col"
    >
      <h2 class="font-bold text-3xl text-gray-800 mb-4">欢迎回来</h2>
      <div class="flex justify-items-center items-center text-gray-400 mb-4">
        <span></span>
        <span>账号密码登陆</span>
        <span></span>
      </div>
      <el-form class="w-[250px]" model="formData">
        <el-form-item props="userName">
          <el-input
            placeholder="请输入用户名"
            v-model="formData.userName"
          ></el-input>
        </el-form-item>
        <el-form-item props="password">
          <el-input
            placeholder="请输入密码"
            v-model="formData.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="w-[250px]" round color="#6366f1"
            >登 陆</el-button
          >
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup>
import { reactive } from "vue";
const formData = reactive({
  userName: "",
  password: "",
});
</script>

<style lang="scss" scoped></style>
