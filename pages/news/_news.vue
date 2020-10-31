<template>
  <main class="page-main">
    <NewsInfo />
  </main>
</template>

<script>
  import NewsInfo from '../../components/news-info/news-info'

  export default {
    name: 'News',
    components: {
      NewsInfo
    }
  }
</script>

<style lang="scss" scoped>
  .page-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 64px;
    width: 100%;
    flex-grow: 1;
  }
</style>
