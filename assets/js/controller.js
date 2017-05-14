(function (angular) {
	'use strict';
	angular.module('app')
		.controller('portifolioController', ['$scope', '$filter', '$sce', '$timeout', function ($scope, $filter, $sce, $timeout) {

			$scope.year = (new Date().getFullYear() - 2015);

			$scope.changeLanguage = (language) => {
				if (language === 'BR') {
					$("#introduction").text(`Tenho ${$scope.year} anos de experiência em desenvolvimento web em projetos financeiros e varejo, com vivência
                            em diversas plataformas como: C#, Java, NodeJs e Angular, sempre obtendo protagonismo nos projetos
                            que participei . Bacharel em sistemas de informação, convivi com diversos desafios nesse período
                            devido a minha proatividade e dinamismo, sempre surpreendendo nos desafios atribuídos.`);
					$('.tagline').text('Desenvolvedor Full Stack');
					$('#perfil').text("PERFIL PROFISSIONAL");
					$("#formacao").text("Formação");
					$("#faculdade").text("Faculdade Barão de Piratininga");
					$("#curso").text("Sistemas de Informação");
					$("#idiomas").text("IDIOMAS");
					$("#portugues").html("Português <span class='lang-desc' id='nativo'>(Nativo)</span>");
					$("#ingles").html("Inglês <span class='lang-desc'>(Intermediário)</span>");
					$("#experience").html("<i id='exp' class='fa fa-briefcase'></i>Experiências");
					$("#jobtegra-title").text("Desenvolvedor Web");
					$("#job-desc-tegra").text("Desenvolvimento em diversas plataformas e linguagens como: C#, Java , Node Js e Angular.");
					$("#tegra-job-time").text("2015 - Atualmente");
					$("#my-project").html("<i id='project' class='fa fa-archive'></i>Projetos");
					//projetos
					$("#persor-project").text("Projetos pessoais");
					$("#chocobo").text("Componente de calendário para range de datas em AngularJs.");
					$("#coovalidator").text("Biblioteca em c# para validação de TextBox e objetos.");
					$("#excalibur").text("Componente de Dual List em AngularJs e bootstrap.");
					$("#vuemonthcalendar").text("Componente para escolha de mês e ano em VueJs e VueMaterial.");
					$("#coolreport").text("Biblioteca em c# para gerar relatórios com Entity Framework.");
					$("#vueduallist").text("Componente de Dual List em VueJs e VueMaterial.");
					$("#beaconmusic").text("Jukebox para pubs, integrado com um aplicativo mobile.");
					$("#cooldatagrid").text("Biblioteca em c# para melhorar a interface de um DataGridView.");
					$("#comandafacil").text("Sistema de comanda eletronica para comércios.");
					$("#coolsync").text("Biblioteca em c# para execução em multithread.");
					//projetos hackaton
					$("#pagfarma").text("(GS1 BRASIL 2016 - Campeão) - Aplicativo mobile para leilão reverso de remédios.");
					$("#econnect").text("(UOL HOST 2016 - Vice Campeão) - Chatbot para auxiliar o empreendedor a iniciar seu negócio.");
					$("#hackzurich").text("(HACK ZURICH 2016) - Aplicação para auxiliar encontrar pessoas em caso de desastres.");
					$("#payforce").text("(SANTANDER 2016 - Semifinalista) - Carteira digital que usa seu número de celular como token de pagamento.");
					$("#relato-serasa").text("(SERASA EXPERIAN 2017) - Assistente digital para auxiliar a análise de crédito.");
				}
				if (language === 'SP') {
					$("#introduction").text(`Tengo ${$scope.year} años de experiencia en el desarrollo web en proyectos financieros y al por menor, con experiencia en múltiples plataformas como C#, Java, NodeJS y ángulo, obteniendo siempre papel en los proyectos que participaron. La licenciatura en sistemas de información, vivió con muchos desafíos en este periodo debido a mi proactividad y dinamismo, siempre sorprendiendo a los desafíos asignados.`);
					$('.tagline').text('Desarrollador Full Stack');
					$('#perfil').text("PERFIL PROFESIONAL");
					$("#formacao").text("Formación");
					$("#faculdade").text("Facultad Barão de Piratininga");
					$("#curso").text("Sistema de Información");
					$("#idiomas").text("IDIOMAS");
					$("#portugues").html("Portugués <span class='lang-desc' id='nativo'>(Nativo)</span>");
					$("#ingles").html("Inglés <span class='lang-desc'>(Intermedio)</span>");
					$("#experience").html("<i id='exp' class='fa fa-briefcase'></i>Experiencias");
					$("#jobtegra-title").text("Desarrollador Web");
					$("#job-desc-tegra").text("Desarrollo en diversas plataformas y lenguajes como C#, Java, Node Js y Angular.");
					$("#my-project").html("<i id='project' class='fa fa-archive'></i>Proyectos");
					$("#tegra-job-time").text("2015 - Actualmente");
					//projetos
					$("#persor-project").text("Proyectos personales");
					$("#chocobo").text("Componente de calendario para rango de fechas en AngularJs.");
					$("#coovalidator").text("Biblioteca en C# para la validación de TextBox y objetos.");
					$("#excalibur").text("Componente de Dual List en AngularJs y bootstrap.");
					$("#vuemonthcalendar").text("Componente para elección de mes y año en VueJs y VueMaterial.");
					$("#coolreport").text("Biblioteca en C# para generar informes con Entity Framework.");
					$("#vueduallist").text("Componente de doble lista en VueJs y VueMaterial.");
					$("#beaconmusic").text("Jukebox para pubs, integrado con una aplicación móvil.");
					$("#cooldatagrid").text("Biblioteca en C# para mejorar la interfaz de un DataGridView.");
					$("#comandafacil").text("Sistema de codigo de barras para comercios.");
					$("#coolsync").text("Biblioteca en C# para ejecutarse en multiproceso.");
					//projetos hackaton
					$("#pagfarma").text("(GS1 BRASIL 2016 - Campeón) - Aplicación móvil para subasta de remedio de medicamentos.");
					$("#econnect").text("(UOL HOST 2016 - Vice Campeón) - Chatbot para ayudar al emprendedor a iniciar su negocio.");
					$("#hackzurich").text("(HACK ZURICH 2016) - Aplicación para ayudar a encontrar personas en caso de desastres.");
					$("#payforce").text("(SANTANDER 2016 - Semifinalista) - Cartera digital que utiliza su número de móvil como token de pago.");
					$("#relato-serasa").text("(SERASA EXPERIAN 2017) - Asistente digital para auxiliar el análisis de crédito.");
				}
				if (language === 'US' || language === 'UK') {
					$("#introduction").text(`I have ${$scope.year} years of experience in web development in financial and retail projects, with experience in several platforms such as C#, Java, NodeJs and Angular, always taking center stage in the projects I participated in. Bachelor in information systems, I lived with several challenges in this period due to my proactivity and dynamism, always surprising in the challenges assigned.`);
					$('.tagline').text('Full Stack Developer');
					$('#perfil').text("PROFESSIONAL PROFILE");
					$("#formacao").text("Formation");
					$("#faculdade").text("Faculty Barão de Piratininga");
					$("#curso").text("Information Systems");
					$("#idiomas").text("LANGUAGES");
					$("#portugues").html("Portuguese <span class='lang-desc' id='nativo'>(Native)</span>");
					$("#ingles").html("English <span class='lang-desc'>(Intermediate)</span>");
					$("#experience").html("<i id='exp' class='fa fa-briefcase'></i>Experience");
					$("#jobtegra-title").text("Web Developer");
					$("#job-desc-tegra").text("Development in several platforms and languages like C#, Java, Node Js and Angular.");
					$("#tegra-job-time").text("2015 - Currently");
					$("#my-project").html("<i id='project' class='fa fa-archive'></i>  Projects");
					//projetos
					$("#persor-project").text("Personal projects");
					$("#chocobo").text("Calendar component for date range in AngularJs.");
					$("#coovalidator").text("C# Library for validation of TextBox and objects.");
					$("#excalibur").text("Dual List component in AngularJs and bootstrap.");
					$("#vuemonthcalendar").text("Component for choosing month and year in VueJs and VueMaterial.");
					$("#coolreport").text("C# Library to generate reports with Entity Framework.");
					$("#vueduallist").text("Dual List component in VueJs and VueMaterial.");
					$("#beaconmusic").text("Jukebox for pubs, integrated with a mobile application.");
					$("#cooldatagrid").text("C# Library to improve the interface of a DataGridView.");
					$("#comandafacil").text("Bar code system for trades.");
					$("#coolsync").text("C# library for multithreaded execution.");
					//projetos hackaton
					$("#pagfarma").html("(GS1 BRASIL 2016 - Champion) - Mobile application for reverse auction of medicines.");
					$("#econnect").text("(UOL HOST 2016 - Vice Champion) - Chatbot to help the entrepreneur start their business.");
					$("#hackzurich").text("(HACK ZURICH 2016) - Application to help find people in case of disasters.");
					$("#payforce").text("(SANTANDER 2016 - Semifinalist) - Digital wallet that uses your mobile number as payment token.");
					$("#relato-serasa").text("(SERASA EXPERIAN 2017) - Digital assistant to assist in credit analysis.");
				}
			};

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

			$scope.downloadPdf = function () {
				$(".profile").css("display", "none");
				$("#user").css("display", "none");
				$("#exp").css("display", "none");
				$("#project").css("display", "none");
				$("#skill").css("display", "none");
				$("#foto").css("border-radius", "100px");

				html2canvas(document.getElementById("printDiv"), {
					onrendered: function (canvas) {

						var imgData = canvas.toDataURL('image/png');
						var doc = new jsPDF('p', 'mm', [390, 250]);

						doc.addImage(imgData, 'PNG', -4, -0.2);
						doc.save('MikeRodriguesDeLima-CV.pdf');

						$timeout(function () {
							$('#sppiner').modal('toggle');
							$("#user").css("display", "");
							$("#exp").css("display", "");
							$("#project").css("display", "");
							$("#skill").css("display", "");
							$(".profile").css("display", "");
						}, 2000);
					}
				});
			};
		}]);

})(window.angular);