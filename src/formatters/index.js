import formatStylish from './stylish.js';
import formatPlain from './plain.js';

const format = (tree, formatName) => {
  switch (formatName) {
    case 'stylish':
      return formatStylish(tree);
    case 'plain':
      return formatPlain(tree);
    case 'json':
      return JSON.stringify(tree);
    default:
      throw new Error(`Error! Unknown format - "${formatName}"`);
  }
};

export default format;
