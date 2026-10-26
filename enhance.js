/* ============ EDIT YOUR DETAILS HERE (used on every page) ============ */
window.SITE = {
  instagramHandle: "@immigroup_sriganganagar",
  instagramUrl: "https://www.instagram.com/immigroup_sriganganagar/",
  address: "47 H Block, 2nd Floor, Godara College Road, Sri Ganganagar 335001",
  mapQuery:
    "Immigroup Overseas Consultant, 47 H Block, Godara College Road, Sri Ganganagar, Rajasthan 335001" /* a business name, full address, or "lat,lng" */,
};
/* ====================================================================== */
(() => {
  const $ = (s, r = document) => r.querySelector(s),
    $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
  // progress bar, sticky nav, back-to-top
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  document.body.prepend(bar);
  const top = document.createElement("button");
  top.className = "to-top";
  top.setAttribute("aria-label", "Back to top");
  top.textContent = "↑";
  top.onclick = () => scrollTo({ top: 0, behavior: "smooth" });
  document.body.append(top);
  const nav = $(".navbar");
  addEventListener(
    "scroll",
    () => {
      const h = document.documentElement,
        y = scrollY;
      bar.style.width = (y / (h.scrollHeight - innerHeight)) * 100 + "%";
      nav && nav.classList.toggle("scrolled", y > 40);
      top.classList.toggle("show", y > 600);
      const p = $(".parallax");
      if (p && !reduce && innerWidth > 950) {
        const r = p.getBoundingClientRect();
        p.style.backgroundPosition = "center " + r.top * -0.15 + "px";
      }
    },
    { passive: true },
  );
  // staggered reveals
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.12 },
  );
  [
    ".country-grid",
    ".visa-grid",
    ".process-grid",
    ".campus-grid",
    ".gallery-grid",
  ].forEach((g) =>
    $$(g + ">*").forEach((el, i) => {
      el.classList.add("reveal");
      el.style.setProperty("--d", i * 0.09 + "s");
      io.observe(el);
    }),
  );
  $$(".reveal:not(.visible)").forEach((el) => io.observe(el));
  // 3D tilt
  if (!reduce && matchMedia("(hover:hover)").matches)
    $$(".country-card,.visa-card,.service-card").forEach((c) => {
      c.addEventListener("mousemove", (e) => {
        const r = c.getBoundingClientRect(),
          x = (e.clientX - r.left) / r.width - 0.5,
          y = (e.clientY - r.top) / r.height - 0.5;
        c.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
        c.style.animation = "none";
      });
      c.addEventListener("mouseleave", () => {
        c.style.transform = "";
      });
    });
  // hero slideshow
  const slides = $$(".hero-slides img");
  if (slides.length) {
    const label = $(".slide-label"),
      dots = $(".hero-dots");
    let i = 0,
      t;
    slides.forEach((s, n) => {
      const b = document.createElement("button");
      b.setAttribute("aria-label", "Slide " + (n + 1));
      b.onclick = () => {
        go(n);
        restart();
      };
      dots.append(b);
    });
    const go = (n) => {
      i = n;
      slides.forEach((s, k) => s.classList.toggle("active", k === n));
      $$("button", dots).forEach((b, k) =>
        b.classList.toggle("active", k === n),
      );
      label.textContent = slides[n].alt;
      label.style.animation = "none";
      label.offsetHeight;
      label.style.animation = "";
    };
    const restart = () => {
      clearInterval(t);
      if (!reduce) t = setInterval(() => go((i + 1) % slides.length), 4500);
    };
    go(0);
    restart();
  }
  // typed rotating words
  const rot = $(".rotator");
  if (rot && !reduce) {
    const words = [
      "Canada",
      "Australia",
      "the UK",
      "the USA",
      "Ireland",
      "New Zealand",
    ];
    let w = 0,
      c = 0,
      del = false;
    (function tick() {
      const word = words[w];
      rot.textContent = word.slice(0, c);
      if (!del && c === word.length) {
        del = true;
        return setTimeout(tick, 1500);
      }
      if (del && c === 0) {
        del = false;
        w = (w + 1) % words.length;
      }
      c += del ? -1 : 1;
      setTimeout(tick, del ? 45 : 95);
    })();
  } else if (rot) rot.textContent = "the world";
  // count-up numbers
  const cio = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (!e.isIntersecting) return;
        cio.unobserve(e.target);
        const el = e.target,
          end = +el.dataset.count,
          suf = el.dataset.suffix || "";
        if (reduce) {
          el.textContent = end + suf;
          return;
        }
        const st = performance.now();
        (function f(n) {
          const p = Math.min((n - st) / 1600, 1);
          el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * end) + suf;
          if (p < 1) requestAnimationFrame(f);
        })(st);
      }),
    { threshold: 0.5 },
  );
  $$("[data-count]").forEach((el) => cio.observe(el));
  // lightbox
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML = '<img alt="">';
  document.body.append(lb);
  lb.onclick = () => lb.classList.remove("open");
  addEventListener(
    "keydown",
    (e) => e.key === "Escape" && lb.classList.remove("open"),
  );
  $$(".gallery-item img,.campus-item img").forEach((im) => {
    im.parentElement.style.cursor = "zoom-in";
    im.parentElement.addEventListener("click", () => {
      const l = $("img", lb);
      l.src = im.src.replace(/w=\d+/, "w=1600");
      l.alt = im.alt;
      lb.classList.add("open");
    });
  });
})();

/* ===== v2 additions ===== */
(() => {
  const S = window.SITE || {};
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
  // site details -> every page
  $$('[data-site="address"]').forEach((e) => {
    if (S.address) e.textContent = S.address;
  });
  $$('[data-site="instagram"]').forEach((e) => {
    if (S.instagramHandle) e.textContent = S.instagramHandle;
  });
  $$('[data-site-href="instagram"]').forEach((e) => {
    if (S.instagramUrl) e.href = S.instagramUrl;
  });
  $$('[data-site-href="directions"]').forEach((e) => {
    if (S.mapQuery)
      e.href =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(S.mapQuery);
  });
  $$("iframe[data-site-map]").forEach((e) => {
    if (S.mapQuery)
      e.src =
        "https://www.google.com/maps?q=" +
        encodeURIComponent(S.mapQuery) +
        "&output=embed";
  });
  // broken images: never leave an empty box (gallery tiles hide themselves instead)
  const PH =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffb36b"/><stop offset="1" stop-color="#087f78"/></linearGradient></defs><rect width="400" height="300" fill="url(#g)"/><text x="200" y="158" font-family="sans-serif" font-size="24" font-weight="700" fill="#fff" text-anchor="middle">Immigrace Overseas</text></svg>',
    );
  const bad = (img) => {
    if (img.dataset.failed) return;
    img.dataset.failed = "1";
    const t = img.closest("[data-tile]");
    if (t) {
      t.hidden = true;
      document.dispatchEvent(new Event("tile-broken"));
      return;
    }
    img.removeAttribute("srcset");
    img.src = PH;
  };
  document.addEventListener(
    "error",
    (e) => {
      if (e.target && e.target.tagName === "IMG") bad(e.target);
    },
    true,
  );
  $$("img").forEach((i) => {
    if (
      i.loading !== "lazy" &&
      i.complete &&
      i.naturalWidth === 0 &&
      i.getAttribute("src")
    )
      bad(i);
  });
  // cards: stagger index, settle (so hover is instant after the entrance), spotlight, image parallax
  $$(".visa-card").forEach((c, i) => c.style.setProperty("--i", i));
  const so = new IntersectionObserver((es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        const el = e.target;
        setTimeout(() => el.classList.add("settled"), 1700);
        so.unobserve(el);
      }
    }),
  );
  $$(".country-card,.visa-card").forEach((el) => so.observe(el));
  if (!reduce && matchMedia("(hover:hover)").matches) {
    $$(".visa-card").forEach((c) =>
      c.addEventListener("mousemove", (e) => {
        const r = c.getBoundingClientRect();
        c.style.setProperty("--mx", e.clientX - r.left + "px");
        c.style.setProperty("--my", e.clientY - r.top + "px");
      }),
    );
    $$(".country-card").forEach((c) => {
      c.addEventListener("mousemove", (e) => {
        const r = c.getBoundingClientRect();
        c.style.setProperty("--px", ((e.clientX - r.left) / r.width - 0.5) * 2);
        c.style.setProperty("--py", ((e.clientY - r.top) / r.height - 0.5) * 2);
      });
      c.addEventListener("mouseleave", () => {
        c.style.setProperty("--px", 0);
        c.style.setProperty("--py", 0);
      });
    });
  }
})();
