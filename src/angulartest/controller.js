var testApp = angular.module('testApp', []);

testApp.controller('PhoneListCtrl', function($scope){
    $scope.phones = [
        {'name': 'Nexus S',
        'snippet': 'Fast just got faster with Nexus S.'},
        {'name': 'Motorola XOOM with Wi-Fi',
        'snippet': 'The Next, Next Generation tablet.'},
        {'name': 'MOTOROLA XOOM',
        'snippet': 'The Next, Next Generation tablet.'}
    ];
});

testApp.controller('FruitListCtrl', function($scope){
    $scope.fruits = [
        {'name': 'apple', 'color': 'red'},
        {'name': 'grape', 'color': 'violet'},
        {'name': 'orange', 'color': 'orange'}
    ];
});
