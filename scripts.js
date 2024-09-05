// Изменение шрифта
document.querySelectorAll('.show_font a').forEach(function (el) {
    el.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelectorAll('.show_font a').forEach(function (link) {
            link.classList.remove('active');
        });
        el.classList.add('active');
        
        document.getElementById('panel').classList.remove('font_arial', 'font_times');
        document.getElementById('panel').classList.add(el.classList[0]);
    });
});

// Изменение размера шрифта
document.querySelectorAll('.show_fontsize a').forEach(function (el) {
    el.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelectorAll('.show_fontsize a').forEach(function (link) {
            link.classList.remove('active');
        });
        el.classList.add('active');
        
        document.getElementById('panel').classList.remove('fontsize_1', 'fontsize_2', 'fontsize_3');
        document.getElementById('panel').classList.add(el.classList[0]);
    });
});

// Изменение интервала
document.querySelectorAll('.show_kerning a').forEach(function (el) {
    el.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelectorAll('.show_kerning a').forEach(function (link) {
            link.classList.remove('active');
        });
        el.classList.add('active');
        
        document.getElementById('panel').classList.remove('kerning_1', 'kerning_2', 'kerning_3');
        document.getElementById('panel').classList.add(el.classList[0]);
    });
});

// Изменение цветовой схемы
document.querySelectorAll('.show_colors a').forEach(function (el) {
    el.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelectorAll('.show_colors a').forEach(function (link) {
            link.classList.remove('active');
        });
        el.classList.add('active');
        
        document.getElementById('panel').classList.remove('fontcolors_1', 'fontcolors_2', 'fontcolors_3', 'fontcolors_4', 'fontcolors_5');
        document.getElementById('panel').classList.add(el.classList[0]);
    });
});

// Включение/отключение изображений
document.querySelector('.noimages').addEventListener('change', function () {
    if (this.checked) {
        document.getElementById('panel').querySelectorAll('img').forEach(function (img) {
            img.style.display = '';
        });
    } else {
        document.getElementById('panel').querySelectorAll('img').forEach(function (img) {
            img.style.display = 'none';
        });
    }
});
