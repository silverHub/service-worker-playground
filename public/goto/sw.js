self.addEventListener("install", function (event) {
  console.log("installing");
});

self.addEventListener("fetch", function (event) {
  console.log("fetch", event);
});
