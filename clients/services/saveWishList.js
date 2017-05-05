anguler.module('hikingApp')
.service('saveWishListHike', ($http, data) => {
  this.saveWishListHike = (data) => {
    $http({
      method: 'POST',
      url: 'api/user/wishListHike', //<----need user id?
      data: JSON.stringify({
        id: $scope.data.trailId,
        name: $scope.data.trailName,
        description: $scope.data.trailDescription,
        userId: $scope.data.userId
      })
    })
    .success((data) => {
      console.log(data, 'Wish list hike saved');
    })
    .error((data, status) => {
      console.log(status, 'error saving wish list hike');
    });
  };
})