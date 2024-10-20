<template>
    <div class="important-people">
        <div class="important-people__slide">
            <transition name="slider" mode="out-in">
                <div class="important-people__content" :key="currentSlide">
                    <h2 class="content__name">{{ slides[currentSlide].name }}</h2>
                    <p class="content__position">{{ slides[currentSlide].position }}</p>
                    <p class="content__citation">{{ slides[currentSlide].citation }}</p>
                    <img
                        class="content__image"
                        :src="require(`@/assets/${slides[currentSlide].image}`)"
                        alt="general_director"
                    />
                </div>
            </transition>
        </div>

        <div class="important-people__buttons">
            <button class="buttons__left-button" @click="prevSlide">
                <svg-icon :icon="'arrow-icon'" :w="6" :h="10" class="button__arrow" />
            </button>

            <button class="buttons__right-button" @click="nextSlide">
                <svg-icon :icon="'arrow-icon'" :w="6" :h="10" class="button__arrow" />
            </button>
        </div>
    </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon.vue";

export default {
    name: "important-people",
    components: {
        SvgIcon,
    },
    data() {
        return {
            currentSlide: 0,
            slides: [
                {
                    name: "Евдокимова Майя",
                    position: "Генеральный директор",
                    citation:
                        "Цель нашей работы обеспечить высочайший сервис нашим клиентам. Дать возможность бизнесу сосредоточиться на своих ключевых задачах, передав функции управления персоналом, казначейства, финансового учёта и отчётности нам.",
                    image: "general_director.png",
                },
                {
                    name: "Ивaн Ивaнoв",
                    position: "Дизайнер стиральных машин",
                    citation:
                        "Значит, потом, однажды ночью мне, ну наитие такое появилось, что вот мне нужно выполнить определенную, как бы определенный алгоритм: я лег на диване, поднял ноги, вот на столе поднял ноги, положил на стул и открыл окно.",
                    image: "general_director.png",
                },
            ],
        };
    },
    methods: {
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        },
        prevSlide() {
            this.currentSlide =
                (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        },
    },
};
</script>

<style lang="scss" scoped>
.important-people {
    height: 446px;
    width: 1480px;
    background: var(--gray-color);
    padding-top: 117px;
    margin: 70px auto;
    box-sizing: border-box;
    position: relative;

    .important-people__slide {
        .important-people__content {
            max-width: 630px;
            max-height: 250px;
            margin-left: calc(52% - 630px);
            --color: #828282;

            .content__name {
                margin-bottom: 20px;
                font-size: 36px;
                font-weight: 400;
                line-height: 28px;
                color: var(--dark-color);
            }

            .content__position {
                font-size: 16px;
                font-weight: 400;
                line-height: 28px;
                margin-bottom: 40px;
                color: var(--color);
            }

            .content__citation {
                font-size: 18px;
                font-weight: 400;
                line-height: 32px;
                text-align: left;
                color: var(--dark-color);
            }

            .content__image {
                position: absolute;
                right: 49px;
                bottom: 0px;
            }
        }
    }

    .important-people__buttons {
        position: absolute;
        width: 1400px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: space-between;
        gap: 20px;

        .buttons__left-button {
            background: none;
            height: 94px;
            width: 52px;
            border: 1px solid #e0e0e0;
        }

        .buttons__right-button {
            background: var(--white-color);
            height: 94px;
            width: 52px;
            border: none;
            transform: rotate(180deg);
        }

        .button__arrow {
            fill: var(--dark-color);
        }
    }
}

/* Анимация для плавного появления и исчезновения текста и изображения */
.slider-enter-active,
.slider-leave-active {
    transition: opacity 0.5s ease;
}
.slider-enter, .slider-leave-to {
    opacity: 0; /* Легкий сдвиг вниз для более естественного эффекта */
}

</style>

