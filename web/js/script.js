var	module = angular.module('app', ['ngCookies']);
var usuario;

module.controller('userControl',function($scope, $window, $cookies,$cookieStore, $filter) {
	
	if($cookieStore.get("user")!=undefined){			
		$scope.datos={
					nombre:$cookieStore.get("nombre"), 
					apellido:$cookieStore.get("apellido"), 
					estado:$cookieStore.get("estado"), 
					fecha:$filter("date")($cookieStore.get('fecha'),'dd-mm-yyyy'),
					sueldo:$cookieStore.get('sueldo'), 
					correo:$cookieStore.get('correo'),
					departamento:$cookieStore.get('departamento'),
					ciudad:$cookieStore.get('ciudad'),
					user:$cookieStore.get('user'),
					pass:$cookieStore.get('pass')
					};	
	}

	$scope.login = function() {
		$("#flogin").submit(function(e){
			return false;
		});
		var band=false;
		$.each(usuarios, function (i, valor) {
			if(valor.usuario==$scope.user.user && valor.pass==$scope.user.pass ){
				$cookieStore.put("user",$scope.user.user);
				$cookieStore.put("pass",$scope.user.pass);
				band=true;
			}
		});
		if(band){
			location.href="formulario.php";			
		}else{
			$scope.mensaje="Usuario o contraseña no validos.";
		}
	};	
	
	$scope.guardarCookies = function() {
		if($scope.userForm.$valid){
			$cookieStore.put("nombre",$scope.user.nombre);
			$cookieStore.put("apellido",$scope.user.apellido);
			$cookieStore.put("estado",$scope.user.estado);			
			$cookieStore.put("fecha",$scope.user.fecha);
			$cookieStore.put("sueldo",$scope.user.sueldo);
			$cookieStore.put("correo",$scope.user.correo);
			$cookieStore.put("departamento",$scope.user.departamento);
			$cookieStore.put("ciudad",$scope.user.ciudad);
			$window.alert("Usuario Registrado");
			location.href="resultados.php";
		}else{
			$window.alert("Campos invalidos.");			
		}
	};
	
	
	$scope.borrarCookies = function() {
		$scope.user = { nombre: '', apellido: '', estado: '',fecha: '', sueldo: '',
						correo: '',departamento: '',ciudad: '',  user:'', pass:'' };
		$cookieStore.remove("nombre");
		$cookieStore.remove("apellido");
		$cookieStore.remove("estado");
		$cookieStore.remove("fecha");		
		$cookieStore.remove("sueldo");
		$cookieStore.remove("correo");
		$cookieStore.remove("departamento");		
		$cookieStore.remove("ciudad");
		$cookieStore.remove("user");
		$cookieStore.remove("pass");
		location.href="index.php";
	};	  

});


var ciudades;
var departamentos;


var searchIntoJson = function (obj, column, value) {
    var results = [];
    var valueField;
    var searchField = column;
    for (var i = 0 ; i < obj.length ; i++) {
        valueField = obj[i][searchField].toString();
        if (valueField === value) {
            results.push(obj[i]);
        }
    }
    return results;
};

var loadDepartamentos = function () {
    $("#departamento").empty();
    $("#departamento").append('<option value="" selected="selected"></option>');
    $.each(departamentos, function (i, valor) {
        $("#departamento").append("<option id='"+valor.departamentoId+"' value='" + valor.nombreDepartamento + "'>" + valor.nombreDepartamento + "</option>");
    });
};

var loadCiudades = function (departamentoId) {
    var ciudadesDepto = searchIntoJson(ciudades, "departamentoId", departamentoId);
    $("#ciudad").empty();
    $("#ciudad").append('<option value="" selected="selected"></option>');
    $.each(ciudadesDepto, function (i, valor) {
        $("#ciudad").append('<option id="'+valor.nombreCiudad+valor.ciudadId+'" value="' + valor.nombreCiudad + '">' + valor.nombreCiudad + '</option>');
    });
};

$(document).ready(function () {
    
    $.getJSON("data/departamentos.json", function (data) {
        departamentos = data;
    });

    $.getJSON("data/ciudades.json", function (data) {
        ciudades = data;
        setTimeout(function () {
            if (ciudades !== undefined) {
                loadDepartamentos();
            }
        }, 2000);
    });
	
	$.getJSON("data/usuarios.json", function (data) {
			usuarios = data;
	});

    $("#departamento").change(function () {	
        var departamentoId = $("#departamento option:selected").attr("id");
        loadCiudades(departamentoId);
    });
});






