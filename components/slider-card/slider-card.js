$(() => {
    const SLIDER_BLOCK = 'slider-cards';
    const SLIDE_BLOCK = 'slider-card';

    const carusel = $(`.${SLIDER_BLOCK}`);
    const buttonLeft = $(`.${SLIDER_BLOCK}__button-left`);
    const buttonRight = $(`.${SLIDER_BLOCK}__button-right`);

    buttonRight.on('click', () => {
        right_carusel(carusel);
    });

    buttonLeft.on('click', () => {
        left_carusel(carusel);
    });

    function left_carusel(carusel) {
        let block_width = $(carusel).find(`.${SLIDE_BLOCK}`).outerWidth();
        $(carusel)
            .find(`.${SLIDER_BLOCK}__items .${SLIDE_BLOCK}`)
            .eq(-1)
            .clone().prependTo($(carusel)
            .find(`.${SLIDER_BLOCK}__items`));

        $(carusel).find(`.${SLIDER_BLOCK}__items`).css({"left":"-"+block_width+"px"});
        $(carusel).find(`.${SLIDER_BLOCK}__items .${SLIDE_BLOCK}`).eq(-1).remove();
        $(carusel).find(`.${SLIDER_BLOCK}__items`).animate({left: "0px"}, 200);
    }

    function right_carusel(carusel) {
        let block_width = $(carusel).find(`.${SLIDE_BLOCK}`).outerWidth();

        $(carusel)
            .find(`.${SLIDER_BLOCK}__items`).animate({left: "-"+ block_width +"px"}, 200, () => {
                $(carusel).find(`.${SLIDER_BLOCK}__items .${SLIDE_BLOCK}`).eq(0)
                    .clone().appendTo($(carusel)
                    .find(`.${SLIDER_BLOCK}__items`));
                $(carusel).find(`.${SLIDER_BLOCK}__items .${SLIDE_BLOCK}`).eq(0).remove();
                $(carusel).find(`.${SLIDER_BLOCK}__items`).css({"left":"0px"});
        });
    }
});