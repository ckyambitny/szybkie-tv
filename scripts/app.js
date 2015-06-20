var myApp = angular.module('myApp', ['ngRoute']);

myApp.factory('MenuService', function() {
       return {
            hashUrls:  ['action', 'horror', 'comedy', 'family'],
            itemsToDisplay : [
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
        }]
        } ;

    });

myApp.controller('MenuController', function(MenuService, $scope, $timeout, $location){
    //display options items
    $scope.activeMenuItem = 0;
    $scope.itemsToDisplay = MenuService['itemsToDisplay'];
    $scope.hashUrls = MenuService['hashUrls'];
 
      //display key event handling
    $scope.$on('keydown', function(msg, key){
    //timeout for executin in next digest,  in the same digest as $broadcast it's causing errors, 
        $timeout( function() {    
            if( key === 37 || key === 39 ){
                msg.preventDefault();
                if  ( key === 39 )  {
                    if($scope.activeMenuItem === 3){
                        $scope.activeMenuItem = 0;
                    } else {
                        $scope.activeMenuItem++;
                    }
                }
                if( key === 37) {
                    if($scope.activeMenuItem === 0){
                        $scope.activeMenuItem = 3;
                    } else {
                        $scope.activeMenuItem--;
                    }
                }
            } 
            if( key === 13) {
                $location.path('MovieType/' + $scope.hashUrls[$scope.activeMenuItem]);
            }
        }, 0);
    });

});
    
myApp.factory('MovieProvider', function($routeParams){
    //data hardcoded just for horrors test    
  
    var horrorData = [
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
    var ret = {};
    ret.getData = function() { 
        switch($routeParams.movieType){
            case 'horror':
                return horrorData;   
            case 'action':
                return [];
        }
    }
    
    return ret;

});

myApp.controller('ChoserController', function(MovieProvider, $scope, $location, $timeout, $routeParams) {
    //service data handling

   $scope.list = MovieProvider.getData() || [];   
    // initial display controls 
    $scope.activeListItem = 0;  
    $scope.listControll = 0; 
    $scope.displayList = [];
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
        //change $scope.name depending on route, 
    $scope.name =$routeParams.movieType; 
    $scope.$on('keydown', function(msg, key){
        //timeout 0 to prevent digest error(broadcast)
        $timeout( function() {
            if( key === 37 || key === 39 ) {
                if( key === 39 )  {
                    if ( $scope.listControll === $scope.displayList[2].navIndex  ){
                        $scope.range.first++;
                        $scope.range.last++;
                        $scope.dispCalc($scope.range);
                    }
                        //support for different size of film table, i really should implement request for movie data
                    if( $scope.listControll === $scope.list[$scope.list.length-1].navIndex){
                        $scope.range = {
                            first: 0, 
                            last: 3
                        };
                        $scope.listControll = -1;//-1 because standard incrementation
                        $scope.dispCalc($scope.range);
                    }
                    $scope.listControll++;
                }
                if( key === 37) {
                    if( $scope.listControll === 0 ){
                        $scope.listControll = $scope.list[$scope.list.length-1].navIndex + 1; //+1 because standard decrementation
                        $scope.range.last = $scope.list.length;
                        $scope.range.first = $scope.range.last - 3; 
                        $scope.dispCalc($scope.range);
                    }    
                    if( $scope.listControll === $scope.displayList[0].navIndex ){
                        $scope.range.first--;
                        $scope.range.last--;
                        $scope.dispCalc($scope.range);
                    } 
                $scope.listControll--;
                }
                
            }    
            if( key === 13) {
                $location.path('/horror/'+$scope.list[$scope.listControll].name );
            }
        }, 0);
    });
});
myApp.directive('keyTrap', function() {
  return function( $scope, elem ) {
    elem.on('keydown', function (event) {
        $scope.$broadcast('keydown', event.keyCode );
    });
  };
});
