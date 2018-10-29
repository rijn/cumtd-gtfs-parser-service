import Promise from 'bluebird';
import path from 'path';
import unzip from 'unzip';
const fs = Promise.promisifyAll(require('fs'));

export const unzipGtfs = async () => {
  const inputPath = path.join(__dirname, '../../tmp/google_transit.zip');
  const outputPath = path.join(__dirname, '../../tmp/google_transit');
  await fs.createReadStream(inputPath).pipe(unzip.Extract({ path: outputPath }));
  return true;
};

export default unzipGtfs;
