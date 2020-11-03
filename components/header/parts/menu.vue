<template>
  <nav class="menu menu--open">
    <ul class="menu__list">
      <li class="menu__list-item">
        <a class="menu__list-link">
          <span>Услуги</span>
          <svg class="menu__icon-open" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L13 1" stroke="#3F3F3F" stroke-width="2"/>
          </svg>
        </a>

        <ul class="menu__sublist">
          <li class="menu__sublist-item">
            <nuxt-link class="menu__sublist-link" to="/fence" :class="{'menu__sublist-link--active' : $route.path === '/fence' }">
              <span>Барьерное ограждение</span>
            </nuxt-link>
          </li>

          <li class="menu__sublist-item">
            <nuxt-link class="menu__sublist-link" to="/screen" :class="{'menu__sublist-link--active' : $route.path === '/screen' }">
              <span>Шумозащитные экраны</span>
            </nuxt-link>
          </li>

          <li class="menu__sublist-item">
            <a class="menu__sublist-link">
              <span>Трубы спиральновитые</span>
            </a>
          </li>
        </ul>
      </li>

      <li class="menu__list-item">
        <nuxt-link to="/news" class="menu__list-link" :class="{'menu__list-link--active' : $route.path === '/news' }">
          Новости
        </nuxt-link>
      </li>

      <li class="menu__list-item">
        <a class="menu__list-link" href="#contacts">Контакты</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Menu'
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

    display: flex;
    flex-direction: column;
    padding: 40px;
    width: 300px;
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

  .menu__sublist-link:hover {
    padding-left: 25px;
    color: $font-color-orange;

    &::before {
      opacity: 1;
      transition: $style-change-duration;
    }
  }

  .menu .menu__sublist-link--active {
    padding-left: 25px;
    color: $font-color-orange;

    &::before {
      opacity: 1;
      transition: $style-change-duration;
    }
  }

  .menu__sublist-link {
    display: block;
    align-items: center;

    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: inherit;
    text-decoration: none;

    cursor: pointer;
    transition: $style-change-duration;
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

    .menu__list-link {
      display: inline;
      padding: 0;

      &::after {
        position: unset;
      }
    }
  }

</style>
