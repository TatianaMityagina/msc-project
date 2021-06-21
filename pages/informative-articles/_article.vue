<template>
  <main class="page-main">
    <subtitle :subtitles="subtitles"/>
    <about-product :content-text="getContent"/>
    <Navigation :navigation-list="articleRouterListSort"/>
<!--    ь-->
  </main>
</template>

<script>
import informativeArticlesContent from '../../static/mock/informativeArticlesContent.json'
import subtitle from '../../components/subtitle/subtitle'
import AboutProduct from '../../components/about-product/about-product'
import OrderForm from '../../components/odrder-form/order-form'
import Navigation from  '../../components/navigation/navigation'

export default {
  name: 'InformativeArticles',
  components: {
    subtitle,
    AboutProduct,
    OrderForm,
    Navigation
  },
  head() {
    return {
      title: this.getContent.meta.og_title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.getContent.meta.og_title
        },
        {
          hid: 'description',
          name: 'description',
          content: this.getContent.meta.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.getContent.meta.og_title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.getContent.meta.og_description
        },
        {hid: 'og:url', property: 'og:url', content: `https://msk23.ru${this.getContent.path}`}
      ],
      link: [
        {rel: 'canonical', href: `https://msk23.ru${this.getContent.path}`}
      ]
    }
  },
  data() {
    return {
      informativeArticlesContent,
      articleRouterList: [
        {
          id: 0,
          path: '/informative-articles/weight-pedestrian-fence-per-1m',
          name: 'Вес пешеходного ограждения на 1 п м'
        },
        {
          id: 1,
          path: '/informative-articles/types-of-culverts',
          name: 'Виды водопропускных труб'
        },
        {
          id: 2,
          path: '/informative-articles/types-of-road-barriers',
          name: 'Виды дорожных ограждений'
        },
        {
          id: 3,
          path: '/informative-articles/barrier-fence-installation-tolerances',
          name: 'Допуски по установке барьерного ограждения'
        },
        {
          id: 4,
          path: '/informative-articles/guardrail-weight',
          name: 'Вес барьерного ограждения'
        },
        {
          id: 5,
          path: '/informative-articles/design-culvert',
          name: 'Конструкция водопропускной трубы'
        },
        {
          id: 6,
          path: '/informative-articles/applications-for-culverts',
          name: 'Области применения водопропускных труб'
        },
        {
          id: 7,
          path: '/informative-articles/rules-for-use-pedestrian-barriers',
          name: 'Правила применения пешеходных ограждений'
        },
        {
          id: 8,
          path: '/informative-articles/designing-culverts',
          name: 'Проектирование водопропускных труб'
        },
        {
          id: 9,
          path: '/informative-articles/dimensions-road-barriers',
          name: 'Размеры дорожного ограждения'
        },
        {
          id: 10,
          path: '/informative-articles/culvert-operation-mode',
          name: 'Режим работы водопропускных труб'
        },
        {
          id: 11,
          path: '/informative-articles/recommended-ratio-culvert-diameter-length',
          name: 'Рекомендуемое соотношение диаметра и длины водопропускной трубы'
        },
        {
          id: 12,
          path: '/informative-articles/installation-barrier-fence-on-highways',
          name: 'Устройство барьерного ограждения на автомобильных дорогах'
        },
        {
          id: 13,
          path: '/informative-articles/culvert-installation',
          name: 'Устройство водопропускных труб'
        },
        {
          id: 14,
          path: '/informative-articles/installation-metal-pedestrian-barriers',
          name: 'Устройство металлических пешеходных ограждений'
        },
        {
          id: 15,
          path: '/informative-articles/characteristics-road-culverts',
          name: 'Характеристики дорожных водопропускных труб'
        },
        {
          id: 16,
          path: '/informative-articles/barrier-fence-elements',
          name: 'Элементы барьерного ограждения'
        },
        {
          id: 17,
          path: '/informative-articles/culvert-elements',
          name: 'Элементы водопропускной трубы'
        }
      ]
    }
  },
  computed: {
    getContent() {
      return this.informativeArticlesContent.find(e => e.path === this.$route.path);
    },
    subtitles() {
      this.getContent.href = '/';
      return this.getContent
    },
    articleRouterListSort() {
      return this.articleRouterList.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })
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
}
</style>
