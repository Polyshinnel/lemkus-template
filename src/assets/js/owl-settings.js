$(".banner-block").owlCarousel({
    items: 1,
    loop: true
});

$(".products-line__wrapper").owlCarousel({
    items: 3,
    margin: 0,
    autoWidth: true
});

$(".culture-line__wrapper").owlCarousel({
    items: 3,
    margin: 50,
    loop: true,
    responsive: {
        0: {
            items: 1,
            autoWidth: true,
            margin: 20,
        },
        1240: {
            items: 3,
            margin: 50,
            autoWidth: false
        }
    }
});

