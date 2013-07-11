define(['ko', 'jquery', 'economy/viewmodels/Action', 'economy/viewmodels/ImportActions', 'App/common', 'komapping'], function (ko, $, ActionViewModel, ImportActionViewModel, common, mapping) {
    var Economy = function () {
        economyTitle = ko.observable('Yes!');

        onAddActionClick = function() {
            $.when($.ajax('/economy/economyView/action'), $.post('/economy/api/economyData/getAction', null)).done(function (viewResponse, getActionResponse) {
                // (data, textStatus, jqXHR) 
                var action = mapping.fromJS(getActionResponse[0]);
                //action.labels = ko.observableArray(action.labels);
                common.getHome().content({ html: viewResponse[0], viewModel: new ActionViewModel(action) })
            });
        };

        onImportActionsClick = function () {
            $.when($.ajax('/economy/economyView/importActions')).done(function (data, textStatus, jqXHR) {
                common.getHome().content({ html: data, viewModel: new ImportActionsViewModel() })
            });
        };

        return {
            economyTitle: economyTitle
        };
    };

    return Economy;
})