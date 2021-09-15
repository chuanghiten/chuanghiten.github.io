//**********Start Assitive_Touch**********
var posX;
var posY;
var screenWidth = document.documentElement.clientWidth;
var screenHeight = document.documentElement.clientHeight;
var fdiv = document.getElementById("Assitive_Touch");
fdiv.onmousedown = function(e) {
  screenWidth = document.documentElement.clientWidth;
  screenHeight = document.documentElement.clientHeight;
  if (!e) {
    e = window.event;
  }
  posX = e.clientX - parseInt(fdiv.style.left);
  posY = e.clientY - parseInt(fdiv.style.top);
        document.onmousemove = mousemove;
      };
      document.onmouseup = function() {
        document.onmousemove = null;
        if (
          parseInt(fdiv.style.top) + parseInt(fdiv.clientHeight) / 2 <=
          screenHeight / 2
        ) {
          if (
            parseInt(fdiv.style.left) + parseInt(fdiv.clientWidth) / 2 <=
            screenWidth / 2
          ) {
            if (
              parseInt(fdiv.style.top) + parseInt(fdiv.clientHeight) / 2 <=
              parseInt(fdiv.style.left) + parseInt(fdiv.clientWidth) / 2
            ) {
              fdiv.style.top = "0px";
            } else {
              fdiv.style.left = "0px";
            }
          } else {
            if (
              parseInt(fdiv.style.top) + parseInt(fdiv.clientHeight) / 2 <=
              screenWidth -
                (parseInt(fdiv.style.left) + parseInt(fdiv.clientWidth) / 2)
            ) {
              fdiv.style.top = "0px";
            } else {
              fdiv.style.left = screenWidth - parseInt(fdiv.clientWidth) + "px";
            }
          }
        } else {
          if (
            parseInt(fdiv.style.left) + parseInt(fdiv.clientWidth) / 2 <=
            screenWidth / 2
          ) {
            if (
              screenHeight -
                (parseInt(fdiv.style.top) + parseInt(fdiv.clientHeight) / 2) <=
              parseInt(fdiv.style.left) + parseInt(fdiv.clientWidth) / 2
            ) {
              fdiv.style.top =
                screenHeight - parseInt(fdiv.clientHeight) + "px";
            } else {
              fdiv.style.left = "0px";
            }
          } else {
            if (
              screenHeight -
                (parseInt(fdiv.style.top) + parseInt(fdiv.clientHeight) / 2) <=
              screenWidth -
                (parseInt(fdiv.style.left) + parseInt(fdiv.clientWidth) / 2)
            ) {
              fdiv.style.top =
                screenHeight - parseInt(fdiv.clientHeight) + "px";
            } else {
              fdiv.style.left = screenWidth - parseInt(fdiv.clientWidth) + "px";
            }
          }
        }
      };
      function mousemove(ev) {
        if (ev == null) {
          ev = window.event;
        }
        if (ev.clientY - posY <= 0) {
          fdiv.style.top = "0px";
        } else if (
          ev.clientY - posY >
          screenHeight - parseInt(fdiv.clientHeight)
        ) {
          fdiv.style.top = screenHeight - parseInt(fdiv.clientHeight) + "px";
        } else {
          fdiv.style.top = ev.clientY - posY + "px";
        }
        if (ev.clientX - posX <= 0) {
          fdiv.style.left = "0px";
        } else if (
          ev.clientX - posX >
          screenWidth - parseInt(fdiv.clientWidth)
        ) {
          fdiv.style.left = screenWidth - parseInt(fdiv.clientWidth) + "px";
        } else {
          fdiv.style.left = ev.clientX - posX + "px";
        }
      }
      window.onload = window.onresize = function() {
        screenWidth = document.documentElement.clientWidth;
        screenHeight = document.documentElement.clientHeight;
        if (
          parseInt(fdiv.style.top) + parseInt(fdiv.clientHeight) >
          screenHeight
        ) {
          fdiv.style.top = screenHeight - parseInt(fdiv.clientHeight) + "px";
        }
        if (
          parseInt(fdiv.style.left) + parseInt(fdiv.clientWidth) >
          screenWidth
        ) {
          fdiv.style.left = screenWidth - parseInt(fdiv.clientWidth) + "px";
        }
        document.onmouseup.apply();
      };
      fdiv.addEventListener("touchstart", fdiv.onmousedown, false);
      fdiv.addEventListener(
        "touchmove",
        function(event) {
          if (event.targetTouches.length == 1) {
            event.preventDefault();
            var touch = event.targetTouches[0];
            if (touch.pageY <= 0) {
              fdiv.style.top = "0px";
            } else if (
              touch.pageY >
              screenHeight - parseInt(fdiv.clientHeight)
            ) {
              fdiv.style.top =
                screenHeight - parseInt(fdiv.clientHeight) + "px";
            } else {
              fdiv.style.top =
                touch.pageY - parseInt(fdiv.clientHeight) / 2 + "px";
            }
            if (touch.pageX <= 0) {
              fdiv.style.left = "0px";
            } else if (touch.pageX > screenWidth - parseInt(fdiv.clientWidth)) {
              fdiv.style.left = screenWidth - parseInt(fdiv.clientWidth) + "px";
            } else {
              fdiv.style.left =
                touch.pageX - parseInt(fdiv.clientWidth) / 2 + "px";
            }
          }
        },
        false
      );
//fdiv.addEventListener("touchend", document.onmouseup, false);
/* **********End_Assitive_Touch**********
===========================================
   **********Start_Button_Menu********** */
const buttonMenu = document.querySelector("#Button_Menu");
const contentContainer = document.querySelector("#content_container");
let menuOpen = false;
buttonMenu.addEventListener("click", () => {
  if (!menuOpen) {
    buttonMenu.classList.add("open");
    contentContainer.classList.add("open");
    menuOpen = true;
  } else {
    buttonMenu.classList.remove("open");
    contentContainer.classList.remove("open");
    menuOpen = false;
  }
});
contentContainer.addEventListener("click", () => {
  if (!menuOpen) {} else {
    buttonMenu.classList.remove("open");
    contentContainer.classList.remove("open");
    menuOpen = false;
  }
});
/* **********End_Button_Menu**********
===============================================
   **********Start_Dark-Night_Mode********** */
const toggleSwitch = document.querySelector(
        '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}
toggleSwitch.addEventListener("change", switchTheme, false);
/* **********End_Dark-Night_Mode********** */
