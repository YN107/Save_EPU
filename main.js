let btn = document.querySelector(".btn");
let user = document.querySelector(".user");
let email = document.querySelector(".email");
let pass = document.querySelector(".pass");

btn.onclick = () => {
  let infos = {
    nameO: user.value,
    emailO: email.value,
    passO: pass.value,
  };
  let userInfosString = JSON.stringify(infos);

  localStorage.setItem("userInfos", userInfosString);
  location.href = "hack.html"

};
