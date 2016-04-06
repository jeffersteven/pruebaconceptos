<html>
  <head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	
    <title>Resultados|Prueba Conceptos</title>
	
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/bootstrap-theme.min.css" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet">
	
  </head>
  <body ng-app="app" ng-controller="userControl">
	  <div class="container">
		
		<div class="jumbotron">
			<span class="">Usuario:{{datos.user}}</span><br>
			<button class="btn btn-primary" ng-click="borrarCookies()">Cerrar sesión</button>
			 <h2 class="">Prueba Conceptos</h2>			
		</div>
		<div class="row"></div>
		<div class="well">
			
			<div class="info">
				<h3 class="">Datos ingresados por: {{datos.user}}</h3>
				Nombre: {{datos.nombre}}<br>
				Apellido: {{datos.apellido}}<br>
				Estado civil: {{datos.estado}}<br>
				Fecha de nacimiento: {{datos.fecha}}<br>
				Sueldo: {{datos.sueldo}}<br>
				Correo electrónico: {{datos.correo}}</br>
				Departamento: {{datos.departamento}}<br>
				Ciudad: {{datos.ciudad}}<br>
			</div>
			<br><br>
			<a href="maquetacion.php">Ejemplo maquetación web</a>
		</div>
	<div class="row"></div>
	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/angular.min.js"></script>
	<script src="js/angular-cookies.min.js"></script>
	<script src="js/script.js"></script>

	
	
	
</body>
</html>