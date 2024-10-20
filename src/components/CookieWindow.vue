<template>
    <div class="cookie-window" v-if="showWindow">
        <p class="cookie__message">
            Продолжая использовать наш сайт, вы даете
            <router-link
                class="user__agreement__link"
                :to="'/'"
            >
                согласие на обработку файлов cookie
            </router-link>
            , которые обеспечивают правильную работу сайта. Благодаря им мы улучшаем сайт,обслуживание и товары.
        </p>

        <button class="cookie__content__button" @click="showCookieWindow">Согласен</button>
    </div>
</template>


<script>
export default {
  name: "cookie-window",
  data() {
    return {
        showWindow:true
    }
  },
  methods: {
    showCookieWindow(){
        this.showWindow=false
    }
  }
};
</script>


<style lang="scss" scoped>
.cookie-window {
    background-color: var(--white-color);
    width: 1431px;
    height: 125px;
    border-radius: 2px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: 0px;
    left: 50%; /* Смещаем к центру */
    transform: translateX(-50%); /* Центрируем по горизонтали */
    box-shadow: 0px 0px 24px 0px #0F12141A;
    z-index: 10;
    padding: 0px 63px;
    box-sizing: border-box;

    .cookie__message {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: var(--dark-color);
        max-width: 882px;

        .user__agreement__link {
            color: var(--blue-color);
            text-decoration: none;
        }
    }

    .cookie__content__button {
        background: var(--orange-color);
        color: var(--white-color);
        font-size: 16px;
        font-weight: 700;
        line-height: 18.59px;
        text-align: left;
        height: 64px;
        width: 159px;
        border: none;
        text-align: center;
    }
}
</style>

  