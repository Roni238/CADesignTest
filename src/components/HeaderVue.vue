<template>
    <header>
        <div class="header__content">
            <svg class="header__content_logo">
                <use xlink:href="/icons.svg#logo-icon"></use>
            </svg>

            <nav-vue/>
            <span class="header__content__contacts">Социальные сети</span>
        </div>
    </header>
</template>


<script>
import NavVue from '@/components/NavVue.vue'

export default {
    name: 'header-vue',
    components: {
        NavVue,
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
            }
        }
    }
</style>