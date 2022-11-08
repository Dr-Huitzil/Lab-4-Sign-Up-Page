document.querySelector("#zipCode").addEventListener("change", displayCity);
document.querySelector("#password").addEventListener("click", displayPassword);

async function displayCity() {
  console.log("Displaying City....");
  let zipCode = document.querySelector("#zipCode").value;
  console.log(zipCode);

  let url = `https://cst336.herokuapp.com/projects/api/cityInfoAPI.php?zip=${zipCode}`;
  console.log(url);

  let response = await fetch(url);
  let data = await response.json();
  console.log(data);

  document.querySelector("#city").innerHTML = data.city
}

async function displayPassword() {
  let url = "https://webspace.csumb.edu/~lara4594/ajax/suggestedPwd.php?length=8"
  console.log("generating password");

  let response = await fetch(url);
  let data = await response.json();
  console.log(data);

  document.querySelector("#generated").innerHTML = data.generated;
}