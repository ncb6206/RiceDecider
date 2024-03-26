const parseInformationId = (url: string) => {
  const [locationParam, titleParam, categoryParam] =
    decodeURI(url).split('%26');

  return { locationParam, titleParam, categoryParam };
};

export default parseInformationId;
