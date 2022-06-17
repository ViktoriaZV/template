$(() => {
    const SLIDER_BLOCK = 'preview-slider'
    const SLIDE_BLOCK = 'preview-slide'

    const slides = $(`.${SLIDE_BLOCK}`)
    const arrowNext = $(`.${SLIDER_BLOCK}__arrowNext`)
    const arrowPrev = $(`.${SLIDER_BLOCK}__arrowPrev`)

    let currentSlideId = 0

    arrowNext.on('click', () => {
        let nextSlideId = currentSlideId + 1

        if (arrowNext.is(':disabled')) {
            return
        }

        if (nextSlideId >= slides.length - 1) {
            arrowNext.attr('disabled', 'disabled')
        }

        if (arrowPrev.is(':disabled')) {
            arrowPrev.removeAttr('disabled')
        }

        slides.eq(currentSlideId).hide()
        slides.eq(nextSlideId).show()

        currentSlideId = nextSlideId
    })

    arrowPrev.on('click', () => {
        let prevSlideId = currentSlideId - 1

        if (prevSlideId <= 0) {
            arrowPrev.attr('disabled', 'disabled')
        }

        if (arrowPrev.is(':disabled') && currentSlideId <= 0) {
            return
        }

        if (arrowNext.is(':disabled')) {
            arrowNext.removeAttr('disabled')
        }

        slides.eq(currentSlideId).hide()
        slides.eq(prevSlideId).show()

        currentSlideId = prevSlideId
    })
})
