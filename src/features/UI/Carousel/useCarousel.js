import { useRef, useState, useEffect, useCallback } from "react";

const MOBILE_GRID_MEDIA_QUERY = "(max-width: 766px)";

function equalizeSlideHeights(slideRefs) {
  const slides = slideRefs.current.filter(Boolean);
  if (!slides.length) return;

  slides.forEach((slide) => {
    slide.style.minHeight = "";
  });

  const maxHeight = Math.max(...slides.map((slide) => slide.offsetHeight));

  if (maxHeight > 0) {
    slides.forEach((slide) => {
      slide.style.minHeight = `${maxHeight}px`;
    });
  }
}

/**
 * Carousel scroll state, layout sync, and navigation handlers.
 *
 * @param {object} options
 * @param {string} [options.className=""] - Carousel modifier classes
 * @param {number} [options.pageCount=2] - Number of pagination dots / scroll pages
 * @param {number} options.slideCount - Total number of slides
 */
export function useCarousel({ className = "", pageCount = 2, slideCount }) {
  const trackRef = useRef(null);
  const slideRefs = useRef([]);
  const isMobileGridRef = useRef(false);
  const hasMobileGridClass = className.includes("carousel--grid-mobile");
  const [activePage, setActivePage] = useState(0);
  const [canScroll, setCanScroll] = useState(false);

  const updateLayoutState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    if (isMobileGridRef.current) {
      setCanScroll(false);
      return;
    }

    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanScroll(maxScroll > 4);

    if (pageCount <= 1) {
      setActivePage(0);
      return;
    }

    const ratio = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
    setActivePage(Math.round(ratio * (pageCount - 1)));
  }, [pageCount]);

  const updateScrollPage = useCallback(() => {
    if (isMobileGridRef.current) return;

    const track = trackRef.current;
    if (!track || pageCount <= 1) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    const ratio = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
    setActivePage(Math.round(ratio * (pageCount - 1)));
  }, [pageCount]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const mql = window.matchMedia(MOBILE_GRID_MEDIA_QUERY);

    const syncMobileGrid = () => {
      isMobileGridRef.current = hasMobileGridClass && mql.matches;
    };

    const handleLayoutChange = () => {
      syncMobileGrid();
      equalizeSlideHeights(slideRefs);
      updateLayoutState();
    };

    syncMobileGrid();
    equalizeSlideHeights(slideRefs);
    updateLayoutState();

    track.addEventListener("scroll", updateScrollPage, { passive: true });
    window.addEventListener("resize", handleLayoutChange);
    mql.addEventListener("change", handleLayoutChange);

    const observer = new ResizeObserver(handleLayoutChange);
    observer.observe(track);
    slideRefs.current.filter(Boolean).forEach((slide) => observer.observe(slide));

    return () => {
      track.removeEventListener("scroll", updateScrollPage);
      window.removeEventListener("resize", handleLayoutChange);
      mql.removeEventListener("change", handleLayoutChange);
      observer.disconnect();
    };
  }, [updateLayoutState, updateScrollPage, slideCount, hasMobileGridClass]);

  const scrollToPage = useCallback(
    (page) => {
      const track = trackRef.current;
      if (!track || pageCount <= 1) return;

      if (page === 0) {
        slideRefs.current[0]?.scrollIntoView({
          behavior: "smooth",
          inline: "start",
          block: "nearest",
        });
        return;
      }

      if (page === pageCount - 1) {
        slideRefs.current[slideCount - 1]?.scrollIntoView({
          behavior: "smooth",
          inline: "start",
          block: "nearest",
        });
        return;
      }

      const maxScroll = track.scrollWidth - track.clientWidth;
      track.scrollTo({
        left: (maxScroll * page) / (pageCount - 1),
        behavior: "smooth",
      });
    },
    [pageCount, slideCount]
  );

  const handlePrev = useCallback(() => {
    scrollToPage(Math.max(0, activePage - 1));
  }, [activePage, scrollToPage]);

  const handleNext = useCallback(() => {
    scrollToPage(Math.min(pageCount - 1, activePage + 1));
  }, [activePage, pageCount, scrollToPage]);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        handlePrev();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        handleNext();
      }
    },
    [handlePrev, handleNext]
  );

  const setSlideRef = useCallback((index, element) => {
    slideRefs.current[index] = element;
  }, []);

  return {
    trackRef,
    setSlideRef,
    activePage,
    canScroll,
    scrollToPage,
    handlePrev,
    handleNext,
    handleKeyDown,
  };
}
