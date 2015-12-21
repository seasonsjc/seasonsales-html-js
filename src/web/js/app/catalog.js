
'use strict';

var App = App || {};

App.CatalogUi = (function(){

    function CatalogUi () {
    }

    CatalogUi.prototype.show = function(){
        var catalogId = '#catalog';

        var catalog = new App.Catalog();

        catalog.all ( function (data) {

            for (var i = 0; i < data.products.length; i++) {

                $(catalogId).append (
                  '<div class="plan">'
                + '    <div class="title">'
                + '        FREE PLAN'
                + '        <div class="price"><span class="currency">$</span>0<span class="period">/ MO</span></div>'
                + '        <a class="btn btn-clear btn-small" href="#">AND GET FREE MONTH</a>'
                + '    </div>'
                + ''
                + '    <div class="description">'
                + '        <div class="description-box">'
                + '            <span class="fui-cmd"></span> 10,000 messages'
                + '        </div>'
                + '        <div class="description-box">'
                + '            <span class="fui-mic"></span> <b>unlimited</b> data'
                + '        </div>'
                + '        <div class="description-box">'
                + '            <span class="fui-user"></span> <b>unlimited</b> users'
                + '        </div>'
                + '        <div class="description-box">'
                + '            <span class="fui-windows"></span> first 10 day free'
                + '        </div>'
                + '    </div>'
                + '</div>');
            }





        });

    }



    return CatalogUi;
})();


/**
 *
 */
App.Catalog = (function() {

    var FIELDS = ['name', 'product', 'availableUntil', 'price'];
    var service = App.CatalogService;

    function Catalog(options) {
        /*for (var i = 0; i < FIELDS.length; i++) {
            this[FIELDS[i]] = options[FIELDS[i]] || null;
        }*/
    }

    Catalog.prototype.all = function(callback){
         App.CatalogService.list( callback ) ;
    }

    return Catalog;
})();

/**
 *
 */
App.CatalogService = (function() {
    return {

        list: function( callback ) {
            $.getJSON( '/js/app/products.json' , callback  );
        },

        add: function(catalog) {
        }
    };
})();
