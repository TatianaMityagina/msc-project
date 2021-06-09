<template>
  <nav class="menu menu--open">
    <ul class="menu__list">
      <li class="menu__list-item" @click="close">
        <a class="menu__list-link">
          <span>Услуги</span>
          <svg class="menu__icon-open" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L13 1" stroke="#3F3F3F" stroke-width="2"/>
          </svg>
        </a>

        <ul class="menu__sublist">
          <li class="menu__sublist-item" @click="close" :class="{'menu__sublist-item--active' : $route.path === '/fence' }">
            <nuxt-link class="menu__sublist-link" to="/fence">
              <span>Барьерное ограждение</span>
            </nuxt-link>
            <ul class="sublist__dropdown-list">
              <li><nuxt-link to="/fence/barrier-fence-11DO">Барьерное ограждение 11 ДО</nuxt-link></li>
              <li><nuxt-link to="/fence/barrier-fence-21DO">Барьерное ограждение 21 ДО</nuxt-link></li>
              <li><nuxt-link to="/fence/barrier-fence-wave">Барьерное ограждение Волна</nuxt-link></li>
              <li><nuxt-link to="/fence/barrier-road-fence">Барьерное дорожное ограждение</nuxt-link></li>
              <li><nuxt-link to="/fence/barrier-fence-with-separating-beam">Барьерное ограждение с отделяющейся балкой</nuxt-link></li>
              <li><nuxt-link to="/fence/barrier-fence-U2">Барьерное ограждение У2</nuxt-link></li>
              <li><nuxt-link to="/fence/barrier-fence-U3">Барьерное ограждение У3</nuxt-link></li>
              <li><nuxt-link to="/fence/barrier-fence-U4">Барьерное ограждение У4</nuxt-link></li>
              <li><nuxt-link to="/fence/barrier-fence-for-painting">Барьерные ограждения под покраску</nuxt-link></li>
              <li><nuxt-link to="/fence/barrier-fence-with-no-console">Бесконсольное барьерное ограждение</nuxt-link></li>
              <li><nuxt-link to="/fence/galvanized-road-barriers">Оцинкованные дорожные ограждения</nuxt-link></li>
              <li><nuxt-link to="/fence/road-barriers-guiding-devices">Дорожные ограждения и направляющие устройства</nuxt-link></li>
              <li><nuxt-link to="/fence/metal-barrier-fence">Металлическое барьерное ограждение</nuxt-link></li>
              <li><nuxt-link to="/fence/bridge-barrier">Мостовое барьерное ограждение</nuxt-link></li>
              <li><nuxt-link to="/fence/bridge-barrier-fence-11MO">Мостовое барьерное ограждение 11МО</nuxt-link></li>
              <li><nuxt-link to="/fence/one-sided-barrier-fence">Одностороннее барьерное ограждение</nuxt-link></li>
              <li><nuxt-link to="/fence/barrier-fence-calculation">Расчет барьерного ограждения</nuxt-link></li>
              <li><nuxt-link to="/fence/barrier-fence-SB-1">Барьерное ограждение СБ-1</nuxt-link></li>
              <li><nuxt-link to="/fence/barrier-fence-installation">Установка барьерного ограждения</nuxt-link></li>
              <li><nuxt-link to="/fence/front-barrier-fence">Фронтальное барьерное ограждение</nuxt-link></li>
              <li><nuxt-link to="/fence/barrier-fence-EC-1">Барьерное ограждение ЭК-1</nuxt-link></li>
              <li><nuxt-link to="/fence/pedestrian-fences">Пешеходные ограждения</nuxt-link></li>
              <li><nuxt-link to="/fence/metal-pedestrian-fence">Металлическое пешеходное ограждение</nuxt-link></li>
              <li><nuxt-link to="/fence/guide-pedestrian-barriers">Направляющие пешеходные ограждения</nuxt-link></li>
            </ul>
          </li>

          <li class="menu__sublist-item" @click="close">
            <nuxt-link class="menu__sublist-link" to="/screen" :class="{'menu__sublist-link--active' : $route.path === '/screen' }">
              <span>Шумозащитные экраны</span>
            </nuxt-link>
          </li>

          <li class="menu__sublist-item" @click="close">
            <nuxt-link class="menu__sublist-link" to="/pipe" :class="{'menu__sublist-link--active' : $route.path === '/pipe' }">
              <span>Трубы спиральновитые</span>
            </nuxt-link>
          </li>
        </ul>
      </li>

      <li class="menu__list-item" @click="close">
        <nuxt-link to="/news" class="menu__list-link" :class="{'menu__list-link--active' : $route.path === '/news' }">
          Новости
        </nuxt-link>
      </li>

      <li class="menu__list-item" @click="close">
        <a class="menu__list-link" href="#contacts" v-show="$route.path === '/'">Контакты</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Menu',
    methods: {
      close() {
        this.$emit('close')
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
    margin-right: 48px;

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

    &:focus::after{
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
    &::after  {
      transform: scaleX(1)
    }
  }

  .menu .menu__sublist {
    position: absolute;
    z-index: 3;
    top: 65px;
    left: -45px;
    display: flex;
    flex-direction: column;
    padding: 40px;
    opacity: 0;

    box-shadow: 0px 2px 10px rgba(32, 75, 69, 0.08),
      0px 20px 30px -12px rgba(32, 75, 69, 0.08);
    border-radius: 12px;
    background-color: $main-bg-color;
    pointer-events: none;
    transition: $style-change-duration;
  }

  .menu__sublist-item {
    position: relative;
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      .menu__sublist-link {
        padding-left: 25px;
        color: $font-color-orange;

        &::before {
          opacity: 1;
          transition: $style-change-duration;
        }
      }

      .sublist__dropdown-list {
        opacity: 1;
        padding-top: 15px;
        height: auto;
        transition: all 0.5s ease-in-out;
        pointer-events: auto;
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
    font-size: 15px;
    line-height: 18px;
    color: inherit;
    text-decoration: none;

    cursor: pointer;
    transition: $style-change-duration;
  }

  .sublist__dropdown-list {
    @include list-reset;
    column-count: 4;
    padding-left: 15px;
    height: 0;
    opacity: 0;
    pointer-events: none;

    & li {
      width: 240px;
    }

    & a {
      padding: 5px 0;
      font-size: 13px;
      line-height: 14px;
      color: inherit;
      text-decoration: none;

      &:hover {
        color: $font-color-orange;
        transition: $style-change-duration;
      }
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
      position: static;

      padding: 25px 0 0 0;
      width: 100%;
      opacity: 1;

      background: none;
      border-radius: none;
      box-shadow: none;
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
