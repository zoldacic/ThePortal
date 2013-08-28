define(['sammy', 'App/common', 'economy/viewmodels/economy'], function (Sammy, common, EconomyViewModel) {
    var sammy = Sammy();

    var allCatchingRegExp = /.*/;
    var economyRegExp = '#/Economy';

    var init = function () {

        sammy.get(economyRegExp, function () {
            $.when($.ajax({ url: '/economy/economyView' })).done(function (data, textStatus, jqXHR) {
                //Contents in viewResponse, jsResponse: data, textStatus, jqXHR
                common.getHome().content({ html: data, viewModel: new EconomyViewModel() });
            }).fail(function (jqXHR, textStatus, errorThrown) {
                alert('Nåt gick fel när "economyView" skulle hämtas: ' + errorThrown);
            });
        });

        sammy.get(allCatchingRegExp, function () {
            sammy.setLocation('#/');
        });

        sammy.run();
    };

    var navigateToEconomy = function () {
        sammy.setLocation(economyRegExp);
    };

    //var navigateToEconomy = function (path) {
    //    sammy.setLocation(economyRegExp + '/:' + path);
    //};

    return {
        init: init,
        navigateToEconomy: navigateToEconomy
    };
});