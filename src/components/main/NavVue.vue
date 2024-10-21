<template>
    <nav class="nav">
        <router-link
            class="nav__link"
            v-for="link in links"
            :key="link.title"
            :to="link.href"
        >
            {{ link.title }}
        </router-link>
    </nav>
</template>

<script>
export default {
    name: 'nav-vue',
    data() {
        return {
            links: [
                {
                    title: "О нас",
                    href: "/about"
                },
                {
                    title: "Наши ценности",
                    href: "/"
                },
                {
                    title: "Вакансии",
                    href: "/about"
                },
                {
                    title: "Начало карьеры",
                    href: "/about"
                },
                {
                    title: "Контакты",
                    href: "/about"
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.nav {
    margin-left: auto;
    width: 687px;
    display: flex;
    gap: 64px;
    font-weight: 400;
    line-height: 19.84px;
    text-align: left;

    &__link {
        position: relative;
        color: var(--dark-color);
        font-size: var(--p-size);
        text-decoration: none;
        padding-bottom: 5px;

        &::before {
            content: "";
            position: absolute;
            bottom: -27px;
            left: 0;
            right: 0;
            height: 2px;
            background-color: var(--orange-color);
            transform: scaleX(0);
            transform-origin: center;
            transition: transform 0.3s ease;
        }

        &.router-link-active::before {
            transform: scaleX(1); /* полоска под текущей ссылкой */
        }
    }
}
</style>

