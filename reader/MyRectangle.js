/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
//function MyRectangle(scene) {
//	CGFobject.call(this,scene);
//
//	this.minS = 0;
//	this.minT = 0;
//	this.maxS = 1;
//	this.maxT = 1;
//
//	this.initBuffers();
//};

function MyRectangle(scene, coordinates) {
	CGFobject.call(this,scene);

	this.minX = coordinates[0];
	this.maxY = coordinates[1];
	this.maxX = coordinates[2];
	this.minY = coordinates[3];

	this.amplifS = 1;
	this.amplifT = 1;


	this.initBuffers();
};

MyRectangle.prototype = Object.create(CGFobject.prototype);
MyRectangle.prototype.constructor=MyRectangle;

MyRectangle.prototype.initBuffers = function () {
	this.vertices = [
            this.minX, this.minY, 0,
            this.maxX, this.minY, 0,
            this.minX, this.maxY, 0,
            this.maxX, this.maxY, 0
			];

	this.indices = [
           0, 1, 2, 
		   3, 2, 1
        ];
		
	this.normals = [
    0,0,1,
    0,0,1,
    0,0,1,
    0,0,1
    ];

    this.width = this.maxX - this.minX;
    this.height= this.maxY - this.minY;
	
	
	this.texCoords = [
	0.0, 1.0 * this.height / this.amplifT,
	 	1.0 * this.width / this.amplifS, 1.0 * this.height / this.amplifT,
      	0.0, 0.0,
      	1.0 * this.width / this.amplifS, 0.0
	];

	this.primitiveType=this.scene.gl.TRIANGLES;	
	this.initGLBuffers();
};

MyRectangle.prototype.updateTexelCoordinates = function (amplifS, amplifT) {

	this.texCoords = [
	0.0, 1.0 * this.height / amplifT,
	 	1.0 * this.width / amplifS, 1.0 * this.height / amplifT,
      	0.0, 0.0,
      	1.0 * this.width / amplifS, 0.0
	];

	console.log(amplifS + "   " + amplifT);
	this.updateTexCoordsGLBuffers();
};