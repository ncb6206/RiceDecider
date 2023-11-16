const clearWord = (sentence: string) => {
  return sentence.replace(/<b>(.*?)<\/b>/g, '$1').replace(/\s+/g, '');
};

export default clearWord;
