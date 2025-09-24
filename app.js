// const form = document.getElementById("form");
// const inputs = form.querySelectorAll("input");
// const state = {
//   values: { name: "", email: "", password: "", confirmPassword: "" },
//   errors: {},
// };

//  for (let i of inputs) {
//   i.addEventListener("blur", () => {
//     hideError(i.id);
//   });
//   i.addEventListener("focus", () => {
//     showError(i.id, state.errors[i.id]);
//   });
// }

// const rules = {
//   name: v => (!v.trim() || v.length < 3 ? "name must be 3 characters" : ""),
//   email: v => (!v.trim() || !v.includes("@") ? "enter a valid email" : ""),
//   password: v => (!v.trim() || v.length < 6 ? "password must be 6 characters" : ""),
//   confirmPassword: v => (!v.trim() || !(v == state.values.password) ? "Same as password" : ""),
// };

// const validateField = (id, value) => {
//   const errorMsg = rules[id](value);
//   state.values[id] = value;
//   state.errors[id] = errorMsg;
//   showError(id, errorMsg);
//   return errorMsg;
// };

// const formHandler = (e) => {
//   const { id, value } = e.target;
//   validateField(id, value);
// };

// const hideError = (id) => {
//   document.querySelector(`div[data-error=${id}]`).innerHTML = "";
// };

// const showError = (id, message = "") => {
//   document.querySelector(`div[data-error=${id}]`).innerHTML = message;
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   let hasError = false;
//   const entries = Object.entries(state.values);
//   for (let e of entries) {
//     const error = validateField(e[0], e[1]);
//     if (error) hasError = true;
//   }
//   if (!hasError) console.log(state.values);
// };

// form.addEventListener("submit", handleSubmit);
// form.addEventListener("input", formHandler);


const form = document.getElementById("form");
const input = form.querySelectorAll("input");
for(let i of input){
 i.addEventListener("blur", ()=>{
   hideError(i.id);
});
i.addEventListener("focus", ()=>{
   hideError(i.id,state.errors[i.id]);
});
};

const state = {
  values:{ name:"", email: "", password: "", confirmPassword: ""},
  errors:{}
};

const rules = {
  name: v => (!v.trim() || v > 3 ? "Name must be 3 characters" : ""),
  email: v => (!v.trim() || !v.includes("@") ? "Enter a valid email" : ""),
  password: v => (!v.trim() || v.length > 6 ? "Password must be 6 characters" : ""),
  confirmPassword: v => (!v.trim() || !(v == state.values.password) ? "Password doesn't match" : ""),
};

const formHandler = (e) => {
const {id, value} = e.target;
formValidate(id,value);
};

const formValidate = (id, value) => {
  const errorMsg = rules[id](value); 
  state.values[id] = value;
  state.errors[id] = errorMsg;
  showError(id,errorMsg);
  return errorMsg;
};

const showError = (id,message= "") => {
  document.querySelector(`div[data-error=${id}]`).innerHTML = message;
};

const hideError = (id) => {
  document.querySelector(`div[data-error=${id}]`).innerHTML = "";
};

const formSubmit = (e) => {
e.preventDefault();
let hasError = false;
let entries = Object.entries(state.values);
for (let e of entries){
let error = ValidityState(e[0],e[1]);
if(error) hasError = true;}
if(!hasError) console.log(state.values);
};

form.addEventListener("submit",formSubmit);
form.addEventListener("input",formHandler);
