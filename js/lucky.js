const content = document.getElementById("wheel");
const spin = document.getElementById("button");

let tick = 0;
const cycle = 6 * 360; //6 spins
let prize = 0;
const TWO_ENVELOPES = 1;
const PEACH_FLOWER = 2;
const ONE_ENVELOPE = 3;
const RE_SPIN = 4;
const THREE_ENVELOPERS = 5;
const PRIZES = [
  TWO_ENVELOPES,
  PEACH_FLOWER,
  ONE_ENVELOPE,
  RE_SPIN,
  THREE_ENVELOPERS,
  ONE_ENVELOPE,
  PEACH_FLOWER,
  ONE_ENVELOPE];

spin.onclick = function() { //everything under here initiates when you click SPIN

  // injects button styles to appear pressed in
  spin.style.backgroundColor = "#476eb4";
  spin.style.opacity = "0.6";
  spin.style.boxShadow = "0 3px 1.5px #666";
  spin.style.transform = "translate(0%, 14%)";
  spin.style.pointerEvents = "none";

  document.getElementById("text").innerHTML = ""; //removes won amount on SLOT window after click

  //random int injected into the rotation for random spins
  tick++;
  let cycles = Math.ceil(Math.random() * 360) + (cycle * tick); //random spin plus normal spins
  content.style.transform = "rotate(" + cycles + "deg)"; //rotate the wheel
  prize = Math.ceil((cycles % 360) / 45); //divides the wheel to determine prize | gives a value 1-8
};

content.ontransitionend = function() { //everything under here initiates when the wheel stops spinning

  //prize value determines the won amount & calculates the wallet amount
  //prize value 1-8 are the wheel slices where 1 is red, 2 is purple and so on..
  const congratulationNote = document.querySelector(".congratulation__note");
  let message = "";
  const gift = PRIZES[prize - 1];
  switch (gift) {
    case TWO_ENVELOPES:
      message = "CHÚC MỪNG BẠN ĐƯỢC NHẬN 2 BAO LÌ XÌ";
      break;
    case PEACH_FLOWER :
      message = "CHÚC BẠN NĂM MỚI AN KHANG THỊNH VƯỢNG, GẶP NHIỀU MAY MẮN";
      break;
    case ONE_ENVELOPE:
      message = "CHÚC MỪNG BẠN ĐƯỢC NHẬN 1 BAO LÌ XÌ";
      break;
    case RE_SPIN:
      message = "BẠN ĐƯỢC QUAY THÊM LƯỢT NỮA";
      break;
    case THREE_ENVELOPERS:
      message = "CHÚC MỪNG BẠN ĐƯỢC NHẬN 3 BAO LÌ XÌ";
      break;
  }
  congratulationNote.innerHTML = message;
  $(".congratulation").fadeIn();
  $(".congratulation__close").click(function() {
    $(".congratulation").fadeOut();
  });
  $(".congratulation").click(function(event) {
    if (event.target !== this)
      return;
    if (gift === RE_SPIN) {
      $(this).fadeOut();
      //injects button styles in css to make button appear available again
      spin.style.boxShadow = "0 5px 1.5px #999";
      spin.style.opacity = "1";
      spin.style.backgroundColor = "rgb(255,0,0)";
      spin.style.transform = "translate(0%, 0%)";
      spin.style.pointerEvents = "auto";
    }
  });

};
