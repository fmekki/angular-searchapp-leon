<!doctype html>
<html lang="en" ng-app="flight">
    <head>
        <title>Angular Alpineswift™</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Welcome to Alpineswift™ AsSafe and secure backend data management system."/>
        <meta name="author" content="Faysal Mekhid">
        <!-- AngularJS & JQuery -->
        <link rel="stylesheet" href="css/jquery-ui.min.css">
        <script src="js/libs/jquery.min.js"></script>
        <script src="js/libs/jquery-ui.min.js"></script>
        <script src="js/libs/jquery.ui.touch-punch.min.js"></script>
        <script src="js/libs/angular.min.js"></script>
        <script src="js/libs/angular-local-storage.min.js"></script>
        <script src="js/libs/sortable.js"></script>
        <script src="js/app.js"></script>
        <script src="js/directives/angular.editInPlace.js"></script>
        <script src="js/directives/angular.ngEnter.js"></script>
        <!-- JQuery & Fonts-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300" rel="stylesheet" type="text/css">
        <link href='https://fonts.googleapis.com/css?family=Roboto:400,300' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
        <!-- Bootstrap -->
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        <!-- Javascript -->
        <link rel="stylesheet" type="text/css" href="animate.css">
        <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href="datetimepicker/jquery.datetimepicker.css"/ >
        <script src="datetimepicker/jquery.js"></script>
        <script src="datetimepicker/jquery.datetimepicker.js"></script>
        <script src="interaction.js"></script>
        <!-- Stylesheets -->
        <link rel="stylesheet" href="css/common.css">
        <link rel="stylesheet" type="text/css" href="stylesheet.css">
    </head>
    <body ng-controller="FlightCtrl" ng-init="init()">
        
        
        <div id="container">
            <div id="topnav"><img src="img/catreuslogoname.png" height="25px;" align="right"></div>
            
            <div class="splash">
                <div class="splash_bg"></div>
                <div class="splashicon">
                    <br>
                    <img src="img/catreuslogo.png" height="200px";><br><br>
                    <h1>Alpineswift™</h1>
                    <img src="img/cat_arrow.png" height="25px" style="margin-top:20px;">
                </div>
            </div><br>
            
            <div id="search"></div>
            <div class="title cat-box wow"><div id="marker"></div>
            <h1>Welcome to Alpineswift™</h1>
            <h2>Safe and secure backend data management system.<br>Please select a date.</h2><br><br>
            <form method="post" id="dayForm_alg">
                <input id="date"  class="formitem" type="text" autocapitalize="off" autocorrect="off"  name="date" placeholder="Enter Date">
                <button id="submit_day_alg" class="formitemsub" ng-click="addFlight()">Search</button>
            </form>
            <br>
            
            
            
        </div>
        
        <div class="option cat-box wow">
            <div id="loading"></div>
            <div class="results cat-box2 wow">
                
                <h1>Results</h1>
                <h2>Safe and secure backend data management system.</h2><br>
                
            </div>
            
            <div class="input-group" style="padding: 10px;padding-bottom:0;padding-left:11px;height: 40px;width: 100%;">
                <ul class="nav nav-pillsnew flight-filter" style="position: absolute;color: white;border-radius: 0;">
                    <li class="buttons" style="border-radius: none;" ng-class="{'active' : show == 'All' }" ng-click="show='All'"><a>All</a></li>

                    <li class="buttons" data-toggle="modal" data-target="#myModal"><a>SELECTED</a></li>
                    <!-- <li class="buttons" ng-class="{'active' : show == 'Complete' }" ng-click="show='Complete'"><a> SELECTED </a></li> -->
                    <li class="buttons" ng-click="deleteAll()"><a>CLEAR</a></li>

                </ul>
                <div class="input-group searchbar" style="">
                    <span class="input-group-btn">
                        <button class="btn btn-default" style="border-radius: 0;" type="button"><span class="glyphicon glyphicon-search"></span></button>
                    </span>
                    <input type="search" class="form-control" style="border-radius: 0;" placeholder="Search" ng-model="flightSearch">
                </div>
            </div>
            <a  ng-repeat="flights in model"
                class="list-group-item"
                ng-class="{'active' : currentShow === $index}"
                ng-click="changeFlight($index)" style="height:45px;background-color: #27A8BB;margin:10px;margin-top:20px;border-color:#E2E2E2;">
                
                <h2 class="label_header">Number of Flights Found:</h2>
                <span class="badge" style="border-radius: 0;margin:2px;font-weight: 200;">{{flights.list.length}}</span>
                <!-- {{todos.name}} -->
            </a>
            <div id="resultswrap">
                
                <ul class="list-unstyled"
                    ng-repeat="flights in model track by $index"
                    ui-sortable="flightSortable"
                    ng-model="flights.list"
                    ng-show="$index === currentShow"
                    style="color:black;">
                    <li class="flightTask" ng-repeat="flight in flights.list | filter:showFn | filter :flightSearch ">
                        <!-- <input class="todoCheckbox" ng-model="todo.isSelected" type="checkbox"> -->
                        <!-- <label class="todoCheckboxlabel" ></label> -->
                        <label class="control control--checkbox" style="float:left;">
                            <input type="checkbox" ng-model="flight.isSelected" checked="checked"/>
                            <div class="control__indicator"></div>
                        </label>
                        
                        <edit-in-place class="flightlabel" value="flight.taskName"></edit-in-place>
                        <label  value="flight.taskName"></label>
                        <button type="button" class="close pull-right" aria-hidden="true" ng-click="deleteFlight(flight)">&times;</button>
                    </li>
                    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" style="margin:10px;float:right;border-radius:0;font-size: 12px;height:30px;line-height: 10px;">VIEW SELECTION</button>
                </ul>
                <br>
            </div>
            
        </div>
        
        
        <div id="modalwrapper">
            <div id="myModal" class="modal fade" role="dialog" style="">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h1 class="modal-title" style="margin-left:10px;font-size: 28px;">Selection</h1>
                            <!-- <h1 style="margin-left:10px;margin-bottom:10px;font-size: 20px;">Selection</h1> -->
                        </div>
                        <div class="modal-body" style="height:300px;overflow: scroll;">
                            <!-- <div class="selected cat-box wow"> -->
                            <ul class="list-unstyled"
                                ng-repeat="flights in model track by $index"
                                ui-sortable="flightSortable"
                                ng-model="flights.list"
                                ng-show="$index === currentShow"
                                style="overflow: hidden;">
                                <li class="flightTask flightTask2" ng-repeat="flight in flights.list | filter:showFn(Complete) | filter :flightSearch">
                                    
                                    <edit-in-place class="flightlabel2" value="flight.taskName"></edit-in-place>
                                    <label  value="flight.taskName"></label>
                                    
                                </li>
                            </ul>
                            
                            <!-- </div> -->
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="">Push to Database</button>
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <h6 style="padding:20px;color:black;">Debug: {{ model | json}}</h6>
        <div id="footer"><h6>Copyright © 2016 Catreus Ltd All Rights Reserved</h6></div>
        <script>
        $('#date').datetimepicker({
            theme:'light',
            timepicker:false,
            format:'Y-m-d',
            defaultDate:new Date(),
            closeOnDateSelect:true,
            lang:'en'
        });
        </script>
    </body>
</html>