AFRAME.registerComponent("play-on-click", {
  init: function () {
    this.onClick = this.onClick.bind(this);
  },
  play: function () {
    window.addEventListener("click", this.onClick);
  },
  pause: function () {
    window.removeEventListener("click", this.onClick);
  },
  onClick: function (evt) {
    var videoEl = this.el.getAttribute("material").src;
    var playText = document.querySelector("#playText");
    if (!videoEl) {
      return;
    }
    if (playText) {
      playText.setAttribute("visible", false);
    }
    this.el.object3D.visible = true;
    videoEl.play();
  },
});
