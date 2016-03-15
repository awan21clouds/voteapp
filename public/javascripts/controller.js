var app = angular.module('VotingApp', []);

app.controller('candidatCTRL', function($scope, $http) {
    console.log('Hello world from controller');
    var refresh = function(){
        $http.get('/candidate/read').success(function(response){
            console.log('I got the data I requested');
            console.log(response);
            $scope.candidates = response;
        });
    }
    //
    var reset = function(){
        $scope.candidate = null;
    }

    //initDT();
    refresh();
    //reset();

    $scope.save = function(){
        if($scope.candidate._id==undefined){
            $http.post('/candidate/save', $scope.candidate).success(function(response){
                console.log(response);
                refresh();
                reset();
            });
        }else{
            $http.put('/candidate/update/'+$scope.candidate._id, $scope.candidate).success(function(response){
                refresh();
                reset();
            });
        }

    }

    $scope.delete = function(id){
        console.log(id);
        $http.delete('/candidate/delete/'+id).success(function(response){
            console.log(response);
            refresh();
        });
    }

    $scope.readById = function(id){
        console.log(id);
        $http.get('/candidate/read/'+id).success(function(response){
            $scope.candidate = response;
        });
    }
});

app.controller('voterCTRL', function($scope, $http) {
    console.log('Hello world from controller');


    var reset = function(){
        $scope.voter = null;
    }


    $scope.save = function(){
        $http.post('/voter/save', $scope.voter).success(function(response){
            console.log(response);
            window.location='/voting/'+response._id;
        });
    }
});

app.controller('votingCTRL', function($scope, $http) {
    console.log('Hello world from controller');
    var currentURL = window.location.href;
    $http.get('/candidate/read').success(function(response){
        console.log('I got the data I requested');
        console.log(response);
        $scope.candidates = response;
        //$scope.voter = currentURL.split('/')[currentURL.split('/').length-1];
    });

    $scope.save = function(candidate){

        var voting = {
            'voter': currentURL.split('/')[currentURL.split('/').length-1],
            'candidate':candidate
        }
        $http.post('/voting/save', voting).success(function(response){
            console.log(response);
        });
    }
});

