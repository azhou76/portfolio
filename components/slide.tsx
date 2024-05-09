export function animateTextLoading() {
  const topSlideContainer = document.getElementById("topSlideContainer");
  const leftSlideContainer = document.getElementById("leftSlideContainer");
  const botSlideContainer = document.getElementById("botSlideContainer");

  if (topSlideContainer) {
    topSlideContainer.classList.add("slide-in-top");
    topSlideContainer.classList.remove("hidden");
  }
  if (leftSlideContainer) {
    leftSlideContainer.classList.add("slide-in-left");
    leftSlideContainer.classList.remove("hidden");
  }
  if (botSlideContainer) {
    botSlideContainer.classList.add("slide-in-bot");
    botSlideContainer.classList.remove("hidden");
  }
}
