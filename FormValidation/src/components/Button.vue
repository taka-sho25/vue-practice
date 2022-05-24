<script setup lang="ts">
  type Props = {
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
  }

  type Emits = {
    (eventName: 'click'): void
  }

  withDefaults(defineProps<Props>(), {
    type: 'button',
    disabled: false,
  })

  const emits = defineEmits<Emits>()

  const onClick = () => {
    emits('click')
  }
</script>

<template>
  <button :type="type" :disabled="disabled" @click="onClick" :class="$style.button">
    <slot />
  </button>
</template>

<style lang="css" module>
  .button {
    background: #0396e9;
    border: 1px solid #0396e9;
    border-radius: 4px;
    color: #ffffff;
    padding: 8px 20px;
  }
</style>
