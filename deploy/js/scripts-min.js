

let burgerBtn = document.querySelector("#burger-btn"), mainMenu = document.querySelector("#main-menu"), canSeeMenu = !1; burgerBtn.addEventListener("click", (() => { console.log(canSeeMenu), canSeeMenu ? (mainMenu.classList.remove("show-menu"), canSeeMenu = !1) : (mainMenu.classList.add("show-menu"), canSeeMenu = !0) })), mainMenu.addEventListener("click", (() => { mainMenu.classList.remove("show-menu"), canSeeMenu = !1 }));