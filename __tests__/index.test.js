import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('Comparing flat JSON files', () => {
  const file1path = getFixturePath('file1.json');
  const file2path = getFixturePath('file2.json');
  const result = readFile('resultDiff.txt');
  expect(genDiff(file1path, file2path)).toEqual(result);
});
