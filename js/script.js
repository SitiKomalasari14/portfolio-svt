const txtElement = ['SEVENTEEN'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

    if(count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;

    setTimeout(ngetik, 500);

})();


window.alert("Put a Cursor on img to see the content of 'About' \nThank You!!\n");