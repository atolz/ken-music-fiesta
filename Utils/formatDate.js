const formatDate = (time) => {
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  if (!time) {
    return "No Date Yet";
  }
  console.log("date is", new Date(time));
  const formattedDate = `${new Date(time).getDate()} ${monthNames[new Date(time).getUTCMonth()]}, ${new Date(time).getFullYear()}`;
  console.log("formatted date is", formattedDate);
  return formattedDate;
};

export default formatDate;
