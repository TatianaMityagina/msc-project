<template>
  <main class="page-main">
    <subtitle :subtitles="subtitles"/>
    <about-product :content-text="getContent"/>
    <Navigation v-show="$route.fullPath === '/screen/noise-screen'" :navigation-list="fenceRouterListSort" style="padding-top: 60px" />
    <order-form/>
  </main>
</template>

<script>
import productScreenContent from 'static/mock/productScreenContent.json'
import subtitle from '../../../components/subtitle/subtitle'
import AboutProduct from '../../../components/about-product/about-product'
import OrderForm from '../../../components/odrder-form/order-form'
import productPipeContent from '~/static/mock/productPipeContent.json'

export default {
  name: 'ScreenProduct',
  components: {
    subtitle,
    AboutProduct,
    OrderForm
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
      productScreenContent,
      fenceRouterList: [
        {
          id: 4,
          path: '/screen/noise-screen/production-of-noise-screens',
          name: 'Производство шумозащитных экранов'
        },
        {
          id: 5,
          path: '/screen/noise-screen/noise-screens-at-russian-railways',
          name: 'Шумозащитные экраны на РЖД'
        },
        {
          id: 6,
          path: '/screen/noise-screen/installation-of-noise-screens',
          name: 'Монтаж шумозащитных экранов'
        },
        {
          id: 7,
          path: '/screen/noise-screen/transparent-noise-screens',
          name: 'Прозрачные шумозащитные экраны'
        },
        {
          id: 8,
          path: '/screen/noise-screen/calculation-noise-shield',
          name: 'Расчет шумозащитного экрана'
        },
        {
          id: 9,
          path: '/screen/noise-screen/noise-screens-top10',
          name: 'Шумозащитные экраны Топ 10'
        },
        {
          id: 10,
          path: '/screen/noise-screen/noise-screen-made-of-polycarbonate',
          name: 'Шумозащитный экран из поликарбоната'
        },
        {
          id: 12,
          path: '/screen/noise-screen/noise-screen-made-of-sandwich-panels',
          name: 'Шумозащитный экран из сэндвич-панелей'
        },
      ],
    }
  },
  computed: {
    getContent() {
      return this.productScreenContent.find(e => e.path === this.$route.path);
    },
    fenceRouterListSort () {
      return this.fenceRouterList.sort(function (a, b) {
        if (a.name < b.name) { return -1 }
        if (a.name > b.name) { return 1 }
        return 0
      })
    },
    subtitles() {
      if (this.getContent) {
        this.getContent.href = '/screen';
        return this.getContent
      } else {
        throw ({status: 404, message: 'error'});
      }
    }
  },
  created() {
    const isPath = this.productScreenContent.find(e => e.path === this.$route.path)
    if (!isPath) {
      this.$nuxt.error({ statusCode: 404, message: 'Page not found' })
    }
  },
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
