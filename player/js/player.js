/*global console, OAuth, alertify*/
var player = {};

(function (window, document) {
    'use strict';

    player = {
        init: function init() {
            this.loginOnGitHub();
        },

        loginOnGitHub: function loginOnGitHub() {
            var self = this;
            OAuth.initialize('Jlr17kOyY3FrYcmtO8KJfq-SGUo');
            OAuth.popup('github', function(error, userAuth){
                if (error !== null) {
                    alertify.alert('Failed to login at GitHub! ' + error.message + '.');
                }
                self.getCommits(userAuth);
            });
            return this;
        },

        getCommits: function getCommits(userAuth) {
            var gh = new Octokit({token: userAuth.access_token}),
                repo = gh.getRepo(username, reponame);
            console.log('Loading commits...');
            console.log(userAuth);
        }

    };
})(window, document);
