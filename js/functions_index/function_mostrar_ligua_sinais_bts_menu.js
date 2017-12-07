window.localStorage.clear();

var botoesMenu = document.getElementById("espacoBotoesMenu").querySelectorAll("input");
var hoversMenu = document.getElementById("espacoHoversMenu").querySelectorAll("div");

for (var i = 0; i < botoesMenu.length; i++) {
	botoesMenu[i].onmouseover = function() {
		this.style.cursor = "pointer";
		this.style.border = "4px solid #f3efe2";

		for (var i = 0; i < hoversMenu.length; i++) {
			if (this.getAttribute("name") == hoversMenu[i].getAttribute("name")) {
				hoversMenu[i].style.opacity = "1";
			}
		}
	}

	botoesMenu[i].onmouseout = function() {
		this.style.cursor = "default";
		this.style.border = "4px solid #283891";

		for (var i = 0; i < hoversMenu.length; i++) {
			if (this.getAttribute("name") == hoversMenu[i].getAttribute("name")) {
				hoversMenu[i].style.opacity = "0";
			}
		}
	}

	botoesMenu[i].onclick = function() {
		if (this.getAttribute("name") == "iniciar") {
			window.location = "html/adicionar_informacoes_equipe.html";
		}
		else if (this.getAttribute("name") == "regras") {
			window.location = "html/regras1.html";
		}
		else if (this.getAttribute("name") == "sobre") {
			window.location = "html/sobre1.html";
		}
		else {
			window.close();
		}
	}
}