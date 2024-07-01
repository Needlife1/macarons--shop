(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const basketBtn = document.querySelector(".nav-basket-btn");
const backdrop = document.querySelector(".backdrop");
const basket = document.querySelector(".basket");
const basketCloseBtn = document.querySelector(".basket-close-btn");
const basketFooterBtn = document.querySelectorAll(".basket-footer-btn");
basketBtn == null ? void 0 : basketBtn.addEventListener("click", toggleVisibility);
basketCloseBtn == null ? void 0 : basketCloseBtn.addEventListener("click", toggleVisibility);
basketFooterBtn.forEach((el) => {
  el == null ? void 0 : el.addEventListener("click", toggleVisibility);
});
function toggleVisibility() {
  if (basket && backdrop) {
    if (basket.classList.contains("closed")) {
      backdrop.style.display = "block";
      basket.classList.remove("visually-hidden");
      setTimeout(() => {
        basket.classList.remove("closed");
      }, 10);
    } else {
      basket.classList.add("closed");
      setTimeout(() => {
        basket.classList.add("visually-hidden");
      }, 500);
      setTimeout(() => {
        backdrop.style.display = "none";
      }, 500);
    }
  }
}
