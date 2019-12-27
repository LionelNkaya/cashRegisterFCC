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

  return solution;
}

//The output of my code so far:
//{status:"OPEN", change:[[["Penny",100],["Nickel",5]]]}

//function checkCashRegister(price, cash, cid) {
  //var change;
  // Here is your change, ma'am.
  //return change;

//}

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
