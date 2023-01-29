const indent = (depth, replacer = ' ', spacesCount = 4) => {
  const indentSize = depth * spacesCount - 2;
  return replacer.repeat(indentSize);
};

const stringify = (data, depth) => {
  if (typeof data !== 'object' || data === null) {
    return String(data);
  }
  const arr = Object.entries(data);
  const lines = arr.map(([key, val]) => `${indent(depth + 1)}  ${key}: ${stringify(val, depth + 1)}`);
  const result = ['{', ...lines, `${indent(depth)}  }`].join('\n');
  return result;
};

const formatStylish = (value) => {
  const iter = (currentValue, depth) => currentValue.map((item) => {
    switch (item.type) {
      case 'nested':
        return `${indent(depth)}  ${item.name}: {\n${iter(item.children, depth + 1).join('\n')}\n${indent(depth)}  }`;
      case 'added':
        return `${indent(depth)}+ ${item.name}: ${stringify(item.value, depth)}`;
      case 'deleted':
        return `${indent(depth)}- ${item.name}: ${stringify(item.value, depth)}`;
      case 'changed':
        return `${indent(depth)}- ${item.name}: ${stringify(item.value1, depth)}\n${indent(depth)}+ ${item.name}: ${stringify(item.value2, depth)}`;
      case 'unchanged':
        return `${indent(depth)}  ${item.name}: ${stringify(item.value, depth)}`;
      default:
        throw new Error(`Cannot handle element type ${item.name}`);
    }
  });
  return `{\n${iter(value, 1).join('\n')}\n}`;
};
export default formatStylish;
