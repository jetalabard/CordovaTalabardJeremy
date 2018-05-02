// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleLightContent();
                }
            });

        })
		

        .config(function ($stateProvider, $urlRouterProvider) {
			
            $stateProvider
                    .state('app', {
                        url: '/app',
                        abstract: true,
                        templateUrl: 'templates/menu.html'
                    })

                    .state('app.home', {
                        url: '/home',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/home.html',
                                controller: 'ConnectionCtrl'
                            }
                        }
                    })

                    .state('app.cv', {
                        url: '/cv',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/cv.html',
								controller : 'CVCtrl'
                            }
                        }
                    })
                    .state('app.trainings', {
                        url: '/trainings',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/trainings.html',
								controller: 'TrainingCtrl'
                            }
                        }
                    })
                    .state('app.skills', {
                        url: '/skills',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/skills.html',
								controller: 'SkillCtrl'
                            }
                        }
                    })
                    .state('app.project', {
                        url: '/project',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/project.html',
								controller: 'ProjectCtrl'
                            }
                        }
                    })
                    .state('app.personalproject', {
                        url: '/personalproject',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/personalproject.html',
								controller: 'PersonalProjectCtrl'
                            }
                        }
                    })
                    .state('app.job', {
                        url: '/job',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/job.html',
								controller: 'JobCtrl'
                            }
                        }
                    })
                    .state('app.hobies', {
                        url: '/hobies',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/hobies.html',
                                controller: 'HobieCtrl'
                            }
                        }
                    })
                    .state('app.contact', {
                        url: '/contact',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/contact.html',
                                controller: 'TabsPageCtrl'
                            }
                        }
                    });
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('app/home');
        });
