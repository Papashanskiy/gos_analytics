
!(function($) {

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
                $('#top-table').append("<tr class='top'><td>" + key + 
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
                $('#top-table').append("<tr class='top'><td>" + key + 
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
            $('#top-table').append("<tr class='top'><td>" + key + 
                "</td><td class='indx " + detectColor(myResponse[key]) + "'>" + 
                myResponse[key].toFixed(3) + "</td></tr>");
        }
    });

    // Search section

    function changeItems(domObject, data) {
        $(domObject).empty();
        for (let key in data) {
            $(domObject).append(
                "<div class='list-group-item list-group-item-action " + 
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
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
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
        $('.overlay-content').append(
            "<div class=row>" +
                "<div class='col-sm'>col</div>" +
                "<div class='col-sm'>col</div>" +
                "<div class='col-sm'>col</div>" +
                // "<div class='w-100'></div>" +
                "<div class='col-sm'>col</div>" +
                "<div class='col-sm'>col</div>" +
                "<div class='col-sm'>col</div>" +
            "</div>")
    }

    function fillOverlay(city) {
        $('.overlay-content').empty();
        $('.overlay-content').append("<h1>" + city + "</h1>");
        $('.overlay-content').append("<div class='chart-body'><canvas id='myChart'></canvas></div>");
        addChart();
        addRisks();
    }

    function overlayHandler(city) {
        $('.overlay').css('width', '100%');
        $('body').css('overflow', 'hidden');
        fillOverlay(city);
    }

    $(document).on('click', '.top', function() {
        let city = $(this).first().text().replace(new RegExp("[0-9]", "g"), '').replace('.', '');
        overlayHandler(city);
    });

    $(document).on('click', '.search-result div', function() {
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
let shownRowsCount = 10;
