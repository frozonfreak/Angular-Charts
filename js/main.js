
var webApp = angular.module('webApp',['ui.router','googlechart']);

webApp.config(function($stateProvider, $urlRouterProvider) {

  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/home.html",
      controller: 'appController',
    })
    .state('404', {
      url: "/404",
      templateUrl: "404.html",
      controller: 'app404Controller',
    })
    // For any unmatched url, redirect to /state1
     $urlRouterProvider.otherwise("/");

});
//controller
webApp.controller('appController', function($scope, $location){
        
    //Chart Type Selection
    $scope.chartNames = [{chartType: 'AreaChart'},{chartType:  'PieChart'},{chartType:  'ColumnChart'},{chartType:  'LineChart'},{chartType:  'ColumnChart'}];       
    //Create Chart content
    var chartParam = {};
    
    $scope.selectedItem;
    //Chart Type
    //chartParam.type = "AreaChart";
    //chartParam.type = "PieChart";''
    //chartParam.type = "BarChart";
    //chartParam.type = "ColumnChart";
    chartParam.type = "LineChart";


    chartParam.displayed = true;
    //chartParam.cssStyle = "height:300px; width:400px;";
    chartParam.cssStyle = "height:500px; width:100%;";

    //Chart Data
    chartParam.data = {"cols": [
        {id: "month", label: "Month", type: "string"},
        {id: "laptop-id", label: "Laptop", type: "number"},
        {id: "desktop-id", label: "Desktop", type: "number"},
        {id: "server-id", label: "Server", type: "number"},
        {id: "cost-id", label: "Shipping", type: "number"}
    ], "rows": [
        {c: [
            {v: "January"},
            {v: 19, f: "42 items"},
            {v: 12, f: "Ony 12 items"},
            {v: 7, f: "7 servers"},
            {v: 4}
        ]},
        {c: [
            {v: "February"},
            {v: 13},
            {v: 1, f: "1 unit (Out of stock this month)"},
            {v: 12},
            {v: 2}
        ]},
        {c: [
            {v: "March"},
            {v: 24},
            {v: 5},
            {v: 11},
            {v: 6}

        ]}
    ]};

    //Chart Description
    chartParam.options = {
        "title": "Sales per month",
        "isStacked": "true",
        "fill": 20,
        "displayExactValues": true,
        "vAxis": {
            "title": "Sales unit", "gridlines": {"count": 10}
        },
        "hAxis": {
            "title": "Date"
        }
    };


    var formatCollection = [
        {
            name: "color",
            format: [
                {
                    columnNum: 4,
                    formats: [
                        {
                            from: 0,
                            to: 3,
                            color: "white",
                            bgcolor: "red"
                        },
                        {
                            from: 3,
                            to: 5,
                            color: "white",
                            fromBgColor: "red",
                            toBgColor: "blue"
                        },
                        {
                            from: 6,
                            to: null,
                            color: "black",
                            bgcolor: "#33ff33"
                        }
                    ]
                }
            ]
        },
        {
            name: "arrow",
            checked: false,
            format: [
                {
                    columnNum: 1,
                    base: 19
                }
            ]
        },
        {
            name: "date",
            format: [
                {
                    columnNum: 5,
                    formatType: 'long'
                }
            ]
        },
        {
            name: "number",
            format: [
                {
                    columnNum: 4,
                    prefix: '$'
                }
            ]
        },
        {
            name: "bar",
            format: [
                {
                    columnNum: 1,
                    width: 100
                }
            ]
        }
    ]

    chartParam.formatters = {};

    //Update all chart variables into chart
    $scope.chart = chartParam;

    init();
    function init(){
        //console.log($scope.chartNames[0].chartType);
        $scope.selectedItem = $scope.chartNames[0];

        //Chart Param declared in variable overridden here
        $scope.chart.type = $scope.selectedItem.chartType;
    }
    //Update chart when selection is clicked
    $scope.updateChart = function(type){
        //console.log($scope.selectedItem);   
        $scope.chart.type = $scope.selectedItem.chartType;
    }

});

