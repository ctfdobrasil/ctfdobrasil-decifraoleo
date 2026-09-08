/* =========================================================
   Decifra Óleo — CTF do Brasil
   ========================================================= */
(function () {
  "use strict";

  /* ---------------------------------------------------------
     1. Link do checkout
     Troque a string abaixo pelo link real da plataforma de
     pagamento (Kiwify / Hotmart / Eduzz / Cartpanda...).
     Enquanto estiver "#comprar", os botões só rolam até a
     seção de oferta.
     --------------------------------------------------------- */
  var CHECKOUT_URL = "#comprar";

  var buyButtons = document.querySelectorAll("[data-buy]");
  if (CHECKOUT_URL && CHECKOUT_URL !== "#comprar") {
    buyButtons.forEach(function (el) {
      el.setAttribute("href", CHECKOUT_URL);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
  } else {
    buyButtons.forEach(function (el) {
      if (el.getAttribute("href") === "#") el.setAttribute("href", "#comprar");
    });
  }

  /* ---------------------------------------------------------
     2. Header: sombra/altura ao rolar
     --------------------------------------------------------- */
  var header = document.getElementById("site-header");
  var onScroll = function () {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------------------------------------------------------
     3. Menu mobile
     --------------------------------------------------------- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("menu-mobile");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.hasAttribute("hidden");
      if (open) {
        menu.removeAttribute("hidden");
      } else {
        menu.setAttribute("hidden", "");
      }
      toggle.setAttribute("aria-expanded", String(open));
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        menu.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------------------------------------------------------
     4. Reveal ao entrar na viewport
     --------------------------------------------------------- */
  var reveals = document.querySelectorAll("[data-reveal]");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------------------------------------------------------
     5. Muro de clientes: fallback de texto
     Se sobrarem menos de 4 logos carregados, mostra a lista
     de nomes em texto (que também transmite autoridade).
     --------------------------------------------------------- */
  window.addEventListener("load", function () {
    var grid = document.getElementById("logo-grid");
    var fallback = document.getElementById("logo-fallback");
    if (!grid || !fallback) return;
    var loaded = grid.querySelectorAll(".logo-item").length;
    if (loaded < 4) {
      grid.setAttribute("hidden", "");
      fallback.removeAttribute("hidden");
    }
  });

  /* ---------------------------------------------------------
     6. Ano no rodapé
     --------------------------------------------------------- */
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = String(new Date().getFullYear());
})();
