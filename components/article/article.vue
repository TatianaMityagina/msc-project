<template>
  <article class="article">
    <div class="article__container">
      <h2 class="article__title"> {{ contentArticle.subtitle }} </h2>
      <p class="article__text"> {{ contentArticle.text1 }} </p>
      <img :src="require(`../../assets/img/article/${contentArticle.image1}`)" alt="Photo article"
           class="article__image"
           height="360" width="1120"/>
      <p class="article__text"> {{ contentArticle.text2 }} </p>
      <img :src="require(`../../assets/img/article/${contentArticle.image2}`)" alt="Photo article"
           class="article__image"
           height="747" width="1120"/>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Article',
  props: {
    contentArticle: {
      type: Object,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 60px 40px 80px;
}

.article__container {
  display: flex;
  flex-direction: column;
  max-width: 1120px;
  width: 100%;
}

.article__title {
  margin-bottom: 30px;

  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  color: rgba(0, 0, 0, 0.8);
}

.article__text {
  margin-bottom: 40px;

  font-size: 18px;
  line-height: 160%;

  &:last-child {
    margin-bottom: 0;
  }
}

.article__image {
  margin-bottom: 30px;
  border-radius: 6px;

  &:last-child {
    margin-bottom: 0;
  }
}

@include desktop {
  .article {
    padding: 40px 40px 60px;
  }
}

@include desktop-small {
  .article__container {
    max-width: 100%;
  }

  .article__image {
    width: 100%;
  }
}

@include tablet-large {
  .article__title {
    margin-bottom: 20px;

    font-size: 24px;
    line-height: 29px;
  }

  .article__text {
    margin-bottom: 30px;
    font-size: 16px;
  }

  .article__image {
    height: auto;
  }
}

@include mobile {
  .article {
    padding: 25px 15px 60px;
  }

  .article__title {
    margin-bottom: 16px;

    font-size: 20px;
    line-height: 24px;
  }

  .article__text {
    margin-bottom: 20px;
    font-size: 13px;
  }

  .article__image {
    margin-bottom: 20px;
  }
}

</style>

