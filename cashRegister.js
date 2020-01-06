function checkCashRegister(price, cash, cid) {

//The cash register needs to know how much money in $value is to be given back (cash - price = changein$value)
 var changeInDollarValue = cash - price;

//The cash register needs to know the $value of cash in drawer (cid)
 var cidInDollarValue = 0;

 for (var i = 0; i < cid.length; i++) {
     cidInDollarValue += cid[i][1]; //In our case the $value of cid is always on index 1 of the cid array element
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

// Creating objects to reference change to be given

var currencyDictionary = [

  { denomination: 'ONE HUNDRED', value: 100 },
  { denomination: 'TWENTY', value: 20 },
  { denomination: 'TEN', value: 10 },
  { denomination: 'FIVE', value: 5 },
  { denomination: 'ONE', value: 20 },
  { denomination: 'QUARTER', value: 0.25 },
  { denomination: 'DIME', value: 0.1 },
  { denomination: 'NICKEL', value: 0.05 },
  { denomination: 'PENNY', value: 0.01 }

];

//Using reduce method to create the change array

var result = currencyDictionary.reduce(function(accumulator, current, index) {

    if(changeInDollarValue >= current.value) {
        var changeValue = 0.0;
        while (changeInDollarValue >= current.value && cid[index][1] >= current.value) {
            changeValue += current.value;
            changeInDollarValue -= current.value;
            changeInDollarValue = Math.round(changeInDollarValue*100) /100;
            cid[index][1] -= current.value;
        }
        accumulator.push([current.denomination, changeValue]);
        return accumulator;
    }
    else {
        return accumulator;
    }
     }, []);

return result.length > 0 && changeInDollarValue === 0 ?
{status: "OPEN", change: result} : {status: "INSUFFICIENT_FUNDS", change: []};
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