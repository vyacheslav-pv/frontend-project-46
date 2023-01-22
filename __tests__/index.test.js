import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const fileExtensions = ['json', 'yaml'];

test.each(fileExtensions)('Comparing flat JSON files', (format) => {
  const file1path = getFixturePath(`file1.${format}`);
  const file2path = getFixturePath(`file2.${format}`);
  const result = readFile('resultDiff.txt');
  expect(genDiff(file1path, file2path)).toEqual(result);
});
