var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('menuController', function($scope, $location){
    //display options items
    $scope.activeMenuItem = 0; 
    $scope.hashUrls = ['action', 'horror', 'comedy', 'family'];
    $scope.itemsToDisplay = [
        {
            name: 'Akcja',
            navIndex: 0
        },
        {
            name: 'Horrory',
            navIndex: 1
        },
        {
            name: 'Komedia',
            navIndex: 2
        },
        {
            name: 'Familijne',
            navIndex: 3
        }
        
    ]; 
    //display key event handling
    $scope.$on('keydown', function(msg, key){
        if( key === 37 || key === 39 ){
            msg.preventDefault();
            console.log(key);
            if  ( key === 39 )  {
                console.log('go right');
                if($scope.activeMenuItem === 3){
                    $scope.activeMenuItem = 0;
                } else {
                    $scope.activeMenuItem++;
                }
                $scope.$apply();
            }
            if( key === 37) {
                console.log('go left');
                if($scope.activeMenuItem === 0){
                    $scope.activeMenuItem = 3;
                } else {
                    $scope.activeMenuItem--;
                }
                $scope.$apply();
            }
        } 
        if( key === 13) {
            console.log('enter');
            $location.path($scope.hashUrls[$scope.activeMenuItem]);
            $scope.$apply();
        }
    });

});


myApp.controller('horrorController', function($scope, $location) {
       $scope.list = [
        {
            name: 'dracula',
            src: 'img/dracula.jpg',
            navIndex: 0     
        },
        {
            name:'evil',
            src: 'img/evil.jpg',
            navIndex: 1
        },    
        {
            name: 'frankenstein' ,
            src:'img/frankenstein.jpg',
            pnavIndex: 2
        },
        {
            name: 'friday',
            src: 'img/friday.jpg',
            navIndex: 3
        },
        {
            name: 'gremllins',
            src: 'img/gremlins.jpg',
            navIndex: 4
        },
        {
            name: 'jaws',
            src: 'img/jaws.jpg',
            navIndex: 5
        },
        {
            name: 'mummy',
            src: 'img/mummy.jpg',
            navIndex: 6
        },                   
        {
            name: 'plnetterror',
            src: 'img/planetterror.jpg',
            navIndex: 7  
        },  
        {
            name: 'shining',
            src: 'img/shining.jgp',
            navIndex: 8
        },       
        {
            name: 'texas',
            src: 'img/texas.jpg',   
            navIndex: 9
        }   
    ];    
    $scope.activeListItem = 0;  
    $scope.itemsToDisplay = $scope.list.slice(0,3); 
    $scope.name ='Horrory'; 
    console.log($scope.itemsToDisplay); 
   
    $scope.kk = function(e, b) {
        console.log(e.keyCode);
        console.log(b);
    };
    $scope.$on('keydown', function(msg, key){
        if( key === 37 || key === 39 ){
            msg.preventDefault();
            console.log(key);
            if  ( key === 39 )  {
                console.log('go right');
            }
            if( key === 37) {
                console.log('go left');
            }
        } 
        if( key === 13) {
            console.log('enter');
            $location.path('/horror/kondon');
            $scope.$apply();
        }
    });

  
 
});
myApp.directive('keyTrap', function() {
  return function( scope, elem ) {
    elem.bind('keydown', function (event) {
        scope.$broadcast('keydown', event.keyCode );
    });
  };
});
