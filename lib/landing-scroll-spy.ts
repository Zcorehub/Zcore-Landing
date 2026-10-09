export function observeLandingSections(
  hrefs: readonly string[],
  onChange: (activeHref: string | null, scrolled: boolean) => void
): () => void {
  const sections = hrefs.flatMap((href) => {
    const element = document.getElementById(href.slice(1));
    return element ? [{ href, element }] : [];
  });
  let frame: number | null = null;
  let activeHref: string | null | undefined;
  let scrolled: boolean | undefined;

  function update() {
    frame = null;
    let nextHref: string | null = null;
    // The fixed navbar is 64px tall; activate just below it, with 16px of space.
    for (const section of sections) {
      if (section.element.getBoundingClientRect().top <= 80) {
        nextHref = section.href;
      }
    }
    // A short final section may never reach the activation line.
    if (
      window.scrollY > 0 &&
      window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 1
    ) {
      nextHref = sections[sections.length - 1]?.href ?? null;
    }
    const nextScrolled = window.scrollY > 20;
    if (nextHref !== activeHref || nextScrolled !== scrolled) {
      activeHref = nextHref;
      scrolled = nextScrolled;
      onChange(activeHref, scrolled);
    }
  }

  function schedule() {
    if (frame === null) frame = window.requestAnimationFrame(update);
  }

  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  window.addEventListener("hashchange", schedule);
  window.addEventListener("pageshow", schedule);
  const observer = new ResizeObserver(schedule);
  observer.observe(document.body);
  for (const section of sections) observer.observe(section.element);
  update();

  return () => {
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
    window.removeEventListener("hashchange", schedule);
    window.removeEventListener("pageshow", schedule);
    observer.disconnect();
    if (frame !== null) window.cancelAnimationFrame(frame);
  };
}
