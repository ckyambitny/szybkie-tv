myApp.config(function ($routeProvider, $locationProvider){
    $routeProvider
        .when('/',
        {
            templateUrl: 'partials/menu.html',
            controller: 'menuController'
        })
        .when('/MovieType/:movieType',
        {
            templateUrl: 'partials/movieChoser.html',
            controller: 'ChoserController'
        });
    
        
            

});
