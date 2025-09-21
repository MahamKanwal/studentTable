const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const form = document.getElementById("form");

const state = {
  values: { name: "", email: "", password: "", confirmPassword: "" },
  errors: {},
};

const rules = {
  name: (v) => (!v.trim() || v.length < 3 ? "name must be 3 characters" : ""),
  email: (v) => (!v.trim() || !v.includes("@") ? "enter a valid email" : ""),
  password: (v) => (!v.trim() || v.length < 6 ? "password must be 6 characters" : ""),
  confirmPassword: (v) => (!v.trim() || !(v == state.values.password) ? "Same as password" : ""),
};

const formHandler = (e) => {
  const { id, value } = e.target;
  state.values[id] = value;
  const errorMsg = rules[id](value);
  state.errors[id] = errorMsg;
  showError(id, errorMsg);
};

const showError = (id, message) => {
  document.querySelector(`div[data-error=${id}]`).innerHTML = message;
};

form.addEventListener("input", formHandler);

// const checkName = (name) =>
//   !name.trim() ? "Name required" : name.length < 3 ? "Too short" : "Valid";

// console.log(checkName(""));      
// console.log(checkName("Al"));    
// console.log(checkName("Maham")); 

// const obj = {
//   value: 10,
//   normal: function () {
//     console.log(this.value); // 10 (kyunki ye obj ko refer karta hai)
//   },
//   arrow: () => {
//     console.log(this.value); // undefined (kyunki arrow function ka this obj nahi, balki outer scope hai)
//   }
// };

// obj.normal();
// obj.arrow();


