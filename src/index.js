const { execFileSync } = require('child_process')
const webp = require('cwebp-bin')
const path = require('path')
const fs = require('fs')
const { getOptions, interpolateName } = require('loader-utils')

/**
 *  创建多级目录
 * @param { Strng } dirname 创建目录
 * @returns boolean
 */
const mkdirsSync = (dirname) => {
  if (fs.existsSync(dirname)) {
    return true
  }
  if (mkdirsSync(path.dirname(dirname))) {
    fs.mkdirSync(dirname)
    return true
  }
}

module.exports = function (content) {
  const options = getOptions(this) || {};
  const outputPath = options.outputPath || './dist/webp'

    const url = interpolateName(this, options.name, {
        content: content,
        regExp: options.include
    })
    // 生成的文件存放路径
    // 放在项目目录下的webp目录中
    const webpUrl = `/${url.substring(0, url.lastIndexOf('.'))}.webp`
    // 判断webp目录是否存在，不存在则创建webp目录
    mkdirsSync(outputPath)
    // 执行图片转换操作
    execFileSync(webp, [
        '-q',
        options.quality || '75',
        this.resourcePath,
        '-o',
        path.join(`${outputPath}`, webpUrl)
    ])
    return content
}
