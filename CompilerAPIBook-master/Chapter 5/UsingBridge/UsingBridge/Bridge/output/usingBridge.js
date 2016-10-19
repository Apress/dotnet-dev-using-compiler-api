﻿(function (globals) {
    "use strict";

    Bridge.define('UsingBridge.App', {
        statics: {
            config: {
                init: function () {
                    Bridge.ready(this.main);
                }
            },
            main: function () {
                window.alert("Welcome to Bridge.NET");
            }
        }
    });
    
    Bridge.init();
})(this);
