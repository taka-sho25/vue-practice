<script setup lang="ts">
  import Button from '@/components/Button.vue'
  import Input from '@/components/Input.vue'
  import { useFormValidate } from '../'

  const { meta, errors, name, email, password, passwordConfirm, onSubmit } = useFormValidate()
</script>

<template>
  <div :class="$style.wrapper">
    <form @submit="onSubmit">
      <Input v-model="name" name="name" label="Name" :error="errors.name" :isTouch="meta.touched" />
      <Input
        v-model="email"
        name="email"
        label="Email"
        :error="errors.email"
        :isTouch="meta.touched"
      />
      <Input
        v-model="password"
        name="password"
        label="Password"
        type="password"
        :error="errors.password"
        :isTouch="meta.touched"
      />
      <Input
        v-model="passwordConfirm"
        name="passwordConfirm"
        label="Confirm Password"
        type="password"
        :error="errors.passwordConfirm"
        :isTouch="meta.touched"
      />
      <Button type="submit">Submit</Button>
    </form>
  </div>
</template>

<style lang="css" module>
  .wrapper {
    width: 70%;
    margin: 0 auto;
  }
</style>
