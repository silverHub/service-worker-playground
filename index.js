console.log("Index.js loaded");

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js", { scope: "/goto/" })
    .then(function (reg) {
      if (reg.installing) {
        console.log("Service worker installing");
      } else if (reg.waiting) {
        console.log("Service worker installed");
      } else if (reg.active) {
        console.log("Service worker active");
      }
    })
    .catch(function (error) {
      // registration failed
      console.log("Registration failed with " + error);
    });
}

/*
document.querySelectorAll(".fetch").forEach((el) => {
  el.addEventListener("click", () => {
    fetch(el.dataset.url)
      .then((resp) => {
        resp.text().then((text) => console.log("resp", text));
      })
      .catch((err) => {
        console.log("err", err);
      });
  });
});
*/

window.addEventListener(
  "hashchange",
  function () {
    console.log("The hash has changed!");
    document.querySelector("header").innerHTML = location.hash;
  },
  false
);
