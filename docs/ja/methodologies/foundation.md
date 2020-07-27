# Foundation

> Reset.cssやNormalize.cssなどを用いたブラウザのデフォルトスタイルの初期化や、プロジェクトにおける基本的なスタイルを定義します。 ページの下地としての全体の背景や、基本的なタイポグラフィなどが該当します。

初期化CSSは[Sanitize.css](https://csstools.github.io/sanitize.css/)を利用し、追加でデフォルトスタイルを初期化する記述を、`foundation/_base.scss`に記述します。  
（`h*`の余白や、`ul`の点などを消しています）

また、変数やmixinもfoundation内に格納するようにします。