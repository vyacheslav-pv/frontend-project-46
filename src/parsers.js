const parser = (data, format) => {
    if (format === 'json')
    return JSON.parse(data);
  };
export default parser;