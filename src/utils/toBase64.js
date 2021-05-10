export const toBase64 = (image) =>
  new Promise((resolve, reject) => {
    const blob = new Blob([image], { type: 'text/plain' });
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
