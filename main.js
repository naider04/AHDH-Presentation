import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';

import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/simple.css'

let deck = new Reveal({
   plugins: [ Markdown, Notes ],
   hash: true,
   showNotes: true
})

deck.initialize();
