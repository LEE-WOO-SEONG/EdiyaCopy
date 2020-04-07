
// 변수
var btnInfoOpen = $('.btn-infoOpen');
var btnInfoClose = $('.btn-infoClose');



//funtion
btnInfoOpen.click(function(event){
    event.preventDefault();
    $(this).parent().addClass('drink-infoOn');
})
btnInfoClose.click(function(event){
    event.preventDefault();
    $(this).parent().parent().removeClass('drink-infoOn');
})