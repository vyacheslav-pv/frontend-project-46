import _ from 'lodash';

const getDiff = (data1, data2) => {
  const indent1 = ' '.repeat(4);
  const indent2 = ' '.repeat(2);
  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));
  const result = keys.flatMap((key) => {
    if (_.has(data1, key) && _.has(data2, key) && data1[key] !== data2[key]) {
      return [`${indent2}- ${key}: ${data1[key]}`, `${indent2}+ ${key}: ${data2[key]}`];
    }
    if (_.has(data1, key) && !_.has(data2, key)) {
      return `${indent2}- ${key}: ${data1[key]}`;
    }
    if (!_.has(data1, key) && _.has(data2, key)) {
      return `${indent2}+ ${key}: ${data2[key]}`;
    }
    return `${indent1}${key}: ${data1[key]}`;
  });
  return ['{', ...result, '}'].join('\n');
};
export default getDiff;
