# パンくずのラベル「ホーム」の変更方法

テーマディレクトリ内の`config.php`の、下記関数のテキストを編集することで変更する事が可能です。

```php
function get_home_label() {
    return 'ホーム';
}
```