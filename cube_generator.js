function create_cube_3x3x3_2D([u11,u12,u13,u21,u22,u23,u31,u32,u33],[b1,b2,b3],[l1,l2,l3],[r1,r2,r3],[f1,f2,f3])
{
	var html = '<div class="cube_3x3x3_2D"><div class="face arriere"><div class="face_arriere">';
		html += '<div id="b1" class="sticker ' + b1 + '"></div>';
		html += '<div id="b2" class="sticker ' + b2 + '"></div>';
		html += '<div id="b3" class="sticker ' + b3 + '"></div></div></div>';
	html += '<div class="face gauche"><div class="face_gauche">';
		html += '<div id="l1" class="sticker ' + l1 + '"></div>';
		html += '<div id="l2" class="sticker ' + l2 + '"></div>';
		html += '<div id="l3" class="sticker ' + l3 + '"></div></div></div>';
	html += '<div class="face droite"><div class="face_droite">';
		html += '<div id="r1" class="sticker ' + r1 + '"></div>';
		html += '<div id="r2" class="sticker ' + r2 + '"></div>';
		html += '<div id="r3" class="sticker ' + r3 + '"></div></div></div>';
	html += '<div class="face avant"><div class="face_avant">';
		html += '<div id="f1" class="sticker ' + f1 + '"></div>';
		html += '<div id="f2" class="sticker ' + f2 + '"></div>';
		html += '<div id="f3" class="sticker ' + f3 + '"></div></div></div>';
	html += '<div class="face haut">';
		html += '<div id="u11" class="sticker ' + u11 + '"></div>';
		html += '<div id="u12" class="sticker ' + u12 + '"></div>';
		html += '<div id="u13" class="sticker ' + u13 + '"></div>';
		html += '<div id="u21" class="sticker ' + u21 + '"></div>';
		html += '<div id="u22" class="sticker ' + u22 + '"></div>';
		html += '<div id="u23" class="sticker ' + u23 + '"></div>';
		html += '<div id="u31" class="sticker ' + u31 + '"></div>';
		html += '<div id="u32" class="sticker ' + u32 + '"></div>';
		html += '<div id="u33" class="sticker ' + u33 + '"></div></div></div>';
	document.write(html);
}

function create_cube_3x3x3_2D3(taille,[u11,u12,u13,u21,u22,u23,u31,u32,u33],b,l,r,f)
{
	var faces = { 'arriere': b, 'gauche': l, 'droite': r , 'avant': f};
	var b1 = b[0];
	var b2 = b[1];
	var b3 = b[2];
	for (var i = 0; i < taille; i++) {
	
	}
	var html = '<div class="cube_3x3x3_2D"><div class="face arriere"><div class="face_arriere">';
		html += '<div id="b1" class="sticker ' + b1 + '"></div>';
		html += '<div id="b2" class="sticker ' + b2 + '"></div>';
		html += '<div id="b3" class="sticker ' + b3 + '"></div></div></div>';
	html += '<div class="face gauche"><div class="face_gauche">';
		html += '<div id="l1" class="sticker ' + l1 + '"></div>';
		html += '<div id="l2" class="sticker ' + l2 + '"></div>';
		html += '<div id="l3" class="sticker ' + l3 + '"></div></div></div>';
	html += '<div class="face droite"><div class="face_droite">';
		html += '<div id="r1" class="sticker ' + r1 + '"></div>';
		html += '<div id="r2" class="sticker ' + r2 + '"></div>';
		html += '<div id="r3" class="sticker ' + r3 + '"></div></div></div>';
	html += '<div class="face avant"><div class="face_avant">';
		html += '<div id="f1" class="sticker ' + f1 + '"></div>';
		html += '<div id="f2" class="sticker ' + f2 + '"></div>';
		html += '<div id="f3" class="sticker ' + f3 + '"></div></div></div>';
	html += '<div class="face haut">';
		html += '<div id="u11" class="sticker ' + u11 + '"></div>';
		html += '<div id="u12" class="sticker ' + u12 + '"></div>';
		html += '<div id="u13" class="sticker ' + u13 + '"></div>';
		html += '<div id="u21" class="sticker ' + u21 + '"></div>';
		html += '<div id="u22" class="sticker ' + u22 + '"></div>';
		html += '<div id="u23" class="sticker ' + u23 + '"></div>';
		html += '<div id="u31" class="sticker ' + u31 + '"></div>';
		html += '<div id="u32" class="sticker ' + u32 + '"></div>';
		html += '<div id="u33" class="sticker ' + u33 + '"></div></div></div>';
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

function create_cube_NxNxN_2D(taille,u,f,r)
{
	var faces = { 'arriere': b, 'gauche': l, 'droite': r , 'avant': f};
	var html = '<div class="cube_'+taille+'x'+taille+'x'+taille+'_2D">';
	for (var face in faces) {
		html += '<div class="face ' + face + '"><div class="face_' + face + '">';
		for (var color of faces[face])
			html += '<div class="sticker ' + color + '"></div>';
		html += '</div></div>';
	}
	html += '<div class="face haut">';
	for (var color of u)
		html += '<div class="sticker ' + color + '"></div>';
	html += '</div></div>';
	document.write(html);
}
