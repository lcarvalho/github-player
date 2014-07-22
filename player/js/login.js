/* global OAuth, alertify, player*/
var login = {};

(function() {
    'use strict';

    login = {

        init: function init() {
            this.loginOnGitHub();
        },

        loginOnGitHub: function loginOnGitHub() {
            OAuth.initialize('Jlr17kOyY3FrYcmtO8KJfq-SGUo');
            OAuth.popup('github', function(error, userAuth) {
                if (error !== null) {
                    alertify.alert('Failed to login at GitHub! ' +
                                    error.message + '.');
                }
                player.init(userAuth);
            });
            return this;
        }

    };
})();
