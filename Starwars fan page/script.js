


function register(params) {
  var email = document.getElementById("email").value;
  var passwd = document.getElementById("password").value;

  localStorage.setItem("email", email);
  localStorage.setItem("password", passwd);
}

function loginUser() {
  var email = document.getElementById("emails").value;
  var password = document.getElementById("passwords").value;

  var getEmail = localStorage.getItem("email", email);
  var getPasswd = localStorage.getItem("password", password);

  if (email == getEmail && password == getPasswd) {
    alert("USUARIO EXISTENTE");
    
    window.location.replace('http://127.0.0.1:5500/index.html');
  } else if (email !== getEmail && password !== getPasswd) {
    alert("USUARIO INEXISTENTE");
  }
}
