const formattedData = (date) => {
  const dataItem = date?.split("-");
  if (dataItem) {
    const year = dataItem[0];
    const month = dataItem[1];
    const day = dataItem[2];

    return `${day}.${month}.${year}`;
  }
  return "";
};

export default formattedData;
