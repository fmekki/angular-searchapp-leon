"use strict";

var App = angular.module("flight", ["ui.sortable", "LocalStorageModule"]);

App.controller("FlightCtrl", function($scope, localStorageService) {
    console.log("Controller created.");

    $scope.init = function() {


        if (!localStorageService.get("flightList")) {
            $scope.model = [{
                    name: "Search",
                    list: [
                        // { taskName: "Flight1", isSelected: false },
                        // { taskName: "Flight2", isSelected: false }
                    ]
                }
                // ,
                // {
                //  name: "Secondary", list: [
                //      { taskName: "Flight3", isSelected: false },
                //      { taskName: "Flight4", isSelected: false }
                //  ]
                // }
            ];



        } else {
            $scope.model = localStorageService.get("flightList");
        }
        $scope.show = "All";
        $scope.currentShow = 0;
    };



    $scope.deleteAll = function() {
        $scope.model = [{
            name: "Search",
            list: [

            ]
        }];


    };


    $scope.deleteFlight = function(item) {
        var index = $scope.model[$scope.currentShow].list.indexOf(item);
        $scope.model[$scope.currentShow].list.splice(index, 1);
    };

    $scope.flightSortable = {
        containment: "parent",
        cursor: "move",
        tolerance: "pointer"
    };

    $scope.changeFlight = function(i) {
        $scope.currentShow = i;
    };

    $scope.showFn = function(flight) {
        if ($scope.show === "All") {
            return true;
        } else if (flight.isSelected && $scope.show === "Complete") {
            return true;
        } else if (!flight.isSelected && $scope.show === "Incomplete") {
            return true;
        } else {
            return false;
        }
    };


    $scope.$watch("model", function(newVal, oldVal) {
        if (newVal !== null && angular.isDefined(newVal) && newVal !== oldVal) {
            localStorageService.add("flightList", angular.toJson(newVal));
        }
    }, true);


    var integer = 1;

    function timeConverter(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        // var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
        return time;
    }

    function showResult(options) {


        for (var i = 0; i < options.length; i++) {
            var resultswrap = document.getElementById("resultswrap");


            $scope.model[$scope.currentShow].list.splice(0, 0, { taskName: options[i].modaltext.toString(), isSelected: false });

            $scope.newTodo = "";

            integer++;

        }


    }

    function showSeperator(options) {
        var resultswrap = document.getElementById("resultswrap");
        var modalwrapper = document.getElementById("modalwrapper");
        for (var i = 0; i < options.length; i++) {
            var container = document.createElement("div");
            container.className = 'results_item2 cat-box2 wow noborder';
            var resultstext = document.createElement('h2');
            resultstext.innerHTML = options[i].text;
            container.appendChild(resultstext);
            resultswrap.appendChild(container);


        }
    }

    $('#submit_day_alg').click(function(event) {

        console.log("Success, entering...");
        $("#loading").css("opacity", "1");
        $.ajax({
            type: "POST",
            url: "leon.php",
            data: $("#dayForm_alg").serialize(),
            error: function(data) {
                console.log("Error please try again");
                $("#loading").css("opacity", "0");

            },
            success: function(json) {

                // console.log("Success, entering...");
                // console.log(json);
                var flight_coords_collection = [];
                console.log("Number of flights found: " + json.result.flights.length);




                // var optiontext = "Date: " + document.getElementById("date").value + "&nbsp; &nbsp; &nbsp; Number of flights found: " + json.result.flights.length;
                // console.log(optiontext);
                // var options = [{
                //     text: optiontext
                // }];

                // showSeperator(options);

                for (var i = 0; i < json.result.flights.length; i++) {
                    flight_coords_collection.push(json.result.flights[i]);

                    console.log(flight_coords_collection[i]);
                    var optiontext =
                        flight_coords_collection[i].begCity + " [ " +
                        flight_coords_collection[i].begIata + " , " +
                        flight_coords_collection[i].begIcao + " ]  > " +
                        flight_coords_collection[i].endCIty + " [ " +
                        flight_coords_collection[i].endIata + " , " +
                        flight_coords_collection[i].endIcao + " ] ";

                    var sta = flight_coords_collection[i].sta;
                    sta = timeConverter(sta);
                    var std = flight_coords_collection[i].std;
                    std = timeConverter(std);
                    // lesta = new Date(lesta * 1000).format('h:i:s');
                    // console.log("Timestamp is: "+ lesta);
                    // var modaltext =
                    //     "Aircraft Type ID: " + flight_coords_collection[i].acftTypeId + "<br>" +
                    //     "Beginning City: " + flight_coords_collection[i].begCity + "<br>" +
                    //     "Beginning IATA: " + flight_coords_collection[i].begIata + "<br>" +
                    //     "Beginning ICAO: " + flight_coords_collection[i].begIcao + "<br>" +
                    //     "End City: " + flight_coords_collection[i].endCIty + "<br>" +
                    //     "End IATA: " + flight_coords_collection[i].endIata + "<br>" +
                    //     "End ICAO: " + flight_coords_collection[i].endIcao + "<br>" +
                    //     "Registration: " + flight_coords_collection[i].registration + "<br>" +
                    //     "Scheduled Time of Arrival: " + sta + "<br>" +
                    //     "Scheduled Time of Departure: " + std;
                    var counter = i + 1;
                    var modaltext =
                        " " + counter + " - " +
                        flight_coords_collection[i].begCity + "(" +
                        "" + flight_coords_collection[i].begIata + "," +
                        "" + flight_coords_collection[i].begIcao + ")  > "
                        // "Aircraft Type ID: " + flight_coords_collection[i].acftTypeId + "  ||  " +

                    +

                    flight_coords_collection[i].endCIty + "(" +
                        "" + flight_coords_collection[i].endIata + "," +
                        "" + flight_coords_collection[i].endIcao + ") - " +
                        " Arrival: " + sta + " | " +
                        " Departure: " + std;



                    var options = [{
                        text: optiontext,
                        modaltext: modaltext
                    }];

                    console.log()
                    showResult(options);
                    angular.element('#submit_day_alg').triggerHandler('click');
                }
                $("#loading").css("opacity", "0");


            }

        });


    });










});


$(document).ready(function() {

    // console.clear();

    console.log("JS Working");
    // window.sr = ScrollReveal();
    // sr.reveal('.wow');













});
