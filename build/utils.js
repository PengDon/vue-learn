const path = require('path')
const fs = require('fs')
const join = path.join

exports.resolve = (dir) => {
    return path.resolve(__dirname, dir)
}

// exports.getEntries = (path) => {
//     let files = fs.readdirSync(this.resolve(path));
//     const entries = files.reduce((ret, item) => {
//         const itemPath = join(path, item)
//         const isDir = fs.statSync(itemPath).isDirectory();
//         if (isDir) {
//             ret[item] = this.resolve(join(itemPath, 'index.js'))
//         } else {
//             const [name] = item.split('.')
//             ret[name] = this.resolve(`${itemPath}`)
//         }
//         return ret
//     }, {})
//     return entries
// }

// console.log(this.getEntries('../packages/header'))


exports.getEntries = function (src){
    const entries = fs.readdirSync(src)
    return entries.reduce((_entries,component_path)=>{
       if(fs.statSync(join(src,component_path)).isDirectory()){
        // _entries[component_path] = path.resolve(src,component_path,'./index')
         _entries[component_path] = path.resolve(src,component_path,'./index.js')
       }
       return _entries
    },{})
}

// console.log(this.getEntries('./packages'))