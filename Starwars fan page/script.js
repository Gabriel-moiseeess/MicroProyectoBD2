function register(params) {
  var email = document.getElementById("email").value;
  var passwd = document.getElementById("password").value;

  localStorage.setItem("email", email);
  localStorage.setItem("password", passwd);
  alert("USUARIO CREADO EXITOSAMENTE");
  document.location.href = "login.html";
}

function loginUser() {
  var email = document.getElementById("emails").value;
  var password = document.getElementById("passwords").value;

  var getEmail = localStorage.getItem("email", email);
  var getPasswd = localStorage.getItem("password", password);

  if (email == getEmail && password == getPasswd) {
    document.location.href = "swapi.html";
  } else if (email !== getEmail && password !== getPasswd) {
    alert("USUARIO INEXISTENTE");
  }
}
