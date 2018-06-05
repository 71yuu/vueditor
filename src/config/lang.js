
let defaultLang = {

  app: {
    noStore: 'Vueditor can not been initialized without Vuex store when using as a component, Please check your Vue Instance!'
  },

  removeFormat: {title: 'Remove format'},

  bold: {title: 'Bold'},
  italic: {title: 'Italic'},
  underline: {title: 'Underline'},
  strikeThrough: {title: 'Strike through'},

  superscript: {title: 'Superscript'},
  subscript: {title: 'Subscript'},
  indent: {title: 'Indent'},
  outdent: {title: 'Outdent'},

  justifyLeft: {title: 'Justify left'},
  justifyCenter: {title: 'Justify center'},
  justifyRight: {title: 'Justify right'},
  justifyFull: {title: 'Justify full'},

  insertOrderedList: {title: 'Insert ordered list'},
  insertUnorderedList: {title: 'Insert unordered list'},

  color: {
    foreColor: 'Text color',
    backColor: 'Background color',
    ok: 'ok',
    colorCode: 'Color code',
    invalidColorCodeMsg: 'Please enter the correct color code'
  },
  fontName: {},
  fontSize: {},
  element: {},
  codeSnippet: {},
  design: {
    ieMsg: 'You must select a text to use this feature in IE browser'
  },
  link: {
    addLink: 'Add link',
    clearLink: 'Clear link',
    ok: 'OK'
  },
  markdown: {
    title: 'markdown'
  },
  picture: {
    title: 'Insert Picture',
    ok: 'OK',
    cancel: 'Cancel',
    invalidFile: 'No file selected or selected file is not a picture'
  },
  sourceCode: {
    title: 'Source Code'
  },
  fullscreen: {
    title: 'Fullscreen'
  },
  table: {title: 'Table'},
  undoRedo: {
    undo: 'Undo',
    redo: 'Redo'
  },
  emoji: {
    title: 'emoji'
  }
}

let lang = JSON.parse(JSON.stringify(defaultLang))

export default {
  setLang (data) {
    data && (lang = data)
  },
  getLang (name) {
    return name ? lang[name] : lang
  },
  getDefaultLang () {
    return defaultLang
  }
}
