<template>
  <section class="tw-text-center">
    <hello/>
  </section>
</template>

<script>
import Hello from "@/components/Hello.vue"
export default {
  name: 'App',

  components: {
    Hello
  },
  data(){
    return {
      
    }
  }
};
</script>

<style lang="scss">
@import "../public/scss/main.scss";

</style>
