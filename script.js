$(".menu > ul > li").click(function (e) {
    // remove active from already active
    $(this).siblings().removeClass("active");
    // adding active to clicked
    $(this).toggleClass("active");
    // if has sub menu open it
    $(this).find("ul").slideToggle();
    // clode other sub menu if any open
    $(this).siblings().find("ul").slideUp();
    // remove active class of menu
    $(this).siblings().find("li").removeClass("active")
});
$(".menu-btn ").click(function () {
    $(".sidebar").toggleClass("active");
});