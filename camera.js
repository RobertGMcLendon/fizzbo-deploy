document.getElementById('cameraBtn').addEventListener('click', async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    // Stop stream immediately — we just want permission for now
    stream.getTracks().forEach(track => track.stop());
    // Redirect to listing form
    window.location.href = "/list-property.html";
  } catch (err) {
    alert("Camera access denied or unavailable.");
  }
});

document.getElementById('cmaBtn').addEventListener('click', () => {
  window.open("http://app.cloudcma.com/api_widget/4bf5549a02c45b902c31b3d0b60eff45/show?post_url=https://app.cloudcma.com&source_url=ua", "_blank");
});
