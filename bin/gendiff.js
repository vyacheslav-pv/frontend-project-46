#!/usr/bin/env node
import genDiff from '../src/index.js';
import { Command } from 'commander';

const program = new Command();
program
.description('Compares two configuration files and shows a difference.')
.version('0.0.1', '-V, --version', 'output the version number')
.option('-f, --format <type>', 'output format')
.helpOption('-h, --help', 'output usage information')
.argument('<filepath1>')
.argument('<filepath2>')
.action((filetype1, filetype2) => {
    const result = genDiff(filetype1, filetype2);
    console.log(result);
  });
program.parse();