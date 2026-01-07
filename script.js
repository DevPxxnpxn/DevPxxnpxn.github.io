/* =====================
   เวลาไทย
===================== */
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

/* =====================
   สถานะเน็ต
===================== */
function updateNetStatus() {
  const el = document.getElementById("net");
  el.textContent = navigator.onLine ? "🟢 Online" : "🔴 Offline";
}
window.addEventListener("online", updateNetStatus);
window.addEventListener("offline", updateNetStatus);
updateNetStatus();

/* =====================
   ประเภทเครือข่าย
===================== */
function updateNetworkType() {
  const c = navigator.connection;
  let text = "Unknown";
  if (c && c.effectiveType) {
    text = c.effectiveType.toUpperCase();
  }
  document.getElementById("type").textContent = "Network: " + text;
}
updateNetworkType();

/* =====================
   รีเฟรชเมื่อเน็ตกลับ
===================== */
window.addEventListener("online", () => {
  setTimeout(() => location.reload(), 1000);
});

/* =====================
   Auto เปิด Speedtest (วันละครั้ง)
===================== */
const today = new Date().toDateString();
if (localStorage.getItem("speedtest") !== today) {
  localStorage.setItem("speedtest", today);
  setTimeout(() => {
    window.location.href = "https://www.speedtest.net";
  }, 1500);
}

/* =====================
   ปุ่ม + แตะครั้งแรก → เปิดแอป
===================== */
function openSpeedtest() {
  window.location.href = "speedtest://";
  setTimeout(() => {
    window.location.href = "https://www.speedtest.net";
  }, 800);
}

document.getElementById("speedBtn").onclick = openSpeedtest;

document.addEventListener("touchstart", openSpeedtest, { once: true });
