
!(function($) {

    // Preloader
    $(window).on('load', function() {
      if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function() {
        //   $(this).remove();
        //   $(this).css('width', '0');
        });
      }
    });

    function indexInitRequest() {
        let receivedResponse = {};
        receivedResponse['Москва'] = 2.623,
        receivedResponse['Сочи'] = 2.614,
        receivedResponse['Казань'] = 2.492,
        receivedResponse['Великий Новгород'] = 2.492,
        receivedResponse['Волгоград'] = 2.360,
        receivedResponse['Питер'] = 2.312,
        receivedResponse['Екатеринбург'] = 2.283,
        receivedResponse['Нижний Новгород'] = 2.231,
        receivedResponse['Калининград'] = 1.195,
        receivedResponse['Тюмень'] = 1.142,
        receivedResponse['Владимир'] = 1.128,
        receivedResponse['Якутск'] = 1.111,
        receivedResponse['Тверь'] = 1.100,
        receivedResponse['Норильск'] = 1.83,
        receivedResponse['Новосибирск'] = 1.47,
        receivedResponse['Харьков'] = 1.021,
        receivedResponse['Киев'] = 1.020,
        receivedResponse['Мурманск'] = 1.001,
        receivedResponse['Мариополь'] = 0.999,
        receivedResponse['Ростов-на-Дону'] = 0.992,
        receivedResponse['Уфа'] = 0.981,
        receivedResponse['Житомир'] = 0.980,
        receivedResponse['Луганск'] = 0.942,
        receivedResponse['Симферополь'] = 0.892,
        receivedResponse['Иркутск'] = 0.823,
        receivedResponse['Красноярск'] = 0.821

        let receiverRiskResponse = {
            region: 'Москва',
            date: '18.12',
            indices: {'11.12': 2.921.toFixed(3), '12.12': 1.312.toFixed(3), 
            '13.12': 0.420.toFixed(3), '14.12': 2.321.toFixed(3), '15.12': 2.400.toFixed(3), 
            '16.12': 1.9.toFixed(3), '17.12': 0.102.toFixed(3), '18.12': 2.623.toFixed(3)},
            risks: {
                0: {
                    title: 'Читинец умер в очереди на компьютерную томографию',
                    region: 'Забайкальский край',
                    description: '1.3.5 Врачебные ошибки, отказ больному в приеме с летальным исходом или тяжелыми последствиями',
                    url: 'https://www.chita.ru/news/152869/'
                },
                1: {
                    title: 'Читинец умер в очереди на компьютерную томографию',
                    region: 'Забайкальский край',
                    description: '1.3.5 Врачебные ошибки, отказ больному в приеме с летальным исходом или тяжелыми последствиями',
                    url: 'https://www.chita.ru/news/152869/'
                },
                2: {
                    title: 'Читинец умер в очереди на компьютерную томографию',
                    region: 'Забайкальский край',
                    description: '1.3.5 Врачебные ошибки, отказ больному в приеме с летальным исходом или тяжелыми последствиями',
                    url: 'https://www.chita.ru/news/152869/'
                },
                3: {
                    title: 'Читинец умер в очереди на компьютерную томографию',
                    region: 'Забайкальский край',
                    description: '1.3.5 Врачебные ошибки, отказ больному в приеме с летальным исходом или тяжелыми последствиями',
                    url: 'https://www.chita.ru/news/152869/'
                },
                4: {
                    title: 'Читинец умер в очереди на компьютерную томографию',
                    region: 'Забайкальский край',
                    description: '1.3.5 Врачебные ошибки, отказ больному в приеме с летальным исходом или тяжелыми последствиями',
                    url: 'https://www.chita.ru/news/152869/'
                },
                5: {
                    title: 'Читинец умер в очереди на компьютерную томографию',
                    region: 'Забайкальский край',
                    description: '1.3.5 Врачебные ошибки, отказ больному в приеме с летальным исходом или тяжелыми последствиями',
                    url: 'https://www.chita.ru/news/152869/'
                },
                6: {
                    title: 'Читинец умер в очереди на компьютерную томографию',
                    region: 'Забайкальский край',
                    description: '1.3.5 Врачебные ошибки, отказ больному в приеме с летальным исходом или тяжелыми последствиями',
                    url: 'https://www.chita.ru/news/152869/'
                },
                7: {
                    title: 'Читинец умер в очереди на компьютерную томографию',
                    region: 'Забайкальский край',
                    description: '1.3.5 Врачебные ошибки, отказ больному в приеме с летальным исходом или тяжелыми последствиями',
                    url: 'https://www.chita.ru/news/152869/'
                },
                8: {
                    title: 'Читинец умер в очереди на компьютерную томографию',
                    region: 'Забайкальский край',
                    description: '1.3.5 Врачебные ошибки, отказ больному в приеме с летальным исходом или тяжелыми последствиями',
                    url: 'https://www.chita.ru/news/152869/'
                },
                9: {
                    title: 'Читинец умер в очереди на компьютерную томографию',
                    region: 'Забайкальский край',
                    description: '1.3.5 Врачебные ошибки, отказ больному в приеме с летальным исходом или тяжелыми последствиями',
                    url: 'https://www.chita.ru/news/152869/'
                },
                10: {
                    title: 'Читинец умер в очереди на компьютерную томографию',
                    region: 'Забайкальский край',
                    description: '1.3.5 Врачебные ошибки, отказ больному в приеме с летальным исходом или тяжелыми последствиями',
                    url: 'https://www.chita.ru/news/152869/'
                },
                11: {
                    title: 'Читинец умер в очереди на компьютерную томографию',
                    region: 'Забайкальский край',
                    description: '1.3.5 Врачебные ошибки, отказ больному в приеме с летальным исходом или тяжелыми последствиями',
                    url: 'https://www.chita.ru/news/152869/'
                },
            }
        };

        myResponse = Object.entries(receivedResponse)
            .sort(([,a], [,b]) => b - a)
            .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    }

    function detectColor(value) {
        value = parseFloat(value);
        if (0 <= value && value < 1) {
            return 'green-cell';
        } else if (1 <= value && value < 2) {
            return 'yellow-cell';
        } else if (2 <= value && value < 3) {
            return 'red-cell';
        } else {
            return 'red-cell';
        }
    }

    // Top table section

    function topTableInit() {
        let tik = shownRowsCount;
        $('#top-table').empty();
        for (key in myResponse) {
            if (tik > 0) {
                $('#top-table').append("<tr class='open-overlay top'><td>" + key + 
                "</td><td class='indx " + detectColor(myResponse[key]) + "'>" + 
                myResponse[key].toFixed(3) + "</td></tr>");
                tik--;
            } else {
                break;
            }
        }
    }

    // Buttons Показать еще and Все

    $(document).on('click', '#btn-more', function() {
        shownRowsCount += 10;
        let tik = shownRowsCount;
        $('#top-table').empty();
        for (key in myResponse) {
            if (tik > 0) {
                $('#top-table').append("<tr class='open-overlay top'><td>" + key + 
                "</td><td class='indx " + detectColor(myResponse[key]) + "'>" + 
                myResponse[key].toFixed(3) + "</td></tr>");
                tik--;
            } else {
                break;
            }
        }
    });
    $(document).on('click', '#btn-all', function() {
        $('#top-table').empty();
        for (key in myResponse) {
            $('#top-table').append("<tr class='open-overlay top'><td>" + key + 
                "</td><td class='indx " + detectColor(myResponse[key]) + "'>" + 
                myResponse[key].toFixed(3) + "</td></tr>");
        }
    });

    // Search section

    function changeItems(domObject, data) {
        $(domObject).empty();
        for (let key in data) {
            $(domObject).append(
                "<div class='open-overlay list-group-item list-group-item-action " + 
                detectColor(data[key]) + "'>" + key + " " + data[key].toFixed(3) + "</div>"
            )
        }
    }

    function searchListInit() {
        let searchValue = $('#search-text').val();
        let searchResultObject = {};
        if (searchValue === '') {
            $('.search-result').delay(100).fadeOut();
            searchResultObject = {};
        } else {
            $('.search-result').delay(100).fadeIn();
            const myResponseKeys = Object.keys(myResponse);
            for (let i = 0; i < myResponseKeys.length; i++) {
                if (myResponseKeys[i].toLowerCase().indexOf(searchValue) != -1) {
                    searchResultObject[myResponseKeys[i]] = myResponse[myResponseKeys[i]];
                }
            }
            changeItems('.search-result', searchResultObject);
        }
    }

    $(document).on('input', '#search-text', function() {
        searchListInit();
    });

    $(document).on('submit', '#search-form', function(e) {
        e.preventDefault();
    });

    // Overlay section
    
    function addChart() {
        ctx = $('#myChart');
        let myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['11.12', '12.12', '13.12', '14.12', '15.12', '16.12',
                         '17.12', '18.12'],
                datasets: [{
                    label: 'Индекс',
                    data: [2.921, 1.312, 0.420, 2.321, 2.400, 1.9, 0.102, 2.623],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0)'
                    ],
                    borderColor: 'rgba(87, 119, 186, 1)',
                    borderWidth: 3,
                    pointBackgroundColor: [
                        'rgba(73, 98, 151, 1)',
                    ],
                    pointBorderColor: 'rgba(73, 98, 151, 1)',
                    
                }]
            },
            options: {
                // responsive: false,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        // Resize chart
        // ctx.canvas.parentNode.style.height = '128px';
    }

    function addRisks() {
        // For crop string we need to use function outStr.substring(0, n) + '...'
        // For title we need max 50 symbols
        // For region we need max 25 symbols
        // For description wee need max 90 symbols
        $('.overlay-content').append(
            "<div id='risks-container' class='wrapper' data-aos='fade-right'>" +
                "<div class='item red-cell'>" + 
                "   <p class='title'><a href='#'>Читинец умер в очереди на компьютерную томографию</a></p>" +
                "   <p class='region'>Забайкальский край</p>" +
                "   <p class='description'>1.3.5 Врачебные ошибки, отказ больному в приеме с летальным исходом или тяжелыми последствиями</p>" +
                "</div>" +
                "<div class='item yellow-cell'>" + 
                "   <p class='title'><a href='#'>Читинец умер в очереди на компьютерную томографию</a></p>" +
                "   <p class='region'>Забайкальский край</p>" +
                "   <p class='description'>1.3.5 Врачебные ошибки, отказ больному в приеме с летальным исходом или тяжелыми последствиями</p>" +
                "</div>" +
                "<div class='item green-cell'>" + 
                "   <p class='title'><a href='#'>Читинец умер в очереди на компьютерную томографию</a></p>" +
                "   <p class='region'>Забайкальский край</p>" +
                "   <p class='description'>1.3.5 Врачебные ошибки, отказ больному в приеме с летальным исходом или тяжелыми последствиями</p>" +
                "</div>" +
                "<div class='item yellow-cell'>" + 
                "   <p class='title'><a href='#'>Читинец умер в очереди на компьютерную томографию</a></p>" +
                "   <p class='region'>Забайкальский край</p>" +
                "   <p class='description'>1.3.5 Врачебные ошибки, отказ больному в приеме с летальным исходом или тяжелыми последствиями</p>" +
                "</div>" +
                "<div class='item green-cell'>" + 
                "   <p class='title'><a href='#'>Читинец умер в очереди на компьютерную томографию</a></p>" +
                "   <p class='region'>Забайкальский край</p>" +
                "   <p class='description'>1.3.5 Врачебные ошибки, отказ больному в приеме с летальным исходом или тяжелыми последствиями</p>" +
                "</div>" +
                "<div class='item red-cell'>" + 
                "   <p class='title'><a href='#'>Читинец умер в очереди на компьютерную томографию</a></p>" +
                "   <p class='region'>Забайкальский край</p>" +
                "   <p class='description'>1.3.5 Врачебные ошибки, отказ больному в приеме с летальным исходом или тяжелыми последствиями</p>" +
                "</div>" +
            "</div>");
        addMoreButton();

    }

    function addMoreButton() {
        $('.overlay-content').append(
            "<div class='row'><div id='risks-btn-more' class='col-5 risks-more'>Показать еще</div></div>"
        );
    }

    function fillOverlay(city) {
        $('.overlay-content').empty();
        $('.overlay-content').append("<h1>" + city + "</h1>");
        $('.overlay-content').append("<div class='chart-body'><canvas id='myChart' data-aos='fade-right'></canvas></div>");
        addChart();
        addRisks();
    }

    function overlayHandler(city) {
        $('#preloader').fadeIn('slow');
        // Place for request to server
        $('#preloader').fadeOut('slow', function() {
            $('.overlay').css('width', '100%');
            $('body').css('overflow', 'hidden');
            fillOverlay(city);
        });
    }

    $(document).on('click', '.open-overlay', function() {
        let city = $(this).first().text().replace(new RegExp("[0-9]", "g"), '').replace('.', '');
        overlayHandler(city);
    });

    $(document).on('click', '.closebtn', function() {
        $('.overlay').css('width', '0');
        $('body').css('overflow', 'visible');
    });

    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
        } else {
        $('#header').removeClass('header-scrolled');
        }
    });
    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
    }

    function aos_init() {
        AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true
        });
    }

    $(window).on('load', function() {
        aos_init();
        indexInitRequest();
        topTableInit();
        searchListInit();
    });

})(jQuery);

// State
let myResponse = {};
let riskResponse = {};
let shownRowsCount = 10;
