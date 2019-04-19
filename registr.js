
let form = document.querySelector('#validForm');
let userForm = document.querySelector('#userForm');
let userLogin = document.getElementById('login');
let userTel = document.getElementById('phone');
let mainPassword = document.getElementById('password');
let passwordConfirm = document.getElementById('passConfirm');
let log = document.getElementById('log');
let pass = document.getElementById('pass');
let currentUser = {};


function changeRoute(newRoute) {
  let activeRoute = document.getElementsByClassName('fluid route active')[0];
  activeRoute.className = 'fluid route';
  document.getElementById(newRoute).className = 'fluid route active';
}

form.addEventListener ('submit', (e) => {
  e.preventDefault ()

  if (mainPassword.value !== passwordConfirm.value) {
    alert('Проверьте пароли');
    return false
  } else {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = {
      'login': userLogin.value,
      'phone': userTel.value,
      'password': mainPassword.value
    }

    for (var i = 0; i < users.length; i++) {
      if (users[i].phone === user.phone ) {
        changeRoute('loginForm')
        alert('уже такой юзер есть');
        return null;
      }
    }

    users.push(user)
    let updatedUsers = JSON.stringify(users);
    localStorage.setItem("users", updatedUsers)
    currentUser = user;
    applyUser();
    changeRoute('cabinet')
  }
})


function Enter () {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = {
    'login': userLogin.value,
    'phone': userTel.value,
    'password': mainPassword.value
  }
  for (var i = 0; i < users.length; i++) {
    if (log.value == users[i].login && pass.value == users[i].password ) {
      console.log(4, log.value, pass.value, users[i].login, users[i].password)
      currentUser = users[i];
      applyUser();
      changeRoute('cabinet')
    } else if (pass.value !== users[i].password && log.value == users[i].login) {
      alert('Неверный пароль')
      console.log(3, log.value, pass.value, users[i].login, users[i].password)
      return false
    } else {
      alert('Проверьте логин или пароль');
    console.log(1, log.value, pass.value, users[i].login, users[i].password)
    return false  
    }
  }
}
//сначала проверяю верность пароля и логина, если верно впускаю,
//если логин верный а пароль нет пишу что пароль не верный,
//а если логин не нашелся(не было совпадений) в самой последней строчке проверяю на его существование;

function applyUser () {
  if (!currentUser.login) {
    return null
  }
  let cabinet = document.getElementById("cabinet");
  let el = document.createElement("li");
  let el1 = document.createElement("li");

  el.innerHTML = currentUser.login;
  el1.innerHTML = currentUser.phone;
  cabinet.appendChild(el)
  cabinet.appendChild(el1)

}
  


applyUser()

