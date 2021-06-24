<template>
  <main class="page-main">
    <subtitle :subtitles="subtitles"/>
    <about-product :content-text="getContent"/>
    <order-form/>
  </main>
</template>

<script>
import productScreenContent from 'static/mock/productScreenContent.json'
import subtitle from '../../../components/subtitle/subtitle'
import AboutProduct from '../../../components/about-product/about-product'
import OrderForm from '../../../components/odrder-form/order-form'

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
      productScreenContent
    }
  },
  computed: {
    getContent() {
      return this.productScreenContent.find(e => e.path === this.$route.path);
    },
    subtitles() {
      this.getContent.href = '/screen';
      return this.getContent
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
