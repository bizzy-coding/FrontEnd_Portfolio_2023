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
  html: "/icons/html-icon.svg",
  css: "/icons/css-icon.svg",
  js: "/icons/js-icon.svg",
  react: "/icons/icon-react.svg",
};

const projects = [
  {
    name: "Project 1",
    blurb: "My journey into web development took a unique path, starting with fashion studies and transitioning into graphic design.",
    techStack: ["html", "css", "js"],
    img: "/imgs/proj1.png",
  },

  {
    name: "Project 2",
    blurb: "My journey into web development took a unique path, starting with fashion studies and transitioning into graphic design.",
    techStack: ["html", "css", "react"],
    img: "/imgs/proj1.png",
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
    `;

  project.techStack.forEach((tech) => {
    var icon = document.createElement("img");
    icon.src = techIcons[tech]; // Assuming you have the techIcons object defined
    projectTxt.appendChild(icon);
  });

  projectImg.src = project.img;
});
