// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Danielle King" // HINT: Replace this with your own name!

// Code to update name display


// We'll use these variables to track the counts of each cookie type
let gbCount = 0
let ccCount = 0
let ssCount = 0
let allCount = 0
let ginQty = document.querySelector('#qty-gb')
let ccQty = document.querySelector('#qty-cc') 
let sugQty = document.querySelector('#qty-sugar')
let allQty = document.querySelector('#qty-total')

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
credit.textContent = 'credit: Danielle King';

// selecting the element with an id of add-gb
// Event listener for clicks on the "+" button for Gingerbread cookies
let gbPlusBtn = document.querySelector('#add-gb')
gbPlusBtn.addEventListener('click', function () {
     gbCount = parseInt(gbCount + 1)
     allCount = parseInt(allCount + 1)
     ginQty.textContent = gbCount
     allQty.textContent= allCount;   
});
let gbMinBtn = document.querySelector('#minus-gb')
gbMinBtn.addEventListener('click', function () {
    //console.log(gbMinBtn)
    if (gbCount > 0) {
        gbCount = gbCount - 1
        allCount = allCount -1;
    }
     ginQty.textContent = gbCount
     allQty.textContent= allCount;
});
let ccPlusBtn = document.querySelector('#add-cc')
ccPlusBtn.addEventListener('click', function () {
    //console.log(ccPlusBtn+ 1 )
     ccCount = parseInt(ccCount + 1) 
     allCount = parseInt(allCount + 1)
     ccQty.textContent = ccCount
     allQty.textContent= allCount;

});
let ccMinBtn = document.querySelector('#minus-cc')
ccMinBtn.addEventListener('click', function () {
    //console.log(ccMinBtn)
    if (ccCount > 0) {
        ccCount = ccCount - 1
        allCount = allCount -1;
    }
     ccQty.textContent = ccCount
     allQty.textContent= allCount;
});
let sugPlusBtn = document.querySelector('#add-sugar')
sugPlusBtn.addEventListener('click', function () {
    //console.log(sugPlusBtn+ 1 )
     ssCount = parseInt(ssCount + 1)
     allCount = parseInt(allCount + 1)
     sugQty.textContent = ssCount
     allQty.textContent= allCount;
});
let sugMinBtn = document.querySelector('#minus-sugar')
sugMinBtn.addEventListener('click', function () {
    //console.log(sugMinBtn)
    if (ssCount > 0) {
        ssCount = count - 1
        allCount = allCount -1;
    }
    sugQty.textContent = ssCount
    allQty.textContent= allCount;
})