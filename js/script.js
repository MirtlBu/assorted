function renderGalleryItems() {
    return $('<div/>', {'class': 'gallery__item'}).
            append($('<img/>', {'src': 'img/goods-1.jpg'})).
            append($('<span/>').text('Сумка женская фиолетовая')).
            append($('<div/>').
                append($('<span/>', {'class': 'rating'}).
                    append($('<img/>', {'src': 'img/icon-star-fill.png'})).
                    append($('<img/>', {'src': 'img/icon-star-fill.png'})).
                    append($('<img/>', {'src': 'img/icon-star-fill.png'})).
                    append($('<img/>', {'src': 'img/icon-star-empty.png'})).
                    append($('<img/>', {'src': 'img/icon-star-empty.png'}))).
                append($('<span/>', {'class': 'price price--new'}).text('9.00$')).
                append($('<span/>', {'class': 'price price--old'}).text('10.00$'))).
            append($('<div/>', {'class': 'sale'}).text('Sale'))
}

$(function() {
    for(var i = 0; i < 16; i++) {
        $('.gallery-content').append(renderGalleryItems());
    }

    $('.gallery').find('.nav').on('click', 'li', function() {
        $('.gallery').find('.nav').find('li').removeClass('active');
        $(this).addClass('active');
    })
})