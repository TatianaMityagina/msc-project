<template>
  <div class="default-layout">
    <Header/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

export default {
  components: {
    Header,
    Footer
  },
}
</script>

<style lang="scss" scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-width: 320px;
  min-height: 100vh;
  padding: 0;
  margin: 0;

  font-family: $main-font-family;
  font-size: 14px;
  line-height: 1.5;
  color: $main-font-color;

  scroll-behavior: smooth;
}

</style>
