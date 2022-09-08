// window.onbeforeunload = () => {
//   window.scrollTo(0, 0);
// };

$("input").prop("enabled", true);

console.log(screen.height);

// window.innerWidth < 700 ? (window.innerHeight = 450) : 1128;

// window.innerHeight = window.innerWidth < 700 ? 450 : 680;
console.log(window.innerHeight - screen.height);
console.log(window.innerHeight);

function initGravity() {
  // $(".hero-texts").jGravity({
  //   ignoreClass: "ignore",
  //   target: ".drop",
  //   depth: 10,
  //   drag: true,
  //   weight: 27,
  // });

  $(".drop").throwable({
    containment: [0, 0, window.innerWidth, window.innerHeight],
    drag: true,
    gravity: { x: 0, y: 0 },
    impulse: {
      f: 150, //52
      p: { x: 1, y: 1 },
    },
    autostart: true,
    bounce: 0,
    damping: 0,
  });
}
initGravity();

const slider = function () {
  const slides = document.querySelectorAll(".section-3_content");
  const btnLeft = document.querySelector(".slide_btn-left");
  const btnRight = document.querySelector(".slide_btn-right");
  const dotContainer = document.querySelector(".dots");

  let curslide = 0;
  let maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * -slide}%)`;
    });
    curslide = slide;
    return "retrieved";
  };

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots_dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots_dot")
      .forEach((dot) => dot.classList.remove("dots_dot-active"));

    document
      .querySelector(`.dots_dot[data-slide="${slide}"]`)
      .classList.add("dots_dot-active");
  };

  createDots();
  activateDot(curslide);

  goToSlide(curslide);

  const slideRight = function () {
    if (curslide === maxSlide - 1) {
      curslide = 0;
    } else {
      curslide++;
    }
    goToSlide(curslide);
    activateDot(curslide);
  };

  const slideLeft = function () {
    if (curslide === 0) {
      curslide = maxSlide - 1;
    } else {
      curslide--;
      console.log(curslide);
    }
    goToSlide(curslide);
    activateDot(curslide);
  };

  btnLeft.addEventListener("click", () => {
    slideLeft();
  });
  btnRight.addEventListener("click", () => {
    slideRight();
  });

  return goToSlide;
};
// slider();
// console.log(slider());

//to gretrieve goToSlide function from slider function and access it outside the slider function
const getSliderFunction = slider();
// console.log(getSliderFunction);

//////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////

const typewriterContainer = () => {
  let i = 0;
  const text = "Connect with me...";
  const speed = 150;

  setTimeout(() => {
    function typewriter() {
      console.log("typing");
      if (i < text.length) {
        document.querySelector(".footer-left-h2").textContent += text.charAt(i);
        i += 1;
        setTimeout(typewriter, speed);
      }
    }

    typewriter();
  }, 1500);

  // setTimeout(typewriter, 2000);
};

// typewriterContainer();

function getPosition() {
  const letters = document.querySelectorAll(".letter");
  const symbols = document.querySelectorAll(".symbol-curl");

  symbols.forEach((symbol) => {
    let symbolRect = symbol.getBoundingClientRect();
    console.log(symbolRect.top);
    if (symbolRect.bottom > 400) {
      symbol.style.color = "#adb5bd";
      // symbol.style.color = "red";
    }

    if (symbolRect.y < 276 || symbolRect.bottom < 300 || symbolRect.top < 300) {
      symbol.style.color = "#4c6ef5";
    }
  });

  letters.forEach((letter) => {
    let letterRect = letter.getBoundingClientRect();
    // console.log(letterRect.top)
    if (letterRect.bottom > 400) {
      letter.style.color = "#4c6ef5";
      // letter.style.color = "red";
    }

    if (letterRect.y < 276 || letterRect.bottom < 300 || letterRect.top < 300) {
      letter.style.color = "#adb5bd";
    }
  });
}

// const retrievedPosition = setInterval(() => {
// getPosition();
// }, 50);

function vh(v) {
  const h = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  return (v * h) / 100;
}

function vw(v) {
  const w = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  return (v * w) / 100;
}

function vMin(v) {
  return Math.min(vh(v), vw(v));
}

function vMax(v) {
  return Math.max(vh(v), vw(v));
}

const letters = document.querySelectorAll(".letter");
// letters.forEach((letter) => console.log(letter.getBoundingClientRect()));

///////////////////////////////////////////////////////////
if (window.innerWidth > 767) {
  document
    .querySelector(".section-3_content_wrapper-wrapper")
    .addEventListener("mouseover", () => {
      if (
        !document
          .querySelector(".section-3_container-child")
          .classList.contains("show-projects-modal")
      ) {
        !document
          .querySelector(".section-3_content-more")
          .classList.add("show-content-more");
      }
    });

  if (
    !document
      .querySelector(".section-3_container-child")
      .classList.contains("show-projects-modal")
  ) {
    document
      .querySelector(".section-3_content_wrapper-wrapper")
      .addEventListener("mouseout", () => {
        document
          .querySelector(".section-3_content-more")
          .classList.remove("show-content-more");
      });
  }
}
// console.log(window.innerWidth);

if (window.innerWidth <= 640) {
  document
    .querySelector(".section-3_content_wrapper-wrapper")
    .addEventListener("mouseover", () => {
      document
        .querySelector(".section-3_content-more")
        .classList.toggle("show-content-more");
    });
  document
    .querySelector(".section-3_content_wrapper-wrapper")
    .addEventListener("mouseout", () => {
      document
        .querySelector(".section-3_content-more")
        .classList.toggle("show-content-more");
    });
}

//SECTION ANIMATION//

const allSections = document.querySelectorAll(".observe");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) {
    // new Section().animationsClear(+entry.target.id);
    return;
  }

  if (entry.isIntersecting) {
    new Section(+entry.target.id);
    observer.unobserve(entry.target);
    // entry.target.classList.remove("section--hidden");
  } else {
    new Section().animationsClear(+entry.target.id);
  }
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.5,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add("section--hidden");
});

//NOTE comeback and finish
const elementView = (el, scrollOffset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) - scrollOffset
  );
};

class Section {
  constructor(section) {
    this.animationsInit(section);
  }

  animationsInit = (section) => {
    if (section === 1) {
      document.querySelector(".profile-img").classList.add("place-profile-img");
      // document.querySelector(".section-1_left_text-h2_underline").style.width =
      // "100%";
      fullWidth(section);

      document
        .querySelector(".section-1_left_text-h2_wrapper")
        .classList.add("h2-underline");
    }

    if (section === 2) {
      document.querySelectorAll(".skillset-list-item").forEach((item) => {
        item.classList.add("pop-up");
      });
      fullWidth(section);

      const skillsetList = document.querySelectorAll(".skillset-list-item");

      let currentSkillItem = 0;

      function underline(count) {
        setTimeout(() => {
          skillsetList[count].classList.remove("skillset-list-underline");

          if (currentSkillItem < skillsetList.length) {
            setTimeout(() => {
              skillsetList[currentSkillItem].classList.toggle(
                "skillset-list-underline"
              );

              currentSkillItem++;
              underline(currentSkillItem - 1);
            }, 2000);
          } else {
            currentSkillItem = 0;
            underline(currentSkillItem);
          }
        }, 2000);
      }

      underline(currentSkillItem);
    }

    if (section === 3) {
      document.querySelectorAll(".section-3_back-color").forEach((item) => {
        item.classList.add("place-back-color");
      });

      fullWidth(section);
    }

    if (section === 4) {
      document
        .querySelector(".message_container")
        .classList.add("show-message-box");

      typewriterContainer();
    }
  };

  animationsClear = (section) => {
    if (section === 1) {
      document
        .querySelector(".profile-img")
        .classList.remove("place-profile-img");
      document.querySelector(".section-1_left_text-h2_underline").style.width =
        "0%";
    }

    if (section === 2) {
      document.querySelectorAll(".skillset-list-item").forEach((item) => {
        item.classList.remove("pop-up");
      });
      document.querySelector(".section-2_text-h2_underline").style.width = "0%";
    }

    if (section === 3) {
      document.querySelectorAll(".section-3_back-color").forEach((item) => {
        item.classList.remove("place-back-color");
      });
    }

    if (section === 4) {
      document
        .querySelector(".message_container")
        .classList.remove("show-message-box");
    }
  };
}

const slidesContainer = document.querySelector(".section-3_container-child");

document
  .querySelector(".full-view_container")
  .addEventListener("click", (e) => {
    e.preventDefault();
    if (!slidesContainer.classList.contains("show-projects-modal")) {
      showModal(3);
    }
  });

document.querySelector(".btn_exit-modal").addEventListener("click", () => {
  console.log(slidesContainer.classList);
  if (slidesContainer.classList.contains("show-projects-modal")) {
    hideModal(3);
  }
});

function showModal(section) {
  document.querySelectorAll(".section-3_back-color").forEach((color) => {
    color.style.display = "none";
  });

  document.querySelectorAll(".slide_btn").forEach((btn) => {
    btn.style.display = "none";
  });
  document.querySelectorAll(".dots-container").forEach((dot) => {
    dot.style.display = "none";
  });

  slidesContainer.classList.add("show-projects-modal");

  console.log(getSliderFunction(0));

  // document.querySelector(`.section-${section}`).style.height = "100vh";
}
// }

function hideModal(section) {
  document.querySelectorAll(".section-3_back-color").forEach((color) => {
    color.style.display = "inline-block";
  });

  document.querySelectorAll(".slide_btn").forEach((btn) => {
    btn.style.display = "inline-block";
  });
  document.querySelectorAll(".dots-container").forEach((dot) => {
    dot.style.display = "inline-block";
  });
  console.log(slidesContainer.classList.contains("show-projects-modal"));

  slidesContainer.classList.remove("show-projects-modal");

  getSliderFunction(0);
}

const h2Underline = document.querySelectorAll(".h2-underline");
const widthFull = "110%";

function fullWidth(index) {
  h2Underline[index - 1].style.setProperty("--width-zero", widthFull);

  // h2Underline.forEach((underline) =>
  //   underline.style.setProperty("--width-zero", widthFull)
  // );
}
