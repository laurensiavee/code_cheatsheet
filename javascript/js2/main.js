// //////////
// test app
// //////////

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    // console.log(nameInput.value);

    if(nameInput.value === '' || emailInput.value === ''){
        // alert('please fill');
        msg.classList.add('error')
        msg.innerHTML = 'please enter all field'

        // time 3s
        setTimeout(() => msg.remove(), 3000);

    } else {
        // console.log('success')

        // add list to ul:
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
        userList.appendChild(li)

        // clear field
        nameInput.value = ''
        emailInput.value = ''
    }

}
