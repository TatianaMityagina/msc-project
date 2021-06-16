<template>
  <section class="news-info">
    <div class="news-info__container">
      <div class="news-info__list-news">
        <div v-for="news in newsContent" :key="news.id" class="news-info__item-news">
          <img :src="require(`../../assets/img/news/${news.image}`)" class="news-info__item-image" height="200"
               width="356"/>
          <div class="news-info__item-content">
            <h3> {{ news.title }} </h3>
            <p> {{ news.text }} </p>
            <nuxt-link :to="`/article${news.path}`" class="news-info__item-btn">
              <span>Читать дальше</span>
              <svg fill="none" height="12" viewBox="0 0 21 14" width="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="#A3A3A3" stroke-width="2"/>
                <path d="M7 1L13 7L7 13" stroke="#A3A3A3" stroke-width="2"/>
                <path d="M13 1L19 7L13 13" stroke="#A3A3A3" stroke-width="2"/>
              </svg>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
//import newsContent from '../../static/mock/newsContent.json'

export default {
  data() {
    return {
      newsContent: []
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
}

.news-info__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  width: 100%;
  padding: 40px 0 200px;
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
