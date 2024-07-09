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
const infoMobBtn = document.querySelector(".info-mob-btn");
const infoNav = document.querySelector(".info-nav");
const infoCloseBtn = document.querySelector(".info-close-btn");
function checkScreenSize() {
  if (window.matchMedia("(max-width:767.9px)").matches) {
    infoNav == null ? void 0 : infoNav.classList.add("visually-hidden");
    infoCloseBtn == null ? void 0 : infoCloseBtn.classList.add("visually-hidden");
    infoMobBtn == null ? void 0 : infoMobBtn.classList.remove("visually-hidden");
  } else {
    infoNav == null ? void 0 : infoNav.classList.remove("visually-hidden");
  }
}
checkScreenSize();
window.addEventListener("resize", checkScreenSize);
infoMobBtn == null ? void 0 : infoMobBtn.addEventListener("click", openNav);
infoCloseBtn == null ? void 0 : infoCloseBtn.addEventListener("click", openNav);
function openNav() {
  if (!infoMobBtn && !infoNav) return;
  if (infoNav == null ? void 0 : infoNav.classList.contains("visually-hidden")) {
    infoNav == null ? void 0 : infoNav.classList.remove("visually-hidden");
    infoMobBtn == null ? void 0 : infoMobBtn.classList.add("visually-hidden");
    infoCloseBtn == null ? void 0 : infoCloseBtn.classList.remove("visually-hidden");
  } else {
    infoNav == null ? void 0 : infoNav.classList.add("visually-hidden");
    infoMobBtn == null ? void 0 : infoMobBtn.classList.remove("visually-hidden");
    infoCloseBtn == null ? void 0 : infoCloseBtn.classList.add("visually-hidden");
  }
}
const infoBtns = document.querySelectorAll(".info-btn");
const section = document.querySelectorAll(".info-section");
const breadcrumbsText = document.querySelector(".breadcrumbs-text");
let activeSection = "about";
infoBtns.forEach((el) => {
  el.addEventListener("click", changeArticle);
});
function changeArticle(e) {
  const target = e.target;
  if (!target || activeSection === target.id) return;
  section.forEach((el) => {
    if (!el.classList.contains("visually-hidden")) {
      el.classList.add("visually-hidden");
    }
    if (el.id === target.id) {
      el.classList.remove("visually-hidden");
      infoBtns.forEach((el2) => el2.classList.remove("selected"));
      target.classList.add("selected");
      const dataName = el.dataset.name;
      if (dataName !== void 0) {
        breadcrumbsText.textContent = dataName;
      }
    }
    if (window.matchMedia("(max-width:767.9px)").matches) openNav();
  });
  activeSection = target.id;
}
