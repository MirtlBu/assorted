var categories = [
    {name: 'Электроника0', url: 'img/icon-category-0.png', color: 'gray'},
    {name: 'Мебель1', url: 'img/icon-category-1.png', color: 'brown'},
    {name: 'Новый год2', url: 'img/icon-category-2.png', color: 'red'},
    {name: 'Всё для дома3', url: 'img/icon-category-3.png', color: 'khaki'},
    {name: 'Игрушки4', url: 'img/icon-category-4.png', color: 'salad'},
    {name: 'Одежда5', url: 'img/icon-category-5.png', color: 'orange'},
    {name: 'Автомобили6', url: 'img/icon-category-6.png', color: 'blue'},
    {name: 'Книги7', url: 'img/icon-category-7.png', color: 'khaki'},
    {name: 'Продукты8', url: 'img/icon-category-8.png', color: 'orange'},
    {name: 'Лекарства9', url: 'img/icon-category-3.png', color: 'khaki'},
    {name: 'Всё для сада10', url: 'img/icon-category-9.png', color: 'green'}
];

function renderGalleryItem() {
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

function renderGalleryItems() {
    for(var i = 0; i < 16; i++) {
        $('.gallery-content').append(renderGalleryItem());
    }
}

function renderSliderItem(category) {
    return $('<div/>', {'class': 'slider__item'}).
            append($('<img/>', {'src': category.url})).
            append($('<span/>', {'class': category.color}).text(category.name))
}

function renderSliderItems() {
    $.each([categories.length-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9], function(i, counter) {
        $('.categories').find('.frame').append(renderSliderItem(categories[counter]));
    });
}

var $frame = $('.categories').find('.frame');

var pos = 0, transition = false;

function cyclePos(d) {
    return (pos + categories.length + d) % categories.length;
}

function slide(direction) {
    if (transition) return;
    transition = true;

    $frame.addClass('frame--shifted-' + direction);
    setTimeout(function() {
        $frame.removeClass('frame--shifted-' + direction);
        switch(direction) {
            case 'prev':
                pos = cyclePos(-1);
                $frame.children('.slider__item:last').remove();
                $frame.prepend(renderSliderItem(categories[cyclePos(1)]));
                break;
            case 'next':
                pos = cyclePos(1);
                $frame.children('.slider__item:first').remove();
                $frame.append(renderSliderItem(categories[cyclePos(9)]));
                break;
        }
        transition = false;
    }, 800);
}

$(function() {

    renderGalleryItems();

    renderSliderItems();

    $('.gallery').find('.nav').on('click', 'li', function() {
        $('.gallery').find('.nav').find('li').removeClass('active');
        $(this).addClass('active');
    });

    $('.categories').find('.arrows').on('click', function() {
        var direction = $(this).attr('class');
        if($(this).hasClass('arrows--prev')) {
            slide('prev');
        }
        else if($(this).hasClass('arrows--next')) {
            slide('next');
        }
    });

})