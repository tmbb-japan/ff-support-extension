document.addEventListener('DOMContentLoaded', () => {
    const captureButton = document.getElementById('captureButton');
    captureButton.addEventListener('click', () => {
      chrome.tabs.captureVisibleTab({ format: 'png' }, (screenshotUrl) => {
        const downloadLink = document.createElement('a');
        downloadLink.href = screenshotUrl;
        downloadLink.download = 'screenshot.png';
        downloadLink.click();
      });
    });
});
  