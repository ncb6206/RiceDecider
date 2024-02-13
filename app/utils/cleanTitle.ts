const cleanTitle = (title: string) => {
  return title.replace(/<\/?[^>]+(>|$)/g, '');
};

export default cleanTitle;
