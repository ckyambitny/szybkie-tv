(function () {
    'use strict';
        
    var wrapper = document.querySelector('.wrapper');
    var menuItems = Array.prototype.slice.call(document.querySelectorAll('nav > ul > li a'), 0);
    var activeMenuItem = getActiveItem();

    function getActiveItem() {
        for(var i in menuItems){
             if( menuItems[i].classList.contains('active') ){
                return parseInt(i);
            }
        }
    }
        
    function switchRight() {
        console.log('triggers swithc Right from '+activeMenuItem);
        if ( activeMenuItem === 3 ) {
            menuItems[3].classList.remove('active');
            menuItems[0].classList.add('active');
            activeMenuItem = 0;
        } else {
            menuItems[activeMenuItem].classList.remove('active');
            activeMenuItem += 1;
            menuItems[activeMenuItem].classList.add('active');
        }    
    };
    
    function switchLeft() {
        console.log('triggers switch Left from' + activeMenuItem);
        if ( activeMenuItem === 0 ) {
            menuItems[0].classList.remove('active');
            menuItems[3].classList.add('active');
            activeMenuItem = 3;
        } else {
            menuItems[activeMenuItem].classList.remove('active');
            activeMenuItem -= 1;
            menuItems[activeMenuItem].classList.add('active');
        }    
     };

    window.addEventListener('keydown', function(e) {
        var key = e.keyCode;
        if( key === 37 || key === 39 ){
            e.preventDefault();
            console.log(key);
            if  ( key === 39 )  {
                switchRight();
            }
            if( key === 37) {
                switchLeft();
            }
        }
        if ( key === 13 ) {
            window.location = 'mid/index' + activeMenuItem + '.html';
        }
    });


})();
