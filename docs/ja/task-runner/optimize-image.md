# optimize:image

JPG, PNGファイルの圧縮を行います。

```bash
npm run optimize:image
```

## 備考

このコマンドを実行するためには、`package.json`を変更する必要があります。

```json
  "dependencies": {
    "sanitize.css": "^11.0.1"
  },
  "imageDependencies": {
    "imagemin": "^7.0.1",
    "imagemin-mozjpeg": "^9.0.0",
    "imagemin-optipng": "^8.0.0",
    "imagemin-svgo": "^8.0.0",
    "sharp": "^0.25.4"
  }
```

を

```json
  "dependencies": {
    "sanitize.css": "^11.0.1",
    "imagemin": "^7.0.1",
    "imagemin-mozjpeg": "^9.0.0",
    "imagemin-optipng": "^8.0.0",
    "imagemin-svgo": "^8.0.0",
    "sharp": "^0.25.4"
  }
```

の様に書き換えて、dependenciesに含める必要があります。