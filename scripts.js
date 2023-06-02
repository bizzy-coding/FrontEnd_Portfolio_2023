const readMoreBtn = document.querySelector("a#read-more");
const hiddenText = document.querySelector(".about-hidden");
const readMore = document.querySelector(".more");
const readLess = document.querySelector(".less");

readMoreBtn.addEventListener("click", function (e) {
  e.preventDefault();
  //if the text is visible
  if (hiddenText.classList.contains("show")) {
    hiddenText.classList.remove("show");
    readLess.classList.add("hide");
    readLess.classList.remove("show");
    readMore.classList.remove("hide");
  } else {
    //if the text not is visible
    hiddenText.classList.add("show");
    readLess.classList.add("show");
    readLess.classList.remove("hide");
    readMore.classList.add("hide");
  }
});

const techIcons = {
  html: "./icons/html-icon.svg",
  css: "./icons/css-icon.svg",
  js: "./icons/js-icon.svg",
  react: "./icons/icon-react.svg",
  bs: "./icons/bs-icon.svg",
};

const projects = [
  {
    name: "Nested Accordion",
    blurb: "FAQ section - designed in Figma, built using vanilla Javascript and CSS. Accordion functionality uses basic loop and event listeners.",
    techStack: ["html", "css", "js"],
    img: "./imgs/faq.png",
    gif: "./imgs/FAQ.gif",
    url: "https://codepen.io/Bizzy-Coding/pen/abaoOzg",
  },

  {
    name: "Text Animation",
    blurb: "Pure CSS animation. The 'transform: scaleY' property adjusts the text height, and alternating the transform origin on each word enables this effect.",
    techStack: ["html", "css"],
    img: "./imgs/bizzy.png",
    gif: "./imgs/bizzy-animate.gif",
    url: "https://codepen.io/Bizzy-Coding/pen/zYWqQBJ",
  },

  {
    name: "To Do App",
    blurb: "Minimal to do list - designed with simplicity in mind and using Adobe XD. Built using Vanilla Javascript.",
    techStack: ["css", "js"],
    img: "./imgs/todo.png",
    gif: "./imgs/todo.gif",
    url: "https://bizzy-coding.github.io/Javascript-To-Do-App/",
  },
  {
    name: "Tin Dog Landing Page",
    blurb: "Looking to meet new and interesting dogs nearby? You need TinDog! The pooch of your dreams could be one swipe away. The TinDog site was a module in Angela Yu’s App Brewery font end developer course, on Udemy.",
    techStack: ["html", "bs"],
    img: "./imgs/tindog.png",
    gif: "./imgs/tindog.gif",
    url: "https://bizzlebizzle.github.io/tindog/",
  },
];

const projectCont = document.querySelector(".projects-container");
projects.forEach((project) => {
  const projectCard = document.createElement("div");
  const projectImgWrap = document.createElement("div");
  const projectImg = document.createElement('img');
  const projectGif = document.createElement('img');
  const projectTxt = document.createElement("div");
  
  projectCard.classList.add("project-card");
  projectImgWrap.classList.add("project-img-wrap");
  projectImg.classList.add("project-img");
  projectGif.classList.add("project-gif");
  projectTxt.classList.add("project-txt");
  
  projectCont.appendChild(projectCard);
  projectCard.appendChild(projectImgWrap);
  projectCard.appendChild(projectTxt);

  projectTxt.innerHTML = `
    <h3>${project.name}</h3>
    <p>${project.blurb}</p>
    <h3>Built Using</h3>
  `;
  
  const lilacArrow = `<svg class="lilac-arrow" width="84" height="31" viewBox="0 0 84 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M82.9258 16.7904C83.7104 16.0129 83.7162 14.7466 82.9387 13.962L70.269 1.17612C69.4915 0.391513 68.2252 0.385736 67.4406 1.16321C66.656 1.94069 66.6502 3.20701 67.4277 3.99161L78.6896 15.3568L67.3244 26.6188C66.5398 27.3963 66.534 28.6626 67.3115 29.4472C68.089 30.2318 69.3553 30.2376 70.1399 29.4601L82.9258 16.7904ZM0.472321 17L81.5089 17.3697L81.5272 13.3697L0.49057 13L0.472321 17Z" fill="#AFB5E8"/>
  </svg>`;
  
  project.techStack.forEach((tech) => {
    const icon = document.createElement("img");
    icon.classList.add('tech-icon')
    icon.src = techIcons[tech]; 
    projectTxt.appendChild(icon);
  });
  
  // PROJECT IMAGES 
  projectImg.src = project.img;
  projectGif.src = project.gif;
  projectImgWrap.appendChild(projectImg);
  projectImgWrap.appendChild(projectGif);
  
  projectImgWrap.addEventListener('mouseenter', () => {
    projectGif.classList.add('active');
  });
  
  projectImgWrap.addEventListener('mouseleave', () => {
    projectGif.classList.remove('active');
  });
  
  // PROJECT BUTTONS
  const projectBtn = document.createElement('a');
  projectBtn.classList.add('project-btn');
  projectBtn.href = project.url;
  projectBtn.target = "_blank";
  projectBtn.textContent = 'View';
  
  projectTxt.appendChild(projectBtn);
});

