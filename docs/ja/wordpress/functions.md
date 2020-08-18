# 独自定義関数

## is_mobile

```php
is_mobile(): boolean
```

モバイル判定を行います。モバイルか否か、という判定のため、タブレット端末も`false`が返されます。


## get_page_title

```php
get_page_title(number $page_id = null): string
```

表示しているページ、または指定したページIDのタイトルを取得します。

[サブページタイトル・英名の設定方法](/ja/wordpress/howto/title.md)で指定されている場合は、そちらを優先します。


## get_page_slug_title

```php
get_page_slug_title(number $page_id = null): string
```

表示しているページ、または指定したページIDのスラッグから英名を取得します。

[サブページタイトル・英名の設定方法](/ja/wordpress/howto/title.md)で指定されている場合は、そちらを優先します。


## get_page_slug

```php
get_page_slug(number $page_id = null): string
```

ページのスラッグを取得します。対象ページに親ページが存在する場合は、`(親ページのスラッグ)-(小ページのスラッグ)`という形で取得します。


## remove_line_break

```php
remove_line_break(string $text): string
```

テキスト内の改行を全て削除して返します。（パンくず内のタイトル表示に利用されています）