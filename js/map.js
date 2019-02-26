'use strict';
// создание экземпляра карты
ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [55.796289, 49.108795],
            zoom: 4
        }, {
            searchControlProvider: 'yandex#search'
        }),
        //Moscow 
        myPlacemark = new ymaps.Placemark([55.755814, 37.617635], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "Moscow",
            balloonContentBody: "+7 (495)258-82-89",
            balloonContentFooter: "stanki@gigant-m.ru",
            hintContent: "Moscow"
        });

    myMap.geoObjects
        .add(myPlacemark)
        // Minsk
        .add(new ymaps.Placemark([53.902496, 27.561481], {
            balloonContentHeader: "Minsk",
            balloonContentBody: "+375 (17) 338-11-36",
            balloonContentFooter: "stanki@gigant-m.ru",
            hintContent: "Minsk"
        }))
        // Saint Petersburg
        .add(new ymaps.Placemark([59.939095, 30.315868], {
            balloonContentHeader: "Saint Petersburg",
            balloonContentBody: "+7 (812) 628-13-17",
            balloonContentFooter: "stanki@gigant-m.ru",
            hintContent: "Saint Petersburg"
        }))
        // Yekaterinburg
        .add(new ymaps.Placemark([56.838011, 60.597465], {
            balloonContentHeader: "Yekaterinburg",
            balloonContentBody: "+7 (343) 302-14-37",
            balloonContentFooter: "stanki@gigant-m.ru",
            hintContent: "Yekaterinburg"
        }))
        // Tyumen
        .add(new ymaps.Placemark([57.153033, 65.534328], {
            balloonContentHeader: "Tyumen",
            balloonContentBody: "+7 (345) 221-59-68",
            balloonContentFooter: "stanki@gigant-m.ru",
            hintContent: "Tyumen"
        }))
        // Samara
        .add(new ymaps.Placemark([53.195538, 50.101783], {
            balloonContentHeader: "Samara",
            balloonContentBody: "+7 (846) 215-05-97",
            balloonContentFooter: "stanki@gigant-m.ru",
            hintContent: "Samara"
        }))
        // Krasnodar
        .add(new ymaps.Placemark([45.035470, 38.975313], {
            balloonContentHeader: "Krasnodar",
            balloonContentBody: "+7 (861) 204-09-67",
            balloonContentFooter: "stanki@gigant-m.ru",
            hintContent: "Krasnodar"
        }))
        // City of Kazan
        .add(new ymaps.Placemark([55.796289, 49.108795], {
            balloonContentHeader: "City of Kazan",
            balloonContentBody: "+7 (843) 207-16-18",
            balloonContentFooter: "stanki@gigant-m.ru",
            hintContent: "City of Kazan"
        }));
}