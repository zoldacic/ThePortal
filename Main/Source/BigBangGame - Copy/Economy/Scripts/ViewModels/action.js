define(['ko', 'komapping', 'toastr'], function (ko, mapping, toastr) {
    var ActionViewModel = function (action) {
        var self = this;
        var statuses = new ko.observableArray(['Påbörjad', 'Väntar på svar', 'Avslutad']);

        var onSaveActionClick = function () {
            $.post('/economy/api/economyData/saveAction', ko.toJS(action)).done(function () {
                toastr.success('Saved action');
            });
        };

        var onAddLabelClick = function () {
            action.labels.push('<new item>');
        }

        var onRemoveLabelClick = function (label) {
            action.labels.remove(label);
        }

        return {
            action: action,
            statuses: statuses,

            onSaveActionClick: onSaveActionClick,
            onAddLabelClick: onAddLabelClick,
            onRemoveLabelClick: onRemoveLabelClick
        };
    };

    return ActionViewModel;
});