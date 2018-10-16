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

document.querySelector("#link-to-rent").addEventListener("click", function() {
    $("#v-pills-payment-tab").tab("show");
});

// document.querySelector("#adding-to-cart").addEventListener("click", function() {
//     $("#v-pills-cart-tab").tab("show");
// });

// function rentMovie() {
//     var rent = document.querySelectorAll(".rentables");
//     rent.forEach(function(button, index) {
//         button.addEventListener("click", function() {
//             if (rent[index].querySelector(".movieStock").innerText > 0) {
//                 removeStock(index);
//                 addToTotal(rent[index].querySelector(".moviePrice").innerText);
//             }
//         });
//     });
// }
// rentMovie();

// function removeStock(rentIndex) {
//     var rent = document.querySelectorAll(".rentables");
//     rent[rentIndex].querySelector(".movieStock").innerHTML =
//         rent[rentIndex].querySelector(".movieStock").innerHTML - 1;
// }

// function addToTotal(number) {
//     document.querySelector(".").innerText =
//         Number(document.querySelector(".").innerText) + Number(num);
// }
