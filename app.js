const cloudinaryUrl = "cloudinary://488844431652422:qmA0d9axRJLrS2__qmA0d9axRJLrS2__3xiLnkw5amo@dvaczuwrm" ;
// const uploadPreset = "my_unsigned_preset";
const apiBaseUrl = "https://68d65479c2a1754b426a4e23.mockapi.io/students";
const drawerMain = document.getElementById("drawerMain");
const drawer = document.getElementById("drawer");
const form = document.getElementById("form");
const inputs = form.querySelectorAll("input, select");
for (let i of inputs) {
  if(i.id == "file") continue
  i.addEventListener("blur", () => {
    hideError(i.id);
  });
  i.addEventListener("focus", () => {
    showError(i.id, state.errors[i.id]);
  });
}

const intialValues = {
  values: { name: "", email: "", rollNo: "", course: "", status: "" ,img:""},
  errors: {},
};

const state = { ...intialValues };
console.log(state);
const rules = {
  name: (v) => (!v.trim() || v.length < 3 ? "Name must be 3 characters" : ""),
  email: (v) => (!v.trim() || !v.includes("@") ? "Enter a valid email" : ""),
  rollNo: (v) => (!v.trim()  ? "Roll no is required" : ""),
  course: (v) => (!v ? "Please select a course" : ""),
  status: (v) => (!v ? "Please select a status" : ""),
};

const formHandler = async(e) => {
  if(e.target.id == "file"){
 const file = e.target.files[0];
 const formData = new FormData();
 formData.append("file",file);
//  formData.append("upload_preset", uploadPreset);
  try {
    const res = await fetch(cloudinaryUrl, {
      method: "POST",
      body: formData
    });
    const data = await res.json();
    console.log("Upload result:", data);
  } catch (err) {
    console.error("Upload error:", err);
  }
  }
else{
    const { id, value } = e.target;
  formValidate(id, value);
}
};

const formValidate = (id, value) => {
  const errorMsg = rules[id](value);
  state.values[id] = value;
  state.errors[id] = errorMsg;
  showError(id, errorMsg);
  console.log(errorMsg);
  return errorMsg;
};

const showError = (id, message = "") => {
  document.querySelector(`div[data-error=${id}]`).innerHTML = message;
};

const hideError = (id) => {
  document.querySelector(`div[data-error=${id}]`).innerHTML = "";
};

const formSubmit = () => {
  let hasError = false;
  let entries = Object.entries(state.values);
  for (let e of entries) {
    let error = formValidate(e[0], e[1]);
    if (error) hasError = true;
  }

  if (!hasError) {
    fetch(apiBaseUrl,
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(state.values)
});
    console.log(state.values);
    form.reset();
    // state = { ...intialValues };
  }
};

const getStudentFromDb = async() => {
   const res = await fetch(apiBaseUrl);
   const data = await res.json();
   console.log(data);
}
getStudentFromDb();



// const togglePassword = (e) =>{
// e.classList.toggle("fa-eye");
// e.classList.toggle("fa-eye-slash");
// let passwordInput = e.previousElementSibling;
// let inputType = e.previousElementSibling.type;
// passwordInput.type = inputType == "text" ? "password" : "text";
//  }

const openDrawer = () => {
  drawerMain.classList.remove("hidden");
  drawer.classList.toggle("max-w-[500px]");
};

form.addEventListener("submit", formSubmit);
form.addEventListener("input", formHandler);
