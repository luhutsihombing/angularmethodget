var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) 
{
    $scope.customers = null;
    $http.get("http://northwind.servicestack.net/customers?format=json")
   .then(function (response) 
   	{
   		$scope.customers = response.data.Customers;
   		$scope.ndata2 	 = response.data.Customers.length;
   		//console.log($scope.ndata2);
      var btn = document.createElement("BUTTON");
      var t = document.createTextNode($scope.ndata2);
      btn.appendChild(t);
      document.body.appendChild(btn);
      var ndata      = response.data.Customers.length;
      $scope.pagesizes = [5,10,15,20];
      $scope.pagesize = $scope.pagesizes[0];
      $scope.currentpage = 0;
      $scope.pagenumber  = Math.ceil(response.data.Customers.length / $scope.pagesize);
   	});

   	
    
    //console.log($customers.length);
   $scope.ordering = function(ordvar,by)
   {
   		ordvar = ordvar;
   		$scope.ordstatus = ordvar;
   		$scope.ord = by;
   		return ordvar;
   }
   $scope.paging = function(type)
   {
   	if(type == 0 && $scope.currentpage > 0)
   	{
   		--$scope.currentpage;
   	}else if(type==1 && $scope.currentpage < $scope.pagenumber-1)
   	{
   		++$scope.currentpage;
   	}
   }

   $scope.$watchCollection('hasil', function() 
   {
  		if($scope.hasil == undefined){
  			return;
  		}
  		$scope.currentpage = 0;
  		$scope.pagenumber  = Math.ceil($scope.hasil.length / $scope.pagesize);
  		console.log(Math.ceil(response.data.Customers.length / $scope.pagesize));
	});
   $scope.changeAction = function()
   {
    $scope.currentpage = 0;
      $scope.pagenumber  = Math.ceil($scope.hasil.length / $scope.pagesize);
   }
   

});