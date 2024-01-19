const doc = document;

const input = doc.querySelectorAll('input');
let validar = []

function render(){
  let nombre;
  let apellido;
  let email;
  let pass;
  for(let valor in validar){

    
    nombre = validar[valor].FirstName;
    
    apellido = validar[valor].LastName,

    email = validar[valor].Email;
    
    pass = validar[valor].Password;
  }
  console.log(`
    nombre: ${nombre}
    apellido: ${apellido}
    email: ${email}
    pass: ${pass}
  `);
console.log(validar);
}

function  validacion (firstName, lastName, email, password){
  validar.push({
    FirstName: firstName,
    LastName: lastName,
    Email: email,
    Password: password
  })
  
}


const inputFirstName = doc.querySelector('#first-name');
const inputLastName = doc.querySelector('#last-name');
const inputEmail = doc.querySelector('#email');
const inputPassword = doc.querySelector('#password');


const regExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

function capturarDatos () {
  const firstName = inputFirstName.value;
  const lastName = inputLastName.value;
  const email = inputEmail.value;
  const password = inputPassword.value;
  
  const parrafo = doc.querySelectorAll('.parrafo');


    input.forEach((item) => {
      item.classList.add('active');
    });
    
  if(firstName === ''){
    parrafo[0].classList.remove('hidden');
  }else {
    parrafo[0].classList.add('hidden');
  } 

  if(lastName === ''){
    parrafo[1].classList.remove('hidden');
  }else {
    parrafo[1].classList.add('hidden');
  }
  
  if(!regExp.test(email)){
    parrafo[2].classList.remove('hidden');
    
  }else{
    parrafo[2].classList.add('hidden');
  }

  if(password === ''){
    parrafo[3].classList.remove('hidden');
  }else{
    parrafo[3].classList.add('hidden');
    validacion(firstName, lastName, email, password);
    
  } 
  
  render()
}


const btn = doc.querySelector('#btn');
btn.addEventListener('click', capturarDatos)

