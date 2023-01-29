#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();
program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format', 'stylish')
  .helpOption('-h, --help', 'output usage information')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filetype1, filetype2) => {
    const result = genDiff(filetype1, filetype2, program.opts().format);
    console.log(result);
  });
program.parse();
