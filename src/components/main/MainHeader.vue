<template>
    <header class="header">
        <div class="header__content">
            <svg-icon :icon="'logo-icon'" :w="115" :h="25" class="header__logo"/>
            <svg-icon :icon="'burger-icon'" :w="28" :h="18" class="header__burger"/>

            <nav-vue class="header__nav"/>
            
            <span class="header__contacts" @click="toggleContacts">
                Социальные сети
                <svg-icon :icon="'expand-list-icon'" :w="5" :h="4" class="header__contacts-icon"/>

                <!-- меню контактов -->
                <div class="header__contacts-menu" v-show="contactShow" @click.stop>
                    <div class="header__contacts-links">

                        <div class="header__contact" v-for="contact in contacts" :key="contact.icon">
                            <a :href="contact.link" target="_blank" rel="noopener noreferrer" class="header__contact-link">
                                <svg-icon :icon="contact.icon" :w="contact.w" :h="contact.h" class="header__contact-icon"/>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </span>
        </div>
    </header>
</template>

<script>
import NavVue from '@/components/main/NavVue.vue'
import SvgIcon from "@/components/UI/SvgIcon.vue";

export default {
    name: 'main-header',
    components: {
        NavVue,SvgIcon
    },
    data() {
        return {
            contactShow: false,
            contacts: [
                {
                    link: 'https://vk.com/cadesignru',
                    icon: 'vk-icon',
                    w:21,
                    h:12,
                },
                {
                    //в макете нет ссылок
                    link: 'https://vk.com/cadesignru',
                    icon: 'ok-icon',
                    w:11,
                    h:18,
                },
                {
                    link: 'https://vk.com/cadesignru',
                    icon: 'facebook-icon',
                    w:9,
                    h:17,
                },
                {
                    link: 'https://vk.com/cadesignru',
                    icon: 'inst-icon',
                    w:16,
                    h:18,
                },
            ]
        }
    },
    methods: {
        toggleContacts() {
            this.contactShow = !this.contactShow;
        },
    }
}
</script>

<style lang="scss" scoped>
.header {
    --header-border-color:#F2F2F2;
    height: 98px;
    width: 100%;
    display: flex;
    border-bottom: var(--header-border-color) 1px solid;

    &__content {
        margin: auto auto 26px auto;
        width: 1184px;
        display: flex;
        line-height: 19.84px;

        &__logo {
            width: 115px;
            height: 25px;
        }
    }

    &__contacts {
        margin-left: 64px;
        color: var(--blue-color);
        font-family: var(--gilroy-font);
        font-size: var(--contacts-size);
        font-weight: 100;
        line-height: 16.48px;
        position: relative;

        &-icon {
            margin-left: 5px;
        }

        &-menu {
            padding: 19px;
            background-color: var(--white-color);
            position: absolute;
            z-index: 5;
        }

        &-links {
            background-color: var(--border-color);
            display: grid;
            grid-template-columns: repeat(2, 68px);
            gap: 1px;
            padding: 1px;
            box-sizing: border-box;
        }
    }

    &__contact {
        background: var(--white-color);
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        &-icon {
            stroke: var(--orange-color);
            fill: var(--orange-color);

            &:hover {
                stroke: var(--main-blue-color);
                fill: var(--main-blue-color);
            }
        }
    }
}



@media (min-width: 768px) {
    .header__burger{
        display: none;
    }
}

@media (max-width: 768px) {
    .header{
        height: 96px;

        &__content{
            padding: 0px 20px;
            display: flex;
            justify-content: space-between;
        }
    }
    .header__nav, .header__contacts {
      display: none;
    }
  }
  @media (max-width: 320px) {
    .header{
        height: 72px;
    }
    .close-button {
        
    }
  }
</style>
