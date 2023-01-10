// One method to convert certain text values in your Google Sheet into numeric values is
// to use the JavaScript parseFloat() function. The parseFloat() function takes a string
// as an argument and returns a floating-point number that represents the contents of the string.
// If the string cannot be converted to a number, the function returns NaN (Not-a-Number).
//
// Here is some sample code to show how this method could be used with your current Google Apps Script:


// declare variables for numeric values
let assetAllocation = 0;
let returnExpectation = 0;
let investmentHorizon = 0;

// convert values from columns 5, 6, and 7 of Google Sheet to numeric values
assetAllocation = parseFloat(e.values[5]);
returnExpectation = parseFloat(e.values[6]);
investmentHorizon = parseFloat(e.values[7]);

// check if any of the converted values are NaN
if (isNaN(assetAllocation)) {
  // handle invalid input
}
if (isNaN(returnExpectation)) {
  // handle invalid input
}
if (isNaN(investmentHorizon)) {
  // handle invalid input
}

// You could use this method to parse the values in the columns of your Google Sheet
// that you want to convert to numeric values, and store the results in variables that
// can be used in further calculations. You can then use the isNaN() function to check if
// any of the converted values are not numbers, and then handle them if not.
