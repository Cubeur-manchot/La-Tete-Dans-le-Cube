function nav()
{
	var html = '<nav><section><a href="index.html" class="en-tete">MENU</a>';
	html += '<ul><li><a href="cube_generator.html">Générateur d\'images de cube</a></li>';
	html += '<ul><li><a href="page_inexistante.html">Actualités</a></li>';
	html += '<li><a href="methode_debutant.html">Réussir le cube !</a></li>';
	html += '<li><a href="page_inexistante.html">Speedcubing 3x3</a></li>';
	html += '<li><a href="page_inexistante.html">Officiels WCA</a></li>';
	html += '<li><a href="page_inexistante.html">Encyclopédie</a></li>';
	html += '<li><a href="page_inexistante.html">Catalogue</a></li>';
	html += '<li><a href="page_inexistante.html">Entretient / Modding</a></li>';
	html += '<li><a href="page_inexistante.html">Cubes Exotiques</a></li></ul></section>';
	html += '<section><a href="contact.html" class="en-tete">Nous contacter :</a><ul>';
	html += '<li><a href="mailto:matthieu.aubert17@gmail.com">Cubeur-manchot</a></li>';
	html += '<li><a href="mailto:enzoguerin@gmail.com">Bushizo</a></li>';
	html += '<li><a href="mailto:flodedge@gmail.com">Blenderiste09</a></li></ul></sections></nav>';
	document.write(html);
}

function scroll()
{
	document.write('<a href="#" id="scroll_to_top"><img src="images/scroll-top.png" alt="Scroll to top"/></a>');
}

function banniere()
{
	document.write('<header><img id="banniere"  src="images/banniere.png" alt="Bannière du site"/></header>');
}

function footer()
{
	var html = '<footer><p>Site en développement par Cubeur-Manchot, Bushizo et Blenderiste09.</p>';
	html += '<a href="https://github.com/Cubeur-manchot/La-Tete-Dans-le-Cube"><img src="images/logo_github.png" class="icone rond"/></a>';
	html += '<a href="https://plus.google.com/104817566374853194180"><img src="images/logo_google_plus.png" class="icone carre"/></a>';
	html += '<a href="plan_du_site.html"><img src="images/logo_sitemap.png" class="icone carre"/></a>';
	html += '<p>Pour toute demande, suggestion ou menace de mort, envoyez à l\'adresse latetedanslecube@gmail.com</p></footer>';
	document.write(html);
}

function nav_scroll()
{
	scroll();
	nav();
}

function nav_scroll_banniere()
{
	scroll();
	nav();
	banniere();
}

