import fs from 'fs';
import path from 'path';
import cs from 'checksum';

let cacheFiles = {};
let folder = './public';

function versionify (fileUrl) {
    if (cacheFiles[fileUrl]) {
        return cacheFiles[fileUrl];
    }

    let data = fs.readFileSync(path.join(process.cwd(), folder, fileUrl));
    cacheFiles[fileUrl] = fileUrl + '?' + cs(data);
    return cacheFiles[fileUrl];
}

versionify.setFolder = function (folderPath) {
    folder = folderPath;
};

export default versionify;
