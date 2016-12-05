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
        prygiArray = ["prygikott2.png", "pepsi.png", "kilekott2.png", "prygikott.png", "can2.png", "can1.png", "kilekott.png"],
        tossuArray = ["toss.png", "musttoss.png", "toss2.png", "musttoss2.png", "toss1.png", "toss3.png"];

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

    function scrollCheck() {
        if (scroll < 0) {
            scroll = 0;
        } else if (scroll > 15000) {
            scroll = 15000;
        }
    }

    function scrollImportant(kiirus) {
        $(document).bind('mousewheel DOMMouseScroll', function (event) {
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                //console.log(scroll);
                scroll = scroll + event.originalEvent.detail * kiirus;
                scrollCheck();
                $(".taevas").scrollTop(scroll);
            } else {
                //console.log(scroll);
                scroll = scroll + event.originalEvent.detail * kiirus;
                scrollCheck();
                $(".taevas").scrollTop(scroll);
            }
        });
    }

    function prugiLoendur() {
        prugiKogus = prugiKogus + 1;
    }

    function mang(piirang) {
        if (prugiKogus >= piirang) {
            alert("Loodus reostub");
            //$("#reostus").addClass("naita");
        }
    }

    function reosta() {
        $('#reostus').click(function (e) {

            if (e.target.id === "reostus") {
                $('#reostus').removeClass("naita");
            }

        });
    }

    function prugi(suurus) {
        $(".meri").click(function (e) {
            if (e.target.className === "meri" || e.target.className === "img-surnud" || e.target.className === "prugi") {
                var top = e.pageY - $(".taevas").height() - suurus / 2,
                    left = e.pageX - suurus / 2;
                //width: " + laius + "px;
                $(this).append("<img class='prugi' src='pildid/prygi/" + prygiArray[prugiArrayCounter] + "' alt='prügi' style='left:" + left + "px; top: " + top + "px; height: " + suurus + "px' />");
                prugiArrayLoendur();
                prugiLoendur();
                mang(15);
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
                mang(10);
            }
        });
    }

    /*parallaxScroll funktsioonis teostatakse kihtide liigutamine erinevatel kiirustel*/
    function parallaxScroll(scrollitavElement) {
        scroll = $(scrollitavElement).scrollTop();
        console.log(scroll);
        $('#linnud1').css('top', (Number(0) - (scroll * 0.25)) + 'px');
        $('#linnud2').css('top', (Number(0) - (scroll * 0.5)) + 'px');
        $('#linnud3').css('top', (Number(0) - (scroll * 0.75)) + 'px');
    }

    /*Element seotakse 'scroll' eventiga, kus teostatakse parallaxScroll()*/
    function siduja(element) {
        $(element).bind('scroll', function (e) {
            parallaxScroll(this);
        });
    }

    function testNaitaElem() {
        $('body').click(function (e) {

            var target = $(e.target),
                article;

            console.log(e.target.id);

        });
    }


    scrollImportant(3);
    siduja(".taevas");
    reosta();
    testNaitaElem();

    tapaLind('[id^=albatross-]', 'surnudalbatross.png');
    tapaLind('[id^=albatross2-]', 'surnudalbatross2.png');
    tapaLind('[id^=kajakas-]', 'surnudkajakas.png');
    tapaLind('[id^=kajakas2-]', 'surnudkajakas.png');
    tapaLind('[id^=hahk-]', 'surnudhahk.png');
    tapaLind('[id^=hahk2-]', 'surnudhahk.png');
    tapaLind('[id^=part-]', 'surnudpart.png');
    tapaLind('[id^=part2-]', 'surnudpart2.png');

    tapaKala('#forell', 'surnud_forell.png');
    tapaKala('#kammeljas', 'surnud_kammeljas.png');
    tapaKala('#saga', 'surnud_saga.png');
    tapaKala('#lohe2', 'surnud_lohe2.png');
    tapaKala('#lohe', 'surnud_lohe.png');
    tapaKala('#tinkatinka', 'surnud_tinkatinka.png');
    tapaKala('#angerjas', 'surnud_angerjas.png');
    /*tapaKala('#kammeljas', 'surnud_forell.png');*/

    prugi(200);
    toss(300);

});