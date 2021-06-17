<template>
  <main class="page-main">
    <subtitle v-bind:subtitles="subtitles"/>
    <AboutService v-bind:about-service="aboutService"/>
    <CentralContent v-bind:content-options="contentOptionsTop"/>
    <AboutPipe v-bind:about-pipe="aboutPipeManufacture"/>
    <PipeTypes/>
    <PipeStructure/>
    <AboutPipe v-bind:about-pipe="aboutPipeStructure"/>
    <PipeApplication/>
    <CentralContent v-bind:content-options="contentOptionsMiddle"/>
    <PipeBenefit/>
    <CentralContent v-bind:content-options="contentOptionsBottom"/>
  </main>
</template>

<script>
import subtitle from '../../components/subtitle/subtitle'
import AboutService from '../../components/about-service/about-service'
import CentralContent from '../../components/central-content/central-content'
import AboutPipe from '../../components/about-pipe/about-pipe'
import PipeTypes from '../../components/pipe-types/pipe-types'
import PipeStructure from '../../components/pipe-structure/pipe-structure'
import PipeApplication from '../../components/pipe-application/pipe-application'
import PipeBenefit from '../../components/pipe-benefit/pipe-benefit'


export default {
  name: 'Fence',
  components: {
    subtitle,
    AboutService,
    CentralContent,
    AboutPipe,
    PipeTypes,
    PipeStructure,
    PipeApplication,
    PipeBenefit
  },
  head() {
    return {
      title: 'Трубы спиральновитые',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'Заказать спиральновитую трубу с доставкой по Краснодару и услугой сборки'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Купить металлические спиральновитые трубы в ООО МСК. Широкий выбор размеров элементов трубопровода. Проект, сборка, доставка  в Краснодаре. Самовывоз со склада'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Заказать спиральновитую трубу с доставкой по Краснодару и услугой сборки'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Купить металлические спиральновитые трубы в ООО МСК. Широкий выбор размеров элементов трубопровода. Проект, сборка, доставка  в Краснодаре. Самовывоз со склада'
        },
        {hid: 'og:url', property: 'og:url', content: `https://msk23.ru/pipe`}
      ],
      link: [
        {rel: 'canonical', href: `https://msk23.ru/pipe`}
      ]
    }
  },
  data() {
    return {
      subtitles: {
        href: '/',
        title: 'Трубы спиральновитые (СГМТ)',
        text: 'Значительную долю из широкой номенклатуры нашей продукции составляют металлические водопропускные трубы'
      },
      aboutService: {
        title: 'Для чего Спиральновитые трубы?',
        text1: 'Из них строят своеобразный тоннель под насыпями автомобильных дорог, по которому беспрепятственно проходит поток воды.',
        text2: '',
        src: 'pipe-image@1x.webp',
        srcset: 'pipe-image@2x.webp'
      },
      aboutPipeManufacture: {
        color: '#ffffff',
        title: 'Изготовление Спиральновитых труб',
        text1: 'Качественное проектирование и изготовление изделий, прочный металл, надежная конструкция, грамотная подготовка котлована – вот составные части, которые делают строительство водопропускных сооружений успешным и эффективным.',
        text2: 'При производстве каждого из наименований продукции, в компании соблюдаются положения стандарта организации. В стандарте указаны параметры труб, методы контроля, технология производства и монтажа, условия хранения и транспортировки.'
      },
      aboutPipeStructure: {
        color: '#f5f5f5f5',
        title: 'Конструкция труб',
        text1: 'Спиральновитые гофрированные металлические трубы «SPIREL» представляют собой изделия из листового оцинкованного металлопроката с гофрами. Путем спиральной навивки получается замкнутый контур. Концы листа соединяются фальцевым замком.',
        text2: 'Компания предлагает потребителям круглые водопропускные трубы. Спиральновитые водопропускные трубы на автомобильных дорогах – это несущие конструкции. Соответственно, к ним предъявляются жесткие требования по прочности, устойчивости.'
      },
      contentOptionsTop: {
        color: '#ff6231',
        text: 'Поскольку трубы являются важным компонентом дорожной системы, их изготовлению уделяется повышенное внимание. Любые отклонения от требований, ошибки в расчете нагрузки или монтаже могут привести к разрушению полотна.'
      },
      contentOptionsMiddle: {
        color: '#3f3f3f',
        text: 'Трубы удобны в монтаже, их можно изгибать в любой плоскости при помощи колен и разветвлений. СГМТ подходят для строительства объектов, испытывающих нагрузки от автомобильных и железных дорог всех классов. Согласно условиям эксплуатации, указанным в стандарте, металлические гофрированные трубы «SPIREL» можно прокладывать во всех климатических зонах РФ, в сложных грунтах, в сейсмоопасных районах (7-9 баллов).'
      },
      contentOptionsBottom: {
        color: '#ff6231',
        text: 'Компания «МСК» предлагает клиентам комплекс услуг по устройству конструкций из гофрированных стальных труб. Мы выполняем заказы на производство и монтаж СГМТ по готовым проектам. Каждый этап сопровождается профессиональным контролем качества. Компания реализует изделия по демократичным ценам, что объясняется изготовлением на собственном производстве из материалов надежных поставщиков.'
      },
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
