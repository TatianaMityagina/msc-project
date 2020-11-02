<template>
  <main class="page-main">
    <Subtitle v-bind:subtitles="subtitles" />
    <Article v-bind:contentArticle="contentArticle" />

    <div class="page-main__border">
      <SliderNews :show-button-next="false" :show-button-prev="false" :show-button-more="false" />
    </div>
  </main>
</template>

<script>
  import Subtitle from '../../components/subtitle/subtitle'
  import Article from '../../components/article/article'
  import SliderNews from '../../components/slider-news/slider-news'


  export default {
    name: 'News',
    components: {
      Subtitle,
      Article,
      SliderNews
    },
    data () {
      return {
        subtitles: {
          href: '/news',
          title: 'Заголовок новости',
          text: ''
        },
        contentArticle: {
          subtitle: 'Подзаголовок новости',
          text1: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.',
          text2: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
          image1: 'photo-1.webp',
          image2: 'photo-2.webp'
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
