/*global console, GitHub, $*/
var player = {};

(function () {
    'use strict';

    player = {
        init: function init(userAuth) {
            this.github = new GitHub({token: userAuth.access_token,
                                      auth: 'oauth'});
            this.userAuth = {};
            this.setOwnerAndRepo();
        },

        setOwnerAndRepo: function setOwnerAndRepo() {
            var ownerAndRepo,
                url = $('#repos-url').val();
            ownerAndRepo = url.split(/^.*:(.*)\/(.*)\.git$/)
                              .filter(function(el){ return el !== '';});
            this.owner = ownerAndRepo[0];
            this.repo = ownerAndRepo[1];
            return this;
        },

        getCommits: function getCommits() {
            var repo = this.github.repository_url({'owner': this.owner,
                                                   'repo': this.repo});
            console.log(repo);
        }
    };

})();
