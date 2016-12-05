/*JS linti jaoks*/
/*jslint browser: true, devel: true*/
/*global $, jQuery, alert*/

//Kui dokument on laetud alles siis tegeleme järgenvaga
$(function () {
    "use strict";

    var prugiKogus = 0,
        prugiArrayCounter = 0,
        tossArrayCounter = 0,
        scroll = 0,
        prygiArray = ["prygikott.png", "prygikott2.png", "pepsi.png", "can1.png", "can2.png", "kilekott.png", "kilekott2.png"],
        tossuArray = ["musttoss.png", "musttoss2.png", "toss.png", "toss1.png", "toss2.png", "toss3.png"];

    /*tapaKala funktsioon vahetab kalale klikkides tema pildi ja lisab talle klassi, mis teeb ta nähtavaks*/
    function tapaKala(kalaId, kalaKorjus) {
        $(kalaId).click(function () {
            $(kalaId.concat(' > img')).attr('src', 'pildid/kalad/'.concat(kalaKorjus)); /*muudab pildi*/
            $(this).addClass('surnud'); /*lisab klassi*/

            setTimeout(function () {
                $(kalaId + " img").addClass('img-surnud');
            }, 100);
        });
    }

    function tapaLind(lindId, lindKorjus) {
        $(lindId).click(function () {
            $(this).attr('src', 'pildid/linnud/'.concat(lindKorjus)); /*muudab pildi*/
            $(this).addClass('surnud'); /*lisab klassi*/
            
            setTimeout(function () {
                $(lindId).addClass('img-surnud');
            }, 100);
        });
    }

    function prugiArrayLoendur() {
        prugiArrayCounter = prugiArrayCounter + 1;
        if (prugiArrayCounter === prygiArray.length) {
            prugiArrayCounter = 0;
        }
    }

    function scrollerDown() {
        scroll = scroll + 300;
        if (scroll < 0) {
            scroll = 0;
        }
        $(".taevas").scrollTop(scroll);
    }

    function scrollerUp() {
        scroll = scroll - 300;
        if (scroll < 0) {
            scroll = 0;
        }
        $(".taevas").scrollTop(scroll);
    }

    function scrollImportant() {
        $(window).bind('mousewheel DOMMouseScroll', function (event) {
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                scrollerUp();
            } else {
                scrollerDown();
            }
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

    $('body').click(function (e) {

        var target = $(e.target),
            article;

        console.log(e.target.className);

    });

    function prugi(suurus) {
        $(".meri").click(function (e) {
            if (e.target.className === "meri" || e.target.className === "img-surnud" || e.target.className === "prugi") {
                var top = e.pageY - $(".taevas").height() - suurus / 2,
                    left = e.pageX - suurus / 2;
                //width: " + laius + "px;
                $(this).append("<img class='prugi' src='pildid/prygi/" + prygiArray[prugiArrayCounter] + "' alt='prügi' style='left:" + left + "px; top: " + top + "px; height: " + suurus + "px' />");
                prugiArrayLoendur();
                prugiLoendur();
                mang(20);
            }
        });
    }

    function tossArrayLoendur() {
        tossArrayCounter = tossArrayCounter + 1;
        if (tossArrayCounter === tossuArray.length) {
            tossArrayCounter = 0;
        }
    }

    function toss(suurus) {
        $(".taevas #wrapper").click(function (e) {
            if (e.target.id === "wrapper" || e.target.className === "toss" || e.target.className === "surnud img-surnud") {
                var top = e.pageY - suurus / 2,
                    left = e.pageX - suurus / 2;
                //width: " + laius + "px;
                $(this).append("<img class='toss' src='pildid/toss/" + tossuArray[tossArrayCounter] + "' alt='toss' style='left:" + left + "px; top: " + top + "px; height: " + suurus + "px' />");
                tossArrayLoendur();
                prugiLoendur();
                mang(20);
            }
        });
    }

    /*parallaxScroll funktsioonis teostatakse kihtide liigutamine erinevatel kiirustel*/
    function parallaxScroll(scrollitavElement) {
        var scrolled = $(scrollitavElement).scrollTop();
        $('#linnud1').css('top', (Number(0) - (scrolled * 0.25)) + 'px');
        $('#linnud2').css('top', (Number(0) - (scrolled * 0.5)) + 'px');
        $('#linnud3').css('top', (Number(0) - (scrolled * 0.75)) + 'px');
    }

    /*Element seotakse 'scroll' eventiga, kus teostatakse parallaxScroll()*/
    function siduja(element) {
        $(element).bind('scroll', function (e) {
            parallaxScroll(this);
        });
    }


    //scrollImportant();
    siduja(".taevas");

    tapaLind('[id^=albatross]', 'surnudalbatross.png');
    tapaLind('[id^=albatross2]', 'surnudalbatross2.png');
    tapaLind('[id^=kajakas]', 'surnudkajakas.png');
    tapaLind('[id^=kajakas2]', 'surnudkajakas2.png');
    tapaLind('[id^=hahk]', 'surnudhahk.png');
    tapaLind('[id^=hahk2]', 'surnudhahk2.png');
    tapaLind('[id^=part]', 'surnudpart.png');
    tapaLind('[id^=part2]', 'surnudpart2.png');

    tapaKala('#forell', 'surnud_forell.png');
    tapaKala('#kammeljas', 'surnud_kammeljas.png');
    tapaKala('#saga', 'surnud_saga.png');
    tapaKala('#lohe2', 'surnud_lohe2.png');
    tapaKala('#lohe', 'surnud_lohe.png');
    tapaKala('#tinkatinka', 'surnud_tinkatinka.png');
    tapaKala('#angerjas', 'surnud_angerjas.png');
    /*tapaKala('#kammeljas', 'surnud_forell.png');*/

    prugi(200);
    toss(200);

});