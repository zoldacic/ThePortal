define(['ko', 'ViewModels/Home', 'App/common', 'App/router'], function (ko, homeViewModel, common, router) {    
    var home = new homeViewModel();
    var init = function () {
        ko.applyBindings(home);
        common.setHome(home);
        router.init();
    };

    return {
        init: init,
        home: home
    };
})