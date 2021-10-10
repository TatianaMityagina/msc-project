<template>
  <nav class="menu menu--open">
    <ul class="menu__list">
      <li class="menu__list-item" @click="close">
        <nuxt-link :class="{'menu__list-link--active-path' : $route.path === '/fence' }" class="menu__list-link"
                   to="/fence">
          <span>Ограждения</span>
          <svg
              class="menu__icon-open"
              fill="none"
              height="9"
              viewBox="0 0 14 9"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L7 7L13 1" stroke="#3F3F3F" stroke-width="2"/>
          </svg>
        </nuxt-link>
        <ul class="menu__sublist menu__sublist--second">
          <div class="menu__sublist-container">
            <li
                v-for="item in fenceRouterListSort"
                :key="item.id"
                :class="{'menu__sublist-item--active' : $route.path === item.path }"
                class="menu__sublist-item"
                @click="close"
            >
              <nuxt-link :to="item.path" class="menu__sublist-link">
                <span>{{ item.name }}</span>
              </nuxt-link>
              <ul class="menu__sublist-list">
                <li
                    v-for="item in item.sublist"
                    :key="item.id"
                    class="menu__sublist-list-item"
                    @click="close"
                >
                  <nuxt-link :to="item.path" class="menu__sublist-list-link">
                    <span>{{ item.name }}</span>
                  </nuxt-link>
                </li>
              </ul>
            </li>
          </div>
        </ul>
      </li>

      <li class="menu__list-item" @click="close">
        <nuxt-link :class="{'menu__list-link--active-path' : $route.path === '/screen' }" class="menu__list-link"
                   to="/screen">
          <span>Экраны</span>
          <svg
              class="menu__icon-open"
              fill="none"
              height="9"
              viewBox="0 0 14 9"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L7 7L13 1" stroke="#3F3F3F" stroke-width="2"/>
          </svg>
        </nuxt-link>
        <ul class="menu__sublist menu__sublist--second">
          <div class="menu__sublist-container">
            <li
                v-for="item in screenRouterList"
                :key="item.id"
                :class="{'menu__sublist-item--active' : $route.path === item.path }"
                class="menu__sublist-item"
                @click="close"
            >
              <nuxt-link :to="item.path" class="menu__sublist-link">
                <span>{{ item.name }}</span>
              </nuxt-link>
              <ul class="menu__sublist-list">
                <li
                    v-for="item in item.sublist"
                    :key="item.id"
                    class="menu__sublist-list-item"
                    @click="close"
                >
                  <nuxt-link :to="item.path" class="menu__sublist-list-link">
                    <span>{{ item.name }}</span>
                  </nuxt-link>
                </li>
              </ul>
            </li>
          </div>
        </ul>
      </li>

      <li class="menu__list-item" @click="close">
        <nuxt-link :class="{'menu__list-link--active-path' : $route.path === '/pipe' }" class="menu__list-link"
                   to="/pipe">
          <span>Трубы</span>
          <svg
              class="menu__icon-open"
              fill="none"
              height="9"
              viewBox="0 0 14 9"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L7 7L13 1" stroke="#3F3F3F" stroke-width="2"/>
          </svg>
        </nuxt-link>
        <ul class="menu__sublist menu__sublist--second">
          <div class="menu__sublist-container menu__sublist-container--third">
            <li
                v-for="item in pipeRouterList"
                :key="item.id"
                :class="{'menu__sublist-item--active' : $route.path === item.path }"
                class="menu__sublist-item"
                @click="close"
            >
              <nuxt-link :to="item.path" class="menu__sublist-link">
                <span>{{ item.name }}</span>
              </nuxt-link>
              <ul class="menu__sublist-list">
                <li
                    v-for="item in item.sublist"
                    :key="item.id"
                    class="menu__sublist-list-item"
                    @click="close"
                >
                  <nuxt-link :to="item.path" class="menu__sublist-list-link">
                    <span>{{ item.name }}</span>
                  </nuxt-link>
                </li>
              </ul>
            </li>
          </div>
        </ul>
      </li>

      <li class="menu__list-item" @click="close">
        <a class="menu__list-link">
          <span>Статьи</span>
          <svg
              class="menu__icon-open"
              fill="none"
              height="9"
              viewBox="0 0 14 9"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L7 7L13 1" stroke="#3F3F3F" stroke-width="2"/>
          </svg>
        </a>
        <ul class="menu__sublist menu__sublist--second">
          <div class="menu__sublist-container menu__sublist-container--fourth">
            <li
                v-for="item in articleRouterListSort"
                :key="item.id"
                :class="{'menu__sublist-item--active' : $route.path === item.path }"
                class="menu__sublist-item"
                @click="close"
            >
              <nuxt-link :to="item.path" class="menu__sublist-link">
                <span>{{ item.name }}</span>
              </nuxt-link>
            </li>
          </div>
        </ul>
      </li>

      <li class="menu__list-item" @click="close">
        <nuxt-link :class="{'menu__list-link--active' : $route.path === '/news' }" class="menu__list-link" to="/news">
          Новости
        </nuxt-link>
      </li>

      <li class="menu__list-item" @click="close">
        <a ref='link' class="menu__list-link" href="#contacts" @click='contacts'>Контакты</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      fenceRouterList: [
        {
          id: 0,
          path: '/fence/barrier-road-fence',
          name: 'Барьерное дорожное ограждение',
          sublist: [
            {
              id: 0,
              path: '/fence/barrier-fence-11DO',
              name: 'Барьерное ограждение 11 ДО'
            },
            {
              id: 1,
              path: '/fence/barrier-fence-21DO',
              name: 'Барьерное ограждение 21 ДО'
            },
            {
              id: 2,
              path: '/fence/barrier-fence-wave',
              name: 'Барьерное ограждение Волна'
            },

            {
              id: 3,
              path: '/fence/barrier-fence-with-separating-beam',
              name: 'Барьерное ограждение с отделяющейся балкой'
            },
            {
              id: 4,
              path: '/fence/barrier-fence-U2',
              name: 'Барьерное ограждение У2'
            },
            {
              id: 5,
              path: '/fence/barrier-fence-U3',
              name: 'Барьерное ограждение У3'
            },
            {
              id: 6,
              path: '/fence/barrier-fence-U4',
              name: 'Барьерное ограждение У4'
            },
            {
              id: 7,
              path: '/fence/barrier-fence-SB-1',
              name: 'Барьерное ограждение СБ-1'
            },
            {
              id: 8,
              path: '/fence/barrier-fence-EC-1',
              name: 'Барьерное ограждение ЭК-1'
            },
            {
              id: 9,
              path: '/fence/barrier-fence-for-painting',
              name: 'Барьерные ограждения под покраску'
            },
            {
              id: 10,
              path: '/fence/barrier-fence-with-no-console',
              name: 'Бесконсольное барьерное ограждение'
            },
            {
              id: 11,
              path: '/fence/galvanized-road-barriers',
              name: 'Оцинкованные дорожные ограждения'
            },
            {
              id: 12,
              path: '/fence/road-barriers-guiding-devices',
              name: 'Дорожные ограждения и направляющие устройства'
            },
            {
              id: 13,
              path: '/fence/metal-barrier-fence',
              name: 'Металлическое барьерное ограждение'
            },
            {
              id: 14,
              path: '/fence/bridge-barrier',
              name: 'Мостовое барьерное ограждение'
            },
            {
              id: 15,
              path: '/fence/bridge-barrier-fence-11MO',
              name: 'Мостовое барьерное ограждение 11МО'
            },
            {
              id: 16,
              path: '/fence/one-sided-barrier-fence',
              name: 'Одностороннее барьерное ограждение'
            },
            {
              id: 17,
              path: '/fence/barrier-fence-calculation',
              name: 'Расчет барьерного ограждения'
            },
            {
              id: 18,
              path: '/fence/barrier-fence-installation',
              name: 'Установка барьерного ограждения'
            },
            {
              id: 19,
              path: '/fence/front-barrier-fence',
              name: 'Фронтальное барьерное ограждение'
            },
            {
              id: 20,
              path: '/fence/barrier-fence-end-piece',
              name: 'Концевой элемент барьерного ограждения'
            }
          ]
        },
        {
          id: 1,
          path: '/fence/pedestrian-fences',
          name: 'Пешеходные ограждения',
          sublist: [
            {
              id: 0,
              path: '/fence/pedestrian-fences/metal-pedestrian-fence',
              name: 'Металлическое пешеходное ограждение'
            },
            {
              id: 1,
              path: '/fence/pedestrian-fences/guide-pedestrian-barriers',
              name: 'Направляющие пешеходные ограждения'
            },
            {
              id: 2,
              path: '/fence/pedestrian-fences/restricting-pedestrian-fence',
              name: 'Ограничивающее пешеходное ограждение'
            },
            {
              id: 3,
              path: '/fence/pedestrian-fences/pedestrian-barrier-cross',
              name: 'Пешеходное ограждение Крест'
            },
            {
              id: 4,
              path: '/fence/pedestrian-fences/pedestrian-barrier-ORUD',
              name: 'Пешеходное ограждение ОРУД'
            },
            {
              id: 5,
              path: '/fence/pedestrian-fences/pedestrian-barrier-PO-1-cross',
              name: 'Пешеходное ограждение ПО-1 Крест'
            },
            {
              id: 6,
              path: '/fence/pedestrian-fences/pedestrian-barrier-PO-2',
              name: 'Пешеходное ограждение ПО-2'
            },
            {
              id: 7,
              path: '/fence/pedestrian-fences/pedestrian-barrier-PO-6',
              name: 'Пешеходное ограждение ПО-6'
            },
            {
              id: 8,
              path: '/fence/pedestrian-fences/pedestrian-railings',
              name: 'Пешеходное перильное ограждение'
            },
            {
              id: 9,
              path: '/fence/pedestrian-fences/retaining-pedestrian-fence',
              name: 'Удерживающие пешеходные ограждения'
            },
            {
              id: 10,
              path: '/fence/pedestrian-fences/installing-pedestrian-barriers',
              name: 'Установка пешеходных ограждений'
            }
          ]
        }
      ],
      screenRouterList: [
        {
          id: 0,
          path: '/screen/noise-screen',
          name: 'Шумозащитные экраны',
          sublist: [
            {
              id: 0,
              path: '/screen/noise-screen/production-of-noise-screens',
              name: 'Производство шумозащитных экранов'
            },
            {
              id: 1,
              path: '/screen/noise-screen/noise-screens-at-russian-railways',
              name: 'Шумозащитные экраны на РЖД'
            },
            {
              id: 2,
              path: '/screen/noise-screen/installation-of-noise-screens',
              name: 'Монтаж шумозащитных экранов'
            },
            {
              id: 3,
              path: '/screen/noise-screen/transparent-noise-screens',
              name: 'Прозрачные шумозащитные экраны'
            },
            {
              id: 4,
              path: '/screen/noise-screen/calculation-noise-shield',
              name: 'Расчет шумозащитного экрана'
            },
            {
              id: 5,
              path: '/screen/noise-screen/noise-screens-top10',
              name: 'Шумозащитные экраны Топ 10'
            },
            {
              id: 6,
              path: '/screen/noise-screen/noise-screen-made-of-polycarbonate',
              name: 'Шумозащитный экран из поликарбоната'
            },
            {
              id: 7,
              path: '/screen/noise-screen/noise-screen-made-of-sandwich-panels',
              name: 'Шумозащитный экран из сэндвич-панелей'
            }
          ]
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
        }
      ],
      pipeRouterList: [
        {
          id: 0,
          path: '/pipe/pipe-underneath-sidewalk',
          name: 'Водопропускные трубы под тротуаром'
        },
        {
          id: 1,
          path: '/pipe/culvert-under-the-road',
          name: 'Водопропускная труба под дорогой'
        },
        {
          id: 2,
          path: '/pipe/culvert-on-the-railway',
          name: 'Водопропускная труба на ЖД'
        },
        {
          id: 3,
          path: '/pipe/culvert-under-embankments',
          name: 'Водопропускная труба под насыпями'
        },
        {
          id: 4,
          path: '/pipe/corrugated-culverts/metal-corrugated-all-metal-culverts',
          name: 'Металлические гофрированные цельновитые водопропускные трубы'
        },
        {
          id: 5,
          path: '/pipe/round-culverts',
          name: 'Круглые водопропускные трубы'
        },
        {
          id: 6,
          path: '/pipe/culvert-installation',
          name: 'Монтаж водопропускных труб'
        },
        {
          id: 7,
          path: '/pipe/calculation-of-culverts',
          name: 'Расчет водопропускных труб'
        },
        {
          id: 8,
          path: '/pipe/spiral-pipe',
          name: 'Спиральновитая труба',
        },
        {
          id: 10,
          path: '/pipe/spiral-pipe/spiral-corrugated-metal-pipes',
          name: 'Спиральновитые гофрированные металлические трубы'
        },
        {
          id: 11,
          path: '/pipe/spiral-pipe/spiral-corrugated-metal-pipes-0.5',
          name: 'Спиральновитые гофрированные металлические трубы с диаметром 0,5 м'
        },
        {
          id: 9,
          path: '/pipe/corrugated-culverts',
          name: 'Гофрированные водопропускные трубы',
          sublist: []
        },
        {
          id: 12,
          path: '/pipe/metal-culverts',
          name: 'Металлические водопропускные трубы'
        },
        {
          id: 13,
          path: '/pipe/corrugated-culverts/metal-corrugated-culverts',
          name: 'Металлические гофрированные водопропускные трубы'
        }
      ],
      articleRouterList: [
        {
          id: 0,
          path: '/informative-articles/weight-pedestrian-fence-per-1m',
          name: 'Вес пешеходного ограждения на 1 п м'
        },
        {
          id: 1,
          path: '/informative-articles/types-of-culverts',
          name: 'Виды водопропускных труб'
        },
        {
          id: 2,
          path: '/informative-articles/types-of-road-barriers',
          name: 'Виды дорожных ограждений'
        },
        {
          id: 3,
          path: '/informative-articles/barrier-fence-installation-tolerances',
          name: 'Допуски по установке барьерного ограждения'
        },
        {
          id: 4,
          path: '/informative-articles/guardrail-weight',
          name: 'Вес барьерного ограждения'
        },
        {
          id: 5,
          path: '/informative-articles/design-culvert',
          name: 'Конструкция водопропускной трубы'
        },
        {
          id: 6,
          path: '/informative-articles/applications-for-culverts',
          name: 'Области применения водопропускных труб'
        },
        {
          id: 7,
          path: '/informative-articles/rules-for-use-pedestrian-barriers',
          name: 'Правила применения пешеходных ограждений'
        },
        {
          id: 8,
          path: '/informative-articles/designing-culverts',
          name: 'Проектирование водопропускных труб'
        },
        {
          id: 9,
          path: '/informative-articles/dimensions-road-barriers',
          name: 'Размеры дорожного ограждения'
        },
        {
          id: 10,
          path: '/informative-articles/culvert-operation-mode',
          name: 'Режим работы водопропускных труб'
        },
        {
          id: 11,
          path: '/informative-articles/recommended-ratio-culvert-diameter-length',
          name: 'Рекомендуемое соотношение диаметра и длины водопропускной трубы'
        },
        {
          id: 12,
          path: '/informative-articles/installation-barrier-fence-on-highways',
          name: 'Устройство барьерного ограждения на автомобильных дорогах'
        },
        {
          id: 13,
          path: '/informative-articles/culvert-installation',
          name: 'Устройство водопропускных труб'
        },
        {
          id: 14,
          path: '/informative-articles/installation-metal-pedestrian-barriers',
          name: 'Устройство металлических пешеходных ограждений'
        },
        {
          id: 15,
          path: '/informative-articles/characteristics-road-culverts',
          name: 'Характеристики дорожных водопропускных труб'
        },
        {
          id: 16,
          path: '/informative-articles/barrier-fence-elements',
          name: 'Элементы барьерного ограждения'
        },
        {
          id: 17,
          path: '/informative-articles/culvert-elements',
          name: 'Элементы водопропускной трубы'
        }
      ]
    }
  },
  computed: {
    fenceRouterListSort() {
      return this.fenceRouterList.sort(function (a, b) {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        return 0
      })
    },
    articleRouterListSort() {
      return this.articleRouterList.sort(function (a, b) {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        return 0
      })
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    contacts() {
      if (this.$route.path !== '/') {
        this.$router.push('/#contacts');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  margin-right: auto;
}

.menu__list {
  position: relative;
  display: flex;
}

.menu__list-item {
  margin-right: 25px;

  transition: $style-change-duration;

  &:last-child {
    margin-right: 0;
  }

  &:hover,
  :focus-within {
    .menu__icon-open {
      transition: $style-change-duration;
      transform: rotate(180deg);
    }

    .menu__sublist {
      opacity: 1;
      pointer-events: auto;
    }
  }
}

// focus-within polyfill
.menu__list-item:hover .menu__sublist,
.menu__list-item[focus-within] .menu__sublist {
  opacity: 1;
  pointer-events: auto;
}

.menu__icon-open {
  transition: $style-change-duration;
}

.menu__list-link {
  position: relative;
  display: block;
  padding: 21px 0;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: inherit;
  text-decoration: none;

  cursor: pointer;
  transition: $style-change-duration;
  user-select: none;
  outline: none;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;

    width: 100%;
    height: 2px;
    margin-bottom: 10px;

    background-color: $bg-color-orange;
    transition: transform 0.4s;
    transform: scaleX(0);
    transform-origin: left;
  }

  &:focus::after {
    transform: scaleX(1);
  }

  &:hover:not(.focus-visible)::after {
    transform: scaleX(1);
  }

  &:focus:not(.focus-visible)::after {
    transform: scaleX(0);
  }
}

.menu .menu__list-link--active {
  &::after {
    transform: scaleX(1)
  }
}

.menu .menu__list-link--active-path {
  color: $font-color-orange;

  svg {
    transform: rotate(0);

    path {
      stroke: $font-color-orange;
    }
  }

  &::after {
    transform: scaleX(1);
  }
}

.menu .menu__sublist {
  position: fixed;
  z-index: 3;
  top: 64.8px;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 40px;
  opacity: 0;

  box-shadow: 0px 2px 10px rgba(32, 75, 69, 0.08),
  0px 20px 30px -12px rgba(32, 75, 69, 0.08);
  border-radius: 12px;
  background-color: $main-bg-color;
  pointer-events: none;
  transition: $style-change-duration;
}

.menu__sublist-container {
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  width: 100%;

  &--third {
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 270px;

    .menu__sublist-list-item {
      max-width: 300px;
    }
  }

  &--fourth {
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 300px;
  }
}

.menu__sublist-item {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  margin-right: 25px;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover, {
    .menu__sublist-link {
      color: $font-color-orange;
    }
  }
}

.menu__sublist-link::before {
  position: absolute;
  content: "";
  top: 4px;
  left: 0;

  width: 18px;
  height: 12px;

  opacity: 0;

  background-image: url("../../../assets/svg/icon-link.svg");
  background-repeat: no-repeat;
}

.menu .menu__sublist-item--active {
  .menu__sublist-link {
    padding-left: 25px;
    color: $font-color-orange;

    &::before {
      opacity: 1;
      transition: $style-change-duration;
    }
  }
}

.menu__sublist-link {
  display: inline-block;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  white-space: nowrap;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  transition: $style-change-duration;
}

.menu .menu__sublist-list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 320px;
  padding-left: 25px;
  padding-top: 15px;

  &-item {
    position: relative;
    margin-bottom: 5px;
    margin-right: 25px;

    &::before {
      position: absolute;
      content: "";
      top: 7px;
      left: -12px;
      width: 5px;
      height: 5px;
      border-radius: 100%;
      background-color: $bg-color-orange;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &:hover, {
      .menu__sublist-list-link {
        color: $font-color-orange;
      }
    }

  }

  &-link {
    display: inline-block;
    align-items: center;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    transition: $style-change-duration;
  }
}

@include desktop-small {
  .menu .menu__sublist {
    padding: 24px 40px;
  }

  .menu__list-link {
    padding: 24px 0;
    font-size: 16px;
    line-height: 18px;
  }
}

@include tablet-large {
  .menu {
    position: absolute;
    top: 84px;
    right: 0;
    margin: 0;
    padding: 40px;
    width: 320px;
    height: 320px;
    opacity: 1;
    box-shadow: 0px 2px 10px rgba(32, 75, 69, 0.08),
    0px 20px 30px -12px rgba(32, 75, 69, 0.08);
    border-radius: 12px;
    background-color: $main-bg-color;
    pointer-events: auto;
    transition: $style-change-duration;
  }

  .main-header__container .menu--open {
    opacity: 0;
    pointer-events: none;
    transition: $style-change-duration;
  }

  .menu__list {
    display: flex;
    flex-direction: column;
  }

  .menu__list-item {
    margin-right: 0;
    margin-bottom: 32px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .menu__list-link {
    display: inline;
    padding: 0;

    &::after {
      position: unset;
    }
  }

  .menu__list-link::before {
    position: absolute;
    content: "";
    top: 5px;
    left: 0;
    width: 18px;
    height: 12px;
    opacity: 0;
    background-image: url("../../../assets/svg/icon-link.svg");
    background-repeat: no-repeat;
  }

  .menu__list-link:hover {
    padding-left: 25px;
    color: $font-color-orange;

    &::before {
      opacity: 1;
      transition: $style-change-duration;
    }
  }

  .menu__icon-open {
    display: none;
  }

  .menu .menu__sublist {
    display: none;
  }
}

@include mobile {
  .menu {
    top: 64px;
    width: 100vw;
    height: auto;
    border-radius: 0;
  }
}

</style>
