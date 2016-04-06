<html>
  <head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	
    <title>Prueba Conceptos</title>
	
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/bootstrap-theme.min.css" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet">
	
  </head>
  <body ng-app="app" ng-controller="userControl">
	<div class="container">
		
		<div class="jumbotron">
			<span class="">(Jefferson S. Castañeda G.)</span>
			 <h2 class="">Prueba Conceptos</h2>			
		</div>
		<div class="row"></div>
		<div class="well">
			<div class="login-container">
            <div id="output"></div>
            <div class="avatar"></div>
            <div class="form-box">
                <form name="userForm" novalidate >
					<div class="form-group" ng-class="{ 'has-error': userForm.user.$invalid && userForm.user.$dirty }" >
							<input name="user" type="text" ng-model="user.user" placeholder="Usuario" class="form-control" required>						
							<span ng-show="ex.user.$error.required">Usuario requerido</span>
					</div>
                    <div class="form-group" ng-class="{ 'has-error': userForm.pass.$invalid && userForm.pass.$dirty }" >
								<input name="pass" type="password" ng-model="user.pass" placeholder="contraseña" class="form-control" required>
					</div>
                    <div class="mensaje">{{mensaje}}</div>
                    <button class="btn btn-info btn-block login" type="submit" ng-click="login()" data-ng-disabled="!userForm.$valid">Login</button>
                </form>
            </div>
			</div>
					
		</div>
	</div>
	<div class="row"></div>
	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/angular.min.js"></script>
	<script src="js/angular-cookies.min.js"></script>
	<script src="js/script.js"></script>
	
	
</body>
</html>