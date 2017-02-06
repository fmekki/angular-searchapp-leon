"use strict";
// Use enter key to confirm edit
App.directive("ngEnter",function  () {
	return function  (scope,elem) {
		$(elem).keyup(function  (e) {
			if (e.keyCode === 13) {
				scope.$apply(function  () {
					scope.addFlight();
				});
			}
		});
	};
});