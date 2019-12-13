# Webpack Dump Metadata Plugin
Save Webpack build metadata to a file.

## Install

`npm install dumpmeta-webpack-plugin --save-dev`

or

`yarn add dumpmeta-webpack-plugin --dev`

## Usage

Webpack.config.js:

```js
const { DumpMetaPlugin } = require('dumpmeta-webpack-plugin');

module.exports = {
  ...

  plugins: [
    ...

    new DumpMetaPlugin({
      filename: 'dist/meta.json',
      prepare: stats => ({
        // add any other information you need to dump
        hash: stats.hash,
      })
    }),
  ]
}
```

## Options

|Name|Description|Default
|:--:|:----------|:-----|
|**`filename`**|Path to the output file|`'meta.json'`
|**`prepare`**|Extract properties from Webpack build metadata to save. These options should be serializable to JSON.|`stats => ({hash: stats.hash})`
