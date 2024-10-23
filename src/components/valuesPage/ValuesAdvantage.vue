<template>
    <div class="values-page__advantage">
        <div class="values-page__buttons">
            <button class="button"
                v-for="(button, index) in buttons" :key="button.icon"
                @click="setActive(index)"
                :class="[
                    { 'button--active': activeButtonIndex === index },
                    { 'hidden-on-mobile': shouldHideButton(index) }
                ]"
            >
                <svg-icon :icon="button.icon" :w="button.width" :h="button.height" class="button__icon" :class="{ 'button__icon--active': activeButtonIndex === index }" />

                <p class="button__title">{{ button.title }}</p>

                <p v-if="activeButtonIndex === index" class="button__description">
                    {{ button.description }}
                </p>
            </button>
        </div>
        
        <pagination-controls class="pagination-controls"
            v-if="this.buttonsPerPage === 2" 
            :totalPages="totalPages" 
            :currentPage="currentPage" 
            @page-change="changingPage"
        />
    </div>
</template>

<script>
import SvgIcon from "@/components/UI/SvgIcon.vue";
import PaginationControls from "@/components/UI/PaginationControls.vue";

export default {
    name: "values-advantage",
    data() {
        return {
            activeButtonIndex: 3, // дефолтная активная кнопка
            currentPage: 1, // текущая страница на мобильных устройствах
            buttonsPerPage: 6, // количество кнопок на одной странице (по дефолту для десктопа)
            buttons: [
                { title: 'Развитие', icon: 'development-icon', width: 66, height: 62, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
                { title: 'Обучение', icon: 'training-icon', width: 74, height: 74, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
                { title: 'Ответственность', icon: 'responsibility-icon', width: 68, height: 67, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
                { title: 'Динамика', icon: 'dynamics-icon', width: 95, height: 59, description: 'Общего центра обслуживания. Современные технологии, проекты, рабочие группы' },
                { title: 'Комфорт', icon: 'comfort-icon', width: 72, height: 72, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
                { title: 'Надежность', icon: 'reliability-icon', width: 54, height: 69, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }
            ],
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.buttons.length / this.buttonsPerPage)
        }
    },
    methods: {
        setActive(index) {
            this.activeButtonIndex = index;
        },
        shouldHideButton(index) {
            // оперделяем нужно ли добавлять класс для скрытия кнопки
            const start = (this.currentPage - 1) * this.buttonsPerPage // первая видимая кнопка (страница 2 - первая кнопка с индексом 3)
            const end = start + this.buttonsPerPage // последняя видимая кнопка (страница 2 - последняя кнопка с индексом 4)
            console.log(index < start || index >= end)
            return index < start || index >= end // если false класс скрытия кнопки не добавляется
        },
        changingPage(indexButton){
            this.currentPage = indexButton
        },
        handleResize() {
            // Обновляем количество кнопок в зависимости от ширины экрана
            if (window.innerWidth < 768) {
                this.buttonsPerPage = 2 // Для мобильных устройств (меньше 768px) — показываем по 2 кнопки
                this.currentPage = 2
            } else {
                this.buttonsPerPage = 6 // больщой экран - 6 кнопок
                this.currentPage = 1
            }
        }
    },
    mounted() {
        this.handleResize() // Проверка ширины экрана при загрузке страницы
        window.addEventListener('resize', this.handleResize) // следим за размером экрана
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize) // удаление слушателя при уничтожении компонента
    },
    components: {
        SvgIcon, PaginationControls
    }
};
</script>

<style lang="scss" scoped>
.values-page__advantage {
    --description-color: #646464;
    --default-icon-color: #4F4F4F;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 76px;

    .values-page__buttons {
        display: grid;
        grid-template-columns: repeat(3, 398px);
        gap: 1px;
        padding: 1px;
        width: auto;
        background: var(--stroke-color);

        .button {
            max-width: 398px;
            width: 100%;
            height: 377px;
            border: none;
            background: var(--white-color);
            font-weight: 400;
            line-height: 24.8px;
            text-align: center;
            cursor: pointer;
            transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;

            .button__icon {
                stroke: var(--default-icon-color);
                fill: var(--default-icon-color);
                transition: fill 0.3s ease, stroke 0.3s ease, transform 0.3s ease;
            }

            .button__title {
                margin: 64px 0px 23px 0px;
                color: var(--dark-color);
                font-size: var(--h3-size);
            }

            .button__description {
                color: var(--description-color);
                opacity: 0;
                font-size: var(--p-size);
            }

            &--active {
                box-shadow: 0px 0px 52px 0px #00000021;
                z-index: 1;
                transform: scale(1.005);

                .button__description {
                    opacity: 1;
                }

                .button__icon {
                    stroke: var(--orange-color);
                    fill: var(--orange-color);
                }
            }

            &.hidden-on-mobile {
                display: none; /* класс для скрытия лишних кнопок на телефонах */
            }
        }
    }
}

@media (max-width: 680px) {
    .values-page__advantage .values-page__buttons .button {
        width: 50vw;
        height: 50vw;
    }
}

@media (max-width: 768px) {
    .values-page__advantage {
        margin: 40px auto 61px auto;

        .values-page__buttons {
            display: grid;
            grid-template-columns: repeat(2, auto); /* 2 кнопки в ряд */
            gap: 1px;
            direction: rtl; /* инверсия грида */

            .button {
                width: 350px;
                height: 350px;
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: var(--p-size);
                padding: 60px 24px;
                justify-content: space-around;

                .button__title {
                    margin: 0;
                    font-size: var(--p-size);
                }
            }
        }
    }
}



@media (max-width: 321px) {
    .values-page__advantage{
        display: none;
    }
}
</style>

