function create_cube(u11,u12,u13,u21,u22,u23,u31,u32,u33,f11,f12,f13,f21,f22,f23,f31,f32,f33,r11,r12,r13,r21,r22,r23,r31,r32,r33)
{
	document.write('<div id="face_haut">');
		document.write('<div class="sticker ' + u11 + '"></div>');
		document.write('<div class="sticker ' + u12 + '"></div>');
		document.write('<div class="sticker ' + u13 + '"></div>');
		document.write('<div class="sticker ' + u21 + '"></div>');
		document.write('<div class="sticker ' + u22 + '"></div>');
		document.write('<div class="sticker ' + u23 + '"></div>');
		document.write('<div class="sticker ' + u31 + '"></div>');
		document.write('<div class="sticker ' + u32 + '"></div>');
		document.write('<div class="sticker ' + u33 + '"></div></div>');
	document.write('<div id="face_avant">');
		document.write('<div class="sticker ' + f11 + '"></div>');
		document.write('<div class="sticker ' + f12 + '"></div>');
		document.write('<div class="sticker ' + f13 + '"></div>');
		document.write('<div class="sticker ' + f21 + '"></div>');
		document.write('<div class="sticker ' + f22 + '"></div>');
		document.write('<div class="sticker ' + f23 + '"></div>');
		document.write('<div class="sticker ' + f31 + '"></div>');
		document.write('<div class="sticker ' + f32 + '"></div>');
		document.write('<div class="sticker ' + f33 + '"></div></div>');
	document.write('<div id="face_droite">');
		document.write('<div class="sticker ' + r11 + '"></div>');
		document.write('<div class="sticker ' + r12 + '"></div>');
		document.write('<div class="sticker ' + r13 + '"></div>');
		document.write('<div class="sticker ' + r21 + '"></div>');
		document.write('<div class="sticker ' + r22 + '"></div>');
		document.write('<div class="sticker ' + r23 + '"></div>');
		document.write('<div class="sticker ' + r31 + '"></div>');
		document.write('<div class="sticker ' + r32 + '"></div>');
		document.write('<div class="sticker ' + r33 + '"></div></div>');
}
