<template>
    <div class="important-people">
        <div class="important-people__slide">

            <transition name="slider" mode="out-in">
                <div class="slider__image__container" :key="currentSlide">
                    <img
                        class="container__image"
                        v-lazy="require(`@/assets/${slides[currentSlide].image}`)"
                        alt="slides[currentSlide].name"
                    />

                    <div class="slider__image__container__buttons">
                        <arrow-button class="button__left-button" @click="prevSlide"/>
                        <arrow-button class="button__right-button" @click="nextSlide"/>
                    </div>
                    
                </div>
            </transition>

                <div class="important-people__slide__content">
                    <!-- h1 должен быть только один на странице, и он в "Энергия твоего роста! – заряжаем твою карьеру", font-size как у h1, но это h2-->
                    <h2 class="content__name">{{ slides[currentSlide].name }}</h2>
                    <p class="content__position">{{ slides[currentSlide].position }}</p>
                    <p class="content__citation">{{ slides[currentSlide].citation }}</p>
                </div>

                <pagination-controls class="pagination-controls"
                    :totalPages="slides.length" 
                    :currentPage="currentSlide + 1" 
                    @page-change="changingSlide"
                />
        </div>
    </div>
</template>

<script>
import ArrowButton from "@/components/UI/ArrowButton.vue";
import PaginationControls from "@/components/UI/PaginationControls.vue";

export default {
    name: "important-people", 
    components: {
        ArrowButton, PaginationControls
    },
    data() {
        return {
            currentSlide: 1,
            slides: [
                {
                    name: "Ивaн Ивaнoв",
                    position: "Дизайнер стиральных машин",
                    citation:
                        "Значит, потом, однажды ночью мне, ну наитие такое появилось, что вот мне нужно выполнить определенную, как бы определенный алгоритм: я лег на диване, поднял ноги, вот на столе поднял ноги, положил на стул и открыл окно.",
                    image: "general_director.png",
                },
                {
                    name: "Евдокимова Майя",
                    position: "Генеральный директор",
                    citation:
                        "Цель нашей работы обеспечить высочайший сервис нашим клиентам. Дать возможность бизнесу сосредоточиться на своих ключевых задачах, передав функции управления персоналом, казначейства, финансового учёта и отчётности нам.",
                    image: "general_director.png",
                },
                {
                    name: "Чижиков Иван",
                    position: "Режисер документалок про животных",
                    citation:
                        "Виталя, продавай акции «Корма для питонов в Витебске», мы закроем эту сделку в 30+ копеек",
                    image: "general_director.png",
                },
            ],
        };
    },
    methods: {
        changingSlide(indexSlide){
            this.currentSlide = indexSlide-1
            console.log('текущий слайд ', this.currentSlide )
        },
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        },
        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        },
    },
};
</script>

<style lang="scss" scoped>
.important-people {
    //height: 446px;
    max-width: 1480px;
    width: 100%;
    //padding-top: 117px;
    margin: 70px auto;
    //box-sizing: border-box;

    .important-people__slide {
        position: relative;

        .slider__image__container {
            position: relative;
            background: var(--gray-color);
            height: 446px;
            

            .container__image {
                position: absolute;
                right: 51px;
                bottom: 0px;
            }
            &__buttons{
                position: absolute;
                top: 50%;
                left: 40px;
                right: 40px;
                display: flex;
                justify-content: space-between;
                gap: 20px;
    
                .button__left-button {
                    background: none;
                    border: 1px solid var(--border-color);
                }
                .button__right-button {
                    background: var(--white-color);
                    border: none;
                    transform: rotate(180deg);
                }
            }  
        }
        &__content{
            position: absolute;
            top: 117px;
            left: 142px;
            max-width: 630px;

            .content__name {
                margin-bottom: 20px;
                font-size: 36px;
                font-weight: 400;
                line-height: 28px;
                color: var(--dark-color);
            }
            .content__position {
                font-size: var(--p-size);
                font-weight: 400;
                line-height: 28px;
                margin-bottom: 40px;
                color: var(--gray-dark-color);
            }
            .content__citation {
                font-size: var(--p-size-big);
                font-weight: 400;
                line-height: 32px;
                text-align: left;
                color: var(--dark-color);
            }
        }
        .pagination-controls{
            display: none;
        }
    }
}

/* Анимация для плавного появления и исчезновения текста и изображения */
.slider-enter-active,
.slider-leave-active {
    transition: opacity 0.5s ease;
}
.slider-enter, .slider-leave-to {
    opacity: 0;
}

@media (max-width: 768px) {

    .important-people {
        max-width: -webkit-fill-available;
        margin: auto 40px;
        padding: 0px;

        .important-people__slide{
            .slider__image__container{

                .container__image{
                    right: auto;
                }

                &__buttons{
                    left: 32px;
                    right: 32px;
                }
            }
            &__content{
                position: static;
                max-width: none;
                margin-top: 50px;

                .content__name {
                    font-size: 28px;
                    text-align: center;
                }
                .content__position {
                    font-size: 16px;
                    text-align: center;
                }
                .content__citation {
                    font-size: 18px;
                    text-align: center;
                }
            }
        }
    }
}

@media (max-width: 321px) {

    .important-people {
        max-width: -webkit-fill-available;
        margin: 40px;
        padding: 0px;

        .important-people__slide{
            .slider__image__container{
                height: 201px;

                .container__image{
                    right: 0px;
                    bottom: -10%;
                    transform: translate(50%, 50%);
                    scale: 0.45;
                }

                &__buttons{
                    display: none;
                }
            }
            &__content{
                position: static;
                max-width: none;
                margin-top: 25px;

                .content__name {
                    font-size: 20px;
                    text-align: center;
                    margin-bottom: 5px;
                }
                .content__position {
                    font-size: 13px;
                    margin-bottom: 15px;
                }
                .content__citation {
                    font-size: 13px;
                    text-align: center;
                    line-height: 22px;
                }
            }
            .pagination-controls{
                display: flex;
                width: 68px;
            }
        }
    }
}
</style>