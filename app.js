
const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const phoneEl = document.getElementById('phone');
const submitEl = document.getElementById('submit');
let validEmail = false;
let validPhone = false;
let validName = false;
$('#failure').hide();
$('#success').hide();

//name
nameEl.addEventListener('blur', () => {

  let str = nameEl.value;
  let regex =/^[a-zA-z]([a-zA-z]){3,15}$/

  if (regex.test(str)){
    nameEl.classList.remove('is-invalid');
    validName=true;
  }else{
    nameEl.classList.add('is-invalid');
    validName=false;
  }
})

//reamaing
phoneEl.addEventListener('blur', () => {

  let str = phoneEl.value;
  let regex = /^([0-9]){10}$/;

  if (regex.test(str)){
    phoneEl.classList.remove('is-invalid');
    validPhone = true;
  }else{
    phoneEl.classList.add('is-invalid');
    validPhone=false;
  }
})

//email
emailEl.addEventListener('blur', () => {

  let str = emailEl.value;
  let regex =/^([_\.\-0-9a-zA-z]+)@([-\-\.0-9a-zA-z]+)\.([a-zA-z]){2,7}$/

  if (regex.test(str)){
    emailEl.classList.remove('is-invalid');
    validEmail = true;
  }else{
    emailEl.classList.add('is-invalid');
    validEmail=false;
  }
})

//submit
submitEl.addEventListener("click", (e) => {

  let failure = document.getElementById("failure");
  let success = document.getElementById("success");
  e.preventDefault();

if (validName && validPhone && validEmail ) {

  success.classList.add('show');
  $('#failure').hide();
  $('#success').show();
}else {

  failure.classList.add('show');
  $('#success').hide();
  $('#failure').show();
  
}
  
})
