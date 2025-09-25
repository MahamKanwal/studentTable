// const form = document.getElementById("form");
// const inputs = form.querySelectorAll("input");
// for(let i of inputs){
//  i.addEventListener("blur", ()=>{
//    hideError(i.id);
// });
// i.addEventListener("focus", ()=>{
//   showError(i.id,state.errors[i.id]);
// });
// };

// const intialValues ={
//   values:{ name:"", email: "", password: "", confirmPassword: ""},
//   errors:{}
// };

// const state = {...intialValues};
// console.log(state);
// const rules = {
//   name: v => (!v.trim() || v.length < 3 ? "Name must be 3 characters" : ""),
//   email: v => (!v.trim() || !v.includes("@") ? "Enter a valid email" : ""),
//   password: v => (!v.trim() || v.length < 6 ? "Password must be 6 characters" : ""),
//   confirmPassword: v => (!v.trim() || !(v == state.values.password) ? "Password doesn't match" : ""),
// };

// const formHandler = (e) => {
// const {id, value} = e.target;
// formValidate(id,value);
// };

// const formValidate = (id, value) => {
//   const errorMsg = rules[id](value); 
//   state.values[id] = value;
//   state.errors[id] = errorMsg;
//   showError(id,errorMsg);
//   return errorMsg;
// };

// const showError = (id,message= "") => {
//   document.querySelector(`div[data-error=${id}]`).innerHTML = message;
// };

// const hideError = (id) => {
//   document.querySelector(`div[data-error=${id}]`).innerHTML = "";
// };

// const formSubmit = (e) => {
// e.preventDefault();
// let hasError = false;
// let entries = Object.entries(state.values);
// for (let e of entries){
// let error = formValidate(e[0],e[1]);
// if(error) hasError = true;}
// if(!hasError) {
//   form.reset();
//   console.log(state.values);
//   state = { ...intialValues};
// }
// };

// const togglePassword = (e) =>{
// e.classList.toggle("fa-eye");
// e.classList.toggle("fa-eye-slash");
// let passwordInput = e.previousElementSibling;
// let inputType = e.previousElementSibling.type;
// passwordInput.type = inputType == "text" ? "password" : "text";
//  }

// form.addEventListener("submit",formSubmit);
// form.addEventListener("input",formHandler);


const drawerMain = document.getElementById("drawerMain");
const drawer = document.getElementById("drawer");
const openDrawer = () => {
drawerMain.classList.remove("hidden");
drawer.classList.toggle("max-w-[500px]");


}
