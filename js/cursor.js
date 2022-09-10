const mouseCursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a, button, .scroll, .header__menu");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  // console.log(e);
  // To move from top to bottom the cursor
  mouseCursor.style.top = e.pageY + "px";
  // To move from left to right
  mouseCursor.style.left = e.pageX + "px";
}

links.forEach(function (link) {
  link.addEventListener("mouseout", function () {
    mouseCursor.style.backgroundImage = "url(../img/cursor/Normal.png)";
  });

  link.addEventListener("mouseover", function () {
    mouseCursor.style.backgroundImage = "url(../img/cursor/Hovered.png)";
  });
});
