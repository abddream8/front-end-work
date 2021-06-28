document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
$(".up-form1").slideUp()
$(".up-form2").slideUp()
$(".up-form3").slideUp()
$(".one").click(function(){
    $(".up-form1").fadeIn()
    $("body").addClass("toggle-scroll");
    $(".hyper-header").text("شهر واحد");
});
$(".two").click(function(){
    $(".up-form1").fadeIn()
    $("body").addClass("toggle-scroll");
    $(".hyper-header").text("شهرين");
})
$(".three").click(function(){
    $(".up-form1").fadeIn()
    $("body").addClass("toggle-scroll");
    $(".hyper-header").text("ثلاثة اشهر");
})
$(".new-close").click(function(){
    $(".up-form1").fadeOut()
    $(".up-form2").fadeOut()
    $(".up-form3").fadeOut()
    $("body").removeClass("toggle-scroll");
    $(".hyper-header").text("");
})
$(".1").click(function(){
    $(".many-before").animate({left:"0"},)
})
$(".2").click(function(){
    $(".many-before").animate({left:"-100%"})
})
$(".3").click(function(){
    $(".many-before").animate({left:"-200%"})
})
$(".4").click(function(){
    $(".many-before").animate({left:"-300%"})
})
$(".5").click(function(){
    $(".many-before").animate({left:"-400%"})
})


if (navigator.userAgent.includes('Firefox')) {
    $(".nav-bar").css("width","75%")
  };


if (navigator.userAgent.includes('edge')) {
    alert("fuck we are in edge")
  };