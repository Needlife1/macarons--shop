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
const basketBtn = document.querySelectorAll(".nav-basket-btn");
const backdrop = document.querySelector(".backdrop");
const basket = document.querySelector(".basket");
const basketCloseBtn = document.querySelector(".basket-close-btn");
const basketFooterBtn = document.querySelectorAll(".basket-footer-btn");
const positionContainer = document.querySelector(
  ".position-container"
);
const body = document.querySelector("body");
basketBtn.forEach((el) => {
  console.log(el);
  el == null ? void 0 : el.addEventListener("click", toggleVisibilityBasket);
});
basketCloseBtn == null ? void 0 : basketCloseBtn.addEventListener("click", toggleVisibilityBasket);
basketFooterBtn.forEach((el) => {
  el == null ? void 0 : el.addEventListener("click", toggleVisibilityBasket);
});
function toggleVisibilityBasket() {
  if (basket && backdrop && positionContainer && body) {
    if (basket.classList.contains("closed")) {
      backdrop.style.display = "block";
      body.style.overflow = "hidden";
      positionContainer.style.pointerEvents = "all";
      basket.classList.remove("visually-hidden");
      setTimeout(() => {
        basket.classList.remove("closed");
      }, 10);
    } else {
      body.style.overflow = "auto";
      positionContainer.style.pointerEvents = "none";
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
const contacts = document.querySelector(".contacts");
const closeContactsBtn = document.getElementById("contacts-close-btn");
const openContactsBtn = document.querySelectorAll("#open-contacts");
openContactsBtn.forEach((el) => {
  el.addEventListener("click", toggleVisibilityContacts);
});
if (closeContactsBtn) {
  closeContactsBtn.addEventListener("click", toggleVisibilityContacts);
}
function toggleVisibilityContacts() {
  if (contacts && backdrop && positionContainer && body) {
    if (contacts.classList.contains("closed")) {
      backdrop.style.display = "block";
      body.style.overflow = "hidden";
      positionContainer.style.pointerEvents = "all";
      contacts.classList.remove("visually-hidden");
      setTimeout(() => {
        contacts.classList.remove("closed");
      }, 10);
    } else {
      body.style.overflow = "auto";
      positionContainer.style.pointerEvents = "none";
      contacts.classList.add("closed");
      setTimeout(() => {
        contacts.classList.add("visually-hidden");
      }, 500);
      setTimeout(() => {
        backdrop.style.display = "none";
      }, 500);
    }
  }
}
