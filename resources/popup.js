document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('captureButton').addEventListener('click', captureAndUploadImage);
});

async function captureAndUploadImage() {
  try {
    const screenshotUrl = await captureScreenshot();
    const imageBlob = await fetchImageBlob(screenshotUrl);
    await uploadImage(imageBlob);
    console.log('이미지 업로드 성공');
  } catch (error) {
    console.error('오류 발생:', error);
  }
}

function captureScreenshot() {
  return new Promise((resolve, reject) => {
    chrome.tabs.captureVisibleTab({ format: 'png' }, (screenshotUrl) => {
      if (chrome.runtime.lastError) reject(new Error(chrome.runtime.lastError.message));
      else resolve(screenshotUrl);
    });
  });
}

async function fetchImageBlob(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error('이미지를 가져오는 중 오류 발생');
  
  return response.blob();
}

async function uploadImage(imageBlob) {
  const formData = new FormData();
  formData.append('imageData', imageBlob);

  const response = await fetch('http://localhost:3000/upload', { method: 'POST', body: formData });
  
  if (!response.ok) throw new Error('이미지 업로드 중 오류 발생');
}
