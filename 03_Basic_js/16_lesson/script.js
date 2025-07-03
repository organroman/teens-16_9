const timeoutBtn = document.querySelector("#start-timeout");

timeoutBtn.addEventListener("click", () => {
  const timeoutResult = document.querySelector("#timeout-result");
  timeoutResult.textContent = "Waiting 5 secs";

  setTimeout(() => {
    timeoutResult.textContent = "Done!";
  }, 1000);
});

const intervalBtn = document.querySelector("#start-setInterval");
const intervalStop = document.querySelector("#stop-setInterval");
let counter = 0;
let intervalId;
intervalBtn.addEventListener("click", () => {
  const timeoutResult = document.querySelector("#interval-result");

  intervalId = setInterval(() => {
    counter++;
    timeoutResult.textContent = `Counter: ${counter}`;
  }, 1000);
});

intervalStop.addEventListener("click", () => {
  clearInterval(intervalId);
});

// ---------------------------
document.querySelector("#saveLocal").addEventListener("click", () => {
  const value = document.querySelector("#localInput").value;
  localStorage.setItem("username", value);
});

document.querySelector("#loadLocal").addEventListener("click", () => {
  const result = document.querySelector("#local-result");
  const value = localStorage.getItem("username");

  if (value) {
    result.textContent = `username: ${value}`;
  } else result.textContent = "Data not found ";
});

document.querySelector("#clearLocal").addEventListener("click", () => {
  localStorage.removeItem("username");
  const result = document.querySelector("#local-result");
  result.textContent = "Cleared";
});

/// ________________ SESSSION STORAGE ---------------

document.querySelector("#saveSession").addEventListener("click", () => {
  const value = document.querySelector("#sessionInput").value;
  sessionStorage.setItem("tempData", value);
});

document.querySelector("#loadSession").addEventListener("click", () => {
  const result = document.querySelector("#session-result");
  const value = sessionStorage.getItem("tempData");

  if (value) {
    result.textContent = `Session: ${value}`;
  } else result.textContent = "No session  data  found ";
});

document.querySelector("#clearSession").addEventListener("click", () => {
  sessionStorage.removeItem("tempData");
  const result = document.querySelector("#session-result");
  result.textContent = "Cleared";
});
