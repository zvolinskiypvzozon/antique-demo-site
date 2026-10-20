document.querySelectorAll("[data-site]").forEach(function (el) {
  var key = el.getAttribute("data-site");
  var value = window.SITE[key];
  el.textContent = value;
  if (key === "phone") {
    el.setAttribute("href", "tel:" + value.replace(/[^+\d]/g, ""));
  }
});

document.querySelector("#form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.querySelector("#formNote").textContent =
    "Демо-версия: заявка никуда не отправляется. В рабочей версии она уходит на почту и в Telegram.";
});

document.querySelectorAll(".nav a").forEach(function (a) {
  a.addEventListener("click", function () {
    document.querySelector("#burger").checked = false;
  });
});
