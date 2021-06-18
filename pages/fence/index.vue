<template>
  <main class="page-main">
    <subtitle v-bind:subtitles="subtitles"/>
    <AboutService v-bind:about-service="aboutService"/>
    <CentralContent v-bind:content-options="contentOptions"/>
    <FenceInstallation/>
    <FenceTypes/>
    <FenceGallary/>
    <Navigation :navigation-list="fenceRouterListSort" />
  </main>
</template>

<script>
import subtitle from '../../components/subtitle/subtitle'
import AboutService from '../../components/about-service/about-service'
import CentralContent from '../../components/central-content/central-content'
import FenceInstallation from '../../components/fence-installation/fence-installation'
import FenceTypes from '../../components/fence-types/fence-types'
import FenceGallary from '../../components/fence-gallary/fence-gallary'
import Navigation from '../../components/navigation/navigation'


export default {
  name: 'Fence',
  components: {
    subtitle,
    AboutService,
    CentralContent,
    FenceInstallation,
    FenceTypes,
    FenceGallary,
    Navigation
  },
  head() {
    return {
      title: 'Барьерные ограждения',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'Купить барьерное ограждение и заказать установку дорожного барьера'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Купить качественные дорожные ограждения. Зачем нужны барьерные ограничители на автомобильных дорогах. Функциональность и технические аспекты барьеров для автодорог'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Купить барьерное ограждение и заказать установку дорожного барьера'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Купить качественные дорожные ограждения. Зачем нужны барьерные ограничители на автомобильных дорогах. Функциональность и технические аспекты барьеров для автодорог'
        },
        {hid: 'og:url', property: 'og:url', content: `https://msk23.ru/fence`}
      ],
      link: [
        {rel: 'canonical', href: `https://msk23.ru/fence`}
      ]
    }
  },
  data() {
    return {
      subtitles: {
        href: '/',
        title: 'Барьерные ограждения',
        text: 'Компания ООО «МСК» осуществляет монтаж и демонтаж дорожных, мостовых, пешеходных ограждений и других производимых предприятием металлоконструкций'
      },
      aboutService: {
        title: 'Для чего Барьерные ограждения?',
        text1: 'Барьерные ограждения используются на дорогах населенных пунктов и автотрассах,а также на мостах и путепроводах.',
        text2: 'Металлическое ограждение снижает риск непреднамеренного съезда и столкновения встречных автомашин при многополосном движении, а значит, сокращает аварийность в целом.',
        src: 'fence-image@1x.webp',
        srcset: 'fence-image@2x.webp'
      },
      contentOptions: {
        color: '#ff6231',
        text: 'Выезд и базирование бригад осуществляется в короткие сроки. Скорость работы бригад ООО «МСК» - до 600 погонных метров ограждений в смену. Высокая квалификация и опыт сотрудников на всех этапах — залог надежности изготавливаемой продукции: лучшие специалисты, лучшее оборудование, самый пристальный контроль качества'
      },
      fenceRouterList: [
        {
          id: 0,
          path: '/fence/barrier-fence',
          name: 'Барьерное ограждение'
        },
        {
          id: 1,
          path: '/fence/barrier-fence-11DO',
          name: 'Барьерное ограждение 11 ДО'
        },
        {
          id: 2,
          path: '/fence/barrier-fence-21DO',
          name: 'Барьерное ограждение 21 ДО'
        },
        {
          id: 3,
          path: '/fence/barrier-fence-wave',
          name: 'Барьерное ограждение Волна'
        },
        {
          id: 4,
          path: '/fence/barrier-road-fence',
          name: 'Барьерное дорожное ограждение'
        },
        {
          id: 5,
          path: '/fence/barrier-fence-with-separating-beam',
          name: 'Барьерное ограждение с отделяющейся балкой'
        },
        {
          id: 6,
          path: '/fence/barrier-fence-U2',
          name: 'Барьерное ограждение У2'
        },
        {
          id: 7,
          path: '/fence/barrier-fence-U3',
          name: 'Барьерное ограждение У3'
        },
        {
          id: 8,
          path: '/fence/barrier-fence-U4',
          name: 'Барьерное ограждение У4'
        },
        {
          id: 9,
          path: '/fence/barrier-fence-SB-1',
          name: 'Барьерное ограждение СБ-1'
        },
        {
          id: 10,
          path: '/fence/barrier-fence-EC-1',
          name: 'Барьерное ограждение ЭК-1'
        },
        {
          id: 11,
          path: '/fence/barrier-fence-for-painting',
          name: 'Барьерные ограждения под покраску'
        },
        {
          id: 12,
          path: '/fence/barrier-fence-with-no-console',
          name: 'Бесконсольное барьерное ограждение'
        },
        {
          id: 13,
          path: '/fence/galvanized-road-barriers',
          name: 'Оцинкованные дорожные ограждения'
        },
        {
          id: 14,
          path: '/fence/road-barriers-guiding-devices',
          name: 'Дорожные ограждения и направляющие устройства'
        },
        {
          id: 15,
          path: '/fence/metal-barrier-fence',
          name: 'Металлическое барьерное ограждение'
        },
        {
          id: 16,
          path: '/fence/bridge-barrier',
          name: 'Мостовое барьерное ограждение'
        },
        {
          id: 17,
          path: '/fence/bridge-barrier-fence-11MO',
          name: 'Мостовое барьерное ограждение 11МО'
        },
        {
          id: 18,
          path: '/fence/one-sided-barrier-fence',
          name: 'Одностороннее барьерное ограждение'
        },
        {
          id: 19,
          path: '/fence/barrier-fence-calculation',
          name: 'Расчет барьерного ограждения'
        },
        {
          id: 20,
          path: '/fence/barrier-fence-installation',
          name: 'Установка барьерного ограждения'
        },
        {
          id: 21,
          path: '/fence/front-barrier-fence',
          name: 'Фронтальное барьерное ограждение'
        },
        {
          id: 22,
          path: '/fence/pedestrian-fences',
          name: 'Пешеходные ограждения'
        },
        {
          id: 23,
          path: '/fence/metal-pedestrian-fence',
          name: 'Металлическое пешеходное ограждение'
        },
        {
          id: 24,
          path: '/fence/guide-pedestrian-barriers',
          name: 'Направляющие пешеходные ограждения'
        },
        {
          id: 25,
          path: '/fence/restricting-pedestrian-fence',
          name: 'Ограничивающее пешеходное ограждение'
        },
        {
          id: 26,
          path: '/fence/pedestrian-barrier-cross',
          name: 'Пешеходное ограждение Крест'
        },
        {
          id: 27,
          path: '/fence/pedestrian-barrier-ORUD',
          name: 'Пешеходное ограждение ОРУД'
        },
        {
          id: 28,
          path: '/fence/pedestrian-barrier-PO-1-cross',
          name: 'Пешеходное ограждение ПО-1 Крест'
        },
        {
          id: 29,
          path: '/fence/pedestrian-barrier-PO-2',
          name: 'Пешеходное ограждение ПО-2'
        },
        {
          id: 30,
          path: '/fence/pedestrian-barrier-PO-6',
          name: 'Пешеходное ограждение ПО-6'
        },
        {
          id: 31,
          path: '/fence/pedestrian-railings',
          name: 'Пешеходное перильное ограждение'
        },
        {
          id: 32,
          path: '/fence/retaining-pedestrian-fence',
          name: 'Удерживающие пешеходные ограждения'
        },
        {
          id: 33,
          path: '/fence/installing-pedestrian-barriers',
          name: 'Установка пешеходных ограждений'
        },
        {
          id: 34,
          path: '/fence/barrier-fence-end-piece',
          name: 'Концевой элемент барьерного ограждения'
        }
      ]
    }
  },
  computed: {
    fenceRouterListSort() {
      return this.fenceRouterList.sort(function(a, b){
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
