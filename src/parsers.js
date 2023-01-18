const parser = (data, format) => (format === 'json' ? JSON.parse(data) : false);
export default parser;
