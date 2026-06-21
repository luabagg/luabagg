(() => {
  function initTechCloud() {
    const cloud = document.querySelector(".tech-cloud");
    if (!cloud) return;

    const items = [...cloud.querySelectorAll(".tech-cloud-item")];
    if (!items.length) return;

    cloud.addEventListener("pointerleave", () => {
      items.forEach((item) => item.style.setProperty("--tech-hover-scale", 1));
    });

    items.forEach((item, index) => {
      item.addEventListener("pointerenter", () => {
        items.forEach((other, otherIndex) => {
          const distance = Math.abs(index - otherIndex);
          const scale = distance === 0 ? 1.35 : distance === 1 ? 1.15 : 1;
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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }

  function run() {
    initTechCloud();
    initExperienceTimeline();
    initSecretRoomTilt();
  }
})();
