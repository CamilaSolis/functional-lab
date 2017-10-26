exports.log = null;
exports.log = (...args) => args.join(' ');

exports.logger = (namespace) => exports.log.bind(null, namespace)