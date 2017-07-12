// Activate
$("#myCarousel").carousel();

// Indicators
$(".item").click(function(){
    $("#myCarousel").carousel(1);
});

// Controls
$(".left").click(function(){
    $("#myCarousel").carousel("prev");
});