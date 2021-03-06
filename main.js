import PlansUI from './layer.js';
import Carousel from './carousel.js';
import CardsUI from './card.js'
import AutoComplete from './autoComplete.js'

const carouselSetting = {
    carouselSelector: {
        carousel: ".carousel",
        container: ".carousel-container"
    },
    btnSelector: {
        prevBtn: ".prev-btn",
        nextBtn: ".next-btn"
    },
    options: {
        itemWidth: 180,
        carouselDuration: 2000,
        carouselCheckingDuration: 500,
        timeGapToRestartCarousel: 5000
    },
    data: {
        method: "GET",
        url: "./carouselData.json"
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const plansUI = new PlansUI();
    const carousel = new Carousel(carouselSetting);
    const cardsUI = new CardsUI(".cards-items", "selected");
    const autoComplete = new AutoComplete();

    plansUI.init();
    carousel.init();
    cardsUI.init();
    autoComplete.init();
});
