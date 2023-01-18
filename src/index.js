import path from 'path';
import fs from 'fs';
import parser from './parsers.js';
import getDiff from './getDiff.js';

const getData = (filepath) => fs.readFileSync(path.resolve(process.cwd(), '__fixtures__', filepath), 'utf8');
const getFormat = (filepath) => filepath.split('.')[1];

const genDiff = (filepath1, filepath2) => {
  const data1 = parser(getData(filepath1), getFormat(filepath1));
  const data2 = parser(getData(filepath2), getFormat(filepath2));

  return getDiff(data1, data2);
};
export default genDiff;
