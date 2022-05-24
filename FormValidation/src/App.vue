<script setup lang="ts">
  import Form from '@/features/form/component/index.vue'
</script>

<template>
  <div class="form-validate">
    <h1>Form Validate</h1>
    <Form />
  </div>
</template>

<style>
  body {
    background: #17191c;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .form-validate {
    max-width: 60%;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #2c3e50;
    border-radius: 4px;
  }
</style>
