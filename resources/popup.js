document.getElementById('captureButton').addEventListener('click', () => {
    chrome.tabs.captureVisibleTab({ format: 'png' }, (screenshotUrl) => {
      const downloadLink = document.createElement('a');
      downloadLink.href = screenshotUrl;
      downloadLink.download = 'screenshot.png';
      downloadLink.click();
    });
  });
  