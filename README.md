# imgs-to-webp

图片转webp格式

# Getting Started

To begin, you'll need to install `imgs-to-webp`:

```shell
$ npm install imgs-to-webp --save-dev
```

### webpack.config.js

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'imgs-to-webp',
          },
        ],
      },
    ],
  },
};
```

# Options

### `name`

输出图片命名规则

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'imgs-to-webp',
            options: {
              name: '[name].[hash:8].[ext]'
            }
          },
        ],
      },
    ],
  },
};
```

### `quality`

压缩图片的质量，默认 75

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'imgs-to-webp',
            options: {
              quality: 75,
            }
          },
        ],
      },
    ],
  },
};
```

### `outputPath`

图片转换后的路径，默认 `dist/webp`

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'imgs-to-webp',
            options: {
              outputPath: `dist/webp`
            }
          },
        ],
      },
    ],
  },
};
```

### `include`

匹配图片路径正则，默认 /src/

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'imgs-to-webp',
            options: {
              include: /src/
            }
          },
        ],
      },
    ],
  },
};
```
