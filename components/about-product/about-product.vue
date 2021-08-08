<template>
  <section :class="contentText.class" class="about-product">
    <div class="about-product__container">
      <div v-if="contentText.row_first.text1 != ''" class="about-product__row about-product__row--first">
        <div class="about-product__row-text">
          <h2 v-if="contentText.row_first.title != ''">{{ contentText.row_first.title }}</h2>
          <p>{{ contentText.row_first.text1 }}</p>
          <ul v-if="contentText.row_first.list_first.item1 != ''">
            <li>{{ contentText.row_first.list_first.item1 }}</li>
            <li>{{ contentText.row_first.list_first.item2 }}</li>
            <li v-if="contentText.row_first.list_first.item3 != ''">{{ contentText.row_first.list_first.item3 }}</li>
          </ul>
          <p>{{ contentText.row_first.text2 }}</p>
          <ul v-if="contentText.row_first.list_second.item1 != ''">
            <li>{{ contentText.row_first.list_second.item1 }}</li>
            <li>{{ contentText.row_first.list_second.item2 }}</li>
            <li v-if="contentText.row_first.list_second.item3 != ''">{{ contentText.row_first.list_second.item3 }}</li>
          </ul>
          <p>{{ contentText.row_first.text3 }}</p>
        </div>
        <img v-if="contentText.pictures.image1 != ''"
             :src="require(`../../assets/img/about-product/${contentText.pictures.image1}`)"
             alt="Photo product" class="right-image"
             height="400px" width="400px">
      </div>
      <div v-if="contentText.row_second.text1 != ''" class="about-product__row about-product__row--second">
        <img v-if="contentText.pictures.image2 != ''"
             :src="require(`../../assets/img/about-product/${contentText.pictures.image2}`)"
             alt="Photo product" class="left-image"
             height="400px" width="400px">
        <div class="about-product__row-text">
          <h2 v-if="contentText.row_second.title != ''">{{ contentText.row_second.title }}</h2>
          <p>{{ contentText.row_second.text1 }}</p>
          <ul v-if="contentText.row_second.list_first.item1 != ''">
            <li>{{ contentText.row_second.list_first.item1 }}</li>
            <li>{{ contentText.row_second.list_first.item2 }}</li>
            <li v-if="contentText.row_second.list_first.item3 != ''">{{ contentText.row_second.list_first.item3 }}</li>
            <li v-if="contentText.row_second.list_first.item4 != ''">{{ contentText.row_second.list_first.item4 }}</li>
          </ul>
          <p v-if="contentText.row_second.text2 != ''">{{ contentText.row_second.text2 }}</p>
          <ul v-if="contentText.row_second.list_second.item1 != ''">
            <li>{{ contentText.row_second.list_second.item1 }}</li>
            <li>{{ contentText.row_second.list_second.item2 }}</li>
            <li v-if="contentText.row_second.list_second.item3 != ''">{{
                contentText.row_second.list_second.item3
              }}
            </li>
            <li v-if="contentText.row_second.list_second.item4 != ''">{{
                contentText.row_second.list_second.item4
              }}
            </li>
          </ul>
          <p>{{ contentText.row_second.text3 }}</p>
        </div>
      </div>
    </div>
    <div v-if="contentText.row_third.text1 != ''" class="orange-line">
      <div class="about-product__container">
        <div class="about-product__row">
          <div class="about-product__row-text">
            <h2 v-if="contentText.row_third.title != ''">{{ contentText.row_third.title }}</h2>
            <p>{{ contentText.row_third.text1 }}</p>
            <ul v-if="contentText.row_third.list.item1 != ''">
              <li>{{ contentText.row_third.list.item1 }}</li>
              <li>{{ contentText.row_third.list.item2 }}</li>
              <li>{{ contentText.row_third.list.item3 }}</li>
            </ul>
            <p>{{ contentText.row_third.text2 }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="about-product__container">
      <div v-if="contentText.row_fourth.text1 != ''" class="about-product__row about-product__row--fourth">
        <div class="about-product__row-text">
          <h2 v-if="contentText.row_fourth.title != ''">{{ contentText.row_fourth.title }}</h2>
          <p>{{ contentText.row_fourth.text1 }}</p>
          <ul v-if="contentText.row_fourth.list_first.item1 != ''">
            <li>{{ contentText.row_fourth.list_first.item1 }}</li>
            <li>{{ contentText.row_fourth.list_first.item2 }}</li>
            <li v-if="contentText.row_fourth.list_first.item3 != ''">{{ contentText.row_fourth.list_first.item3 }}</li>
            <li v-if="contentText.row_fourth.list_first.item4 != ''">{{ contentText.row_fourth.list_first.item4 }}</li>
          </ul>
          <p>{{ contentText.row_fourth.text2 }}</p>
          <ul v-if="contentText.row_fourth.list_second.item1 != ''">
            <li>{{ contentText.row_fourth.list_second.item1 }}</li>
            <li>{{ contentText.row_fourth.list_second.item2 }}</li>
            <li v-if="contentText.row_fourth.list_second.item3 != ''">{{ contentText.row_fourth.list_second.item3 }}
            </li>
            <li v-if="contentText.row_fourth.list_second.item4 != ''">{{ contentText.row_fourth.list_second.item4 }}
            </li>
          </ul>
          <p>{{ contentText.row_fourth.text3 }}</p>
          <p>{{ contentText.row_fourth.text4 }}</p>
          <p>{{ contentText.row_fourth.text5 }}</p>
        </div>
      </div>
      <div v-if="contentText.row_fifth.text1 != ''" class="about-product__row">
        <div class="about-product__row-text  about-product__row-text--fifth">
          <h2 v-if="contentText.row_fifth.title != ''">{{ contentText.row_fifth.title }}</h2>
          <p>{{ contentText.row_fifth.text1 }}</p>
          <ul v-if="contentText.row_fifth.list_first.item1 != ''">
            <li>{{ contentText.row_fifth.list_first.item1 }}</li>
            <li>{{ contentText.row_fifth.list_first.item2 }}</li>
            <li v-if="contentText.row_fifth.list_first.item3 != ''">{{ contentText.row_fifth.list_first.item3 }}</li>
            <li v-if="contentText.row_fifth.list_first.item4 != ''">{{ contentText.row_fifth.list_first.item4 }}</li>
            <li v-if="contentText.row_fifth.list_first.item5 != ''">{{ contentText.row_fifth.list_first.item5 }}</li>
          </ul>
          <p v-if="contentText.row_fifth.text2 != ''">{{ contentText.row_fifth.text2 }}</p>
          <ul v-if="contentText.row_fifth.list_second.item1 != ''">
            <li>{{ contentText.row_fifth.list_second.item1 }}</li>
            <li>{{ contentText.row_fifth.list_second.item2 }}</li>
            <li v-if="contentText.row_fifth.list_second.item3 != ''">{{ contentText.row_fifth.list_second.item3 }}</li>
            <li v-if="contentText.row_fifth.list_second.item4 != ''">{{ contentText.row_fifth.list_second.item4 }}</li>
            <li v-if="contentText.row_fifth.list_second.item5 != ''">{{ contentText.row_fifth.list_second.item5 }}</li>
          </ul>
          <p>{{ contentText.row_fifth.text3 }}</p>
        </div>
        <img v-if="contentText.pictures.image3 != ''"
             :src="require(`../../assets/img/about-product/${contentText.pictures.image3}`)"
             alt="Photo product" class="right-image"
             height="400px" width="400px">
      </div>

      <div v-if="$route.path === '/fence' " class="about-product__row">
        <div class="about-product__row-text  about-product__row-text--fifth">
          <h2>Пешеходные ограничители</h2>
          <p>Изготавливают в «МСК» барьеры для пешеходов, которые обычно называют направляющими. С их помощью получается перенаправлять толпу по нужному направлению. Они бывают:</p>
          <ul>
            <li>стационарными:</li>
            <li>мобильными.</li>
          </ul>
          <p>Съемные нужны для мероприятий с большим скоплением людей вроде концертов. Пользуются ими и ремонтники, когда огораживают территорию, по которой запрещено ходить.</p>
          <p>Стационарные аналоги монтируют на участках, где пешеходы любят нарушать правила дорожного движения. Чтобы они не перебегали проезжую часть в неположенном месте, производится монтаж таких блокираторов. Подобный подход призван сократить количество наездов на пешеходов, что особенно часто имеет место быть в темное время суток.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>


export default {
  name: 'AboutProduct',
  props: {
    contentText: {
      type: Object,
      required: false
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.about-product {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  background: $main-bg-color;
}

.about-product__container {
  display: flex;
  flex-direction: column;
  max-width: 1360px;
  padding: 0 40px;
  width: 100%;
}

.about-product__row {
  display: flex;
  margin-bottom: 80px;
}

.culvert-operation-mode .about-product__row--first,
.applications-for-culverts .about-product__row--first,
.culvert-on-the-railway .about-product__row--second,
.round-culverts .about-product__row--second,
.spiral-pipe .about-product__row--second,
.guardrail-weight .about-product__row--second,
.calculation-of-culverts .about-product__row--fourth {
  margin-bottom: 0;
}

.culvert-operation-mode .about-product__row--first,
.applications-for-culverts .about-product__row--first,
.noise-screens-and-acoustic-barriers .about-product__row--second,
.characteristics-road-culverts .about-product__row--first {
  margin-bottom: 15px;
}

.about-product__row-text {
  & h2 {
    margin-bottom: 30px;
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    color: $font-color-orange;
  }

  & p {
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
  }

  & ul {
    font-weight: 500;
    font-size: 15px;
    line-height: 160%;
  }
}

.right-image {
  float: right;
  min-width: 48%;
  height: 400px;
  object-fit: cover;
  margin: 0 0 0 45px;
}

.left-image {
  float: left;
  min-width: 48%;
  height: 400px;
  object-fit: cover;
  margin: 0 45px 0 0;
}

.about-product__image-middle {
  display: block;
  height: 450px;
  margin: 0 0 80px;
  object-fit: cover;
}

.orange-line {
  display: flex;
  justify-content: center;
  padding-top: 80px;
  margin-bottom: 80px;
  width: 100%;
  background-color: $bg-color-orange;

  .about-product__container {
    padding: 0 40px;
  }

  .about-product__row-text {
    & h2 {
      color: $font-color-white;
    }

    & p {
      font-weight: 600;
      color: $font-color-white;
    }

    & ul {
      font-weight: 600;
      color: $font-color-white;
    }
  }
}

@include tablet {
  .about-product__row {
    flex-direction: column;
    margin-bottom: 60px;

    .about-product__row-text {
      order: 2;
    }

    img {
      order: 1;
      width: 100%;
      margin: 0 0 25px 0;
    }
  }

  .culvert-operation-mode .about-product__row--first,
  .applications-for-culverts .about-product__row--first,
  .culvert-on-the-railway .about-product__row--second,
  .round-culverts .about-product__row--second,
  .spiral-pipe .about-product__row--second,
  .guardrail-weight .about-product__row--second,
  .calculation-of-culverts .about-product__row--fourth {
    margin-bottom: 0;
  }

  .culvert-operation-mode .about-product__row--first,
  .applications-for-culverts .about-product__row--first,
  .noise-screens-and-acoustic-barriers .about-product__row--second,
  .characteristics-road-culverts .about-product__row--first {
    margin-bottom: 15px;
  }

  .orange-line {
    padding-top: 60px;
    margin-bottom: 60px;
  }
}

@include mobile {
  .about-product__container {
    padding: 0 15px;
  }

  .about-product__row {
    flex-direction: column;
    margin-bottom: 60px;

    img {
      height: auto;
      margin: 0 0 25px 0;
    }
  }

  .culvert-operation-mode .about-product__row--first,
  .applications-for-culverts .about-product__row--first,
  .culvert-on-the-railway .about-product__row--second,
  .round-culverts .about-product__row--second,
  .spiral-pipe .about-product__row--second,
  .guardrail-weight .about-product__row--second,
  .calculation-of-culverts .about-product__row--fourth {
    margin-bottom: 0;
  }

  .culvert-operation-mode .about-product__row--first,
  .applications-for-culverts .about-product__row--first,
  .noise-screens-and-acoustic-barriers .about-product__row--second,
  .characteristics-road-culverts .about-product__row--first {
    margin-bottom: 10px;
  }

  .orange-line {
    padding-top: 60px;
    margin-bottom: 60px;

    .about-product__container {
      padding: 0 15px;
    }
  }
}
</style>
