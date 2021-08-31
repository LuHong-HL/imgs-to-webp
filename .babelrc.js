module.exports = {
  "presets": [ // 预设是一堆plugins的组合
    [
      "@babel/preset-env"
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3,
        "version": "^7.15.3"
      }
    ]
  ]
}

