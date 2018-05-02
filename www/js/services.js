/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('starter.services', ['ionic', 'ngCordova'])

		.factory('SDescription', function ($http) {
            var url = 'http://talabard-jeremy.esy.es/extract/extract.php?table=description';
            return {
                
                get: function () {
                    return $http.get(url);
                }
            };
        })
       .factory('SHead', function ($http) {
            var url = 'http://talabard-jeremy.esy.es/extract/extract.php?table=head';
            return {
                all: function () {
                    return $http.get(url);
                }
                
            };
        })
         .factory('SCv', function ($http) {
            var url = 'http://talabard-jeremy.esy.es/extract/extract.php?table=document';
            return {
                
                get: function () {
                    return $http.get(url);
                }
            };
        })
		.factory('SLink', function ($http) {
            var url = 'http://talabard-jeremy.esy.es/extract/extract.php?table=link';
            return {
                all: function () {
                    return $http.get(url);
                }
                
            };
        })
		
		.factory('TrainingService', function ($http) {
            var url = 'http://talabard-jeremy.esy.es/extract/extract.php?table=formation';
            return {
                
                all: function () {
                    return $http.get(url);
                }
            };
        })


        .factory('HobiesService', function ($http) {
            var url = 'http://talabard-jeremy.esy.es/extract/extract.php?table=hobie';
            return {
                
                all: function () {
                    return $http.get(url);
                }
            };
        })
		.factory('PersonalProjectService', function ($http) {
            var url = 'http://talabard-jeremy.esy.es/extract/extract.php?table=personalproject';
            return {
                
                all: function () {
                    return $http.get(url);
                }
            };
        })
		
		
		.factory('SkillService', function ($http) {
            var url = 'http://talabard-jeremy.esy.es/extract/extract.php?table=competence';
            return {
                
                all: function () {
                    return $http.get(url);
                }
            };
        })
	
		
		.factory('ProjectService', function ($http) {
            var url = 'http://talabard-jeremy.esy.es/extract/extract.php?table=project';
            return {
                
                all: function () {
                    return $http.get(url);
                }
            };
        })
		
		
		.factory('JobService', function ($http) {
            var url = 'http://talabard-jeremy.esy.es/extract/extract.php?table=job';
            return {
                
                all: function () {
                    return $http.get(url);
                }
            };
        })

		.factory('ClickButtonService', function ($cordovaFileTransfer,$cordovaFileOpener2,$ionicPopup,$ionicLoading) {
            return {
                
                execute: function (link) {
					$ionicLoading.show({
					  template: 'Chargement...',
					  duration: 3000
					});
                    var str = link.libllink;
					
					if(link.url == 0){
						//open browser with this url
						window.open(link.link, '_system');
						
					}
					else{
						//download
						
						var mimeTypes = "application/pdf";
						if(str.indexOf("apk") !== -1){
							mimeTypes = 'application/vnd.android.package-archive';
						}
						if(str.indexOf("pdf") !== -1){
							mimeTypes = 'application/pdf';
						}
						if(str.indexOf("png") !== -1){
							mimeTypes = 'images/png';
						}
						if(str.indexOf("jpg") !== -1){
							mimeTypes = 'images/jpg';
						}
							
						window.requestFileSystem(LocalFileSystem.PERSISTENT, 5 * 1024 * 1024, function (fileSystem) {
                                    $cordovaFileTransfer.download(link.link,
                                            fileSystem.root.toURL() + "TalabardJeremy/"+ link.libllink, {}, true).then(function (result) {
                                        $cordovaFileOpener2.open(
                                                fileSystem.root.toURL() + "TalabardJeremy/"+ link.libllink,
                                                mimeTypes
                                                ).then(function () {
													
                                        },
                                                function (err) {
                                                    $ionicPopup.show(
													{
														template: '',
														title: 'Problème',
														subTitle: 'Erreur lors de l\'ouverture du fichier',
														scope: $scope,
														buttons: [
														{text: 'Ok',
															type: 'button-positive',
															onTap: function (e) {
															
															}
														}]
													});
                                                });
                                    }, function (error) {
										$ionicPopup.show(
										{
											template: '',
											title: 'Problème',
											subTitle: 'Erreur lors du téléchargement du fichier',
											scope: $scope,
											buttons: [
											{text: 'Ok',
												type: 'button-positive',
												onTap: function (e) {
												
												}
											}]
										});
                                    });
                                }, function (error) {
                                   $ionicPopup.show(
										{
											template: '',
											title: 'Problème',
											subTitle: 'Erreur lors du téléchargement du fichier',
											scope: $scope,
											buttons: [
											{text: 'Ok',
												type: 'button-positive',
												onTap: function (e) {
												
												}
											}]
										});
                                });
					}
					$ionicLoading.hide();
                }
            };
        });

        