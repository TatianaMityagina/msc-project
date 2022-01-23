<template>
  <main class="page-main">
    <subtitle :subtitles="subtitles" />
    <AboutService :about-service="aboutService" />
    <CentralContent :content-options="contentOptions" />
    <FenceInstallation />
    <FenceTypes />
    <FenceGallary />
    <about-product :content-text="contentBottomBlock" style="padding-top: 80px" />
    <Navigation :navigation-list="fenceRouterListSort" style="padding-top: 60px" />
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
  data () {
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
        },
        {
          id: 34,
          path: '/fence/barrier-fence-end-piece',
          name: 'Концевой элемент барьерного ограждения'
        }
      ],
      contentBottomBlock: {
        class: 'barrier-fence',
        row_first: {
          title: 'Барьерные ограждения на дорогах — элемент, снижающий последствия автомобильных аварий',
          text1: 'Барьерное ограждение причисляют к пассивным инструментам безопасности во время дорожного движения. Для каждого типа дороги используются свои барьеры, которые значительно отличаются по физическим и техническим характеристикам. Но цель всех дорожных ограждений всегда одна — сократить возможные серьезные последствия ДТП.',
          list_first: {
            item1: '',
            item2: '',
            item3: ''
          },
          text2: '',
          list_second: {
            item1: '',
            item2: '',
            item3: ''
          },
          text3: ''
        },
        row_second: {
          title: 'Области применения',
          text1: 'Классификация ограничителей предусматривает разделение на две обширных категории:',
          list_first: {
            item1: 'одностороннюю;',
            item2: 'двустороннюю.',
            item3: '',
            item4: ''
          },
          text2: 'Цена барьерного ограждения во многом зависит именно от того, к какой категории отнесена конструкция.',
          list_second: {
            item1: '',
            item2: '',
            item3: '',
            item4: ''
          },
          text3: 'Односторонние предложения предусматривают установку вдоль дороги. Они пользуются спросом как в городских условиях, так и при благоустройстве проселочных дорог, межрегиональных трасс. Барьеры выступают преградой, которая гасит силу удара при столкновении. За счет происходящей деформации своеобразного забора получается предотвратить выезд машины за пределы проезжей части. Особенно актуальна защита такого типа эстакадах или дорогах, один край которых проходит около линии обрыва.'
        },
        row_third: {
          title: '',
          text1: 'Не обходится без них и на участках, призванных зонами повышенной опасности. К ним относят:',
          text2: 'Помогают металлоконструкции дорожной инфраструктуры заблокировать прямое столкновение со столбами, деревьями, зданиями и другими объектами, которые располагаются непосредственно вдоль дорожного полотна. Они же обеспечивают безопасность детей и домашних питомцев, так как устанавливаются около мест, где по умолчанию предусмотрено большое скопление детей (возле школ, садиков) или люди выгуливают любимцев.',
          list: {
            item1: 'крутые повороты;',
            item2: 'местность, где под колеса часто выскакивают дикие звери;',
            item3: 'отрезки пути, где последствия непогоды отражаются сильнее всего (наледь, мокрый асфальт после дождя из-за расположения в низине).'
          }
        },
        row_fourth: {
          title: 'Изготовление и монтаж',
          text1: 'Купить дорожные ограждения любого типа можно в компании «МСК». Мы имеем оборудование для собственного производства дорожных ограждений, что позволяет изготавливать на заказ партии любого объема. У нас всегда можно купить барьерное ограждение как для автомобильных магистралей, так и для мостов. При этом первые маркируются как ДО (односторонние) или ДД (двусторонние), а вторые — МО и МД соответственно.',
          list_first: {
            item1: '',
            item2: '',
            item3: '',
            item4: ''
          },
          text2: 'Двусторонние решения используются на трассах, где предусмотрено от четырех и более полос. С их помощью получается предотвратить лобовой удар при столкновении машин, которые едут навстречу друг к другу. Их ставят по оси разделительной полосы.',
          list_second: {
            item1: '',
            item2: '',
            item3: '',
            item4: ''
          },
          text3: 'Отдельного внимания заслуживают конструкции с дополнительными балками, которые исполняют роль троса. Благодаря балке получается еще больше погасить энергию удара, что достигается за счет силы трения. В результате риски серьезных повреждений снижаются еще больше. Купить барьерные ограждения такого типа тоже можно в нашей компании.',
          text4: 'Кроме этого производство барьерных ограждений компанией «МСК» предусматривает возможность заказать барьеры под покраску. Это означает, что их можно покрыть сигнальной краской, что делает конструкции более заметными при неблагоприятных погодных условиях вроде ливня или тумана. Изготовление дорожных ограждений — не единственное направление нашей работы. Мы оказываем услуги по монтажу. Установка производится согласно ГОСТу.',
          text5: ''
        },
        row_fifth: {
          title: 'Другие форматы классификаций',
          text1: 'Ограждения барьерного типа разделяют не только по месту будущей установки, но и по ряду других параметров:',
          list_first: {
            item1: 'наличия оцинковки;',
            item2: 'удерживающей способности;',
            item3: 'уровню балок.',
            item4: '',
            item5: ''
          },
          text2: 'От перечисленных факторов зависит и цена дорожных ограждений. Минимальный порог для удерживающей способности ограждения барьерного типа составляет 130 кДж. Он маркируется как У1. Наиболее высоким показателем может похвастаться уровень У7, который предусматривает 450 кДж. Силовое барьерное ограждение может иметь несколько балочных уровней. Максимальным значением считается три. В некоторых случаях допускается использование усиливающего поручня. Так называют трубы, которые призваны сделать сегмент прочнее.',
          list_second: {
            item1: '',
            item2: '',
            item3: '',
            item4: '',
            item5: ''
          },
          text3: 'Среди разделения по внешнему виду наиболее известным считается «Волна». Эти дорожные удерживающие ограждения получили металлический лист, который изогнут по принципу волны, что и послужило причиной для названия. Их ставят на дорогах с разными показателями транспортного потока.'
        },
        pictures: {
          image1: '',
          image2: 'fence-photo1.jpg',
          image3: 'fence-photo22.jpg'
        }

      }
    }
  },
  computed: {
    fenceRouterListSort () {
      return this.fenceRouterList.sort(function (a, b) {
        if (a.name < b.name) { return -1 }
        if (a.name > b.name) { return 1 }
        return 0
      })
    }
  },
  head () {
    return {
      title: 'Купить барьерное ограждение и заказать установку дорожного барьера',
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
        { hid: 'og:url', property: 'og:url', content: 'https://msk23.ru/fence' }
      ],
      link: [
        { rel: 'canonical', href: 'https://msk23.ru/fence/barrier-road-fence' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/barrier-fence-11DO' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/barrier-fence-21DO' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/barrier-fence-wave' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/barrier-fence-with-separating-beam' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/barrier-fence-U2' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/barrier-fence-U3' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/barrier-fence-U4' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/barrier-fence-SB-1' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/barrier-fence-EC-1' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/barrier-fence-for-painting' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/barrier-fence-with-no-console' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/galvanized-road-barriers' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/road-barriers-guiding-devices' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/metal-barrier-fence' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/bridge-barrier' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/bridge-barrier-fence-11MO' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/one-sided-barrier-fence' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/barrier-fence-calculation' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/barrier-fence-installation' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/front-barrier-fence' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/barrier-fence-end-piece' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/pedestrian-fences' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/pedestrian-fences/metal-pedestrian-fence' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/pedestrian-fences/guide-pedestrian-barriers' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/pedestrian-fences/restricting-pedestrian-fence' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/pedestrian-fences/pedestrian-barrier-cross' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/pedestrian-fences/pedestrian-barrier-ORUD' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/pedestrian-fences/pedestrian-barrier-PO-1-cross' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/pedestrian-fences/pedestrian-barrier-PO-2' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/pedestrian-fences/pedestrian-barrier-PO-6' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/pedestrian-fences/pedestrian-railings' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/pedestrian-fences/retaining-pedestrian-fence' },
        { rel: 'canonical', href: 'https://msk23.ru/fence/pedestrian-fences/installing-pedestrian-barriers' }
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
