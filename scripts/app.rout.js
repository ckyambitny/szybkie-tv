myApp.config(function ($routeProvider, $locationProvider){
    $routeProvider
    .when('/',
    {
        templateUrl: 'partials/menu.html',
        controller: 'menuController'
    })
    .when('/horror',
    {
        templateUrl: 'partials/movieChoser.html',
        controller: 'horrorController'
    }) 
    .when('/action',
    {
        templateUrl: 'partials/movieChoser.html',
        controller: 'horrorController'
    })
    .when('/comedy',
    {
        templateUrl: 'partials/movieChoser.html',
        controller: 'horrorController'
    })
    .when('/family',
    {
        templateUrl: 'partials/movieChoser.html',
        controller: 'horrorController'
    })



    
    .when('/horror/somepage',

    {
        templateUrl: 'partials/movieChoser.html',
        controller: 'horrorController'
    }
    );
    
        
            

});
