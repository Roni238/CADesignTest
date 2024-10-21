<template>
    <div class="values-page__advantage">
        <div class="values-page__buttons">
            <button
                class="button"
                v-for="(button, index) in buttons"
                :key="button.icon"
                @click="setActive(index)"
                :class="{ 'button--active': activeButtonIndex === index }"
            >
                <svg-icon :icon="button.icon" :w="button.width" :h="button.height"  class="button__icon" :class="{ 'button__icon--active': activeButtonIndex === index}"/>

                <p class="button__title">{{ button.title }}</p>
                
                <p v-if="activeButtonIndex === index" class="button__description">
                    {{ button.description }}
                </p>
            </button> 
        </div>
    </div>
</template>

<script>
import SvgIcon from "@/components/UI/SvgIcon.vue";

export default {
    name: "values-advantage",
    data() {
        return {
            activeButtonIndex: 3, // дефолтная активная кнопка
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
    methods: {
        setActive(index) {
            this.activeButtonIndex = index;
        }
    },
    components: {
        SvgIcon,
    },
};
</script>

<style lang="scss" scoped>
.values-page__advantage {
    --description-color:#646464;
    --default-icon-color: #4F4F4F;
    display: flex;
    justify-content: center;
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
                transform: scale(1.005); /* немного увеличу активную кнопку так же как и на макете (она заезжает на серое поле) */
        
                .button__description {
                    opacity: 1; /* включение описания, можно было сделать через v-show, но я буду менять стиль если нужно будет например добавить изменение цвета текста */
                }

                .button__icon {
                    stroke: var(--orange-color);
                    fill: var(--orange-color);
                }
            }
        }
        
    }
}

</style>
