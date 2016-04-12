
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
        
        if ($(window).outerWidth() <= 800)
            var temp = 34;
        else
            var temp = 50;
        
        var result = dist - temp;
        
        if (result < 0)
            result = dist;
        
        $('html, body').animate({
            scrollTop: result
        }, 1000);
    }
    
    $(window).scroll(function() {
    
        var pos = $(".main-nav ul li").offset().top;
        
        if ($(window).scrollTop() > pos)
        {
            $scope.showFixedHeader = true;
        } else
            $scope.showFixedHeader = false;
        
        $scope.$apply();
        
    });
    
    $(function(){
        
      $(".sub-title").typed({
        strings: ["Software Developer", "Web Developer", "Falcons Fan", "Software Developer"],
        typeSpeed: 50
      });
        
      $scope.$apply();
    
  });
    
});

app.controller("homeController", function($scope, $location, $http) {
    
    $scope.projects = [
        {
            name: 'Ikra',
            description: 'A web application that allows users to search the Quran for quick reference, read, and listen to specific ayats or complete suras.',
            how: 'Angular.js, PHP, MySQL & Skeleton.css.',
            url: 'http://www.explorethequran.tk',
            background: "content/images/cali2.jpg",
            imageOn:  "content/images/cali2.jpg",
            imageOff: ""
        },
        {
            name: 'Mmdb',
            description: 'A web application that lets users look up movies and TV shows, view trailers, ratings, descriptions, and also check what movies are playing in theaters.',
            how: 'Angular.js, TheMovieDB API, OMDB API & Skeleton.css.',
            url: 'http://www.mehtabc.me/movies',
            background: "content/images/movie.jpg",
            imageOn: "content/images/movie.jpg",
            imageOff: ""
        },
        {
            name: 'Color Clock',
            description: 'A simple website that shows the corresponding color to the current time. Use it as a dynamic background!',
            how: 'HTML5, CSS3, & jQuery.',
            url: 'http://www.mehtabc.me/clock',
            background: "content/images/color-clock.jpg",
            imageOn: "content/images/color-clock.jpg",
            imageOff: ""
        },
        /*{
            name: 'Currencer',
            description: 'A basic currency converter that allows the user to convert between and view real-time rates for up to 165 countries.',
            how: 'HTML5, CSS3, jQuery, & openCurrency API.',
            url: 'http://www.mehtabc.me/currency',
            background: "content/images/currency.jpg",
            imageOn: "content/images/currency.jpg",
            imageOff: ""
        },*/
        {
            name: 'Hazy Colors',
            description: 'A game based on how confusing colors can be. Navigate the confusion and pick the correct colors. How quick can you think?',
            how: 'Angular.js, jQuery, HTML5, & CSS3.',
            url: 'http://www.mehtabc.me/hazy',
            background: "content/images/colors.jpg",
            imageOn:  "content/images/colors.jpg",
            imageOff: ""
        }
    ];
    
    $scope.social = [
        {name: 'facebookw.png', link: 'http://www.facebook.com/mehtabchithiwala'},
        {name: 'githubw.png', link: 'http://www.github.com/mchithiw'},
        {name: 'linkedinw.png', link: 'http://www.linkedin.com/in/mehtab94'},
        {name: 'emailw.png', link: 'mailto:mehtab94@gmail.com'}
    ];
    
    $scope.skills = ['Java', 'Javascript', 'CSS', 'HTML', 'Angular.js', 'SQL', 'C++', 'Skeleton.css', 'Meteor.js'];
    
    $scope.experience = [
        {
            title: 'Software Developer Intern',
            company: 'The Home Depot',
            startDate: 'May 2015',
            endDate: 'Dec 2015',
            madeWith: 'Java, HTML5, CSS3, Javascript, jQuery, & Tomcat.',
            bulletOne: 'Developed a dashboard web application to be used by the Credit Team as a constant monitoring system. The dashboard also includes the ability to make changes in real time for time sensitive processes.',
            bulletTwo: 'The dashboard automates various processes and provides a seamless experience for the Credit Team. The automation and speed of the new dashboard makes it 33 times faster to use than the previous solution.'
        },
        {
            title: 'Software Engineer Intern',
            company: 'Georgia Pacific',
            startDate: 'Nov 2014',
            endDate: 'May 2015',
            madeWith: 'HTML5, CSS3, Javascript, jQuery, HighCharts.',
            bulletOne: 'Created a website for the EDI team to track statistics and traffic of all documents flowing inbound and outbound from the company. Took the project from requirements/design to deployment.',
            bulletTwo: 'Utilized the HighCharts plugin to display interactive 3D graphs and analysis of various data sets in the browser.'
        }
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

