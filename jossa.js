const timer = document.getElementById("timer");
const minBtns = document.querySelectorAll(".minutBtn");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let bigStopBtn = document.getElementById("bigStopBtn");
let tempcha = [];
let startMinut = "";
let time = 0;

let stopUchun = 0;

minBtns[0].addEventListener("click", () => {
  startMinut = 25;
  stopUchun = 25;
  timer.innerHTML = `${startMinut}:00`;
});
minBtns[1].addEventListener("click", () => {
  startMinut = 15;
  stopUchun = 15;
  timer.innerHTML = `${startMinut}:00`;
});
minBtns[2].addEventListener("click", () => {
  startMinut = 5;
  stopUchun = 5;
  timer.innerHTML = `${startMinut}:00`;
});

function inputChange() {
  if (startMinut == "") return alert("Daqiqani Tanlang!!!");
  startBtn.disabled = true;
  startBtn.style.display = "none";
  minBtns.forEach((element) => {
    element.disabled = true;
  });
  time = startMinut * 60;

  let inrvl = setInterval(() => {
    let minutes = Math.floor(time / 60);

    let second = time % 60;

    timer.innerHTML = `${minutes}:${second}`;
    tempcha = `${minutes}:${second}`;
    console.log(tempcha);

    if (minutes < 0) {
      clearInterval(inrvl);
      timer.innerHTML = `${startMinut}:00`;
    }

    time--;
    startMinut = time / 60;
  }, 1000);

  bigStopBtn.addEventListener("click", () => {
    clearInterval(inrvl);
    startBtn.disabled = false;
    startBtn.style.display = "block";
    timer.innerHTML = `${stopUchun}:00`;
    startMinut = stopUchun;

    minBtns.forEach((element) => {
      element.disabled = false;
    });
  });

  stopBtn.addEventListener("click", () => {
    clearInterval(inrvl);
    startBtn.style.display = "block";
    startBtn.disabled = false;
    minBtns.forEach((element) => {
      element.disabled = false;
    });
  });
}



