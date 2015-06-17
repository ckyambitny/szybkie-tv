myApp.config(function ($routeProvider, $locationProvider){
    $routeProvider
    .when('/',
    {
        templateUrl: 'partials/menu.html',
        controller: 'menuController'
    })
    .when('/horror',
    {
        templateUrl: 'partials/horror.html',
        controller: 'horrorController'
    })
    .when('/horror/kondon',

    {
        templateUrl: 'partials/horror.html',
        controller: 'horrorController'
    }
    );
    
        
            

});
