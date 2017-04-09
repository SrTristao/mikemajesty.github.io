(function (angular) {
	'use strict';
	angular.module('app')
		.controller('portifolioController', ['$scope', '$filter', '$sce', function ($scope, $filter, $sce) {

			$scope.year = (new Date().getFullYear() - 2015);

			$scope.changeModalText = (language) => {
				if (language === 'C#') {
					$scope.title = language;
					$scope.body = $sce.trustAsHtml(`
									<ul class='list-group'> 
										<li class='list-group-item'>Entity Framework <span class='badge'>50 Horas</span></li> 
										<li class='list-group-item'>ASP NET MVC <span class='badge'>850 Horas</span></li> 
										<li class='list-group-item'>Windows Form <span class='badge'>430 Horas</span></li> 
										<li class='list-group-item'>NUnit <span class='badge'>10 Horas</span></li>
										<li class='list-group-item'>Simple Injector <span class='badge'>10 Horas</span></li> 
									</ul>`);
				}
				if (language === 'Angular') {
					$scope.title = language;
					$scope.body = $sce.trustAsHtml(`
									<ul class='list-group'> 
										<li class='list-group-item'>Diretivas <span class='badge'>180 Horas</span></li> 
										<li class='list-group-item'>Routes <span class='badge'>90 Horas</span></li> 
										<li class='list-group-item'>Controllers <span class='badge'>60 Horas</span></li> 
										<li class='list-group-item'>Services <span class='badge'>60 Horas</span></li>
										<li class='list-group-item'>Módulos <span class='badge'>45 Horas</span></li> 
									</ul>`);
				}
				if (language === 'Java') {
					$scope.title = language;
					$scope.body = $sce.trustAsHtml(`
									<ul class='list-group'> 
										<li class='list-group-item'>Hibernate <span class='badge'>30 Horas</span></li> 
										<li class='list-group-item'>JSP - Servlet <span class='badge'>180 Horas</span></li> 
										<li class='list-group-item'>JUnit <span class='badge'>60 Horas</span></li> 
										<li class='list-group-item'>JSF <span class='badge'>260 Horas</span></li>
										<li class='list-group-item'>Java 8 <span class='badge'>80 Horas</span></li> 
										<li class='list-group-item'>Android <span class='badge'>360 Horas</span></li>
									</ul>`);
				}
				if (language === 'NodeJs') {
					$scope.title = language;
					$scope.body = $sce.trustAsHtml(`
									<ul class='list-group'> 
										<li class='list-group-item'>ExpressJs <span class='badge'>300 Horas</span></li> 
										<li class='list-group-item'>Routes <span class='badge'>50 Horas</span></li> 
										<li class='list-group-item'>Controller <span class='badge'>60 Horas</span></li> 
										<li class='list-group-item'>Services <span class='badge'>40 Horas</span></li>
									</ul>`);
				}
				if (language === 'SQL') {
					$scope.title = language;
					$scope.body = $sce.trustAsHtml(`
									<ul class='list-group'> 
										<li class='list-group-item'>Trigger <span class='badge'>10 Horas</span></li> 
										<li class='list-group-item'>Functions <span class='badge'>15 Horas</span></li> 
										<li class='list-group-item'>Stored Procedure <span class='badge'>60 Horas</span></li> 
										<li class='list-group-item'>Views <span class='badge'>40 Horas</span></li>
									</ul>`);
				}
				if (language === 'JavaScript') {
					$scope.title = language;
					$scope.body = $sce.trustAsHtml(`
									<ul class='list-group'> 
										<li class='list-group-item'>JQuery <span class='badge'>60 Horas</span></li> 
										<li class='list-group-item'>VueJs <span class='badge'>40 Horas</span></li>
										<li class='list-group-item'>Angular <span class='badge'>435 Horas</span></li>
										<li class='list-group-item'>Prototype Patterns <span class='badge'>15 Horas</span></li> 
										<li class='list-group-item'>JSON Syntax <span class='badge'>10 Horas</span></li> 
									</ul>`);
				}

			};

			$scope.teste = function () {
				html2canvas(document.getElementById("printDiv"), {
					onrendered: function (canvas) {

						var imgData = canvas.toDataURL('image/png');
						var doc = new jsPDF('p', 'mm', [400, 250]);

						doc.addImage(imgData, 'PNG', -4, -0.2);
						doc.save('MikeRodriguesDeLima-CV.pdf');
					}
				});
			};
		}]);
})(window.angular);