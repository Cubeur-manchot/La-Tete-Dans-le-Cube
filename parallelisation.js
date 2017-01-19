function nav()
{
	var html = '<nav><section><a href="index.html" class="en-tete">MENU</a>';
	html += '<ul><li><a href="page_inexistante.html">(indisponible) Actualités</a></li>';
	html += '<li><a href="methode_debutant.html">Réussir le cube !</a></li>';
	html += '<li><a href="page_inexistante.html">(indisponible) Speedcubing 3x3</a></li>';
	html += '<li><a href="page_inexistante.html">(indisponible) Officiels WCA</a></li>';
	html += '<li><a href="page_inexistante.html">(indisponible) Encyclopédie</a></li>';
	html += '<li><a href="page_inexistante.html">(indisponible) Catalogue</a></li>';
	html += '<li><a href="page_inexistante.html">(indisponible) Entretient / Modding</a></li>';
	html += '<li><a href="page_inexistante.html">(indisponible) Cubes Exotiques</a></li></ul></section>';
	html += '<section><a href="contact.html" class="en-tete">Nous contacter :</a><ul>';
	html += '<li><a href="mailto:matthieu.aubert17@gmail.com">Cubeur-manchot</a></li>';
	html += '<li><a href="mailto:enzoguerin@gmail.com">Bushizo</a></li>';
	html += '<li><a href="mailto:flodedge@gmail.com">Blenderiste09</a></li></ul></sections></nav>';
	document.write(html);
}
function scroll() { document.write('<a href="#" id="scroll_to_top"><img src="images/scroll-top.png" alt="Scroll to top"/></a>'); }
function banniere() { document.write('<header><img id="banniere"  src="images/banniere.png" alt="Bannière du site"/></header>'); }
function footer()
{
	var html = '<footer><p>Site en développement par Cubeur-Manchot, Bushizo et Blenderiste09.</p>';
	html += '<a href="https://github.com/Cubeur-manchot/La-Tete-Dans-le-Cube" target="_blank"><img src="images/logo_github.png" class="icone rond"/></a>';
	html += '<a href="https://plus.google.com/104817566374853194180" target="_blank"><img src="images/logo_google_plus.png" class="icone carre"/></a>';
	html += '<p>Pour toute demande, suggestion ou menace de mort, envoyez à l\'adresse latetedanslecube@gmail.com</p></footer>';
	document.write(html);
}
function nav_scroll() { scroll(); nav(); }