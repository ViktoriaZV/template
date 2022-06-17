$(() => {
    const PLAYER_BLOCK = 'player';
    const PLAYER_OPENED = 'player-opened';
    const SHOW_PLAY_BUTTON = 'play-button-show';

    const player = $(`.${PLAYER_BLOCK}`);
    const video = $(`.${PLAYER_BLOCK}__video`);
    const buttonPlay = $(`.${PLAYER_BLOCK}__button-play`);

    $(`.play-button`).on(`click`, () => {
        $(player).addClass(PLAYER_OPENED);
        $(buttonPlay).addClass(SHOW_PLAY_BUTTON);
    });

    $(`.${PLAYER_BLOCK}__button-close, .${PLAYER_BLOCK}__background`).click(() => {
        $(player).removeClass(PLAYER_OPENED);
        $(video).get(0).pause();
    });

    $(buttonPlay).on('click', () => {
        $(video).get(0).play();
        $(buttonPlay).removeClass(SHOW_PLAY_BUTTON);

        $(video).get(0).on('click', () => {
            if ($(video).get(0).paused) {
                $(video).get(0).play();
            } else {
                $(video).get(0).pause();
            }
        });
    });
});