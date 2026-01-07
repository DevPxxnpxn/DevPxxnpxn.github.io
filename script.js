function updateTime() {
  const now = new Date();

  const time = now.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  const date = now.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  document.getElementById("time").textContent = time;
  document.getElementById("date").textContent = date;
}

updateTime();
setInterval(updateTime, 1000);

// สถานะเน็ต
function updateStatus() {
  const status = document.getElementById("status");

  if (navigator.onLine) {
    status.textContent = "ออนไลน์";
    status.className = "online";
  } else {
    status.textContent = "ออฟไลน์";
    status.className = "offline";
  }
}

window.addEventListener("online", updateStatus);
window.addEventListener("offline", updateStatus);
updateStatus();

// เปิด Speedtest by Ookla
document.getElementById("speedtestBtn").addEventListener("click", () => {
  window.location.href = "speedtest://";

  setTimeout(() => {
    window.location.href = "https://www.speedtest.net";
  }, 800);
});
