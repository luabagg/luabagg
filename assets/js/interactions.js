(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

  function initTimelineMotion() {
    if (!window.gsap || !window.ScrollTrigger || !window.MotionPathPlugin) return;

    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    const marker = document.querySelector(".experience-marker");
    const path = document.querySelector("#career-path");
    const section = document.querySelector(".experience-motion");

    if (!marker || !path || !section) return;

    gsap.set(marker, { opacity: 1 });

    gsap.to(marker, {
      motionPath: {
        path,
        align: path,
        alignOrigin: [0.5, 0.5],
      },
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        end: "bottom 75%",
        scrub: true,
      },
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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }

  function run() {
    initTechCloud();
    initSecretRoomTilt();

    if (!reduceMotion) {
      initTimelineMotion();
    }
  }
})();
