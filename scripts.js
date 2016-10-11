/*JS linti jaoks*/
/*jslint browser: true*/
/*global $, jQuery, alert*/

//Kui dokument on laetud alles siis tegeleme järgenvaga
$(function () {
    "use strict";

    /*tapaKala funktsioon vahetab kalale klikkides tema pildi ja lisab talle klassi, mis teeb ta nähtavaks*/
    function tapaKala(kalaId, kalaKorjus) {
        $(kalaId).click(function () {
            $(kalaId.concat(' > img')).attr('src', 'pildid/kalad/'.concat(kalaKorjus)); /*muudab pildi*/
            $(this).addClass('surnud'); /*lisab klassi*/
        });
    }

    /*parallaxScroll funktsioonis teostatakse kihtide liigutamine erinevatel kiirustel*/
    function parallaxScroll(scrollitavElement) {
        var scrolled = $(scrollitavElement).scrollTop();
        $('#parallax-bg1').css('top', (Number(0) - (scrolled * 0.25)) + 'px');
        $('#parallax-bg2').css('top', (Number(0) - (scrolled * 0.5)) + 'px');
        $('#parallax-bg3').css('top', (Number(0) - (scrolled * 0.75)) + 'px');
    }

    /*Element seotakse 'scroll' eventiga, kus teostatakse parallaxScroll()*/
    function siduja(element) {
        $(element).bind('scroll', function (e) {
            parallaxScroll(this);
        });
    }

    siduja(".taevas");

    tapaKala('#forell', 'surnud_forell.png');
    tapaKala('#kammeljas', 'surnud_forell.png');
    /*tapaKala('#kammeljas', 'surnud_forell.png');*/

});