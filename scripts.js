/*JS linti jaoks*/
/*jslint browser: true, devel: true*/
/*global $, jQuery, alert*/

//Kui dokument on laetud alles siis tegeleme järgenvaga
$(function () {
    "use strict";

    var prugiKogus = 0;

    /*tapaKala funktsioon vahetab kalale klikkides tema pildi ja lisab talle klassi, mis teeb ta nähtavaks*/
    function tapaKala(kalaId, kalaKorjus) {
        $(kalaId).click(function () {
            $(kalaId.concat(' > img')).attr('src', 'pildid/kalad/'.concat(kalaKorjus)); /*muudab pildi*/
            $(this).addClass('surnud'); /*lisab klassi*/
        });
    }

    function prugiLoendur() {
        prugiKogus = prugiKogus + 1;
        //console.log("Prügi kogus: " + prugiKogus);
    }

    function mang(piirang) {
        if (prugiKogus >= piirang) {
            alert("Loodus reostub");
        }
    }

    function prugi(laius, pikkus) {
        $(".meri").click(function (e) {
            if (e.target.className === "meri") {
                var top = e.pageY - $(".taevas").height() - pikkus / 2,
                    left = e.pageX - laius / 2;

                $(this).append("<img class='prugi' src='pildid/prygi/prygikott.png' alt='prügi' style='left:" + left + "px; top: " + top + "px; width: " + laius + "px; height: " + pikkus + "px' />");
                prugiLoendur();
                mang(5);
            }
        });
    }

    function toss(laius, pikkus) {
        $(".taevas #wrapper").click(function (e) {
            if (e.target.id === "wrapper") {
                var top = e.pageY - pikkus / 2,
                    left = e.pageX - laius / 2;

                $(this).append("<img class='toss' src='pildid/toss/toss.png' alt='toss' style='left:" + left + "px; top: " + top + "px; width: " + laius + "px; height: " + pikkus + "px' />");

            }
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
    tapaKala('#kammeljas', 'surnud_kammeljas.png');
    tapaKala('#saga', 'surnud_saga.png');
    tapaKala('#lohe2', 'surnud_lohe2.png');
    tapaKala('#lohe', 'surnud_lohe.png');
    tapaKala('#tinkatinka', 'surnud_tinkatinka.png');
    tapaKala('#angerjas', 'surnud_angerjas.png');
    /*tapaKala('#kammeljas', 'surnud_forell.png');*/

    prugi(270, 270);
    toss(450, 300);

});