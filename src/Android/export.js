function toPng(elementID, name, resolution) {
  const element = document.getElementById(elementID);

  if (!element) {
    console.error('Element not found!');
    return;
  }

  const scale = resolution ? (resolution.width / element.offsetWidth) : 1;

  html2canvas(element, {
    scale: scale
  }).then(canvas => {
    const imgData = canvas.toDataURL('image/png');

    if (name === 0) {
      return imgData;
    } else {
      const link = document.createElement('a');
      link.download = `${name}.png`;
      link.href = imgData;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }).catch(error => {
    console.error('Error generating PNG:', error);
  });
}
