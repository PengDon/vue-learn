const path = require('path')
const fs = require('fs')
const join = path.join

exports.resolve = (dir) => {
  return path.resolve(__dirname, '../', dir)
}

exports.getEntries = function(src) {
  const entries = fs.readdirSync(src)
  return entries.reduce((_entries, component_path) => {
    if (fs.statSync(join(src, component_path)).isDirectory()) {
      _entries[component_path] = path.resolve(src, component_path, './index.js')
    }
    return _entries
  }, {})
}
