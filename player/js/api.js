/*global console, UriTemplate, $*/

var GitHub, Resource;


(function() {
    'use strict';

    GitHub = function GitHub(options) {
        options.accessToken = 'd68755136160b4cbe5d6d9cd287ff9212a3c26e3';
        return new Resource(options);
    };

    Resource = (function() {
        function Resource(options) {
            options.url = options.url !== undefined ? options.url : 'https://api.github.com';
            options.url = new UriTemplate(options.url).fillFromObject(options);
            this.options = options;
            console.log('Init Resource with options');
            console.log(this.options);
            return this.fetch();
        }

        Resource.prototype.fetch = function() {
            var self = this;
            console.log('Getting ' + this.options.url);
            $.ajax({
                url: this.options.url,
                async: false,
                header: {
                    'Authorization': 'token ' + this.options.accessToken,
                    'Accept': 'application/vnd.github.raw+json',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                success: function(data) {
                    console.log('Got API data');
                    console.log(data);
                    $.each(data, function(key, val) {
                        console.log(key, val);
                        console.log(typeof key);
                        if (typeof val === 'string') {
                            if ((key.indexOf('_url' !== -1) && (val.indexOf('https://api.github.com') !== -1))) {
                                self[key] = function(options) {
                                    $.extend(true, self.options, options);
                                    self.options.url = val;
                                    return new Resource(self.options);
                                };
                            }
                        } else {
                            self[key] = val;
                        }
                    });
                }
            });
            return this;
        };
        return Resource;
    })();

})();
