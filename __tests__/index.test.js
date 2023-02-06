import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import genDiff from '../src/index.js';
import parser from '../src/parsers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const fileExtensions = ['json', 'yaml'];

test.each(fileExtensions)('Comparing two files for "stylish" format', (format) => {
  const file1path = getFixturePath(`file1.${format}`);
  const file2path = getFixturePath(`file2.${format}`);
  const result = readFile('resultStylish.txt');
  expect(genDiff(file1path, file2path, 'stylish')).toEqual(result);
  expect(genDiff(file1path, file2path)).toEqual(result);
});

test.each(fileExtensions)('Comparing two files for "plain" format', (format) => {
  const file1path = getFixturePath(`file1.${format}`);
  const file2path = getFixturePath(`file2.${format}`);
  const result = readFile('resultPlain.txt');
  expect(genDiff(file1path, file2path, 'plain')).toEqual(result);
});

test.each(fileExtensions)('Comparing two files for "json" format', (format) => {
  const file1path = getFixturePath(`file1.${format}`);
  const file2path = getFixturePath(`file2.${format}`);
  const result = readFile('resultJson.txt');
  expect(genDiff(file1path, file2path, 'json')).toEqual(result);
});

test('check for parsing error', () => {
  const file1path = getFixturePath('file1.xml');
  expect(() => { parser(file1path, 'xml'); }).toThrow('Unknown format "xml"');
});
