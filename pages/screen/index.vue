<template>
  <main class="page-main">
    <Subtitle v-bind:subtitles="subtitles"/>
    <AboutScreen/>
    <CentralContent v-bind:content-options="contentOptionsTop"/>
    <ScreenStructure/>
    <ScreenTypes/>
    <ScreenPanel/>
    <ScreenProduction/>
    <CentralContent v-bind:content-options="contentOptionsBottom"/>
    <Navigation :navigation-list="screenRouterListSort" style="padding-top: 60px"/>
  </main>
</template>

<script>
import Subtitle from '../../components/subtitle/subtitle'
import AboutScreen from '../../components/about-screen/about-screen'
import CentralContent from '../../components/central-content/central-content'
import ScreenStructure from '../../components/screen-structure/screen-structure'
import ScreenTypes from '../../components/screen-types/screen-types'
import ScreenPanel from '../../components/screen-panel/screen-panel'
import ScreenProduction from '../../components/screen-production/screen-production'
import Navigation from  '../../components/navigation/navigation'

export default {
  name: 'Screen',
  components: {
    Subtitle,
    AboutScreen,
    CentralContent,
    ScreenStructure,
    ScreenTypes,
    ScreenProduction,
    ScreenPanel,
    Navigation
  },
  head() {
    return {
      title: 'Шумовые экраны и акустические барьеры',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'Продажа шумовых экранов и акустических барьеров от ведущих производителей'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Реализуем шумовые экраны и акустические барьеры по выгодной цене - обращайтесь по телефону +7 (964) 907-12-77. Заказ монтажа шумозащитных конструкций вдоль дорог Краснодара с доставкой на место сборки'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Продажа шумовых экранов и акустических барьеров от ведущих производителей'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Реализуем шумовые экраны и акустические барьеры по выгодной цене - обращайтесь по телефону +7 (964) 907-12-77. Заказ монтажа шумозащитных конструкций вдоль дорог Краснодара с доставкой на место сборки'
        },
        {hid: 'og:url', property: 'og:url', content: `https://msk23.ru/screen`}
      ],
      link: [
        {rel: 'canonical', href: `https://msk23.ru/screen`}
      ]
    }
  },
  data() {
    return {
      subtitles: {
        href: '/',
        title: 'Шумозащитные экраны ',
        text: 'Мы 	производим 	шумозащитные экраны, 	в 	состав которых 	входят звукопоглощающие и звукоизолирующие (антивандальные) панели, светопрозрачные звукоизолирующие панели и металлоконструкции'
      },
      contentOptionsTop: {
        color: '#ff6231',
        text: 'Наши экраны могут эксплуатироваться в условиях открытого атмосферного воздействия при температуре от минус 60 °С до плюс 55 °С и относительной влажности 75%, при температуре плюс 15 °С климатические условия УХЛ-1ГОСТ 15150-69',
      },
      contentOptionsBottom: {
        color: '#ff6231',
        text: 'Предприятие-изготовитель гарантирует соответствие панелей звукопоглощающих и звукоизолирующих, панелей светопрозрачных, а также комплектующих изделий требованиям технических условий и сохранение основных технических параметров экранов, при соблюдении потребителем условий транспортировки, хранения, монтажа, эксплуатации, а также отсутствии каких-либо механических повреждений на срок не менее 10 лет с момента установки'
      },
      screenRouterList: [
        {
          id: 0,
          path: '/screen/noise-screens-and-acoustic-barriers',
          name: 'Шумовые экраны и акустические барьеры'
        },
        {
          id: 1,
          path: '/screen/acoustic-screen',
          name: 'Акустический экран'
        },
        {
          id: 2,
          path: '/screen/noise-barriers',
          name: 'Шумозащитные заборы'
        },
        {
          id: 3,
          path: '/screen/noise-screen',
          name: 'Шумозащитные экраны'
        },
        {
          id: 4,
          path: '/screen/production-of-noise-screens',
          name: 'Производство шумозащитных экранов'
        },
        {
          id: 5,
          path: '/screen/noise-screens-at-russian-railways',
          name: 'Шумозащитные экраны на РЖД'
        },
        {
          id: 6,
          path: '/screen/installation-of-noise-screens',
          name: 'Монтаж шумозащитных экранов'
        },
        {
          id: 7,
          path: '/screen/transparent-noise-screens',
          name: 'Прозрачные шумозащитные экраны'
        },
        {
          id: 8,
          path: '/screen/calculation-noise-shield',
          name: 'Расчет шумозащитного экрана'
        },
        {
          id: 9,
          path: '/screen/noise-screens-top10',
          name: 'Шумозащитные экраны Топ 10'
        },
        {
          id: 10,
          path: '/screen/noise-screen-made-of-polycarbonate',
          name: 'Шумозащитный экран из поликарбоната'
        },
        {
          id: 12,
          path: '/screen/noise-screen-made-of-sandwich-panels',
          name: 'Шумозащитный экран из сэндвич-панелей'
        },
      ]
    }
  },
  computed: {
    screenRouterListSort() {
      return this.screenRouterList.sort(function(a, b){
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
  background-color: $bg-color-light-gray;
}
</style>
