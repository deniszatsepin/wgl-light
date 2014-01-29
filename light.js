var glMatrix = require('gl-matrix');
var vec3 = glMatrix.vec3;

exports.PhongLigth = function (context) {
	var gl = context;

	function PhongLight () {
		PhongLight.prototype.init.apply(this, arguments);
	}

	PhongLight.prototype.init = function (options) {
		this.ambient = options.ambient || vec3.fromValues(0.1, 0.1, 0.1);
	};

	return PhongLight;
};