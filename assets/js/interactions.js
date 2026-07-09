(() => {
  function initTechCloud() {
    const cloud = document.querySelector(".tech-cloud");
    if (!cloud) return;

    const items = [...cloud.querySelectorAll(".tech-cloud-item")];
    if (!items.length) return;

    cloud.addEventListener("pointerleave", () => {
      items.forEach((item) => item.style.setProperty("--tech-hover-scale", 1));
    });

    items.forEach((item) => {
      item.addEventListener("pointerenter", () => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterX = itemRect.left + itemRect.width / 2;
        const itemCenterY = itemRect.top + itemRect.height / 2;

        items.forEach((other) => {
          const otherRect = other.getBoundingClientRect();
          const otherCenterX = otherRect.left + otherRect.width / 2;
          const otherCenterY = otherRect.top + otherRect.height / 2;
          const sameRow = Math.abs(itemCenterY - otherCenterY) < Math.min(itemRect.height, otherRect.height) * 0.65;
          const horizontalDistance = Math.abs(itemCenterX - otherCenterX);
          const neighborDistance = (itemRect.width + otherRect.width) * 0.8;
          const scale = other === item ? 1.35 : sameRow && horizontalDistance < neighborDistance ? 1.15 : 1;
          other.style.setProperty("--tech-hover-scale", scale);
        });
      });
    });
  }

  function initExperienceTimeline() {
    const entries = [...document.querySelectorAll(".experience-entry")];
    if (!entries.length) return;

    const setActiveEntry = (activeIndex) => {
      entries.forEach((entry, index) => {
        entry.classList.toggle("is-complete", index < activeIndex);
        entry.classList.toggle("is-active", index === activeIndex);
      });
    };

    setActiveEntry(0);

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((observedEntries) => {
      const visibleEntries = observedEntries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => {
          const viewportCenter = window.innerHeight / 2;
          const aCenter = a.boundingClientRect.top + a.boundingClientRect.height / 2;
          const bCenter = b.boundingClientRect.top + b.boundingClientRect.height / 2;
          return Math.abs(aCenter - viewportCenter) - Math.abs(bCenter - viewportCenter);
        });

      if (!visibleEntries.length) return;

      setActiveEntry(entries.indexOf(visibleEntries[0].target));
    }, { rootMargin: "-35% 0px -35% 0px" });

    entries.forEach((entry) => observer.observe(entry));
  }

  function initNavToggle() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.getElementById("primary-nav");
    if (!toggle || !nav) return;

    const open = () => {
      nav.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
    };

    const close = () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => {
      nav.classList.contains("is-open") ? close() : open();
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", close);
    });

    document.addEventListener("click", (event) => {
      if (!toggle.contains(event.target) && !nav.contains(event.target)) close();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 840) close();
    });
  }

  function initSecretRoomTilt() {
    const items = document.querySelectorAll(".secret-item");
    if (!items.length) return;

    items.forEach((item) => {
      item.addEventListener("pointermove", (event) => {
        const rect = item.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotateX = ((y - cy) / cy) * -4;
        const rotateY = ((x - cx) / cx) * 4;
        item.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      });

      item.addEventListener("pointerleave", () => {
        item.style.transform = "";
      });
    });
  }

  function initThemeControls() {
    const root = document.documentElement;
    const menu = document.querySelector(".theme-menu");
    const toggle = document.querySelector(".theme-menu-toggle");
    const panel = document.getElementById("theme-menu-panel");
    const familyOptions = [...document.querySelectorAll(".theme-family-option")];
    const schemeToggle = document.querySelector(".theme-scheme-toggle");
    const metaTheme = document.getElementById("meta-theme-color");
    if (!menu || !toggle || !panel || !familyOptions.length || !schemeToggle) return;

    const THEME_REGISTRY = {
      catppuccin: {
        label: "Catppuccin",
        schemes: ["light", "dark"],
        defaultScheme: "light",
        schemeLabels: { light: "Latte", dark: "Mocha" },
      },
      dracula: {
        label: "Dracula",
        schemes: ["dark"],
        defaultScheme: "dark",
        schemeLabels: { dark: "Dracula" },
      },
      warm: {
        label: "Warm",
        schemes: ["light", "dark"],
        defaultScheme: "light",
        schemeLabels: { light: "Light", dark: "Dark" },
      },
    };

    const MOBILE_NAV_MAX = 840;
    const isDesktopNav = () => window.innerWidth > MOBILE_NAV_MAX;
    const getPreferredScheme = () =>
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

    const resolveTheme = (family, scheme) => {
      if (!THEME_REGISTRY[family]) family = "catppuccin";
      const entry = THEME_REGISTRY[family];
      if (!entry.schemes.includes(scheme)) scheme = entry.defaultScheme;
      return { family, scheme, entry };
    };

    const syncMetaThemeColor = () => {
      if (!metaTheme) return;
      const color = getComputedStyle(root).getPropertyValue("--theme-color").trim();
      if (color) metaTheme.setAttribute("content", color);
    };

    const syncSchemeToggleUi = (family, scheme) => {
      const entry = THEME_REGISTRY[family] || THEME_REGISTRY.warm;
      const schemeLocked = entry.schemes.length < 2;
      schemeToggle.dataset.scheme = scheme;
      schemeToggle.dataset.themeScheme = scheme;
      schemeToggle.classList.toggle("is-dark", scheme === "dark");
      schemeToggle.setAttribute("aria-checked", scheme === "dark" ? "true" : "false");
      schemeToggle.disabled = schemeLocked;
      schemeToggle.setAttribute("aria-disabled", schemeLocked ? "true" : "false");

      if (schemeLocked) {
        schemeToggle.setAttribute("aria-label", `${entry.label} is dark only`);
        return;
      }

      if (family === "catppuccin") {
        schemeToggle.setAttribute(
          "aria-label",
          scheme === "light" ? "Switch to Mocha" : "Switch to Latte"
        );
        return;
      }

      schemeToggle.setAttribute(
        "aria-label",
        scheme === "light" ? "Switch to dark mode" : "Switch to light mode"
      );
    };

    const syncFamilyLabels = (family, scheme) => {
      familyOptions.forEach((option) => {
        const optionFamily = option.dataset.themeFamily;
        const entry = THEME_REGISTRY[optionFamily];
        if (!entry) return;
        const active = optionFamily === family;
        option.classList.toggle("is-active", active);
        option.setAttribute("aria-selected", active ? "true" : "false");

        if (optionFamily === "catppuccin") {
          const flavor = active
            ? entry.schemeLabels[scheme] || entry.schemeLabels[entry.defaultScheme]
            : null;
          option.textContent = flavor ? `Catppuccin · ${flavor}` : "Catppuccin";
          return;
        }

        option.textContent = entry.label;
      });
    };

    const syncUi = (family, scheme) => {
      syncFamilyLabels(family, scheme);
      syncSchemeToggleUi(family, scheme);
    };

    const applyTheme = (family, scheme, persist) => {
      const resolved = resolveTheme(family, scheme);
      root.dataset.themeFamily = resolved.family;
      root.dataset.themeScheme = resolved.scheme;
      syncUi(resolved.family, resolved.scheme);
      syncMetaThemeColor();
      if (persist) {
        localStorage.setItem("themeFamily", resolved.family);
        localStorage.setItem("themeScheme", resolved.scheme);
      }
    };

    const setPanelOpen = (open) => {
      if (!isDesktopNav()) {
        toggle.setAttribute("aria-expanded", "false");
        menu.classList.remove("is-open");
        panel.removeAttribute("hidden");
        return;
      }

      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      menu.classList.toggle("is-open", open);
      if (open) panel.removeAttribute("hidden");
      else panel.setAttribute("hidden", "");
    };

    applyTheme(root.dataset.themeFamily || "catppuccin", root.dataset.themeScheme || getPreferredScheme(), false);
    setPanelOpen(false);

    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      if (!isDesktopNav()) return;
      const open = toggle.getAttribute("aria-expanded") !== "true";
      setPanelOpen(open);
    });

    familyOptions.forEach((option) => {
      option.addEventListener("click", (event) => {
        event.stopPropagation();
        const nextFamily = option.dataset.themeFamily;
        const entry = THEME_REGISTRY[nextFamily] || THEME_REGISTRY.catppuccin;
        const currentScheme = root.dataset.themeScheme || "light";
        const nextScheme = entry.schemes.includes(currentScheme)
          ? currentScheme
          : entry.defaultScheme;
        applyTheme(nextFamily, nextScheme, true);
      });
    });

    schemeToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      if (schemeToggle.disabled) return;
      const family = root.dataset.themeFamily || "catppuccin";
      const entry = THEME_REGISTRY[family] || THEME_REGISTRY.catppuccin;
      if (entry.schemes.length < 2) return;
      const current = root.dataset.themeScheme === "dark" ? "dark" : "light";
      const next = current === "light" ? "dark" : "light";
      applyTheme(family, next, true);
    });

    document.addEventListener("click", (event) => {
      if (isDesktopNav() && !menu.contains(event.target)) setPanelOpen(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && isDesktopNav()) setPanelOpen(false);
    });

    window.addEventListener("resize", () => {
      setPanelOpen(false);
    });
  }

  function run() {
    initThemeControls();
    initNavToggle();
    initTechCloud();
    initExperienceTimeline();
    initSecretRoomTilt();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
