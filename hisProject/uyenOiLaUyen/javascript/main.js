var bodyElement = window.document.querySelector("body"),
  hongElement = window.document.querySelector("body .hong"),
  imgHong = window.document.querySelector("body .hong .image"),
  promptHong = window.document.querySelector(
    "body .hong .options .contents .content"
  ),
  textHong = window.document.querySelector("body .hong .text"),
  optionHong = window.document.querySelector("body .hong .options .option"),
  birthdayCakeElement = window.document.querySelector("body .birthdayCake"),
  cake0 = window.document.querySelector("body .birthdayCake .cake0"),
  cake1 = window.document.querySelector("body .birthdayCake .cake1"),
  cake2 = window.document.querySelector("body .birthdayCake .cake2"),
  nen = window.document.querySelector("body .birthdayCake .nen"),
  fire1 = window.document.querySelector("body .birthdayCake .fire1"),
  fire2 = window.document.querySelector("body .birthdayCake .fire2"),
  fire3 = window.document.querySelector("body .birthdayCake .fire3"),
  fire4 = window.document.querySelector("body .birthdayCake .fire4"),
  fire5 = window.document.querySelector("body .birthdayCake .fire5"),
  finalCake = window.document.querySelector("body .birthdayCake .finalCake"),
  lampCord = window.document.querySelector("body .birthdayCake .lampCord"),
  candleLightFocus = window.document.querySelector("body .birthdayCake .light"),
  mainElement = window.document.querySelector("body .main"),
  changeScene = window.document.querySelector(
    "body .main .birthdayCake .changeScene"
  ),
  backgroundFinalCake = window.document.querySelector(
    "body .main .birthdayCake .backgroundFinalCake"
  ),
  loiChucSinhNhat = window.document.querySelector(
    "body body .main .birthdayCake .backgroundFinalCake .text .top, html body .main .birthdayCake .backgroundFinalCake .text .bottom"
  ),
  trungThuFrame = window.document.querySelector("body .trungThuFrame"),
  banhTrungThu = window.document.querySelector(
    "body .main .hong .image .imgInDiv .banhTrungThu"
  );
function cakeAnim() {
  candleLightFocus.setAttribute("active", "");
  candleLightFocus.setAttribute("style", `--height: ${nen.offsetHeight}px`);
  lampCord.setAttribute("style", "display: none");
  a = [fire5, fire4, fire3, fire2, fire1, cake0, cake1, cake2, nen];
  hongElement.removeAttribute("active");
  birthdayCakeElement.setAttribute("active", "");
  setTimeout(() => {
    a[4].setAttribute("active", "");
  }, 700);
  setTimeout(() => {
    a[3].setAttribute("active", "");
  }, 1600);
  setTimeout(() => {
    a[2].setAttribute("active", "");
  }, 2500);
  setTimeout(() => {
    a[1].setAttribute("active", "");
  }, 3400);
  setTimeout(() => {
    a[0].setAttribute("active", "");
  }, 4300);
  setTimeout(() => {
    backgroundFinalCake.setAttribute("active", "");
    let date = new Date(),
      tuoi;
    tuoi = date.getFullYear() - 2006;
    loiChucSinhNhat.innerHTML = `Tuổi ${tuoi} vui vẻ đáng yêu nhaaaa~`;
    a[0].setAttribute("active", "");
    birthdayCakeElement.setAttribute("style", "background: #ffdbb7");
    finalCake.setAttribute("active", "");
    for (let i = 0; i < 9; i++) {
      a[i].setAttribute("style", "display: none");
      a[i].removeAttribute("active");
    }
  }, 4500);
}
const {
    gsap,
    gsap: { registerPlugin, set, to, timeline },
    MorphSVGPlugin,
    Draggable,
  } = window,
  PROXY = document.createElement("div"),
  CORDS = gsap.utils.toArray(".cords path"),
  CORD_DURATION = 0.1,
  HIT = document.querySelector(".hit"),
  DUMMY_CORD = document.querySelector(".st"),
  ENDX = DUMMY_CORD.getAttribute("x2"),
  ENDY = DUMMY_CORD.getAttribute("y2"),
  RESET = () => {
    set(PROXY, { x: ENDX, y: ENDY });
  },
  CORD_TL = timeline({
    paused: true,
    onStart: () => {
      set([DUMMY_CORD, HIT], { display: "none" });
      set(CORDS[0], { display: "block" });
    },
    onComplete: () => {
      set([DUMMY_CORD, HIT], { display: "block" });
      set(CORDS[0], { display: "none" });
      RESET();
    },
  });
RESET();
registerPlugin(MorphSVGPlugin);
gsap.config({ trialWarn: false });
let startX, startY;
gsap.set([".cords", HIT], {
  x: -10,
});
for (let i = 1; i < CORDS.length; i++) {
  CORD_TL.add(
    to(CORDS[0], {
      morphSVG: CORDS[i],
      duration: CORD_DURATION,
      repeat: 1,
      yoyo: true,
    })
  );
}
Draggable.create(PROXY, {
  trigger: HIT,
  type: "x,y",
  onPress: (e) => {
    startX = e.x;
    startY = e.y;
  },
  onDrag: function () {
    set(DUMMY_CORD, {
      attr: {
        x2: this.x,
        y2: Math.max(809, this.y),
      },
    });
  },
  onRelease: function (e) {
    const DISTX = Math.abs(e.x - startX);
    const DISTY = Math.abs(e.y - startY);
    const TRAVELLED = Math.sqrt(DISTX * DISTX + DISTY * DISTY);
    to(DUMMY_CORD, {
      attr: { x2: ENDX, y2: ENDY },
      duration: CORD_DURATION,
      onComplete: () => {
        if (TRAVELLED > 50) {
          CORD_TL.restart();
          cakeAnim();
        } else {
          RESET();
        }
      },
    });
  },
});
function typingText(text, element, speed, fu) {
  let i = 0;
  function tp() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(tp, speed);
    }
  }
  tp();
  if (typeof fu == "function") {
    setTimeout(fu, speed * text.length);
  }
}
function c() {
  imgHong.setAttribute("style", "display: none");
  textHong.innerHTML = "Thôi dẹp m đi";
  promptHong.innerHTML = "";
  optionHong.innerHTML = "";
  typingText(
    "Chẳng ai lại đi tặng hoa cho một bông hoa cả, m lấy nhiều hoa thế muốn mở tiệm bán hoa hay gì?",
    promptHong,
    40,
    () => {
      optionHong.innerHTML =
        '<div class="option1">...</div><div class="option1">...</div><div class="option1">...</div>';
    }
  );
}
function d2() {
  let i = 0,
    a = [cake0, cake1, cake2, nen, lampCord];
  hongElement.removeAttribute("active");
  changeScene.removeAttribute("active");
  function at() {
    if (i < 5) {
      a[i].setAttribute("active", "");
      i++;
      setTimeout(at, 100);
      if (i == 4) {
        CORD_TL.restart();
      }
    }
  }
  at();
}
function d() {
  birthdayCakeElement.setAttribute("active", "");
  promptHong.innerHTML = "";
  typingText("à", promptHong, 50, () => {
    changeScene.setAttribute("active", "");
    setTimeout(d2, 1000);
  });
}
function b() {
  imgHong.setAttribute("active", "");
  promptHong.innerHTML = "";
  optionHong.innerHTML = "";
  if ((new Date().getDate() == 18 && new Date().getMonth() + 1 == 6) || false) {
    typingText(
      "3 bó thì sao? Ủa mà nay sinh nhật m hả?",
      promptHong,
      50,
      () => {
        optionHong.innerHTML =
          '<div class="option2" onclick="d()">Yep, nay sn t</div><div class="option1" onclick="c()">Còn hoa nữa 0?</div>';
      }
    );
  } else {
    typingText("3 bó thì sao?", promptHong, 50, () => {
      optionHong.innerHTML =
        '<div class="option1" onclick="c()">Còn hoa nữa 0?</div>';
    });
  }
}
function a() {
  imgHong.removeAttribute("bong");
  imgHong.setAttribute("bo", "");
  textHong.innerHTML = "Vậy thì tặng bó hồng nè~";
  promptHong.innerHTML = "";
  optionHong.innerHTML = "";
  typingText("Vẫn ít ư?", promptHong, 50, () => {
    optionHong.innerHTML = '<div class="option1" onclick="b()">Đúng r</div>';
  });
}
function e(a) {
  b = Math.floor(Math.random() * 3);
  c = ["thapCam", "trungMuoi", "traXanh", "Thập Cẩm", "Trứng Muối", "Trà Xanh"];
  banhTrungThu.removeAttribute("hoiCham");
  banhTrungThu.setAttribute(c[b], "");
  if (a == 3) {
    textHong.innerHTML = `Vậy thì nhân ${
      c[b + 3]
    } nhé!<br><span>Trung thu vui vẻ nhaaaa~</span>`;
  } else if (a != b) {
    textHong.innerHTML = `Sai r nhé :)))<br><span>Bánh này nhân ${
      c[b + 3]
    }</span>`;
  } else if (a == b) {
    textHong.innerHTML = `OK tặng nhân ${
      c[b + 3]
    } nè!<br><span>Trung thu vui vẻ nhaaaa~</span>`;
  }
  promptHong.innerHTML = "";
  optionHong.innerHTML = "";
  typingText("Chúc ngon miệng!", promptHong, 50, () => {
    optionHong.innerHTML = "<div>...</div>";
  });
}
document.addEventListener("DOMContentLoaded", () => {
  function addScreenSizeToBodyElement() {
    bodyElement.setAttribute(
      "style",
      `--innerWidth:${window.innerWidth}px;--innerHeight:${window.innerHeight}px;`
    );
    mainElement.setAttribute(
      "style",
      `--maxWidth: ${window.innerHeight * (555 / 888)}px`
    );
    trungThuFrame.setAttribute(
      "style",
      `--maxWidth: ${window.innerHeight * (555 / 888)}px`
    );
    window.document
      .querySelector("html")
      .setAttribute(
        "style",
        `font-size: ${(mainElement.offsetWidth / 1211) * 62.5}%`
      );
    changeScene.setAttribute("style", `--width: ${mainElement.offsetHeight}px`);
  }
  if (
    getLunar(
      new Date().getDate(),
      new Date().getMonth() + 1,
      new Date().getFullYear(),
      (new Date().getTimezoneOffset() / 60) * -1
    )[0] == 15 &&
    getLunar(
      new Date().getDate(),
      new Date().getMonth() + 1,
      new Date().getFullYear(),
      (new Date().getTimezoneOffset() / 60) * -1
    )[1] == 8
  ) {
    trungThuFrame.setAttribute("active", "");
    hongElement.setAttribute("active", "");
    imgHong.setAttribute("banhTrungThu", "");
    banhTrungThu.setAttribute("hoiCham", "");
    textHong.innerHTML = "Tặng bánh trung thu nè~";
    optionHong.innerHTML = "";
    typingText("Thích nhân gì nào?", promptHong, 50, () => {
      optionHong.innerHTML =
        '<div onclick="e(0)">Thập Cẩm</div><div onclick="e(1)">Trứng Muối</div><div onclick="e(2)">Trà Xanh</div><div onclick="e(3)">Gì cũng đc</div>';
    });
  } else {
    hongElement.setAttribute("active", "");
    imgHong.setAttribute("bong", "");
    textHong.innerHTML =
      "Tặng m bông hồng nè~<br><span>Nếu đang buồn thì đừng buồn nữa nhaaaa!!!</span>";
    optionHong.innerHTML = "";
    typingText("Chưa đủ làm m vui ư?", promptHong, 50, () => {
      optionHong.innerHTML = '<div class="option1" onclick="a()">Yep</div>';
    });
  }
  bodyElement.onresize = addScreenSizeToBodyElement;
  addScreenSizeToBodyElement();
  finalCake.addEventListener("click", () => {
    if (lampCord.getAttribute("style") != "display: none") {
      CORD_TL.restart();
    }
  });
});
