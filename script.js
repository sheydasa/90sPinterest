// Open/Close Whiteboard
const openBtn = document.getElementById("openWhiteboard");
const closeBtn = document.getElementById("closeWhiteboard");
const whiteboard = document.getElementById("whiteboard");

openBtn.addEventListener("click", () => whiteboard.classList.remove("hidden"));
closeBtn.addEventListener("click", () => whiteboard.classList.add("hidden"));

// Add Images to Whiteboard
document.querySelectorAll(".moodImage").forEach(img => {
  img.addEventListener("click", () => {
    const newImg = img.cloneNode(true);
    newImg.classList.add("draggable");
    newImg.style.left = "10px";
    newImg.style.top = "10px";
    whiteboard.appendChild(newImg);

    makeDraggable(newImg);
  });
});

// Make Whiteboard Movable
function makeDraggable(el) {
  let offsetX, offsetY;

  el.addEventListener("mousedown", (e) => {
    el.style.cursor = "grabbing";
    offsetX = e.clientX - el.getBoundingClientRect().left;
    offsetY = e.clientY - el.getBoundingClientRect().top;

    function moveAt(e) {
      el.style.left = `${e.clientX - offsetX}px`;
      el.style.top = `${e.clientY - offsetY}px`;
    }

    document.addEventListener("mousemove", moveAt);

    el.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", moveAt);
      el.style.cursor = "grab";
    });
  });
}
