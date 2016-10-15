const fs = require('fs');

const createSubFolders = (path, length, callback) => {

		var createSubFolder = (num, callback)  => {
			if(num == length) {
				return callback();
			}

			let folder = `${path}/${(num < 9 ? '0' : '') + (num + 1)}`;
		        fs.mkdir(folder, err => {
				if(!err || (err && err.code === 'EEXIST')){
					if(err && err.code === 'EEXIST') { // folder already exist - try delete pokemon.txt (without check access)
						// delete pokemon.txt (try delete)
						let file = `${folder}/pokemon.txt`;
				          	fs.unlink(file, err => {
					        	if (err) {
								console.log(`Can not find or deleted file ${file}`);
							} else {
								console.log(`Delete file ${file}`);
							}
							createSubFolder(num + 1, callback);
			          		});			
					} else { // !err
						createSubFolder(num + 1, callback);
					}
			        } else { // unknown file err
					console.log(err);
					// abnormal exit 
					process.exit();
				}
	         	});

		}
		createSubFolder(0, callback);
}

module.exports = createSubFolders;