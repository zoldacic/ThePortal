define(['ko', 'jquery', 'jqueryui', 'App/router'], function (ko, $, jqueryui, router) {
    var Home = function () {
        var content = ko.observable({ html: ''});
        var title = ko.observable('');

        ko.bindingHandlers.setContent = {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var child = $('<div></div>');
                ko.virtualElements.prepend(element, child[0]);
                return { controlsDescendantBindings: true };
            },
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var component = ko.utils.unwrapObservable(valueAccessor());
                var containerElement = $(element).children('div')[0];

                //ko.cleanNode(containerElement);
                $(containerElement).html(component.html);
                ko.applyBindings(component.viewModel, containerElement);
            }
        };

        ko.bindingHandlers.datepicker = {
            init: function (element, valueAccessor, allBindingsAccessor) {
                //initialize datepicker with some optional options
                var options = allBindingsAccessor().datepickerOptions || {};
                $(element).datepicker(options);

                //handle the field changing
                ko.utils.registerEventHandler(element, "change", function () {
                    var observable = valueAccessor();
                    observable($(element).datepicker("getDate"));
                });

                //handle disposal (if KO removes by the template binding)
                ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                    $(element).datepicker("destroy");
                });

            },
            update: function (element, valueAccessor) {
                var value = ko.utils.unwrapObservable(valueAccessor());

                //handle date data coming via json from Microsoft
                if (String(value).indexOf('/Date(') == 0) {
                    value = new Date(parseInt(value.replace(/\/Date\((.*?)\)\//gi, "$1")));
                }

                var current = $(element).datepicker("getDate");

                if (value - current !== 0) {
                    $(element).datepicker("setDate", value);
                }
            }
        };

        var onClickEconomy = function () {
            router.navigateToEconomy();
        };

        return {
            title: title,
            content: content,
            onClickEconomy: onClickEconomy
        };
    }

    return Home;
});