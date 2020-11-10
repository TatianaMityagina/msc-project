<template>
  <main class="page-main">
    <Subtitle v-bind:subtitles="{
          href: '/news',
          title: getNews.title,
          text: ''
        }" />
    <Article v-bind:contentArticle="getNews.content" />

    <div class="page-main__border">
      <SliderNews :show-button-next="false" :show-button-prev="false" :show-button-more="false" />
    </div>
  </main>
</template>

<script>
  import Subtitle from '../../components/subtitle/subtitle'
  import Article from '../../components/article/article'
  import SliderNews from '../../components/slider-news/slider-news'
  import newsContent from '../../static/mock/newsContent.json'

  export default {
    name: 'News',
    components: {
      Subtitle,
      Article,
      SliderNews
    },
    data () {
      return {
        newsContent
      }
    },
    computed: {
      getNews(){
        return this.newsContent.find(e => `/article${e.path}` === this.$route.path);
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
    overflow: hidden;
    background-color: $bg-color-light-gray;
  }

  .page-main__border {
    width: 100%;
    padding: 80px 40px 80px;

    border-top: 1px solid $font-color-gray;
  }

  @include tablet-large {
    .page-main__border {
      padding: 60px 0 60px 40px;
    }
  }

  @include tablet-large {
    .page-main__border {
      padding: 40px 0 80px 15px;
    }
  }
</style>
