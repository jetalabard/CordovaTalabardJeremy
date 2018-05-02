angular.module('starter.controllers', ['ionic', 'ngCordova'])


.controller('TabsPageCtrl', function ($scope,SDescription,$cordovaGeolocation) {
	

	$scope.getDescription = function(){
		SDescription.get().then(function (response) {
			var description = response.data;
			$scope.description = description[0];
		})
		
	}
	

	$scope.goLink = function(link){
		window.open(link, '_system');
	}
	

})

.controller('JobCtrl', function ($scope, JobService, SLink,ClickButtonService,$ionicLoading,$ionicPopup) {

	$scope.clickButton = function(link){
		var str = link.libllink;
		if(str.indexOf("rar") !== -1 
		|| str.indexOf("zip") !== -1 
		|| str.indexOf("7z") !== -1 
		|| str.indexOf("jar") !== -1 
		|| str.indexOf("exe") !== -1)
		{
			$ionicPopup.show(
			{
				template: '',
				title: 'Problème',
				subTitle: 'Vous ne pouvez pas ouvrir ce document (zip, jar ou exe)',
				scope: $scope,
				buttons: [
				{text: 'Ok',
					type: 'button-positive',
					onTap: function (e) {
					
					}
				}]
			});
		}
		else{
			ClickButtonService.execute(link);
		}
	}
	$scope.getJobs = function(){
		$ionicLoading.show({
		  template: 'Chargement...',
		  duration: 3000
		});
		SLink.all().then(function (response) {
			
			$scope.links = response.data;
		}).catch(function (error) {
			var networkState = navigator.connection.type;
			if (networkState != Connection.NONE) {
				$scope.getJobs();
			}
		});
		
		JobService.all().then(function (response) {
			$scope.jobs = response.data;
			angular.forEach($scope.jobs, function (hobie, keyJob)
			{
				$scope.jobs[keyJob].photo  = getURL($scope.jobs[keyJob].photo);
				var links = [];
				angular.forEach($scope.links, function (value, keyLink)
				{	
					if($scope.links[keyLink].idLinks == $scope.jobs[keyJob].idlinks){
						links.push($scope.links[keyLink]);
					}
				});
				var job = $scope.jobs[keyJob];
				job["links"] = links;
				$scope.jobs[keyJob] = job;
			});
			$ionicLoading.hide();
		}).catch(function (error) {
			var networkState = navigator.connection.type;
			if (networkState != Connection.NONE) {
				$scope.getJobs();
			}
		});
	}
	function getURL(namePhoto) {
		var urlPhoto = 'http://talabard-jeremy.esy.es/img/';
		return urlPhoto.concat(namePhoto);
	};
})

.controller('TrainingCtrl', function ($scope,SLink,TrainingService,ClickButtonService,$ionicLoading,$ionicPopup) {
	
	$scope.clickButton = function(link){
		var str = link.libllink;
		if(str.indexOf("rar") !== -1 
		|| str.indexOf("zip") !== -1 
		|| str.indexOf("7z") !== -1 
		|| str.indexOf("jar") !== -1 
		|| str.indexOf("exe") !== -1)
		{
			$ionicPopup.show(
			{
				template: '',
				title: 'Problème',
				subTitle: 'Vous ne pouvez pas ouvrir ce document (zip, jar ou exe)',
				scope: $scope,
				buttons: [
				{text: 'Ok',
					type: 'button-positive',
					onTap: function (e) {
					
					}
				}]
			});
		}
		else{
			ClickButtonService.execute(link);
		}
	}
	$scope.getTrainings = function(){
		$ionicLoading.show({
		  template: 'Chargement...',
		  duration: 3000
		});
		SLink.all().then(function (response) {
			$scope.links = response.data;
		}).catch(function (error) {
			var networkState = navigator.connection.type;
			if (networkState != Connection.NONE) {
				$scope.getTrainings();
			}
		});
		TrainingService.all().then(function (response) {
			$scope.trainings= response.data;
			angular.forEach($scope.trainings, function (value, keyItem)
			{
				$scope.trainings[keyItem].photo  = getURL($scope.trainings[keyItem].photo);
				var links = [];
				angular.forEach($scope.links, function (value, keyLink)
				{	
					if($scope.links[keyLink].idLinks == $scope.trainings[keyItem].idlinks){
						links.push($scope.links[keyLink]);
					}
				});
				var item = $scope.trainings[keyItem];
				item["links"] = links;
				$scope.trainings[keyItem] = item;
			});
			$ionicLoading.hide();
		}).catch(function (error) {
			var networkState = navigator.connection.type;
			if (networkState != Connection.NONE) {
				$scope.getTrainings();
			}
		});
	}
	function getURL(namePhoto) {
		var urlPhoto = 'http://talabard-jeremy.esy.es/img/';
		return urlPhoto.concat(namePhoto);
	}
})


.controller('PersonalProjectCtrl', function ($scope, PersonalProjectService, SLink,ClickButtonService,$ionicLoading,$ionicPopup) {

	$scope.clickButton = function(link){
		var str = link.libllink;
		if(str.indexOf("rar") !== -1 
		|| str.indexOf("zip") !== -1 
		|| str.indexOf("7z") !== -1 
		|| str.indexOf("jar") !== -1 
		|| str.indexOf("exe") !== -1)
		{
			$ionicPopup.show(
			{
				template: '',
				title: 'Problème',
				subTitle: 'Vous ne pouvez pas ouvrir ce document (zip, jar ou exe)',
				scope: $scope,
				buttons: [
				{text: 'Ok',
					type: 'button-positive',
					onTap: function (e) {
					
					}
				}]
			});
			
		}
		else{
			ClickButtonService.execute(link);
		}
	}
	$scope.getProjects = function(){
		$ionicLoading.show({
		  template: 'Chargement...',
		  duration: 3000
		});
		SLink.all().then(function (response) {
			$scope.links = response.data;
		}).catch(function (error) {
			var networkState = navigator.connection.type;
			if (networkState != Connection.NONE) {
				$scope.getProjects();
			}
		});
		PersonalProjectService.all().then(function (response) {
			$scope.projects = response.data;
			angular.forEach($scope.projects, function (valueProject, keyProject)
			{
				$scope.projects[keyProject].photo  = getURL($scope.projects[keyProject].photo);
				var links = [];
				angular.forEach($scope.links, function (value, keyLink)
				{	
					if($scope.links[keyLink].idLinks == $scope.projects[keyProject].idlinks){
						links.push($scope.links[keyLink]);
					}
				});
				var project = $scope.projects[keyProject];
				project["links"] = links;
				$scope.projects[keyProject] = project;
			});
			$ionicLoading.hide();
		}).catch(function (error) {
			var networkState = navigator.connection.type;
			if (networkState != Connection.NONE) {
				$scope.getProjects();
			}
		});


	}
	function getURL(namePhoto) {
		var urlPhoto = 'http://talabard-jeremy.esy.es/img/';
		return urlPhoto.concat(namePhoto);
	};
})	

.controller('ProjectCtrl', function ($scope, ProjectService, SLink,ClickButtonService,$ionicLoading,$ionicPopup) {
	$scope.clickButton = function(link){
		var str = link.libllink;
		if(str.indexOf("rar") !== -1 
		|| str.indexOf("zip") !== -1 
		|| str.indexOf("7z") !== -1 
		|| str.indexOf("jar") !== -1 
		|| str.indexOf("exe") !== -1)
		{
			$ionicPopup.show(
			{
				template: '',
				title: 'Problème',
				subTitle: 'Vous ne pouvez pas ouvrir ce document (zip, jar ou exe)',
				scope: $scope,
				buttons: [
				{text: 'Ok',
					type: 'button-positive',
					onTap: function (e) {
					
					}
				}]
			});
		}
		else{
			ClickButtonService.execute(link);
		}
	}
	$scope.getProjects = function(){
		$ionicLoading.show({
		  template: 'Chargement...',
		  duration: 3000
		});
		SLink.all().then(function (response) {
			$scope.links = response.data;
		}).catch(function (error) {
			var networkState = navigator.connection.type;
			if (networkState != Connection.NONE) {
				$scope.getProjects();
			}
		});
		ProjectService.all().then(function (response) {
			$scope.projects = response.data;
			angular.forEach($scope.projects, function (project, keyProject)
			{
				$scope.projects[keyProject].photo  = getURL($scope.projects[keyProject].photo);
				var links = [];
				angular.forEach($scope.links, function (value, keyLink)
				{	
					if($scope.links[keyLink].idLinks == $scope.projects[keyProject].idlinks){
						links.push($scope.links[keyLink]);
					}
				});
				var project = $scope.projects[keyProject];
				project["links"] = links;
				$scope.projects[keyProject] = project;

			});
			$ionicLoading.hide();
		}).catch(function (error) {
			var networkState = navigator.connection.type;
			if (networkState != Connection.NONE) {
				$scope.getProjects();
			}
		});
	}
	function getURL(namePhoto) {
		var urlPhoto = 'http://talabard-jeremy.esy.es/img/';
		return urlPhoto.concat(namePhoto);
	};
})

.controller('HobieCtrl', function ($scope, HobiesService, SLink,ClickButtonService,$ionicLoading,$ionicPopup) {

	$scope.clickButton = function(link){
		var str = link.libllink;
		if(str.indexOf("rar") !== -1 
		|| str.indexOf("zip") !== -1 
		|| str.indexOf("7z") !== -1 
		|| str.indexOf("jar") !== -1 
		|| str.indexOf("exe") !== -1)
		{
			$ionicPopup.show(
			{
				template: '',
				title: 'Problème',
				subTitle: 'Vous ne pouvez pas ouvrir ce document (zip, jar ou exe)',
				scope: $scope,
				buttons: [
				{text: 'Ok',
					type: 'button-positive',
					onTap: function (e) {
					
					}
				}]
			});
		}
		else{
			ClickButtonService.execute(link);
		}
	}
	$scope.getHobies = function(){
		$ionicLoading.show({
		  template: 'Chargement...',
		  duration: 3000
		});
		SLink.all().then(function (response) {
			$scope.links = response.data;
		}).catch(function (error) {
			var networkState = navigator.connection.type;
			if (networkState != Connection.NONE) {
				$scope.getHobies();
			}
		});
		HobiesService.all().then(function (response) {
			$scope.hobies = response.data;
			angular.forEach($scope.hobies, function (hobie, keyHobie)
			{
				$scope.hobies[keyHobie].photo  = getURL($scope.hobies[keyHobie].photo);
				var links = [];
				angular.forEach($scope.links, function (value, keyLink)
				{	
					if($scope.links[keyLink].idLinks == $scope.hobies[keyHobie].idlinks){
						links.push($scope.links[keyLink]);
					}
				});
				var hobie = $scope.hobies[keyHobie];

				hobie["links"] = links;
				$scope.hobies[keyHobie] = hobie;
			}).catch(function (error) {
				var networkState = navigator.connection.type;
				if (networkState != Connection.NONE) {
					$scope.getHobies();
				}
			});
			$ionicLoading.hide();
		});
	}
	function getURL(namePhoto) {
		var urlPhoto = 'http://talabard-jeremy.esy.es/img/';
		return urlPhoto.concat(namePhoto);
	};
})

.controller('HeadCtrl', function ($scope, SHead,$ionicLoading) {
	$scope.getHead = function (id) {
		$ionicLoading.show({
		  template: 'Chargement...',
		  duration: 3000
		});
		SHead.all().then(function (response) {
			angular.forEach(response.data, function (value, key) {
				if (key === id) {
					$scope.head = value;
				}
			});
			$ionicLoading.hide();
		}).catch(function (error) {
			var networkState = navigator.connection.type;
			if (networkState != Connection.NONE) {
				$scope.getHead();
			}
		});
	};
})

.controller('CVCtrl', function ($scope,SCv, $cordovaFileTransfer, $cordovaFileOpener2,$ionicPopup,$ionicLoading) {
	$scope.getCV = function () {
		$ionicLoading.show({
		  template: 'Chargement...',
		  duration: 3000
		});
		SCv.get().then(function (response) {
			$scope.cv = response.data;
			$scope.cv = $scope.cv[0];
			$ionicLoading.hide();
		}).catch(function (error) {
			var networkState = navigator.connection.type;
			if (networkState != Connection.NONE) {
				$scope.getCV();
			}
		});
	};
	$scope.clickButtonCv = function (URL, File_Name) {
		if (URL === null && File_Name === null) {
			return;
		} else {
			var networkState = navigator.connection.type;
			if (networkState === Connection.NONE) {
				return;
			} else {
				window.requestFileSystem(LocalFileSystem.PERSISTENT, 5 * 1024 * 1024, function (fileSystem) {
					$cordovaFileTransfer.download(URL,
					fileSystem.root.toURL() + "TalabardJeremy/"+ File_Name, {}, true).then(function (result) {
						$cordovaFileOpener2.open(
								fileSystem.root.toURL() + "TalabardJeremy/"+ File_Name,
								'application/pdf'
								).then(function () {
						},
								function (err) {
									showModalErreur();
								});
					}, function (error) {
						showModalErreur();
					});
				}, function (error) {
					showModalErreur();
				});
			}
		}
	};
	function showModalErreur(){
		$ionicPopup.show(
		{
			template: '',
			title: 'Problème',
			subTitle: 'Erreur lors du téléchargement du fichier',
			scope: $scope,
			buttons: [
			{ text: 'Ok',
				type: 'button-assertive'}
			]
		});
	}
})

.controller('HomeCtrl', function ($scope,SDescription,$ionicLoading) {
	var urlPhoto = 'http://talabard-jeremy.esy.es/img/';

	$scope.getDescription = function () {
		$ionicLoading.show({
		  template: 'Chargement...',
		  duration: 3000
		});
		SDescription.get().then(function (response) {
			$scope.description = response.data;
			
			$scope.description = $scope.description[0];
			$scope.photo = urlPhoto.concat($scope.description.photo);
			$ionicLoading.hide();
		}).catch(function (error) {
			var networkState = navigator.connection.type;
			if (networkState != Connection.NONE) {
				$scope.getDescription();
			}
		});
		
	};
})

.controller('ConnectionCtrl', function ($scope,$ionicPopup)
{
	document.addEventListener("offline", checkConnection, false);
	function checkConnection() {
		$ionicPopup.show(
		{
			template: '',
			title: 'Problème de connexion',
			subTitle: 'Activer le wifi ou les données mobiles',
			scope: $scope,
			buttons: [
			{text: 'Rééssayer',
				type: 'button-positive',
				onTap: function (e) {
					location.reload(true);
				}
			},
			{text: 'Quitter',
				type: 'button-assertive',
				onTap: function (e) {
					ionic.Platform.exitApp();
				}
			}]
		});
	}
	
})

.controller('SkillCtrl', function ($scope,SkillService,$ionicLoading) {
	$scope.getSkills = function(){
		$ionicLoading.show({
		  template: 'Chargement...',
		  duration: 3000
		});
		SkillService.all().then(function (response) {
			$scope.skills = response.data;
			angular.forEach($scope.skills, function (value, key)
			{
				$scope.skills[key].image  = getURL($scope.skills[key].image);	
			});
			$ionicLoading.hide();
		}).catch(function (error) {
				$scope.getSkills();
		});
	}
	function getURL(namePhoto) {
		var urlPhoto = 'http://talabard-jeremy.esy.es/img/';
		return urlPhoto.concat(namePhoto);
	};
	
});

