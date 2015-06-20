myApp.config(function ($routeProvider, $locationProvider){
    $routeProvider
        .when('/',
        {
            templateUrl: 'partials/menu.html',
            controller: 'MenuController'
        })
        .when('/MovieType/:movieType',
        {
            templateUrl: 'partials/movieChoser.html',
            controller: 'ChoserController'
        });
    
        
            

});
