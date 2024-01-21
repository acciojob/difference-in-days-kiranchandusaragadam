var dateDiffInDays = function (date1, date2) {
  //   write your code here
	date1 = new Date(date1);
	date2 = new Date(date2);
	let timeDiff = date2.getTime() - date1.getTime();

	let daysDiff = timeDiff / (24 * 60 * 60 * 1000);

	return daysDiff;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
