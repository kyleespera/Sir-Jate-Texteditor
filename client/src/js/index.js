import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database'; // Assumes that importing './database' initializes the database.
import '../css/style.css';

// The function to clear the main content and load the spinner.
function clearMainAndLoadSpinner(mainElement) {
  mainElement.innerHTML = '';
  const spinner = document.createElement('div');
  spinner.className = 'spinner';
  spinner.innerHTML = `
    <div class="loading-container">
      <div class="loading-spinner"></div>
    </div>`;
  mainElement.appendChild(spinner);
}

// The function to initialize the Editor.
function initializeEditor() {
  const editorInstance = new Editor();
  if (typeof editorInstance === 'undefined') {
    const mainElement = document.querySelector('#main');
    clearMainAndLoadSpinner(mainElement);
  }
}

// The function to register the service worker if supported.
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    const workboxSW = new Workbox('/src-sw.js');
    workboxSW.register();
  } else {
    console.error('Service workers are not supported in this browser.');
  }
}

// Initialization function to encapsulate starting procedures.
function initializeApplication() {
  initializeEditor();
  registerServiceWorker();
}

// Start the application.
initializeApplication();
