<template>
  <h1>
    &lt;<span class="tag">Hello</span>&nbsp;&nbsp;
    <span class="attribute">:id</span><span class="attribute__value">="<span class="">Vue.js</span>"</span>&nbsp;&nbsp;
    <span class="attribute">@plugin</span><span class="attribute__value">="<span class="">Vuetify</span>"</span>&nbsp;&nbsp;
    <span class="attribute">:style</span><span class="attribute__value">="<span class="">tailwindcss</span>"</span>&nbsp;&nbsp;&frasl;&gt;
  </h1>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  @apply tw-text-gray-900 tw-font-light tw-text-3xl tw-mt-10;
}
.tag {
  @apply tw-text-blue-500 tw-font-semibold;
}
.attribute{
  @apply tw-text-green-500 tw-font-semibold tw-text-2xl;
}
.attribute__value{
  @apply tw-text-red-600 tw-text-2xl;
}
.attribute__value--gray {
  @apply tw-text-gray-400;
}
</style>