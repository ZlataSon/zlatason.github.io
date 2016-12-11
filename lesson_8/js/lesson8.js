function init() {
    // создаем поле с блоками
    create();
    // добавляем поддержку клавиатуры
    window.addEventListener('keydown', keyboardEvent, false);
    // добавляем события для кнопок
    document.getElementById('new').onclick = newGame;
    // мешаем блоки для начала игры
    newGame();
}

// функция для получения класса вида xNyN для позиций от 1 до 15
function getXY(i) { return 'x'+( ((i-1) % 4)+1 )+'y'+Math.ceil( (i)/4); }

// создаем поле внутри блока с ID #board
function create() {
    for(var i=1; i<=15; i++) {
        $('#board').append('<div class="block block-'+i+' '+getXY(i)+'">'+i+'</div>');
    }
}

// обрабатываем нажатие по клавиатуре
function keyboardEvent(e) {
    switch(e.keyCode) {
        case 38: key('up');    break;
        case 40: key('down');  break;
        case 37: key('left');  break;
        case 39: key('right'); break;
    }
    checkWin();
    e.stopPropagation();
}

// обрабатываем сдвиг одного блока по направлениям up/down/left/right
function key( type ) {
    for(var a = 1; a <= 4; a++)
        for(var b = 1; b <= 3; b++) {
            switch( type ) {
                case 'up':
                    var from = 'x'+a+'y'+(b+1);
                    var to   = 'x'+a+'y'+b;
                    break;
                case 'down':
                    var from = 'x'+a+'y'+(4-b);
                    var to   = 'x'+a+'y'+(5-b);
                    break;
                case 'left':
                    var from = 'x'+(b+1)+'y'+a;
                    var to   = 'x'+b+'y'+a;
                    break;
                case 'right':
                    var from = 'x'+(4-b)+'y'+a;
                    var to   = 'x'+(5-b)+'y'+a;
                    break;
            }
            if( !$('.'+to).length ) {$('.'+from).removeClass(from).addClass(to);return}
        }
}

// получение случайного числа от min до max
function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

// мешаловка блоков
function newGame() {
    for(var a=1; a <= 1000; a++) {
        switch( getRandomInt(1 , 4) ) {
            case 1: key('up');    break;
            case 2: key('down');  break;
            case 3: key('left');  break;
            case 4: key('right'); break;
        }
    }
}

// проверка, а вдруг вы уже победили
function checkWin() {
    var good = 0;
    for(var i=1; i <= 15; i++) {
        if( $('.block-'+i).hasClass( getXY(i) ) ) good++;
    }
    if(good == 15) alert('Поздравляем! Вы победили!');
}

init();