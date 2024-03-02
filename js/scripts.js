// Import data:
import { data } from "./data.js";

let isPlaying = false;
let counterMusic = 1;
let qtyMusics = 4;
let textNameNumber = 0;

// Select elements:
const btnBack = document.getElementById("back");
const btnPlayAndPaused = document.getElementById("playAndPaused");
const btnForward = document.getElementById("forward");
const audio = document.getElementById("musicAudio");
const textNameSong = document.getElementById("nameSong");

// Function to play audio:
function playMusic() {
  textNameSong.innerText = data[0].musicName[textNameNumber];
  audio.play();
}

// Function to pause audio:
function pauseMusic() {
  audio.pause();
}

// Function to vetify:
function playAndPauseAudio() {
  if (!isPlaying) {
    playMusic();
    isPlaying = true;
    btnPlayAndPaused
      .querySelector("i")
      .setAttribute("class", "ph-fill ph-pause");
  } else {
    pauseMusic();
    isPlaying = false;
    btnPlayAndPaused
      .querySelector("i")
      .setAttribute("class", "ph-fill ph-play");
  }
}

// Function to return audio:
function back() {
  if (counterMusic == 1) {
    counterMusic = qtyMusics;
    textNameNumber = 3;
  } else {
    counterMusic--;
    textNameNumber--;
  }

  audio.setAttribute("src", `./audio/royOrbisonMusic${counterMusic}.mp3`);
  playMusic();
  textNameSong.innerText = data[0].musicName[textNameNumber];
}

// Function to advance the audio:
function forward() {
  if (counterMusic == qtyMusics) {
    counterMusic = 1;
    textNameNumber = 0;
  } else {
    counterMusic++;
    textNameNumber++;
  }

  audio.setAttribute("src", `./audio/royOrbisonMusic${counterMusic}.mp3`);
  playMusic();
  textNameSong.innerText = data[0].musicName[textNameNumber];
}

// Events:
btnBack.addEventListener("click", back);
btnPlayAndPaused.addEventListener("click", playAndPauseAudio);
btnForward.addEventListener("click", forward);