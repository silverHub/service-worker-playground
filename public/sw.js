self.addEventListener("install", function (event) {
  console.log("SW:installing");
});

self.addEventListener("fetch", function (event) {
  //console.log("SW:fetch", event.request, self.location);
  const params = new URLSearchParams(event.request.url.split("?")[1]);
  const id = params.get("id");
  const param = event.respondWith(Response.redirect(`/#${id}`));
});
