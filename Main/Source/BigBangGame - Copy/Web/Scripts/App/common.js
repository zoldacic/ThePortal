define(['ko'], function (ko) {
    var localHome = ko.observable();

    setHome = function (home) {
        localHome(home);
    };

    getHome = function () {
        return localHome();
    }

    return {
        setHome: setHome,
        getHome: getHome
    };
});