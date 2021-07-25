var canvas;			// Reference to the canvas object		
var program;		// Reference to the shader program
var webGL;			// Reference to the WebGL context

var element = 3;	// Number of elements per vertex
var normal  = 0;	// Don't normalize the data
var stride  = 12;	// Byte size of each set of elements 
var offset  = 0;	// Offset to the start of the first element in a set

var rot=0;

window.onload = function setup()
{  
	//Getting the Canvas and WebGL references
	//(canvas name matches the one in Apple.html)
	canvas = document.getElementById( "appleCanvas" );
	webGL = WebGLUtils.setupWebGL( canvas );
    if ( !webGL ) { alert( "WebGL isn't available" ); }
	
	//Setup the default state of the canvas
	webGL.viewport( 0, 0, canvas.width, canvas.height );
    webGL.clearColor( 1.0, 1.0, 1.0, 1.0 );
    
	//Load Shaders specified in Apple.html
	//(Shader function names in parameter match the ones in Apple.html)
	program = initShaders( webGL, "vertexShader", "fragmentShader" );
    webGL.useProgram( program );
	
	//Enable hiding backward facing polygons
	//webGL.enable(webGL.CULL_FACE);
	//Enable hiding parts of polygons based on depth
	webGL.enable(webGL.DEPTH_TEST);
	
	render()
}

//Loads a set of vertices and colors with a specified transform matrix into the shader
function LoadObject(ve, co, tr)
{
	//Create a buffer for vertices and bind it to the pipeline
	var verticeBuff = webGL.createBuffer();
	webGL.bindBuffer( webGL.ARRAY_BUFFER, verticeBuff );
	webGL.bufferData( webGL.ARRAY_BUFFER, ve, webGL.STATIC_DRAW );
	
	//Configure the attribute to read vertex information correctly
	var veCoords = webGL.getAttribLocation( program, "veCoords" );
	webGL.vertexAttribPointer(veCoords, element, webGL.FLOAT, normal, stride, offset);
	webGL.enableVertexAttribArray( veCoords );
	
	//Create a buffer for vertices and bind it to the pipeline
	var colorBuff = webGL.createBuffer();
    webGL.bindBuffer( webGL.ARRAY_BUFFER, colorBuff );
	webGL.bufferData( webGL.ARRAY_BUFFER, co, webGL.STATIC_DRAW );
	
	//Configure the attribute to read vertex information correctly
	var veColors = webGL.getAttribLocation( program, "veColors" );
	webGL.vertexAttribPointer(veColors, element, webGL.FLOAT, normal, stride, offset);
	webGL.enableVertexAttribArray( veColors );
	
	//Get the reference of the transfromation matrix in the shader, and set it to
	//The transformation specified in the parameter list.
	var transform = webGL.getUniformLocation(program, "transform");
	webGL.uniformMatrix4fv(transform, false, tr);
	
}

function render()
{	
	//Setup matrices for transformations 
	var appleMatrix = m4.multiply(m4.scaling(.7,.7,.7),m4.zRotation(rot/2));
	appleMatrix = m4.multiply(appleMatrix, m4.yRotation(rot));
	var shadowMatrix = m4.multiply(m4.scaling(.7,.7,.7),m4.xRotation(1.8));
	
	//Clear the color buffer and depth buffer
	webGL.clear( webGL.COLOR_BUFFER_BIT | webGL.DEPTH_BUFFER_BIT);
    
	//Load the buffers with the apple's data, and draw it
	LoadObject(vertices, colors, appleMatrix);
	webGL.drawArrays( webGL.TRIANGLES, 0, 196*3 );
	
	//Load the buffers with the shadow's data, and draw it
	LoadObject(svertices, scolors, shadowMatrix);
    webGL.drawArrays( webGL.TRIANGLE_FAN, 0, 22 );
	
	//Change rotation value for animation
	rot+=0.01;
	
	requestAnimationFrame(render);
}