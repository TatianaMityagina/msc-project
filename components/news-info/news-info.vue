<template>
  <section class="news-info">
    <div class="news-info__header">
      <div class="news-info__header-container">
        <nuxt-link class="news-info__header-link" to="/">
          <svg class="news-info__header-icon" width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 6.5H2M2 6.5L7 1M2 6.5L7 12" stroke="black" stroke-opacity="0.3" stroke-width="2"/>
          </svg>
          <span>Назад</span>
        </nuxt-link>
        <h2 class="news-info__header-title">Новости ООО «МСК»</h2>
      </div>
    </div>

    <div class="news-info__container">
      <div class="news-info__list-news">
        <div class="news-info__item-news" v-for="news in newsContent" :key="news.id">
          <img class="news-info__item-image" :src="require(`../../assets/img/news/${news.image}`)" width="356" height="200" />
          <div class="news-info__item-content">
            <h3> {{ news.title }} </h3>
            <p> {{ news.text }} </p>
            <a class="news-info__item-btn" href="">
              <span>Читать дальше</span>
              <svg width="18" height="12" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="#A3A3A3" stroke-width="2"/>
                <path d="M7 1L13 7L7 13" stroke="#A3A3A3" stroke-width="2"/>
                <path d="M13 1L19 7L13 13" stroke="#A3A3A3" stroke-width="2"/>
              </svg>
          </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import newsContent from '../../static/mock/newsContent.json'

  export default {
    data () {
      return {
        newsContent: newsContent
      }
    }
  }
</script>

<style lang="scss" scoped>
  .news-info {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;

    background-color: $bg-color-light-gray;
  }

  .news-info__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1280px;
    width: 100%;
    padding: 40px 0 200px;
  }

  //HEADER
  .news-info__header {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 40px;

    background-color: $main-bg-color;
  }

  .news-info__header-container {
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    width: 100%;
  }

  .news-info__header-link {
    width: 90px;
    margin-bottom: 40px;
    text-decoration: none;

    svg {
      margin-right: 8px;
      transition: $style-change-duration;
    }

    svg > path {
      transition: $style-change-duration;
    }

    span {
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: rgba(0, 0, 0, 0.4);

      transition: $style-change-duration;
    }
  }

  .news-info__header-link:hover {
    svg > path {
      stroke: $font-color-orange;
      stroke-opacity: 1;

      transition: $style-change-duration;
    }

    span {
      color: $font-color-orange;
      transition: $style-change-duration;
    }
  }

  .news-info__header-title {
    font-weight: 600;
    font-size: 42px;
    line-height: 140%;
  }

  //NEWS SECTION
  .news-info__list-news {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1120px;
    width: 100%;
  }

  .news-info__item-news {
    display: flex;
    align-items: center;
    width: 100%;
    height: 220px;
    padding: 10px 30px 10px 10px;
    margin-bottom: 15px;

    box-shadow: 0px 2px 10px rgba(32, 75, 69, 0.08),
      0px 20px 30px -12px rgba(32, 75, 69, 0.08);
    border-radius: 12px;
    background-color: $main-bg-color;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .news-info__item-content {
    h3 {
      margin-bottom: 15px;

      font-weight: 600;
      font-size: 19px;
      line-height: 120%;
    }

    p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      margin-bottom: 20px;

      font-size: 14px;
      line-height: 140%;
    }
  }

  .news-info__item-image {
    margin-right: 30px;
    border-radius: 6px;
  }

  .news-info__item-btn {
    display: flex;
    align-items: center;

    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: $font-color-gray;
    text-decoration: none;

    transition: $style-change-duration;

    span {
      margin-right: 10px;
    }

    &:hover {
      span {
        color: $font-color-orange;
        transition: $style-change-duration;
      }

      svg > path {
        stroke: $font-color-orange;
        transition: $style-change-duration;
      }
    }
  }

  @include desktop {
    //HEADER
    .news-info__header {
      padding: 30px 40px;
    }

    .news-info__header-link {
      margin-bottom: 10px;
    }
  }

  @include desktop-small {
    .news-info__container {
      padding: 40px 40px 120px;
    }
  }

  @include tablet-large {
    .news-info__list-news {
      max-width: 708px;
    }

    .news-info__item-btn {
      font-size: 15px;
      line-height: 18px;
    }
  }

  @include tablet {
    //HEADER
    .news-info__header {
      padding: 20px 40px;
    }

    .news-info__header-link {
      span {
        font-size: 15px;
        line-height: 18px;
      }
    }

    .news-info__header-title {
      font-size: 34px;
      line-height: 140%;
    }

    //NEWS SECTION
    .news-info__item-news {
      height: 194px;
      padding: 10px 25px 10px 10px;
    }

    .news-info__item-image {
      margin-right: 25px;
      width: 254px;
      height: 174px;
      object-fit: cover;
    }

    .news-info__item-content {
      h3 {
        font-size: 17px;
        line-height: 120%;
      }

      p {
        margin-bottom: 25px;

        font-size: 12px;
        line-height: 140%;
      }
    }
  }

  @include mobile {
    //HEADER
    .news-info__header {
      padding: 15px;
    }

    .news-info__header-link {
      margin-bottom: 8px;

      span {
        font-size: 15px;
        line-height: 18px;
      }
    }

    .news-info__header-title {
      font-size: 24px;
      line-height: 140%;
    }

    //NEWS SECTION
    .news-info__container {
      padding: 15px 15px 100px;
    }

    .news-info__item-news {
      flex-direction: column;
      height: 348px;
      margin-bottom: 10px;
      padding: 10px;
    }

    .news-info__item-image {
      width: 100%;
      height: 168px;
      margin: 0;
    }

    .news-info__item-content {
      padding: 16px 6px 14px 6px;
      h3 {
        margin-bottom: 8px;
      }
    }
  }
</style>