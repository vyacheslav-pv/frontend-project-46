import _ from 'lodash';
import path from 'path';

const stringify = (data) => {
  if (typeof data === 'object' && data !== null) {
    return '[complex value]';
  }
  if (typeof data === 'string') {
    return `'${data}'`;
  }
  return String(data);
};

const formatPlain = (data) => {
  const iter = (tree, ancestry) => {
    const result = tree.map((item) => {
      const newAncestry = path.join(ancestry, item.name).replace(/\//g, '.');
      switch (item.type) {
        case 'nested':
          return `${iter(item.children, newAncestry)}`;
        case 'added':
          return `Property '${newAncestry}' was added with value: ${stringify(item.value)}`;
        case 'deleted':
          return `Property '${newAncestry}' was removed`;
        case 'changed':
          return `Property '${newAncestry}' was updated. From ${stringify(item.value1)} to ${stringify(item.value2)}`;
        case 'unchanged':
          return null;
        default:
          throw new Error(`Cannot handle element type ${item.type}`);
      }
    });
    return _.compact(result).join('\n');
  };
  return iter(data, '');
};

export default formatPlain;
