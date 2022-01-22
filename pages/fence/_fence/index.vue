<template>
  <main class="page-main">
    <subtitle :subtitles="subtitles" />
    <about-product :content-text="getContent" />
    <Navigation v-show="$route.fullPath === '/fence/pedestrian-fences'" :navigation-list="fenceRouterListSort" style="padding-top: 60px" />
    <order-form />
  </main>
</template>

<script>
import productFenceContent from 'static/mock/productFenceContent.json'
import subtitle from '../../../components/subtitle/subtitle'
import AboutProduct from '../../../components/about-product/about-product'
import OrderForm from '../../../components/odrder-form/order-form'
import informativeArticlesContent from '~/static/mock/informativeArticlesContent.json'

export default {
  name: 'Fence',
  components: {
    subtitle,
    AboutProduct,
    OrderForm
  },
  data () {
    return {
      productFenceContent,
      fenceRouterList: [
        {
          id: 23,
          path: '/fence/pedestrian-fences/metal-pedestrian-fence',
          name: 'Металлическое пешеходное ограждение'
        },
        {
          id: 24,
          path: '/fence/pedestrian-fences/guide-pedestrian-barriers',
          name: 'Направляющие пешеходные ограждения'
        },
        {
          id: 25,
          path: '/fence/pedestrian-fences/restricting-pedestrian-fence',
          name: 'Ограничивающее пешеходное ограждение'
        },
        {
          id: 26,
          path: '/fence/pedestrian-fences/pedestrian-barrier-cross',
          name: 'Пешеходное ограждение Крест'
        },
        {
          id: 27,
          path: '/fence/pedestrian-fences/pedestrian-barrier-ORUD',
          name: 'Пешеходное ограждение ОРУД'
        },
        {
          id: 28,
          path: '/fence/pedestrian-fences/pedestrian-barrier-PO-1-cross',
          name: 'Пешеходное ограждение ПО-1 Крест'
        },
        {
          id: 29,
          path: '/fence/pedestrian-fences/pedestrian-barrier-PO-2',
          name: 'Пешеходное ограждение ПО-2'
        },
        {
          id: 30,
          path: '/fence/pedestrian-fences/pedestrian-barrier-PO-6',
          name: 'Пешеходное ограждение ПО-6'
        },
        {
          id: 31,
          path: '/fence/pedestrian-fences/pedestrian-railings',
          name: 'Пешеходное перильное ограждение'
        },
        {
          id: 32,
          path: '/fence/pedestrian-fences/retaining-pedestrian-fence',
          name: 'Удерживающие пешеходные ограждения'
        },
        {
          id: 33,
          path: '/fence/pedestrian-fences/installing-pedestrian-barriers',
          name: 'Установка пешеходных ограждений'
        }
      ]
    }
  },
  computed: {
    getContent () {
      return this.productFenceContent.find(e => e.path === this.$route.path)
    },
    fenceRouterListSort () {
      return this.fenceRouterList.sort(function (a, b) {
        if (a.name < b.name) { return -1 }
        if (a.name > b.name) { return 1 }
        return 0
      })
    },
    subtitles () {
      if (this.getContent) {
        this.getContent.href = '/fence'
        return this.getContent
      } else {
        throw ({status: 404, message: 'error'});
      }
    }
  },
  async asyncData({ route, error }) {
    const isPath = productFenceContent.find(e => e.path === route.path)
    if (!isPath) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head () {
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
        { hid: 'og:url', property: 'og:url', content: `https://msk23.ru${this.getContent.path}` }
      ],
      link: [
        { rel: 'canonical', href: `https://msk23.ru${this.getContent.path}` }
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
}
</style>
