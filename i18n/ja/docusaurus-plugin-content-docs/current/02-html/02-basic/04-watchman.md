---
title: Watchman
---

[Watchman](https://facebook.github.io/watchman/)を利用して、ファイルの監視・自動更新処理を行っているため、Watchmanのインストールが必要です。


## macOS

Homebrewにてインストールが可能です。

```bash
brew install watchman
```

## Windows

Windowsはインストーラーが無いので、ちょっと大変ですが…。

[公式サイトの説明](https://facebook.github.io/watchman/docs/install.html#binary-downloads-for-linux-macos-and-windows-beta)

1. [GitHubのRelase](https://github.com/facebook/watchman/releases)から`watchman-v*******-windows.zip`をダウンロード
2. 解凍後、`Program Files`など適当な場所にコピー
3. watchmanのフォルダ内の`bin`をPATHに追加する（[追加方法はコチラが参考になります](https://qiita.com/sta/items/6d29da0dc7069ffaae60)）