'use strict';

var App = App || {};

App.CatalogUi = (function(){

    function CatalogUi () {
    }

    CatalogUi.prototype.show = function(){

        var catalogId = '#catalog';

    }

    return CatalogUi;
})();


/**
 *
 */
App.Catalog = (function() {

    var FIELDS = ['name', 'product', 'availableUntil', 'price'];

    function Catalog(options) {
        for (var i = 0; i < fields.length; i++) {
            this[FIELDS[i]] = options[FIELDS[i]] || undefined;
        }
    }

    Catalog.prototype.all = function(){

    }

    return Catalog;
})();

/**
 *
 */
App.CatalogService = (function() {
    return {

        list: function(options) {

        },

        add: function(catalog) {
        }
    };
})();
