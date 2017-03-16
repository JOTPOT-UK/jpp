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