<script setup lang="ts">
  type Props = {
    modelValue: string
    name: string
    label?: string
    type?: 'text' | 'number' | 'password'
    placeholder?: string
    error?: string
    isTouch?: boolean
  }

  type Emits = {
    (eventName: 'onChange', value: string): void
    (eventName: 'update:modelValue', value: string): void
  }

  withDefaults(defineProps<Props>(), {
    type: 'text',
    placeholder: '',
    error: '',
    isTouch: false,
  })

  const emits = defineEmits<Emits>()

  const onChange = (event: Event) => {
    const { target } = event
    if (target instanceof HTMLInputElement) {
      emits('onChange', target.value)
      emits('update:modelValue', target.value)
    }
  }
</script>

<template>
  <div :class="$style.wrap">
    <label v-if="label" :class="$style.label">{{ label }}</label>
    <input
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :class="$style.input"
      @input="onChange"
    />
    <span v-if="error && isTouch" :class="$style.error">{{ error }}</span>
  </div>
</template>

<style lang="css" module>
  .wrap {
    margin-bottom: 12px;
  }

  .label {
    display: block;
    margin: 0 8px 4px 0;
    text-align: left;
  }
  .input {
    appearance: none;
    width: 100%;
    padding: 8px;
  }

  .error {
    display: block;
    text-align: left;
    color: red;
  }
</style>
