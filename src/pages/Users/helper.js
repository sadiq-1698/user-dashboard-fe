export const searchInArray = (element, value) => {
  let matchesFirstName = element.first_name.toLowerCase().includes(value);
  let matchesSecondName = element.last_name.toLowerCase().includes(value);
  let matchesEmail = element.email.toLowerCase().includes(value);
  return matchesFirstName || matchesSecondName || matchesEmail;
};

export const generateButtons = (array, currentPageIndex) => {
  // 10 => number of data to display in a page
  // 4 =>  min number of buttons to display in a page
  let noOfPages =
    array.length % 10 > 0
      ? parseInt(array.length / 10) + 1
      : parseInt(array.length / 10);
  let pageNumber = parseInt(currentPageIndex / 10);
  // if number of pages are lesser than the min number of buttons i.e 4
  // then min number of buttons will be equal to number of pages
  let start =
    parseInt((pageNumber + 3) / noOfPages) > 0 ? noOfPages - 3 : pageNumber;
  //edge case => start should begin with atleast equal to 1
  start = start < 1 ? 1 : start;
  let end = start + 4 > noOfPages ? noOfPages + 1 : start + 4;
  let result = [];
  while (start < end) {
    result.push(start);
    start++;
  }
  return result;
};

export const filterFromArray = (element, admin = true, user = true) => {
  let isAdmin = element.role;
  let isUser = !element.role;
  if ((admin && user) || (!admin && !user)) return true;
  if (isAdmin && admin && !isUser && !user) return true;
  if (!isAdmin && !admin && isUser && user) return true;
  return false;
};
