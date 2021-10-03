console.log("Index.js");
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

document.querySelector("#fetch").addEventListener("click", () => {
  console.log("clicked");
  fetch("/goto/test")
    .then((resp) => {
      console.log("resp", resp);
    })
    .catch((err) => {
      console.log("err", err);
    });
});

window.addEventListener(
  "hashchange",
  function () {
    console.log("The hash has changed!");
    document.querySelector("header").innerHTML = location.hash;
  },
  false
);
