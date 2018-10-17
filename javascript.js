"use strict";
function movieTemplate() {
    var source = document.getElementById("template").innerHTML;
    var template = Handlebars.compile(source);
    var content = "";
    for (var i = 0; i < PAGE_DATA.moviePosters.length; i++) {
        content += template({
            imageUrl: PAGE_DATA.moviePosters[i].imageUrl,
            title: PAGE_DATA.moviePosters[i].title,
            price: PAGE_DATA.moviePosters[i].price,
            stock: PAGE_DATA.moviePosters[i].stock,
            description: PAGE_DATA.moviePosters[i].description
        });
    }
    document
        .querySelector("#placeTemplate")
        .insertAdjacentHTML("beforeend", content);
}
movieTemplate();

var link = document.querySelectorAll("#link-to-rent");

for (var i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function() {
        $("#v-pills-payment-tab").tab("show");
    });
}

$('input[type="checkbox"]').on("change", function() {
    $('input[type="checkbox"]')
        .not(this)
        .prop("checked", false);
});

function getRandom() {
    var i = Math.floor(Math.random() * PAGE_DATA.moviePosters.length);
    return i;
}

function randomMovie() {
    var source = document.getElementById("randomTemplate").innerHTML;
    var template = Handlebars.compile(source);
    var content = "";
    i = getRandom();
    content += template({
        imageUrl: PAGE_DATA.moviePosters[i].imageUrl,
        title: PAGE_DATA.moviePosters[i].title,
        price: PAGE_DATA.moviePosters[i].price,
        description: PAGE_DATA.moviePosters[i].description
    });

    document
        .querySelector("#randomMovie")
        .insertAdjacentHTML("beforeend", content);

    document
        .querySelector("#link-to-rent")
        .addEventListener("click", function() {
            $("#v-pills-rent-tab").tab("show");
        });
}
randomMovie();
// document.querySelector("#adding-to-cart").addEventListener("click", function() {
//     $("#v-pills-cart-tab").tab("show");
// });
