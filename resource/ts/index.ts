import '@/scss/style.scss'
import 'highlight.js/scss/monokai.scss'

import hljs from 'highlight.js/lib/core.js'

// Register
import bash from 'highlight.js/lib/languages/bash.js'
import css from 'highlight.js/lib/languages/css.js'
import javascript from 'highlight.js/lib/languages/javascript.js'
import php from 'highlight.js/lib/languages/php.js'
import phpTemplate from 'highlight.js/lib/languages/php-template.js'
import plaintext from 'highlight.js/lib/languages/plaintext.js'
import scss from 'highlight.js/lib/languages/scss.js'
import sql from 'highlight.js/lib/languages/sql.js'
import twig from 'highlight.js/lib/languages/twig.js'
import typescript from 'highlight.js/lib/languages/typescript.js'
import xml from 'highlight.js/lib/languages/xml.js'
import yaml from 'highlight.js/lib/languages/yaml.js'
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('css', css)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('php', php)
hljs.registerLanguage('php-template', phpTemplate)
hljs.registerLanguage('plaintext', plaintext)
hljs.registerLanguage('scss', scss)
hljs.registerLanguage('sql', sql)
hljs.registerLanguage('twig', twig)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('yaml', yaml)

hljs.initHighlightingOnLoad()
