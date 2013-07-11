(function () {
    require(['knockout', 'App/workspace', 'ViewModels/Home'],
        function (ko, workspace, home) {
            workspace.init();
        });
})();