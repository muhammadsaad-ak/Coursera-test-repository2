(function() {
    "use strict";

    angular
        .module("LunchCheck", [])
        .controller("LunchCheckController", LunchCheckController);
    LunchCheckController.$inject = ["$scope"];

    function LunchCheckController($scope) {
        $scope.input = "";
        $scope.splitInput = "";
        $scope.responseText = "";

        $scope.check = function() {
            $scope.splitInput = $scope.input.split(",");

            if ($scope.input === "") {
                $scope.responseText = "Please enter data first";
                return $scope.responseText;
            } else if ($scope.splitInput.length <= 3) {
                $scope.responseText = "Enjoy!";
                return $scope.responseText;
            } else {
                $scope.responseText = "Too much!";
                return $scope.responseText;
            }
        };
    }
})();