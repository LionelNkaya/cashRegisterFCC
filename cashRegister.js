/*
am now dividing the problem into smaller pieces:
The cash register needs to know how much money in $value is to be given back (cash - price = change)
The cash register needs to know how much cash in drawer in $value and in bills and coins is available to give back (cid).
If change > cid - return insufficient fund
If change === cid - return status closed
-if cid > change. I need to create and use a function that compares the $value of change and the $value of cid and the coins and bills in cid (currency) - ( 2 cases )
case1- currency “matches” change I can organize the currency in proper order to give back the change and return - {status: “OPEN”, change: […]}
case2- currency can not “match” change with the right number of bills and coins and the function returns (insufficient fund).
*/

/* The 3 possible things that I should return
Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

function checkCashRegister(price, cash, cid) {

//Here is the solution object
 var solution = {
    status : "",
    change: [],
  }

//The cash register needs to know how much money in $value is to be given back (cash - price = changein$value)
 var changeInDollarValue = cash - price;

//The cash register needs to know the $value of cash in drawer (cid)
 function testValue (arr) {
   var cidInDollarValue = 0;
   var i;

 for (i = 0; i < arr.length; i++) {
     cidInDollarValue += arr[i][1] //In our case the $value of cid is always on index 1 of the cid array element
    }
 return cidInDollarValue;
 }

 //Testing that the function can return change
// We need to rule out the options whenre we would not need to do more computation on cid in order to solve the problem.

 if (cidInDollarValue < changeInDollarValue) {
     return  {status: "INSUFFICIENT_FUNDS", change: []};
 }

else if (cidInDollarValue === changeInDollarValue) {
     return {status: "CLOSED", change: [...cid]}; // For change we just return the entire cid
 }

//Now, the cash register function needs to know how to give back the change

/* Important point to notice at this point: the cid array is given to us in ascending order (from the smallest coin, to the biggest bill)
but we are instructed to give back the change in the discending order (first give the highest bill available in cid and finish with lowest coin).
We first need to think about how to reverse the cid array so that the highest bill (one hundred) is on index 0 (reverse method).
*/

//Reversing cid
cid = cid.reverse();

// Creating an object to store the value of each currency
var currencyDictionary = {

    "ONE HUNDRED" : 100.00 ,
    "TWENTY" : 20.00 ,
    "TEN" : 10.00 ,
    "FIVE" : 5.00 ,
    "ONE" : 1.00 ,
    "QUARTER" : 0.25 ,
    "DIME" : 0.10 ,
    "NICKEL" : 0.05 ,
    "PENNY" : 0.01 ,
};


/* Here is an example of a reversed cid

[
  [ 'ONE HUNDRED', 100 ],
  [ 'TWENTY', 60 ],
  [ 'TEN', 20 ],
  [ 'FIVE', 55 ],
  [ 'ONE', 90 ],
  [ 'QUARTER', 4.25 ],
  [ 'DIME', 3.1 ],
  [ 'NICKEL', 2.05 ],
  [ 'PENNY', 1.01 ]

]

*/

// Finding the number of bills/coins avialable for each currency
var currencyAvailable = 0;




/*
- Then we need to compare the changeInDollarValue with each index of cid.
(For Loop) Until changeInDollarValue = 0 If changeInDollarValue > cidInDollarValue at index [0] then reduce changeInDollarValue by cidInDollarValue at current index
*/


    //Calculating the change needed


return solution;

}


// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]


/*checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
*/