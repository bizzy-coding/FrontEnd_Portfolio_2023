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
};

const projects = [
  {
    name: "Project 1",
    blurb: "My journey into web development took a unique path, starting with fashion studies and transitioning into graphic design.",
    techStack: ["html", "css", "js"],
    img: "./imgs/proj1.png",
    url: "https://codepen.io/Bizzy-Coding/pen/abaoOzg",
  },

  {
    name: "Project 2",
    blurb: "My journey into web development took a unique path, starting with fashion studies and transitioning into graphic design.",
    techStack: ["js", "react"],
    img: "./imgs/proj1.png",
    url: "https://codepen.io/Bizzy-Coding/pen/abaoOzg",
  },
];

const projectCont = document.querySelector(".projects-container");

projects.forEach((project) => {
  var projectCard = document.createElement("div"),
    projectImg = document.createElement("img"),
    projectTxt = document.createElement("div");
  projectCard.classList.add("project-card");
  projectImg.classList.add("project-img");
  projectTxt.classList.add("project-txt");
  projectCont.appendChild(projectCard);
  projectCard.appendChild(projectImg);
  projectCard.appendChild(projectTxt);
  console.log(projectImg);
  projectTxt.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.blurb}</p>
        <h3>Built Using</h3>
    `;

    var lilacArrow = `<svg class="lilac-arrow" width="84" height="31" viewBox="0 0 84 31" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M82.9258 16.7904C83.7104 16.0129 83.7162 14.7466 82.9387 13.962L70.269 1.17612C69.4915 0.391513 68.2252 0.385736 67.4406 1.16321C66.656 1.94069 66.6502 3.20701 67.4277 3.99161L78.6896 15.3568L67.3244 26.6188C66.5398 27.3963 66.534 28.6626 67.3115 29.4472C68.089 30.2318 69.3553 30.2376 70.1399 29.4601L82.9258 16.7904ZM0.472321 17L81.5089 17.3697L81.5272 13.3697L0.49057 13L0.472321 17Z" fill="#AFB5E8"/>
  </svg>
  `;

  project.techStack.forEach((tech) => {
    var icon = document.createElement("img");
    icon.classList.add('tech-icon')
    icon.src = techIcons[tech]; 
    projectTxt.appendChild(icon);
  });

  projectImg.src = project.img;

  var projectBtn = document.createElement('div');
  projectBtn.classList.add('project-btn');
  projectBtn.innerHTML = `
  view ${lilacArrow}
  `;

  

  projectTxt.appendChild(projectBtn);

});
