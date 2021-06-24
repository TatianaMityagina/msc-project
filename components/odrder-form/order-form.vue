<template>
  <section class="order-form">
    <div class="order-form__container">
      <form action="" class="order-form__form-wrapper" @submit.prevent="submitForm">
        <h2 class="order-form__form-title">Заполните форму и получите наш полный каталог</h2>
        <div class="order-form__form-row">
          <div class="order-form__form-col">
            <label for="name">Имя</label>
            <input id="name" placeholder="Александр" type="text" v-model="form.name">
          </div>
          <div class="order-form__form-col">
            <label for="phone">Телефон</label>
            <input id="phone" v-mask="'+7 (###) ### ## ##'" placeholder="+7(ххх) ххх - хх - хх" type="tel" v-model="form.phone">
          </div>
          <div class="order-form__form-col">
            <label for="email">Почта</label>
            <input id="email" placeholder="info@mail.ru" type="email" v-model="form.email">
          </div>
        </div>
        <div class="order-form__form-row">
          <div class="order-form__form-col order-form__form-col--message">
            <label for="message">Сообщение</label>
            <textarea id="message" type="text" v-model="form.message"></textarea>
          </div>
          <div class="order-form__form-col">
            <button class="order-form__form-btn" type="submit">Отправить заявку</button>
<!--            <p class="order-form__form-accept">Нажимая на кнопку я подтверждаю, что я ознакомлен с условиями <a href="">политики-->
<!--              конфиденциальности</a></p>-->
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import {mask} from 'vue-the-mask'

export default {
  name: 'OrderForm',
  directives: {mask},
  components: {},
  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        message: ''
      },
      url: 'http://localhost:3007'
    }
  },
  methods:{
    submitForm() {
      this.$axios.$post(this.url + '/mail', this.form)
          .then(() => {
            alert('Заявка отправлена, для продолжения нажмите ОК');
          })
          .catch((error) => {
            alert('Произошла ошибка, форма не оправлена');
          })
          .finally(() => {
            this.form = {
              name: '',
              phone: '',
              email: '',
              message: ''
            }
          });
    }
  }
}
</script>

<style lang="scss" scoped>
.order-form {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 56px 40px;
  background: $bg-color-orange;
}

.order-form__container {
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  width: 100%;
}

.order-form__form-wrapper {
  display: flex;
  flex-direction: column;
}

.order-form__form-title {
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 20px;
  line-height: 160%;;
  color: $font-color-white;
}

.order-form__form-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 45px;
}

.order-form__form-col {
  display: flex;
  flex-direction: column;
  width: 30%;

  &--message {
    width: 65%;
  }

  & label {
    margin-bottom: 15px;
    font-weight: 600;
    font-size: 16px;
    line-height: 160%;
    color: $font-color-white;
  }

  & input {
    height: 43px;
    padding: 0 18px;
    font-family: $main-font-family;
    font-weight: 500;
    font-size: 14px;
    line-height: 160%;
    background-color: $main-bg-color;
    border: none;
    outline: none;

    &::placeholder {
      font-family: $main-font-family;
      font-weight: 500;
      font-size: 14px;
      line-height: 160%;
    }
  }

  & textarea {
    height: 140px;
    padding: 18px;
    font-family: $main-font-family;
    font-weight: 500;
    font-size: 14px;
    line-height: 160%;
    background-color: $main-bg-color;
    border: none;
    outline: none;
    resize: none;
  }
}

.order-form__form-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 47px;
  margin: 40px 0 25px;
  font-size: 18px;
  line-height: 30px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: $font-color-orange;
  border: none;
  outline: none;
  background: $main-bg-color;
  box-shadow: 4px 6px 1px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.4s;

  &:hover,
  :focus {
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.1);
    transform: translatey(-0.65em);
    transition: 0.4s;
  }
}

.order-form__form-accept {
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: $font-color-white;

  & a {
    color: $font-color-white;
  }
}

@include mobile {
  .order-form {
    padding: 56px 15px;
  }

  .order-form__form-row {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 0;
  }

  .order-form__form-col {
    width: 100%;
    margin-bottom: 25px;
  }
}

</style>
