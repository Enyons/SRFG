// let countEl = document.getElementById('count-el');
// let count = 0;

// let saveV = document.getElementById('save');


// function increment() {
//   count = count + 1
//   countEl.innerText = count
// }

// function save() {
//   saveV.innerText = saveV.innerText +  '    ' + countEl.innerText;
//   countEl.innerText = 0;
//   count = 0;
// }

var today = new Date();
var dd = today.getDate();

var mm = today.getMonth();
 var yyyy = today.getFullYear();var h = today.getHours() + 1;

var m = today.getMinutes();

          if (h > 23) h = 0;
          if (m < 10) m = '0' + m
          if (h < 10) h = '0' + h

          today = mm + '/' + dd + '/' + yyyy + ' - ' + h + ':' + m

          // console.log(today);