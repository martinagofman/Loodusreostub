/*JS linti jaoks*/
/*jslint browser: true*/
/*global $, jQuery, alert*/

//Kui dokument on laetud alles siis tegeleme järgenvaga
$(function () {
    "use strict";

    /*tapaKala funktsioon vahetab kalale klikkides tema pildi ja lisab talle klassi, mis teeb ta nähtavaks*/
    function tapaKala(kalaId, kalaKorjus) {
        $(kalaId).click(function () {
            $(kalaId.concat(' > img')).attr('src', 'pildid/kalad/'.concat(kalaKorjus));
            $(this).addClass('surnud');
        });
    }
    
    tapaKala('#lohe', 'surnud_forell.png');
    //tapaKala('kala ID', 'surnud_kala_pilt');

});