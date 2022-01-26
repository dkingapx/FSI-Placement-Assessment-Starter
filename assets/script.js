// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Danielle King" // HINT: Replace this with your own name!

// Code to update name display


// We'll use these variables to track the counts of each cookie type
let count = 1
let ginQty = document.querySelector('#qty-gb')
let ccQty = document.querySelector('#qty-cc') 
let sugQty = document.querySelector('#qty-sugar')

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
credit.textContent = 'credit: Danielle King';

// selecting the element with an id of add-gb
// Event listener for clicks on the "+" button for Gingerbread cookies
let gbPlusBtn = document.querySelector('#add-gb')
gbPlusBtn.addEventListener('click', function () {
    //console.log(gbPlusBtn+ 1 )
     count = parseInt(count + 1)
     ginQty.textContent = count;
});
let gbMinBtn = document.querySelector('#minus-gb')
gbMinBtn.addEventListener('click', function () {
    //console.log(gbMinBtn)
    if (count > 0) {
        count = count - 1;
    }
     ginQty.textContent = count;
});
let ccPlusBtn = document.querySelector('#add-cc')
ccPlusBtn.addEventListener('click', function () {
    //console.log(ccPlusBtn+ 1 )
     count = parseInt(count + 1) 
     ccQty.textContent = count;
});
let ccMinBtn = document.querySelector('#minus-cc')
ccMinBtn.addEventListener('click', function () {
    //console.log(ccMinBtn)
    if (count > 0) {
        count = count - 1;
    }
     ccQty.textContent = count;
});
let sugPlusBtn = document.querySelector('#add-sugar')
sugPlusBtn.addEventListener('click', function () {
    //console.log(sugPlusBtn+ 1 )
     count = parseInt(count + 1)
     sugQty.textContent = count;
});
let sugMinBtn = document.querySelector('#minus-sugar')
sugMinBtn.addEventListener('click', function () {
    //console.log(sugMinBtn)
    if (count > 0) {
        count = count - 1;
    }
    sugQty.textContent = count;
});
let allTotal = document.querySelector('#qty-total')
for(let i = 0;)


// TODO: Hook up event listeners for the rest of the buttons