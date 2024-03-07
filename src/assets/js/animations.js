$('.header__shipping-cart').click(function () {
	var effect = 'slide';
	var options = { direction: 'right' };
	var duration = 300;
	$('.cart-wrapper').fadeIn(300)
	$('.header__cart').toggle(effect, options, duration);
});

$(".close-cart").click(function () {
	var effect = 'slide';
	var options = { direction: 'right' };
	var duration = 300;
	$('.header__cart').toggle(effect, options, duration);
    $('.cart-wrapper').fadeOut(300)
});


$('.base-btn').hover(
    function() {
        let selector = $(this).find('p');
        let text = selector.html();
        selector.attr('data-text', text)
        let multipleText = '';
        for(let i=0;i<20;i++) {
            multipleText += text+' ';
        }
        selector.html(multipleText);
        selector.addClass('track');
    },
    function() {
        let selector = $(this).find('p');
        let text = selector.attr('data-text')
        selector.html(text)
        selector.removeClass('track');
    }
)


$('.header-menu').click(function(){
    $('.header-mobile-menu').slideToggle();
})

$('.products-line__wrapper').mousemove(function(e){
    let coordX = e.pageX+10;
    let coordY = e.pageY+10;
    let hint = $(this).parent().find('.hint-item')
    hint.css({'left': coordX, 'top': coordY})
    if(hint.css('display') == 'none') {
        console.log('hidden!')
        hint.fadeIn(200)
    }
}).mouseout(function(){
    $('.hint-item').fadeOut();
});

$('.product_spoiler__title').click(function() {
    let spoilerImg = $(this).find('img')
    spoilerImg.toggleClass('rotateImg')
    let spoilerText = $(this).parent().find('.product_spoiler__details')
    spoilerText.slideToggle()
})