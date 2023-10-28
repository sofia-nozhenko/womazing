// PRELOADER
$(window).on("load", function () {
    $("#preloader-active").delay(500).fadeOut("slow");
    $("body").delay(500).css({
        overflow: "visible",
    });
});

const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: "true",
    slidesPerView: "1",

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    autoplay: {
        delay: 2000,
    },

    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
});

// SCROLL
$(window).on("scroll", function () {
    let scroll = $(window).scrollTop();
    if (scroll < 92) {
        $(".header-sticky").removeClass("sticky-bar");
        $("#back-top").fadeOut("slow");
    } else {
        $(".header-sticky").addClass("sticky-bar");
        $("#back-top").fadeIn("slow");
    }
});

// MODAL
const btnOpen = document.getElementById("btn-open");
const modalWindow = document.getElementById("window-wrapper");
const btnClose = document.getElementById("btn-close");

$("#btn-open").on("click", function () {
    $("#window-wrapper").toggleClass("active");
});

$("#btn-close").on("click", function () {
    $("#window-wrapper").toggleClass("active");
});

$(document).on("click", function (event) {
    if (event.target.id === "window-wrapper") {
        $("#window-wrapper").removeClass("active");
    }
});

// Window-location

const itemBtn = document.getElementById("item-btn");
$("#item-btn").on("click", function () {
    window.location = "shop.html";
});

const itemBtnMain = document.getElementById("item-btn-2");
$("#item-btn-2").on("click", function () {
    window.location = "shop.html";
});

const redirectItem = document.querySelectorAll(".item");
$(".item").on("click", function () {
    window.location = "item.html";
});

const redirectBag = document.getElementById("#shopping-bag");
$("#shopping-bag").on("click", function () {
    window.location = "card.html";
});

const redirectPlace = document.getElementById("#place-btn");
$("#place-btn").on("click", function () {
    window.location = "success.html";
});

const redirectHome = document.getElementById("#turn-home");
$("#turn-home").on("click", function () {
    window.location = "index.html";
});

const redirectCheck = document.getElementById("#place-order");
$("#place-order").on("click", function () {
    window.location = "checkout.html";
});

// Phone menu
const btnPhoneOpen = document.getElementById("#menu-open-btn");

$("#menu-open-btn").on("click", function () {
    $(".menu-phone-wrapp").toggleClass("active");
});

$("#menu-close-btn").on("click", function () {
    $(".menu-phone-wrapp").toggleClass("active");
});

// Slick Slider
$(document).ready(function () {
    $(".slider").slick({
        arrows: false,
        autoplay: true,
    });
});

//
$(function () {
    $("#btn-arrow").on("click", function (e) {
        $("html,body")
            .stop()
            .animate(
                { scrollTop: $("#section-collection").offset().top },
                3000
            );
        e.preventDefault();
    });
});

// Magic scroll

let controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 80, // move trigger to center of element
})
    .setClassToggle(".magic_scroll", "visible") // add class to reveal
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger2",
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 80, // move trigger to center of element
})
    .setClassToggle(".magic_scroll_2", "visible") // add class toggle
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
