function create_cube_NxNxN_2D(taille,u,b,l,r,f)
{
	var faces = { 'arriere': b, 'gauche': l, 'droite': r , 'avant': f};
	var html = '<div class="cube_' + taille + 'x' + taille + 'x' + taille + '_2D"><div class="face arriere"><div class="face_arriere">';
	for (var i = 0; i < taille; i++) {
		html += '<div class="sticker ' + b[i] + '"></div>';
	}
	html += '</div></div>';
	html += '<div class="face gauche"><div class="face_gauche">';
	for (var i = 0; i < taille; i++) {
		html += '<div class="sticker ' + l[i] + '"></div>';
	}
	html += '</div></div>';
	html += '<div class="face droite"><div class="face_droite">';
	for (var i = 0; i < taille; i++) {
		html += '<div class="sticker ' + r[i] + '"></div>';
	}
	html += '</div></div>';
	html += '<div class="face avant"><div class="face_avant">';
	for (var i = 0; i < taille; i++) {
		html += '<div class="sticker ' + f[i] + '"></div>';
	}
	html += '</div></div>';
	html += '<div class="face haut">';
	for (var i = 0; i < taille*taille; i++) {
		html += '<div class="sticker ' + u[i] + '"></div>';
	}
	html += '</div></div>';
	document.write(html);
}
function create_cube_NxNxN_3D(taille,u,f,r)
{
	var faces = { 'haut': u, 'avant': f, 'droite': r };
	var html = '<div class="cube_3D c'+taille+'x'+taille+'x'+taille+'_3D">';
	for (var face in faces) {
		html += '<div class="face ' + face + '">';
		for (var color of faces[face])
			html += '<div class="sticker ' + color + '"></div>';
		html += '</div>';
	}
	html += '</div>';
	document.write(html);
}