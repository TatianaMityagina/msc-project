<template>
  <main class="page-main">
    <subtitle v-bind:subtitles="subtitles"/>
    <AboutService v-bind:about-service="aboutService"/>
    <CentralContent v-bind:content-options="contentOptions"/>
    <FenceInstallation/>
    <FenceTypes/>
    <FenceGallary/>
  </main>
</template>

<script>
import subtitle from '../../components/subtitle/subtitle'
import AboutService from '../../components/about-service/about-service'
import CentralContent from '../../components/central-content/central-content'
import FenceInstallation from '../../components/fence-installation/fence-installation'
import FenceTypes from '../../components/fence-types/fence-types'
import FenceGallary from '../../components/fence-gallary/fence-gallary'


export default {
  name: 'Fence',
  components: {
    subtitle,
    AboutService,
    CentralContent,
    FenceInstallation,
    FenceTypes,
    FenceGallary
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
      }
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
