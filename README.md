### Hexlet tests and linter status:
[![Actions Status](https://github.com/vyacheslav-pv/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/vyacheslav-pv/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/cb54ed6b9556db85d48a/maintainability)](https://codeclimate.com/github/vyacheslav-pv/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/cb54ed6b9556db85d48a/test_coverage)](https://codeclimate.com/github/vyacheslav-pv/frontend-project-46/test_coverage)
# Difference calculator
Utility CLI comparison that calculates and shows difference between two data structures.
## Installation
```
$ git clone git@github.com:vyacheslav-pv/frontend-project-46.git
$ make install
$ npm link
```
## Usage
``` 
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format <type>  output format (default: "stylish")
  -h, --help           output usage information
```
## Demonstrations

### Compare two JSON files
[![asciicast](https://asciinema.org/a/QjquMpEcfMYwI90hvycGcPyFy.svg)](https://asciinema.org/a/QjquMpEcfMYwI90hvycGcPyFy)
### Compare two YAML files
[![asciicast](https://asciinema.org/a/S8NVWqiQYXI6SuvurvrW4aUr3.svg)](https://asciinema.org/a/S8NVWqiQYXI6SuvurvrW4aUr3)
### Comparison two files with recursive structure in format 'stylish'
[![asciicast](https://asciinema.org/a/7g5LkMA3Ni39uVIXchwPy0nUV.svg)](https://asciinema.org/a/7g5LkMA3Ni39uVIXchwPy0nUV)
### Comparison two files with recursive structure in format 'plain'
[![asciicast](https://asciinema.org/a/52sf0iwiwXoxUGOR5VBnDWipP.svg)](https://asciinema.org/a/52sf0iwiwXoxUGOR5VBnDWipP)
### Comparison two files with recursive structure in format 'json'
[![asciicast](https://asciinema.org/a/RbxpWclnHydCEX7MmVVsrrmHc.svg)](https://asciinema.org/a/RbxpWclnHydCEX7MmVVsrrmHc)