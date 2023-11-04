import { getDb, putDb } from './database';
import { header } from './header';

export default class Editor {
  constructor() {
    // Retrieve local data, if available
    const localData = localStorage.getItem('content');

    // Ensure CodeMirror is available
    if (typeof CodeMirror === 'undefined') {
      throw new Error('CodeMirror is not loaded');
    }

    // Initialize the CodeMirror editor
    this.initializeEditor(localData);

    // Listen for content changes and save to localStorage
    this.handleContentChange();

    // Save content to IndexedDB when editor loses focus
    this.handleEditorBlur();
  }

  initializeEditor(localData) {
    this.editor = CodeMirror(document.querySelector('#main'), {
      value: localData || header,
      mode: 'javascript',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
      indentUnit: 2,
      tabSize: 2,
    });

    // Load data from IndexedDB and update the editor
    this.loadContent();
  }

  async loadContent() {
    try {
      const data = await getDb();
      console.info('Loaded data from IndexedDB, injecting into editor');
      // If data is not null or undefined, set it as the editor's value
      if (data !== null && data !== undefined) {
        this.editor.setValue(data);
      }
    } catch (error) {
      console.error('Error loading data from IndexedDB', error);
    }
  }

  handleContentChange() {
    this.editor.on('change', () => {
      const currentContent = this.editor.getValue();
      localStorage.setItem('content', currentContent);
    });
  }

  handleEditorBlur() {
    this.editor.on('blur', () => {
      console.log('The editor has lost focus');
      const contentToSave = this.editor.getValue();
      putDb(contentToSave);
    });
  }
}
