/* global $, login, document*/

(function(document) {
    'use strict';

    $(document).ready(function () {
        $('#btn-watch').on('click', function () {
            login.init();
        });
    });

})(document);
