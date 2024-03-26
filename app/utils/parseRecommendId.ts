const parseRecommendId = (url: string) => {
  const splitUrl = decodeURI(url).split(' ');

  if (splitUrl.length === 2) {
    const [addressParam, categoryParam] = splitUrl;

    return { addressParam, categoryParam };
  }

  const [addressParam, categoryParam, tagParam] = splitUrl;
  return { addressParam, categoryParam, tagParam };
};

export default parseRecommendId;
