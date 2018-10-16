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

// document.querySelector("#adding-to-cart").addEventListener("click", function() {
//     $("#v-pills-cart-tab").tab("show");
// });
