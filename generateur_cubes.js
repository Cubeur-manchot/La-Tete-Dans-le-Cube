function set_algos()
{
	var listes = document.getElementsByClassName('liste_cas');
	for (var h=0; h < listes.length; h++)
	{
		var liste = listes[h];
		var liste_cas = liste.getElementsByClassName('cas');
		var taille = liste.getAttribute('data-taille');
		var stage = liste.getAttribute('data-stage');
		switch(stage)
			{
				case 'OLL': stage = 'oll'; break;
				case 'WV': case 'MW': case 'SV': stage = 'wv'; break;
				case 'PLL': case 'ELL': case '2GLL': default: stage = 'pll'; break;
			}
		for (var i=liste_cas.length-1; i >= 0; i--)
		{
			var cas = liste_cas[i];
			var nom = cas.getElementsByClassName('nom')[0].innerHTML;
			var html_nom = '<div class="nom">' + nom + '</div>';
			var info = cas.getElementsByClassName('info')[0].innerHTML;
			var html_info = '<div class="info">' + info + '</div>';
			var algos = cas.getElementsByClassName('algo');
			var html_algos = '';
			for (var j=0; j < algos.length; j++)
			{
				var algo = algos[j].innerHTML;
				var html_bouton = '<a href="http://alg.cubing.net/?alg=' + algo + '&setup=(' + algo + ')\'" class="bouton" title="Animation"></a>';
				var html_algo = '<div class="algo">' + algo + '</div>';
				html_algos = '<div class="algo_bouton">' + html_bouton + html_algo + '</div>' + html_algos;
			}
			html_algos = '<div class="boite_algos">' + html_algos + '</div>';
			var html_image = '<img src="http://cube.crider.co.uk/visualcube.php?fmt=svg&size=150&pzl=' + taille + '&view=plan&case=' + algo + '&stage=' + stage + '"/>';
			liste_cas[i].innerHTML = html_image + html_nom + html_algos + html_info;
		}
	}
}