class InstallButtonHandler {
    constructor(buttonId) {
      this.butInstall = document.getElementById(buttonId);
      this.deferredPrompt = null;
  
      this.initialize();
    }
  
    initialize() {
      window.addEventListener('beforeinstallprompt', this.handleBeforeInstallPrompt.bind(this));
      this.butInstall.addEventListener('click', this.handleInstallClick.bind(this));
      window.addEventListener('appinstalled', this.handleAppInstalled.bind(this));
    }
  
    handleBeforeInstallPrompt(event) {
      console.log('beforeinstallprompt event fired');
      event.preventDefault();
      this.deferredPrompt = event;
      this.toggleInstallButton(false); // Show the install button
    }
  
    handleInstallClick() {
      if (!this.deferredPrompt) return;
  
      this.deferredPrompt.prompt();
      this.deferredPrompt = null;
      this.toggleInstallButton(true); // Hide the install button after prompt
    }
  
    handleAppInstalled(event) {
      console.log('appinstalled event fired');
      this.deferredPrompt = null;
    }
  
    toggleInstallButton(isHidden) {
      this.butInstall.classList.toggle('hidden', isHidden);
    }
  }
  
  // Initialize the handler for the install button.
  const installButtonHandler = new InstallButtonHandler("buttonInstall");
  
