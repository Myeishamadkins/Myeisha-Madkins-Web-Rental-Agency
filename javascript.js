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
            $("#v-pills-payment-tab").tab("show");
        });
}
randomMovie();

function showThanks() {
    var payForm = document.forms["payment"];
    var firstInput = payForm["firstName"];
    var firstName = firstInput.value;
    var formContainer = document.querySelector(".form-container");
    formContainer.innerHTML = `<h1 class="put-margin text-change text-center ">Thanks, ${firstName} for your purchase!</h1> <button type="submit" class="btn btn-primary btn-block" id="link-to-home" onclick='refreshButton()'> <i class="fas fa-thumbs-up"></i>
    </button>`;

    document
        .querySelector("#link-to-home")
        .addEventListener("click", function() {
            $("#v-pills-home-tab").tab("show");
        });
}
function refreshButton() {
    location.reload();
}
