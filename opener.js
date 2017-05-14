/*
	
	JOTPOT Packager
	Version 25D
	
	Copyright (c) 2017 Jacob O'Toole
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	
*/

let jpp = require("./package") ;
jpp.onReady =_=> {
	
	console.log(process.argv[2]) ;
	jpp.read(process.argv[2]).then(p=>{
		
		let tu_dir = require("fs").mkdtempSync(  require("path").join(require("os").tmpdir(),`jpp-o-`)  ) ;
		console.log(p,tu_dir) ;
		jpp.unpack(p,tu_dir).then(_=>{
			
			require("child_process").exec(`explorer ${tu_dir}`) ;
			
		}) ;
		
	}) ;
	
} ;