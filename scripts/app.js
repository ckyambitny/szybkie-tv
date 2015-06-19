'use strict';
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
    //it probably should be in a service with other movie poster lists   
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
            navIndex: 2
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
            src: 'img/shining.jpg',
            navIndex: 8
        },       
        {
            name: 'texas',
            src: 'img/texas.jpg',   
            navIndex: 9
        }   
    ];   
    // initial display controls 
    $scope.activeListItem = 0;  
    $scope.listControll = 0; 
    $scope.displayList = [];
    // first display 3(list[0-2]) poster images, TODO: funciton to get 3 next poster images when activeListItem is max(2) 
    // first display
    $scope.range = {
        first:0, 
        last:3
    };
    
    $scope.dispCalc = function(range) {
        $scope.displayList = $scope.list.slice(range.first, range.last);
    };      
    
    // initial display
    $scope.dispCalc($scope.range);
 
    $scope.name ='Horrory'; 
    $scope.$on('keydown', function(msg, key){
        if( key === 37 || key === 39 ) {
            console.log('before lC: '+ $scope.listControll + ' fi : '+$scope.range.first + ' la: '+$scope.range.last);

            if( key === 39 )  {
                if ( $scope.listControll === $scope.displayList[2].navIndex  ){
                    $scope.range.first++;
                    $scope.range.last++;
                    $scope.dispCalc($scope.range);
                }
                //support for different size of film table, i really should implement request for that(learn more FFS),
                if( $scope.listControll === $scope.list[$scope.list.length-1].navIndex){
                    //dont know how to  implement default parameters on start, just type it then
                    $scope.range = {
                        first: 0, 
                        last: 3
                    };
                    $scope.listControll = -1;//-1 because standard incrementation
                    $scope.dispCalc($scope.range);
                }
                $scope.listControll++;
                $scope.$apply();    
            }
            if( key === 37) {
                if( $scope.listControll === 0 ){
                    $scope.listControll = $scope.list[$scope.list.length-1].navIndex + 1; //+1 because standard decrementation
                    $scope.range.last = $scope.list.length ;
                    $scope.range.first = $scope.range.last - 3; 
                    $scope.dispCalc($scope.range);
                    $scope.$apply();
                }    
                if( $scope.listControll === $scope.displayList[0].navIndex ){
                    $scope.range.first--;
                    $scope.range.last--;
                    $scope.dispCalc($scope.range);
                } 
            $scope.listControll--;
            $scope.$apply();
            }
            console.log('after lC: '+ $scope.listControll + ' fi : '+$scope.range.first + ' la : '+$scope.range.last);
            
        }    
        if( key === 13) {
            console.log('enter');
            $location.path('/horror/'+$scope.list[$scope.listControll].name );
            $scope.$apply();
        }
    });

/*
    $scope.$on('keydown', function(msg, key){
        if( key === 37 || key === 39 ) {
            console.log('before lC: '+ $scope.listControll + ' fi : '+$scope.range.first + ' la: '+$scope.range.last);
            
            if  ( key === 39 )  {
                if ($scope.listControll <  2 || ($scope.listControll > 6 && $scope.listControll < 9) ) {
                    $scope.listControll++;  
                    $scope.$apply();
                } else {
                
                    if ($scope.listControll === 9) {
                       $scope.listControll = 0;
                       $scope.range.first = 0;
                       $scope.range.last = 3;
                       $scope.dispCalc($scope.range);
                       $scope.$apply();
 
                    } else {     
                        $scope.listControll++;
                        $scope.range.first++;
                        $scope.range.last++;
                        $scope.dispCalc($scope.range);
                        $scope.$apply();
                    }
                }
            }
        
                    
            if( key === 37) {
                if ( $scope.listControll <= 2 || $scope.listControll >7) {
                    
                    if ( $scope.listControll === 0 ){
                        $scope.range.last = 10;  
                        $scope.range.first = 7;
                        $scope.listControll = 9;
                        $scope.dispCalc($scope.range);
                        $scope.$apply();
                        
                    } else {
                        $scope.listControll--; 
                        $scope.$apply();
                    }
                    
                } else {
                    $scope.range.last--;  
                    $scope.range.first--;
                    $scope.listControll--;
                    $scope.dispCalc($scope.range);
                    $scope.$apply();
                } 
                    
            }
            console.log('after lC: '+ $scope.listControll + ' fi : '+$scope.range.first + ' la : '+$scope.range.last);
        } 
        if( key === 13) {
            console.log('enter');
            $location.path('/horror/'+$scope.list[$scope.listControll].name );
            $scope.$apply();
        }
    });

 */ 
 
});
myApp.directive('keyTrap', function() {
  return function( scope, elem ) {
    elem.on('keydown', function (event) {
        scope.$broadcast('keydown', event.keyCode );
    });
  };
});
