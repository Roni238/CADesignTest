<template>
    <header>
        <div class="header__content">
            <svg-icon :icon="'logo-icon'" :w="5" :h="4" class="header__content_logo"/>

            <nav-vue/>
            <span class="header__content__contacts" @click="toggleContacts">
                Социальные сети
                <svg-icon :icon="'expand-list-icon'" :w="5" :h="4"/>

                <!-- меню контактов -->
                <div class="contacts__menu" v-show="contactShow" @click.stop>
                    <div class="contacts__links">

                        <div class="contact" v-for="contact in contacts" :key="contact.icon">
                            <a :href="contact.link" target="_blank" rel="noopener noreferrer">
                                <svg-icon :icon="contact.icon" :w="contact.w" :h="contact.h" class="contact__icon"/>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </span>
        </div>
    </header>
</template>



<script>
import NavVue from '@/components/NavVue.vue'
import SvgIcon from "@/components/SvgIcon.vue";

export default {
    name: 'header-vue',
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
    header {
        border-bottom: var(--header-border-color) 1px solid;
        height: 98px;
        width: 100%;
        display: flex;

        .header__content {
            margin: auto auto 26px auto;
            width: 1184px;
            display: flex;
            line-height: 19.84px; 

            .header__content_logo{
                width: 115px;
                height: 25px;
            }

            .header__content__contacts {
                font-size: 14px;
                margin-left: 64px;
                color: var(--blue-color);
                font-family: 'Gilroy', sans-serif;
                font-size: 14px;
                font-weight: 100;
                line-height: 16.48px;
                position: relative;

                .contacts__menu {
                    padding: 19px;
                    background-color: var(--white-color);
                    position: absolute;
                    z-index: 5;

                    .contacts__links{
                        background-color: #E0E0E0;
                        display: grid;
                        grid-template-columns: repeat(2, 68px);
                        gap: 1px;
                        padding: 1px;
                        box-sizing: border-box;

                        .contact {
                            background: var(--white-color);
                            height: 50px;
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            .contact__icon {
                                stroke: var(--orange-color);
                                fill: var(--orange-color);

                                &:hover {
                                    stroke: var(--main-blue-color);
                                    fill: var(--main-blue-color);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>