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

// loader规则
exports.rules = [
  {
    test: /.vue$/,
    loader: 'vue-loader',
  },
  {
    test: /\.(css|less)$/,
    loader: 'style-loader!css-loader!less-loader',
  },
  {
    test: /\.js$/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
    exclude: this.resolve('node_modules'),
  },
  {
    test: /\.(jpg|jpeg|gif|png|svg)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          // 单位是b 512000b = 500kb
          limit: 512000,
          name: '[name]-[hash:8].[ext]',
        },
      },
    ],
  },
]