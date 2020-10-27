<template>
  <main class="page-main">
    <Intro />
  </main>
</template>

<script>
  import Intro from '../components/intro/intro'

  export default {
    components: {
      Intro
    }
  }
</script>

<style lang="scss" scoped>
  .page-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
</style>
