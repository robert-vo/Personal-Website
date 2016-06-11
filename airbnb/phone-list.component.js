// Register `phoneList` component, along with its associated controller and template
angular.
module('tripPlannerApp').
component('cityList', {
    template:
    '<div>' +
    '<h1>' +
    '<span ng-repeat="phone in $ctrl.phones">' +
    '<a class = "waves-effect waves-light btn-large">{{phone.name}}</a><br>' +
    '</span>' +
    '</h1>' +
    '</div>',
    controller: function PhoneListController() {
        this.phones = [
            {
                name: 'Nexus S',
                snippet: 'Fast just got faster with Nexus S.'
            }, {
                name: 'Motorola XOOM™ with Wi-Fi',
                snippet: 'The Next, Next Generation tablet.'
            }, {
                name: 'MOTOROLA XOOM™',
                snippet: 'The Next, Next Generation tablet.'
            }
        ];
    }
});
