(function() {
    'use strict';

    angular.module('LunchChecker', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope', '$inject'];

    function LunchCheckController($scope, $inject) {
        $scope.name = "Yaakov";

        $scope.upper = function() {
            var upCase = $inject('uppercase');
            $scope.name = upCase($scope.name);
        };
    }

})();