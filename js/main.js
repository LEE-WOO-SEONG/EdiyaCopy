var menuOpen = $('.btn-openMenu');
var menuClose = $('.btn-closeMenu');
var drinkOpen = $('.btn-infoOpen');
var drinkClose = $('.btn-infoClose');


menuOpen.click(function(e) {
    e.preventDefault(); /* anchor 이벤트 발생억제 */
    $(this).parent().removeClass('nav-none');
    $(this).parent().addClass('nav-act');
}
);

menuClose.click(function(e) {
    e.preventDefault(); /* anchor 이벤트 발생억제 */
    $(this).parent().parent().removeClass('nav-act'); /* 해당 class name을 모두 지우고 */
    $(this).parent().parent().addClass('nav-none');
}
);

drinkOpen.click(function(e) {
    e.preventDefault(); /* anchor 이벤트 발생억제 */
    $(this).parent().addClass('drink-act');
}
);

drinkClose.click(function(e) {
    e.preventDefault(); /* anchor 이벤트 발생억제 */
    $(this).parent().parent().removeClass('drink-act'); /* 해당 class name을 모두 지우고 */ 
}
);
