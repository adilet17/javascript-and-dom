let images=document.getElementById("images");
let imageButton=document.getElementById("image_button");
let imageText=document.getElementById("image_text");
imageButton.addEventListener("click", () =>{
  let iframe=document.createElement("img");
  iframe.setAttribute("src", imageText.value);
  images.appendChild(iframe);
});

let links=document.getElementById("links");
let linkButton=document.getElementById("link_button");
let linkText=document.getElementById("link_text");
linkButton.addEventListener("click", () =>{
  let iframe=document.createElement("a");
  iframe.setAttribute("href", linkText.value);
  iframe.innerHTML = "link";
  links.appendChild(iframe);
});

let text=document.getElementById("text");
let textButton=document.getElementById("text_button");
let textText=document.getElementById("text_text");
textButton.addEventListener("click", () =>{
  let iframe=document.createElement("h");
  iframe.innerHTML = "text";
  text.appendChild(iframe);
});
