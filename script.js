function updateTime() {
  const now = new Date();

  document.getElementById("time").textContent =
    now.toLocaleTimeString("th-TH", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Asia/Bangkok"
    });

  document.getElementById("date").textContent =
    now.toLocaleDateString("th-TH", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Bangkok"
    });
}

updateTime();
setInterval(updateTime, 1000);

/* ===============================
   AUTO เปิดเว็บ Speedtest
================================ */
setTimeout(() => {
  window.location.href = "https://www.speedtest.net";
}, 1500);

/* ===============================
   เปิดแอป Speedtest เมื่อแตะครั้งแรก
================================ */
let opened = false;

document.addEventListener("touchstart", () => {
  if (opened) return;
  opened = true;

  // พยายามเปิดแอป
  window.location.href = "speedtest://";

  // fallback ถ้าไม่มีแอป
  setTimeout(() => {
    window.location.href = "https://www.speedtest.net";
  }, 800);
}, { once: true });
