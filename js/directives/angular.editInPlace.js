App.directive( 'editInPlace', function() {
  return {
    restrict: 'E',
    scope: { value: '=' },
    template: '<span class="flightName" ng-dblclick="edit()" ng-bind="value"></span><input class="flightField" ng-model="value"></input>',
    link: function ( $scope, element, attrs ) {
      // Ref element
      var inputElement = angular.element( element.children()[1] );
      // Custom styling
      element.addClass( 'edit-in-place' );
      // Add editing functuin
      $scope.editing = false;
      $scope.edit = function () {
        $scope.editing = true;
        element.addClass( 'active' );
        inputElement.focus();
      };
      inputElement.on("blur",function  () {
        $scope.editing = false;
        element.removeClass( 'active' );
      });
    }
  };
});