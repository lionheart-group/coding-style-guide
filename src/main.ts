import './reveal/css/reset.css'
import './reveal/css/reveal.css'
import './reveal/css/theme/black.css'
import './reveal/lib/css/monokai.css'

import './assets/style.scss'

import * as Reveal from './reveal/js/reveal'
(window as any).Reveal = Reveal
import './reveal/plugin/markdown/marked'
import './reveal/plugin/markdown/markdown'
// import './reveal/plugin/highlight/highlight'

Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: false,
  dependencies: [
    { src: 'plugin/highlight/highlight.js', async: true },
  ]
})