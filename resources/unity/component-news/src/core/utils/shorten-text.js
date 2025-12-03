// @ts-check

const shortenText = (text, maxLength) => {
  let newText = text;
  if (newText.length > maxLength) {
    newText = `${newText.substring(0, maxLength)}...`;
  }
  return newText;
};

export { shortenText };
