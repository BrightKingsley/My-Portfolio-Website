// https://github.com/BrightKingsley/Apartment-Listing-Site-pwa
const projectLinks = [
  {
    project: "Apartment Listing app",
    links: {
      github: "https://github.com/BrightKingsley/Apartment-Listing-Site-pwa",
      live: "https://raale-ajei.onrender.com",
    },
  },
  {
    project: "Mapty-React",
    links: {
      github: "https://github.com/BrightKingsley/mapty-react",
      live: "https://mapty-react-brightkingsley.vercel.app",
    },
  },
  {
    project: "iPhone12 design",
    links: {
      github: "https://github.com/BrightKingsley/iPhone-Design",
      live: "https://i-phone-design.vercel.app",
    },
  },
  {
    project: "Agriculture Website",
    links: {
      github: "https://github.com/BrightKingsley/Practice-Agriculture-Website",
      live: "https://agriculture-website-three.vercel.app",
    },
  },
  {
    project: "Music Player",
    links: {
      github: "https://github.com/BrightKingsley/Music-Player",
      live: "https://github.com/BrightKingsley/Music-Player",
    },
  },
  {
    project: "Hotel Haven",
    links: {
      github: "https://github.com/BrightKingsley/hotel-booking-site",
      live: "https://github.com/BrightKingsley/hotel-haven.vercel.app",
    },
  },
  {
    project: "Side Scroler",
    links: {
      github: "https://github.com/BrightKingsley/Side-Scroller-Game",
      live: "https://github.com/BrightKingsley/Side-Scroller-Game",
    },
  },
  {
    project: "Expense Tracker",
    links: {
      github: "https://github.com/BrightKingsley/Apartment-Listing-Site-pwa",
      live: "https://github.com/BrightKingsley/Apartment-Listing-Site-pwa",
    },
  },
  {
    project: "Fashion Exhibition",
    links: {
      github:
        "https://github.com/BrightKingsley/Fashion-Exhibition-Display-site-React",
      live: "https://github.com/BrightKingsley/Fashion-Exhibition-Display-site-React",
    },
  },
  {
    project: "tic-tac-toe",
    link: "https://brightkingsley-ticc-tac-toe.netlify.app/",
    links: {
      github: "https://github.com/BrightKingsley/Tic-Tac-Toe ",
      live: "https://brightkingsley-ticc-tac-toe.netlify.app",
    },
  },
  {
    project: "Elevator Simulator",
    links: {
      github: "https://github.com/BrightKingsley/Elevator-simu",
      live: "https://brightkingsley-elevator-simulator.netlify.app/",
    },
  },
];

//NOTENOTE/NOTENOTE/NOTENOTE/NOTENOTENOTE/NOTE/NOTENOTENOTE/NOTENOTENOTE
//NOTE/////NOTE/////NOTE/////////NOTE/////NOTE/NOTE////NOTE/NOTE////NOTE
//NOTENOTE/NOTENOTE/NOTE/////////NOTE/////NOTE/NOTE////NOTE/NOTE////NOTE
//////NOTE/NOTE/////NOTE/////////NOTE/////NOTE/NOTE////NOTE/NOTE////NOTE
//NOTENOTE/NOTENOTE/NOTENOTE/////NOTE/////NOTE/NOTENOTENOTE/NOTE////NOTE

const Section_1 = function () {
  const drop = document.querySelectorAll(".drop");

  drop.forEach((item, i) => {
    item.style.transform = `translateX(${i}${i}0%)`;
  });

  function initGravity() {
    $(".drop").throwable({
      containment: [0, 0, window.innerWidth, window.innerHeight],
      drag: true,
      gravity: { x: 0, y: 0.5 },
      impulse: {
        f: 150, //52
        p: { x: 0, y: 1 },
      },
      autostart: true,
      bounce: 0.5,
      damping: 0.5,
    });
  }
  setTimeout(() => {
    initGravity();
  }, 1500);
};

function symbolsPosition() {
  const symbols = document.querySelectorAll(".symbol");

  symbols.forEach((symbol) => {
    let symbolRect = symbol.getBoundingClientRect();
    if (symbolRect.bottom > 400) {
      symbol.style.color = "#adb5bd";
    }

    if (symbolRect.y < 276 || symbolRect.bottom < 300 || symbolRect.top < 300) {
      symbol.style.color = "#4c6ef5";
    }
  });
}

function lettersPosition() {
  const letters = document.querySelectorAll(".letter");

  letters.forEach((letter) => {
    let letterRect = letter.getBoundingClientRect();
    if (letterRect.bottom > 400) {
      letter.style.color = "#4c6ef5";
    }

    if (innerWidth > 640) {
      if (
        letterRect.y < 276 ||
        letterRect.bottom < 400 ||
        letterRect.top < 300
      ) {
        // if (letterRect.y < 276 || letterRect.bottom < 400 || letterRect.top < 300) {
        letter.style.color = "#adb5bd";
      }
    } else if (letterRect.y < 400) {
      letter.style.color = "#adb5bd";
    }
  });
}

function getPosition() {
  symbolsPosition();
  lettersPosition();
}

const retrievedPosition = setInterval(() => {
  getPosition();
}, 50);

Section_1();

//NOTENOTE/NOTENOTE/NOTENOTE/NOTENOTENOTE/NOTE/NOTENOTENOTE/NOTENOTENOTE
//NOTE/////NOTE/////NOTE/////////NOTE/////NOTE/NOTE////NOTE/NOTE////NOTE
//NOTENOTE/NOTENOTE/NOTE/////////NOTE/////NOTE/NOTE////NOTE/NOTE////NOTE
//////NOTE/NOTE/////NOTE/////////NOTE/////NOTE/NOTE////NOTE/NOTE////NOTE
//NOTENOTE/NOTENOTE/NOTENOTE/////NOTE/////NOTE/NOTENOTENOTE/NOTE////NOTE

const Section_2 = function () {};
Section_2();

//NOTENOTE/NOTENOTE/NOTENOTE/NOTENOTENOTE/NOTE/NOTENOTENOTE/NOTENOTENOTE
//NOTE/////NOTE/////NOTE/////////NOTE/////NOTE/NOTE////NOTE/NOTE////NOTE
//NOTENOTE/NOTENOTE/NOTE/////////NOTE/////NOTE/NOTE////NOTE/NOTE////NOTE
//////NOTE/NOTE/////NOTE/////////NOTE/////NOTE/NOTE////NOTE/NOTE////NOTE
//NOTENOTE/NOTENOTE/NOTENOTE/////NOTE/////NOTE/NOTENOTENOTE/NOTE////NOTE

const Section_3 = function () {
  if (window.innerWidth > 900) {
    document
      .querySelector(".section-3_content_wrapper-wrapper")
      .addEventListener("mouseover", () => {
        if (
          !document
            .querySelector(".section-3_container-child")
            .classList.contains("show-projects-modal")
        ) {
          document
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
  } else {
    document
      .querySelector(".section-3_content_wrapper-wrapper")
      .addEventListener("click", () => {
        document
          .querySelector(".section-3_content-more")
          .classList.toggle("show-content-more");
      });
  }

  const slidesContainer = document.querySelector(".section-3");
  document
    .querySelector(".full-view_container")
    .addEventListener("click", (e) => {
      e.preventDefault();
      if (!slidesContainer.classList.contains("show-projects-modal")) {
        showModal(3);
      }
    });

  document.querySelector(".btn_exit-modal").addEventListener("click", () => {
    if (slidesContainer.classList.contains("show-projects-modal")) {
      hideModal(3);
    }
  });

  function showModal() {
    slidesContainer.classList.add("show-projects-modal");
    getSliderFunction(0);
    document.querySelectorAll(".section-3_content").forEach((content, i) => {
      content.setAttribute("href", `${projectLinks[i].link}`);
    });
  }
  // }

  function hideModal() {
    slidesContainer.classList.remove("show-projects-modal");
    getSliderFunction(0);
    document.querySelectorAll(".section-3_content").forEach((content) => {
      content.removeAttribute("href");
    });
  }

  const slider = function () {
    const slides = document.querySelectorAll(".section-3_content");
    const btnLeft = document.querySelector(".slide_btn-left");
    const btnRight = document.querySelector(".slide_btn-right");
    const dotContainer = document.querySelector(".dots");

    let curslide = 0;
    let maxSlide = slides.length;

    const setSlideLink = function (slide) {
      document
        .querySelector(".link_container-github")
        .setAttribute("href", `${projectLinks[slide].links.github}`);
      document
        .querySelector(".link_container-live")
        .setAttribute("href", `${projectLinks[slide].links.live}`);
    };

    const goToSlide = function (slide) {
      slides.forEach((s) => {
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
    setSlideLink(curslide);
    goToSlide(curslide);

    const slideRight = function () {
      if (curslide === maxSlide - 1) {
        curslide = 0;
      } else {
        curslide++;
      }
      activateDot(curslide);
      goToSlide(curslide);
      setSlideLink(curslide);
    };

    const slideLeft = function () {
      if (curslide === 0) {
        curslide = maxSlide - 1;
      } else {
        curslide--;
      }
      goToSlide(curslide);
      activateDot(curslide);
      setSlideLink(curslide);
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

  //to gretrieve goToSlide function from slider function and access it outside the slider function
  const getSliderFunction = slider();

  return getSliderFunction;
};

const getSliderFunction = Section_3();

//NOTENOTE/NOTENOTE/NOTENOTE/NOTENOTENOTE/NOTE/NOTENOTENOTE/NOTENOTENOTE
//NOTE/////NOTE/////NOTE/////////NOTE/////NOTE/NOTE////NOTE/NOTE////NOTE
//NOTENOTE/NOTENOTE/NOTE/////////NOTE/////NOTE/NOTE////NOTE/NOTE////NOTE
//////NOTE/NOTE/////NOTE/////////NOTE/////NOTE/NOTE////NOTE/NOTE////NOTE
//NOTENOTE/NOTENOTE/NOTENOTE/////NOTE/////NOTE/NOTENOTENOTE/NOTE////NOTE

const Section_4 = function () {
  const typewriterContainer = () => {
    let i = 0;
    const text = "Connect with me...";
    const speed = 150;

    setTimeout(() => {
      function typewriter() {
        if (i < text.length) {
          document.querySelector(".footer-left-h2").textContent +=
            text.charAt(i);
          i += 1;
          setTimeout(typewriter, speed);
        }
      }

      typewriter();
    }, 1500);
  };
  return typewriterContainer;
  // setTimeout(typewriter, 2000);
};

const typewriterContainer = Section_4();

const letters = document.querySelectorAll(".letter");

///////////////////////////////////////////////////////////

//SECTION ANIMATION//

const allSections = document.querySelectorAll(".observe");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    return;
  }

  if (entry.isIntersecting) {
    new Section(+entry.target.id);
    observer.unobserve(entry.target);
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
});

//NOTE comeback and finish
// const elementView = (el, scrollOffset = 0) => {
//   const elementTop = el.getBoundingClientRect().top;
//   return (
//     elementTop <=
//     (window.innerHeight || document.documentElement.clientHeight) - scrollOffset
//   );
// };

class Section {
  constructor(section) {
    this.animationsInit(section);
  }

  animationsInit = (section) => {
    if (section === 1) {
      document.querySelector(".profile-img").classList.add("place-profile-img");
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
}

const h2Underline = document.querySelectorAll(".h2-underline");
const widthFull = "110%";

function fullWidth(index) {
  h2Underline[index - 1].style.setProperty("--width-zero", widthFull);
}

//NOTE CALCULATOR
/*
const addNums = function (nums) {
  console.log(nums);
  let sum = 0;
  nums.forEach((num, i) => {
    sum += num;
  });
  console.log(sum);
};
const subtractNums = function (nums) {
  console.log(nums);
  let sum = nums[0];
  nums.forEach((num, i) => {
    i < nums.length - 1 ? (sum -= nums[i + 1]) : null;
  });
  console.log(sum);
};

const multiplyNums = function (nums) {
  console.log(nums);
  let sum = nums[0];
  nums.forEach((num, i) => {
    i < nums.length - 1 ? (sum *= nums[i + 1]) : null;
  });
  console.log(sum);
};

const divideNums = function (nums) {
  console.log(nums);
  let sum = nums[0];
  nums.forEach((_, i) => {
    i < nums.length - 1 ? (sum /= nums[i + 1]) : null;
  });
  console.log(sum);
};

addNums([2, 5]);
subtractNums([8, 5, 4, 3]);
multiplyNums([3, 5]);
divideNums([6, 3]);
*/
