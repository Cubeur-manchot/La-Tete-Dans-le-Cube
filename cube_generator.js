function create_cube_3D(u11,u12,u13,u21,u22,u23,u31,u32,u33,f11,f12,f13,f21,f22,f23,f31,f32,f33,r11,r12,r13,r21,r22,r23,r31,r32,r33)
{
	document.write('<div class="cube_3D"><div class="face haut">');
		document.write('<div class="sticker ' + u11 + '"></div>');
		document.write('<div class="sticker ' + u12 + '"></div>');
		document.write('<div class="sticker ' + u13 + '"></div>');
		document.write('<div class="sticker ' + u21 + '"></div>');
		document.write('<div class="sticker ' + u22 + '"></div>');
		document.write('<div class="sticker ' + u23 + '"></div>');
		document.write('<div class="sticker ' + u31 + '"></div>');
		document.write('<div class="sticker ' + u32 + '"></div>');
		document.write('<div class="sticker ' + u33 + '"></div></div>');
	document.write('<div class="face avant">');
		document.write('<div class="sticker ' + f11 + '"></div>');
		document.write('<div class="sticker ' + f12 + '"></div>');
		document.write('<div class="sticker ' + f13 + '"></div>');
		document.write('<div class="sticker ' + f21 + '"></div>');
		document.write('<div class="sticker ' + f22 + '"></div>');
		document.write('<div class="sticker ' + f23 + '"></div>');
		document.write('<div class="sticker ' + f31 + '"></div>');
		document.write('<div class="sticker ' + f32 + '"></div>');
		document.write('<div class="sticker ' + f33 + '"></div></div>');
	document.write('<div class="face droite">');
		document.write('<div class="sticker ' + r11 + '"></div>');
		document.write('<div class="sticker ' + r12 + '"></div>');
		document.write('<div class="sticker ' + r13 + '"></div>');
		document.write('<div class="sticker ' + r21 + '"></div>');
		document.write('<div class="sticker ' + r22 + '"></div>');
		document.write('<div class="sticker ' + r23 + '"></div>');
		document.write('<div class="sticker ' + r31 + '"></div>');
		document.write('<div class="sticker ' + r32 + '"></div>');
		document.write('<div class="sticker ' + r33 + '"></div></div></div>');
}

function create_cube_2D(u11,u12,u13,u21,u22,u23,u31,u32,u33,b1,b2,b3,l1,l2,l3,r1,r2,r3,f1,f2,f3)
{
	document.write('<div class="cube_2D"><div class="face arriere">');
		document.write('<div id="b1" class="sticker ' + b1 + '"></div>');
		document.write('<div id="b2" class="sticker ' + b2 + '"></div>');
		document.write('<div id="b3" class="sticker ' + b3 + '"></div></div>');
	document.write('<div class="face gauche">');
		document.write('<div id="l1" class="sticker ' + l1 + '"></div>');
		document.write('<div id="l2" class="sticker ' + l2 + '"></div>');
		document.write('<div id="l3" class="sticker ' + l3 + '"></div></div>');
	document.write('<div class="face droite">');
		document.write('<div id="r1" class="sticker ' + r1 + '"></div>');
		document.write('<div id="r2" class="sticker ' + r2 + '"></div>');
		document.write('<div id="r3" class="sticker ' + r3 + '"></div></div>');
	document.write('<div class="face avant">');
		document.write('<div id="f1" class="sticker ' + f1 + '"></div>');
		document.write('<div id="f2" class="sticker ' + f2 + '"></div>');
		document.write('<div id="f3" class="sticker ' + f3 + '"></div></div>');
	document.write('<div class="face haut">');
		document.write('<div id="u11" class="sticker ' + u11 + '"></div>');
		document.write('<div id="u12" class="sticker ' + u12 + '"></div>');
		document.write('<div id="u13" class="sticker ' + u13 + '"></div>');
		document.write('<div id="u21" class="sticker ' + u21 + '"></div>');
		document.write('<div id="u22" class="sticker ' + u22 + '"></div>');
		document.write('<div id="u23" class="sticker ' + u23 + '"></div>');
		document.write('<div id="u31" class="sticker ' + u31 + '"></div>');
		document.write('<div id="u32" class="sticker ' + u32 + '"></div>');
		document.write('<div id="u33" class="sticker ' + u33 + '"></div></div></div>');
}
