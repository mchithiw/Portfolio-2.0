
var app = angular.module("myApp", ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
    .when('/', {
        templateUrl: 'home.html',
        controller: 'homeController',
    })
	.otherwise({redirectTo: '/'});

}]);

app.controller("navController", function($scope, $location, $http) {
    
    $scope.nav = ['Home', 'About Me', 'Projects', 'Resume'];
    
    $scope.scrollTo = function(item) {
        
        var location = item.toLowerCase();
        
        location = location.replace(" ", "-");
        
        location = "." + location;
        
        var dist = $(location).offset().top;
        //var temp = $(".fixed-header").outerHeight();
        
        var result = dist;
        
        $('html, body').animate({
            scrollTop: result
        }, 1000);
    }
    
    $(window).scroll(function() {
    
        var pos = $(".header").offset().top + $(".header").outerHeight();
        
        if ($(window).scrollTop() > pos)
        {
            $scope.showFixedHeader = true;
        } else
            $scope.showFixedHeader = false;
        
        $scope.$apply();
        
        
        
    });    
    
});

app.controller("homeController", function($scope, $location, $http) {
    
    $scope.projects = [
        {
            name: 'Ikra',
            description: 'A web application that allows users to search the Quran for quick reference, read, and listen to specific ayats or complete suras.',
            how: 'Angular.js, Skeleton.css, PHP, & MySQL.',
            url: 'http://www.chithiwala.me',
            background: "/content/images/cali2.jpg",
            imageOn:  "/content/images/cali2.jpg",
            imageOff: ""
        },
        {
            name: 'Mmdb',
            description: 'A web application that lets users look up movies and TV shows, view trailers, ratings, descriptions, and also check what movies are playing in theaters.',
            how: 'Angular.js, Skeleton.css, TheMovieDB API, & OMDB API.',
            url: 'http://www.mehtabc.com/movies',
            background: "content/images/movie.jpg",
            imageOn: "content/images/movie.jpg",
            imageOff: ""
        },
        {
            name: 'Color Clock',
            description: 'A simple website that shows the corresponding color to the current time. Use it as a dynamic background!',
            how: 'HTML5, CSS3, & jQuery.',
            url: 'http://www.mehtabc.com/clock',
            background: "content/images/color-clock.jpg",
            imageOn: "content/images/color-clock.jpg",
            imageOff: ""
        },
        {
            name: 'Currencer',
            description: 'A basic currency converter that allows the user to convert between and view real-time rates for up to 165 countries.',
            how: 'HTML5, CSS3, jQuery, & openCurrency API.',
            url: 'http://www.mehtabc.com/currency',
            background: "content/images/currency.jpg",
            imageOn: "content/images/currency.jpg",
            imageOff: ""
        }   
    ];
    
    $scope.social = [
        {name: 'facebookw.png', link: 'http://www.facebook.com/mehtabchithiwala'},
        {name: 'githubw.png', link: 'http://www.github.com/mchithiw'},
        {name: 'linkedinw.png', link: 'http://www.linkedin.com/in/mehtab94'},
        {name: 'emailw.png', link: 'mailto:mehtab94@gmail.com'}
    ];
    
    $scope.goTo = function(url) {

        window.location.href = url;
        
    }
    
    $scope.hover = function(index) {
        
        $scope.projects[index].hover = true;
        
    }
    
    $scope.hoverOff = function(index) {
        
        $scope.projects[index].hover = false;
        
    }
    
    $scope.socialHover = function(index) {
    
        var temp = $scope.social[index].name.substring(0, $scope.social[index].name.length - 5);
        
        temp = temp + "blue.png";
        
        $scope.social[index].name = temp;
        
    }
    
    $scope.socialHoverOff = function(index) {
        
        var temp = $scope.social[index].name.substring(0, $scope.social[index].name.length - 8);
        
        temp = temp + "w.png";
        
        $scope.social[index].name = temp;
        
    }
    
});

