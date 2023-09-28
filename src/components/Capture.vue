<script setup>
import { ref } from 'vue';

const captureAndUploadImage = async () => {
  try {
    const screenshotUrl = await captureScreenshot();
    const imageBlob = await fetchImageBlob(screenshotUrl);
    await uploadImage(imageBlob);
    console.log('이미지 업로드 성공');
  } catch (error) {
    console.error('오류 발생:', error);
  }
};

const captureScreenshot = () => new Promise((resolve, reject) => {
  chrome.tabs.captureVisibleTab({ format: 'png' }, (screenshotUrl) => {
    if (chrome.runtime.lastError) reject(new Error(chrome.runtime.lastError.message));
    else resolve(screenshotUrl);
  });
});

const fetchImageBlob = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error('이미지를 가져오는 중 오류 발생');
  return response.blob();
};

const uploadImage = async (imageBlob) => {
  const formData = new FormData();
  formData.append('imageData', imageBlob);

  const response = await fetch('http://localhost:3000/upload', { method: 'POST', body: formData });

  if (!response.ok) throw new Error('이미지 업로드 중 오류 발생');
};
</script>


<template>
    <button @click="captureAndUploadImage">페이지 캡쳐</button>
</template>
