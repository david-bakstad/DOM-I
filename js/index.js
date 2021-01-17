const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navAs = document.querySelectorAll("nav a")
  for(let i = 0; i < 6; i++) {
   navAs[i].textContent = siteContent["nav"]["nav-item-" + (i + 1)]
}

const logoImage = document.querySelector("header .logo");
logoImage.setAttribute('src', siteContent["nav"]["img-src"]);

const awesomeDom = document.querySelector("h1");
awesomeDom.textContent = siteContent["cta"]["h1"]

const domButton = document.querySelector("button");
domButton.textContent = siteContent["cta"]["button"]

const headerButton = document.querySelector("#cta-img");
headerButton.setAttribute("src", siteContent["cta"]["img-src"])

// const featuresFour = document.querySelector(".top-content h4")
// featuresFour.textContent = siteContent["main-content"]["features-h4"];

const featFourP = document.querySelector(".top-content p")
featFourP.textContent = siteContent["main-content"]["features-content"];

const aboutFour = document.querySelectorAll(".text-content h4:nth-of-type(1)")
console.log(aboutFour)
// for(let i = 0; i < aboutFour.length; i++) {
//   aboutFour[i].textContent = siteContent["main-content"]["h4"]
// }
aboutFour.textContent = siteContent["main-content"]["features-h4"]

const lowerImage = document.querySelector("#middle-img")
lowerImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const contactFour = document.querySelector(".contact h4");
contactFour.textContent = siteContent["contact"]["contact-h4"]

const copyright = document.querySelector("footer p");
copyright.textContent = siteContent["footer"]["copyright"]