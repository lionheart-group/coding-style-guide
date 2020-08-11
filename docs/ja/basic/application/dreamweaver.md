# DreamWeaver

## インストール

Adobe Creative Cloudからインストールが可能です。

## editorconfig

コードの統一性を高めるために、インデントタイプ・インデントサイズ・行末のスペースの削除など、[EditorConfig](https://editorconfig.org/)を用いて、統一の設定情報を利用します。

> [!WARNING]
> DreamWeaver対応していないため、インデントタイプとインデントサイズを手動で変更をお願いします。
>
> * インデントスタイル : `スペース`
> * インデントサイズ : `4スペース`

## stylelint

CSSの構文の揺れ、インデント崩れを防止するために、[stylelint](https://stylelint.io/)を用いて構文チェックを行っています。  

> [!NOTE]
> [DreamWeaverでも構文チェックが出来るみたいだけど…要検証。](https://helpx.adobe.com/jp/dreamweaver/using/linting-code.html)

## eslint

CSS同様に、JavaScriptの構文揺れ、インデント崩れを防止するために、[eslint](https://eslint.org/)を用いて構文チェックを行っています。

> [!NOTE]
> [DreamWeaverでも構文チェックが出来るみたいだけど…要検証。](https://helpx.adobe.com/jp/dreamweaver/using/linting-code.html)