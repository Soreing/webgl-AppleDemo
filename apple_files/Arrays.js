var vertices;
var colors;

function pointX(n) { return n<0 ?  ref[(-n-1)*3  ] : ref[(n-1)*3  ]; }
function pointY(n) { return n<0 ?  ref[(-n-1)*3+1] : ref[(n-1)*3+1]; }
function pointZ(n) { return n<0 ? -ref[(-n-1)*3+2] : ref[(n-1)*3+2]; }
function Red(hex)  { return ((hex & 0xFF0000) >> 16) / 256;}
function Grn(hex)  { return ((hex & 0x00FF00) >>  8) / 256;}
function Blu(hex)  { return ((hex & 0x0000FF) >>  0) / 256;}

function FillBuffers()
{
	vertices = new Float32Array(shapes.length/4*3*3);
	colors   = new Float32Array(shapes.length/4*3*3);
	var length = shapes.length/4;
	
	for(i=0;i<length;i++)
	{	//Assign vertex coordinates for 3 points
		vertices[i*9  ] = pointX(shapes[i*4  ]);
		vertices[i*9+1] = pointY(shapes[i*4  ]);
		vertices[i*9+2] = pointZ(shapes[i*4  ]);
		
		vertices[i*9+3] = pointX(shapes[i*4+1]);
		vertices[i*9+4] = pointY(shapes[i*4+1]);
		vertices[i*9+5] = pointZ(shapes[i*4+1]);
		
		vertices[i*9+6] = pointX(shapes[i*4+2]);
		vertices[i*9+7] = pointY(shapes[i*4+2]);
		vertices[i*9+8] = pointZ(shapes[i*4+2]);
		
		//Assign RGB color percentages for 3 points
		colors[i*9  ] = Red(shapes[i*4+3]);
		colors[i*9+1] = Grn(shapes[i*4+3]);
		colors[i*9+2] = Blu(shapes[i*4+3]);
		
		colors[i*9+3] = Red(shapes[i*4+3]);
		colors[i*9+4] = Grn(shapes[i*4+3]);
		colors[i*9+5] = Blu(shapes[i*4+3]);
		
		colors[i*9+6] = Red(shapes[i*4+3]);
		colors[i*9+7] = Grn(shapes[i*4+3]);
		colors[i*9+8] = Blu(shapes[i*4+3]);
	}	
}

//Constant reference of vertex positions
var ref = new Float32Array(
[  //Apple Body
  -0.40, -0.94,  0.00,//1
  -0.20, -0.98,  0.00,//2
  -0.02, -0.94, -0.20,//3
   0.30, -0.98,  0.00,//4
  -0.62, -0.76,  0.00,//5
  -0.36, -0.76, -0.44,//6
  -0.14, -0.80, -0.58,//7
   0.22, -0.80, -0.56,//8
   0.46, -0.76, -0.38,//9
   0.56, -0.80,  0.00,//10
  -0.78, -0.50,  0.00,//11
  -0.58, -0.50, -0.52,//12
  -0.12, -0.50, -0.80,//13
   0.14, -0.50, -0.82,//14
   0.54, -0.50, -0.55,//15
   0.76, -0.50,  0.00,//16
  -0.88, -0.12,  0.00,//17
  -0.62, -0.20, -0.64,//18
  -0.32, -0.26, -0.80,//19
   0.06, -0.12, -0.94,//20
   0.32, -0.20, -0.84,//21
   0.70, -0.30, -0.42,//22
   0.90, -0.20, -0.00,//23
  -0.30,  0.04, -0.84,//24
   0.36,  0.08, -0.86,//25
   0.70,  0.10, -0.56,//26
   0.90,  0.10,  0.00,//27
  -0.86,  0.20,  0.00,//28
  -0.62,  0.20, -0.54,//29
  -0.50,  0.30, -0.56,//30
  -0.36,  0.32, -0.64,//31
  -0.08,  0.32, -0.74,//32
   0.22,  0.34, -0.70,//33
   0.36,  0.36, -0.64,//34
   0.52,  0.32, -0.52,//35
   0.79,  0.32,  0.00,//36
  -0.68,  0.56,  0.00,//37
  -0.46,  0.60, -0.26,//38
  -0.22,  0.56, -0.36,//39
  -0.04,  0.56, -0.44,//40
   0.10,  0.56, -0.42,//41
   0.28,  0.56, -0.40,//42
   0.56,  0.52,  0.00,//43
  -0.48,  0.65,  0.00,//44
   0.36,  0.60,  0.00,//45
   0.00,  0.45, -0.00,//46
   0.00, -0.86, -0.00,//47
  -0.06,  0.44, -0.02,//48
   0.02,  0.44, -0.02,//49
  -0.01,  0.74, -0.02,//50
   0.04,  0.66, -0.02,//51
  -0.02,  0.86, -0.02,//52
   0.10,  0.78, -0.02,//53
   0.06,  0.64,  0.00,//54
   0.12,  0.62,  0.00,//55
   0.30,  0.66,  0.00,//56
   0.42,  0.70,  0.00,//57
   0.60,  0.74,  0.00,//58
   0.80,  0.94,  0.00,//59
   0.22,  0.74, -0.02,//60
   0.36,  0.80, -0.02,//61
   0.60,  0.90, -0.02,//62
   0.18,  0.80,  0.00,//63
   0.26,  0.90,  0.00,//64
   0.46,  0.96,  0.00 //65
   ]);

   
//The Shape variable holds information about a triangle polygon.
//It has the ID of the 3 vertices that build it up, 
//And a Hexadecimal RGB color specifying the triangle's color
var shapes = 
[  //Apple Body Half
   1,   6,   5, 0x820e0a,
   1,   2,   6, 0x70110b,
   2,   7,   6, 0x70180d,
   2,   3,   7, 0x720b0b,
   3,   8,   7, 0x6e0707,
   3,   4,   8, 0x690808,
   4,   9,   8, 0x690808,
   4,  10,   9, 0x6d0d0d,
   5,  12,  11, 0x9f2222,
   5,   6,  12, 0x9c1e0b,
   6,  19,  12, 0xa20808,
   6,  13,  19, 0x9f0f0f,
   7,  13,   6, 0x8a0f0f,
   7,  14,  13, 0x871111,
   8,  14,   7, 0x730707,
   8,   9,  14, 0x730101,
   9,  15,  14, 0x7e1010,
   9,  10,  15, 0x841515,
  10,  16,  15, 0x610f0f,
  11,  18,  17, 0xb41d16,
  11,  12,  18, 0xb4191b,
  12,  19,  18, 0xa60000,
  13,  20,  19, 0x9c0a0b,
  13,  21,  20, 0x960808,
  13,  14,  21, 0x820101,
  14,  22,  21, 0x860808,
  14,  15,  22, 0x7f0b0b,
  15,  16,  22, 0x740f0f,
  16,  23,  22, 0x8d1414,
  17,  29,  28, 0xc32024,
  17,  18,  29, 0xcb1a22,
  18,  24,  29, 0xc41d22,
  18,  19,  24, 0xc41d22,
  19,  20,  24, 0xa21306,
  20,  21,  25, 0x920606,
  21,  22,  25, 0x840303,
  22,  26,  25, 0x870b0b,
  22,  23,  26, 0x7b0e0e,
  23,  27,  26, 0x831414,
  28,  29,  37, 0xc11e27,
  29,  30,  37, 0xb51c1d,
  29,  24,  30, 0xd0291d,
  30,  24,  31, 0xcd0f0e,
  24,  32,  31, 0xca0e0b,
  20,  32,  24, 0xca0e0b,
  20,  33,  32, 0xb8190e,
  20,  25,  33, 0xa60000,
  25,  34,  33, 0xa00808,
  25,  35,  34, 0x960b0b,
  25,  26,  35, 0x9a0a0a,
  26,  36,  35, 0xa11a1a,
  26,  27,  36, 0x910e0e,
  30,  38,  37, 0xcc252c,
  30,  31,  38, 0xe01e1c,
  31,  39,  38, 0xcc1b1a,
  31,  32,  39, 0xcc1d23,
  32,  40,  39, 0xc31b23,
  32,  41,  40, 0xaa1e21,
  32,  33,  41, 0xa9160c,
  33,  42,  41, 0xb03828,
  33,  34,  42, 0xae0707,
  42,  34,  43, 0xb01212,
  34,  35,  43, 0x9c0a0a,
  35,  36,  43, 0xa51717,
  37,  38,  44, 0xc10400,
  42,  43,  45, 0xa60d08,
  44,  38,  46, 0xb41809,
  38,  39,  46, 0x97240f,
  39,  40,  46, 0x88210b,
  40,  41,  46, 0x981f09,
  41,  42,  46, 0xae1c08,
  42,  45,  46, 0xb11506,
   2,  47,   3, 0x630a0a,
   3,  47,   4, 0x70110b,
   
   //Apple Body Mirrored Half
  -1,  -5,  -6, 0x820e0a,
  -1,  -6,  -2, 0x70110b,
  -2,  -6,  -7, 0x70180d,
  -2,  -7,  -3, 0x720b0b,
  -3,  -7,  -8, 0x6e0707,
  -3,  -8,  -4, 0x690808,
  -4,  -8,  -9, 0x690808,
  -4,  -9, -10, 0x6d0d0d,
  -5, -11, -12, 0x9f2222,
  -5, -12,  -6, 0x9c1e0b,
  -6, -12, -19, 0xa20808,
  -6, -19, -13, 0x9f0f0f,
  -7,  -6, -13, 0x8a0f0f,
  -7, -13, -14, 0x871111,
  -8,  -7, -14, 0x730707,
  -8, -14,  -9, 0x730101,
  -9, -14, -15, 0x7e1010,
  -9, -15, -10, 0x841515,
 -10, -15, -16, 0x610f0f,
 -11, -17, -18, 0xb41d16,
 -11, -18, -12, 0xb4191b,
 -12, -18, -19, 0xa60000,
 -13, -19, -20, 0x9c0a0b,
 -13, -20, -21, 0x960808,
 -13, -21, -14, 0x820101,
 -14, -21, -22, 0x860808,
 -14, -22, -15, 0x7f0b0b,
 -15, -22, -16, 0x740f0f,
 -16, -22, -23, 0x8d1414,
 -17, -28, -29, 0xc32024,
 -17, -29, -18, 0xcb1a22,
 -18, -29, -24, 0xc41d22,
 -18, -24, -19, 0xc41d22,
 -19, -24, -20, 0xa21306,
 -20, -25, -21, 0x920606,
 -21, -25, -22, 0x840303,
 -22, -25, -26, 0x870b0b,
 -22, -26, -23, 0x7b0e0e,
 -23, -26, -27, 0x831414,
 -28, -37, -29, 0xc11e27,
 -29, -37, -30, 0xb51c1d,
 -29, -30, -24, 0xd0291d,
 -30, -31, -24, 0xcd0f0e,
 -24, -31, -32, 0xca0e0b,
 -20, -24, -32, 0xca0e0b,
 -20, -32, -33, 0xb8190e,
 -20, -33, -25, 0xa60000,
 -25, -33, -34, 0xa00808,
 -25, -34, -35, 0x960b0b,
 -25, -35, -26, 0x9a0a0a,
 -26, -35, -36, 0xa11a1a,
 -26, -36, -27, 0x910e0e,
 -30, -37, -38, 0xcc252c,
 -30, -38, -31, 0xe01e1c,
 -31, -38, -39, 0xcc1b1a,
 -31, -39, -32, 0xcc1d23,
 -32, -39, -40, 0xc31b23,
 -32, -40, -41, 0xaa1e21,
 -32, -41, -33, 0xa9160c,
 -33, -41, -42, 0xb03828,
 -33, -42, -34, 0xae0707,
 -42, -43, -34, 0xb01212,
 -34, -43, -35, 0x9c0a0a,
 -35, -43, -36, 0xa51717,
 -37, -44, -38, 0xc10400,
 -42, -45, -43, 0xa60d08,
 -44, -46, -38, 0xb41809,
 -38, -46, -39, 0x97240f,
 -39, -46, -40, 0x88210b,
 -40, -46, -41, 0x981f09,
 -41, -46, -42, 0xae1c08,
 -42, -46, -45, 0xb11506,
  -2,  -3, -47, 0x630a0a,
  -3,  -4, -47, 0x70110b,
  
  //Apple Stem And Leaf Half
  48,  49,  51, 0xa0770d,
  48,  51,  50, 0x73500c,
  50,  51,  53, 0xa0770d,
  50,  53,  52, 0xa88a4c,
  49,  55,  54, 0xcaa54a,
  60,  56,  57, 0x6bae21,
  55,  56,  60, 0x5fa30e,
  60,  57,  61, 0x3d8404,
  61,  57,  58, 0x3e9900,
  58,  62,  61, 0x3f8405,
  58,  59,  62, 0x4e8506,
  55,  60,  54, 0xaee162,
  54,  60,  63, 0xa7db52,
  60,  61,  63, 0x85c62c,
  61,  64,  63, 0xa5dc4a,
  61,  62,  64, 0x8ec83e,
  64,  62,  65, 0x63a80f,
  62,  59,  65, 0x8ac93d,
   
  //Apple Stem And Leaf Mirrored Half
 -48, -51, -49, 0xa0770d,
 -48, -50, -51, 0x73500c,
 -50, -53, -51, 0xa0770d,
 -50, -52, -53, 0xa88a4c,
 -49, -54, -55, 0xcaa54a,
 -60, -57, -56, 0x6bae21,
 -55, -60, -56, 0x5fa30e,
 -60, -61, -57, 0x3d8404,
 -61, -58, -57, 0x3e9900,
 -58, -61, -62, 0x3f8405,
 -58, -62, -59, 0x4e8506,
 -55, -54, -60, 0xaee162,
 -54, -63, -60, 0xa7db52,
 -60, -63, -61, 0x85c62c,
 -61, -63, -64, 0xa5dc4a,
 -61, -64, -62, 0x8ec83e,
 -64, -65, -62, 0x63a80f,
 -62, -65, -59, 0x8ac93d,
   
  //Apple Stem Side And Top View
  48,  50, -48, 0x876116,
 -48,  50, -50, 0x9f6c07,
  50,  52, -50, 0xb99446,
 -50,  52, -52, 0x98752d,
  52,  53, -53, 0x8d7737,
  52, -53, -52, 0x826b2a,
  49,  55, -49, 0xc39945,
  49,  54, -49, 0xb98f3b,
  49, -49,  51, 0xab780b,
 -49, -51,  51, 0x9b7116,
  51, -51,  53, 0x95651b,
 -51, -53,  53, 0x916726,
  ];

  
  var svertices = new Float32Array(
[ 0.00,  0.00, -1.20,
 -1.00,  0.00, -1.20,
 -0.93,  0.30, -1.20, 
 -0.80,  0.57, -1.20,
 -0.58,  0.78, -1.20,
 -0.31,  0.92, -1.20,
  0.00,  1.00, -1.20,
  0.31,  0.92, -1.20,
  0.57,  0.77, -1.20,
  0.79,  0.56, -1.20,
  0.93,  0.29, -1.20,
  1.00,  0.00, -1.20,
  0.92, -0.32, -1.20,
  0.79, -0.59, -1.20,
  0.57, -0.81, -1.20,
  0.30, -0.94, -1.20,
  0.00, -1.00, -1.20,
 -0.31, -0.95, -1.20,
 -0.59, -0.81, -1.20,
 -0.80, -0.58, -1.20,
 -0.93, -0.30, -1.20,
 -1.00,  0.00, -1.20 ]);


var scolors = new Float32Array(
[  0.30,  0.30, 0.30,
   1.00,  1.00, 1.00,
   1.00,  1.00, 1.00,
   1.00,  1.00, 1.00,
   1.00,  1.00, 1.00,
   1.00,  1.00, 1.00,
   1.00,  1.00, 1.00,
   1.00,  1.00, 1.00,
   1.00,  1.00, 1.00,
   1.00,  1.00, 1.00,
   1.00,  1.00, 1.00,
   1.00,  1.00, 1.00,
   1.00,  1.00, 1.00,
   1.00,  1.00, 1.00,
   1.00,  1.00, 1.00,
   1.00,  1.00, 1.00,
   1.00,  1.00, 1.00,
   1.00,  1.00, 1.00,
   1.00,  1.00, 1.00,
   1.00,  1.00, 1.00,
   1.00,  1.00, 1.00,
   1.00,  1.00, 1.00 ]);
   
   
FillBuffers();