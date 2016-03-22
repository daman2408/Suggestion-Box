app.controller('HomeController', ['$scope','suggestions', function($scope, suggestions){
    $scope.helloWorld = 'Hello, AngularJS!';
    $scope.posts = suggestions.posts;
    $scope.addSuggestion = function(){
      //if input is empty
      if(!$scope.title || $scope.title == ''){
        return;
      }
      //push suggestions into box
      $scope.posts.push({
        title: $scope.title,
        upvotes:0,
      });
      //after submit, clear input
      $scope.title='';

    };
    $scope.upVote = function(post){
        post.upvotes += 1;
    }

}]);
