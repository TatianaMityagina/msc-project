<template>
  <main class="page-main">
    <subtitle v-bind:subtitles="subtitles"/>
    <NewsInfo/>
  </main>
</template>

<script>
import NewsInfo from '../../components/news-info/news-info'
import subtitle from '../../components/subtitle/subtitle'

export default {
  name: 'News',
  components: {
    NewsInfo,
    subtitle
  },
  data() {
    return {
      subtitles: {
        href: '/',
        title: 'Новости ООО «МСК»',
        text: ''
      }
    }
  },
  head () {
    return {
      title: 'Новости компании ООО «МСК»',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Читайте последние новости компании ООО «МСК». Информация о выставках, семинарах, конференциях, новых товарах и услугах'
        }
      ]
    }
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
  background-color: $bg-color-light-gray;
}
</style>
