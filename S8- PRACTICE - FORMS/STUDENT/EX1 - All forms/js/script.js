// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------
function submitData() {
  // 1- get values from forms
  // TODO
  let myName =document.querySelector('#username');
  let myEmail =document.querySelector('#email');
  let myFruits =document.querySelector('#fruit');
  let mySix =document.querySelectorAll('input[name=genderSelect]');
  let store ='';
  for (let six of mySix){
    if (six.checked){
      store =six.value;
    }

  }
  
  let mySubject =document.querySelectorAll('.subject');
  let subject ='';
  for (let choos of mySubject){
    if (choos.checked){
      subject =choos.value;
    }
  }
  let mySMS =document.querySelector('textarea');
  
  // 2- change labels on right side
  // TODO
  let resultName =document.querySelector('#getUsername');
  resultName.textContent =myName.value;

  let resultEmail =document.querySelector('#getEmail');
  resultEmail.textContent =myEmail.value;

  let resultSix =document.querySelector('#getGender');
  resultSix.textContent =store;

  let resultFruit =document.querySelector('#getFruit');
  resultFruit.textContent =myFruits.value;

  let resultSubject =document.querySelector('#getSubject');
  resultSubject.textContent =subject ;

  let resultSms =document.querySelector('#getMessage');
  resultSms.textContent =mySMS.value;
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------
let applyButton = document.getElementById("applyButton");
applyButton.addEventListener("click", submitData);
