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
    
    tapaKala('#forell', 'surnud_forell.png');
    tapaKala('#kammeljas', 'surnud_forell.png');
    /*tapaKala('#kammeljas', 'surnud_forell.png');*/

});