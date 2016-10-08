function nav()
{
	document.write('<nav><section><a href="index.html" class="en-tete">MENU</a>');
	document.write('<ul><li><a href="page_inexistante.html">Actualités</a></li>');
	document.write('<li><a href="methode_debutant.html">Réussir le cube !</a></li>');
	document.write('<li><a href="page_inexistante.html">Speedcubing 3x3</a></li>');
	document.write('<li><a href="page_inexistante.html">Officiels WCA</a></li>');
	document.write('<li><a href="page_inexistante.html">Encyclopédie</a></li>');
	document.write('<li><a href="page_inexistante.html">Catalogue</a></li>');
	document.write('<li><a href="page_inexistante.html">Entretient / Modding</a></li>');
	document.write('<li><a href="page_inexistante.html">Cubes Exotiques</a></li></ul></section>');
	document.write('<section><a href="contact.html" class="en-tete">Nous contacter :</a><ul>');
	document.write('<li><a href="mailto:matthieu.aubert17@gmail.com">Cubeur-manchot</a></li>');
	document.write('<li><a href="mailto:enzoguerin@gmail.com">Bushizo</a></li>');
	document.write('<li><a href="mailto:flodedge@gmail.com">Blenderiste09</a></li></ul></sections></nav>');
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
	html += '<a href="https://github.com/Cubeur-manchot/La-Tete-Dans-le-Cube"><img src="images/logo_github.png" class="icone rond" style="border-radius: 10px;"/></a>';
	html += '<a href="https://www.facebook.com/cubing.LaTeteDansleCube/?fref=ts"><img src="images/logo_facebook.png" class="icone carre"/></a>'
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

