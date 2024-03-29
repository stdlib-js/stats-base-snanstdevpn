/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Compute the standard deviation of a single-precision floating-point strided array ignoring `NaN` values and using a two-pass algorithm.
*
* @module @stdlib/stats-base-snanstdevpn
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
* var snanstdevpn = require( '@stdlib/stats-base-snanstdevpn' );
*
* var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
*
* var v = snanstdevpn( x.length, 1, x, 1 );
* // returns ~2.0817
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
* var floor = require( '@stdlib/math-base-special-floor' );
* var snanstdevpn = require( '@stdlib/stats-base-snanstdevpn' );
*
* var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
* var N = floor( x.length / 2 );
*
* var v = snanstdevpn.ndarray( N, 1, x, 2, 1 );
* // returns 2.5
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils-try-require' );
var isError = require( '@stdlib/assert-is-error' );
var main = require( './main.js' );


// MAIN //

var snanstdevpn;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	snanstdevpn = main;
} else {
	snanstdevpn = tmp;
}


// EXPORTS //

module.exports = snanstdevpn;

// exports: { "ndarray": "snanstdevpn.ndarray" }
