import { Children, useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Horizontal scroll carousel with prev/next controls and dot pagination.
 *
 * Follows common carousel accessibility patterns:
 * - labelled region with slide roledescription
 * - keyboard arrow navigation when the track is focused
 * - disabled prev/next at boundaries
 * - dot buttons with aria-current for the active page
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Slides (e.g. ServiceCard items)
 * @param {string} props.ariaLabel - Accessible label for the carousel
 * @param {string} [props.className=""] - Optional modifier classes
 * @param {number} [props.pageCount=2] - Number of pagination dots / scroll pages
 * @param {string} [props.prevLabel="Previous slide"] - Label for previous button
 * @param {string} [props.nextLabel="Next slide"] - Label for next button
 * @param {string} [props.dotLabel="Go to slide"] - Prefix for dot button labels
 */
function Carousel({
  children,
  ariaLabel,
  className = "",
  pageCount = 2,
  prevLabel = "Previous slide",
  nextLabel = "Next slide",
  dotLabel = "Go to slide",
}) {
  const trackRef = useRef(null);
  const slideRefs = useRef([]);
  const slides = Children.toArray(children);
  const [activePage, setActivePage] = useState(0);
  const [canScroll, setCanScroll] = useState(false);

  const isMobileGrid = useCallback(() => {
    return (
      className.includes("carousel--grid-mobile") && window.matchMedia("(max-width: 766px)").matches
    );
  }, [className]);

  const equalizeSlideHeights = useCallback(() => {
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
  }, []);

  const updateState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    if (isMobileGrid()) {
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
  }, [isMobileGrid, pageCount]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    equalizeSlideHeights();
    updateState();

    const handleResize = () => {
      equalizeSlideHeights();
      updateState();
    };

    track.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", handleResize);

    const observer = new ResizeObserver(handleResize);
    observer.observe(track);
    slideRefs.current.filter(Boolean).forEach((slide) => observer.observe(slide));

    return () => {
      track.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [equalizeSlideHeights, updateState, children]);

  const scrollToPage = (page) => {
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
      slideRefs.current[slides.length - 1]?.scrollIntoView({
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
  };

  const handlePrev = () => {
    scrollToPage(Math.max(0, activePage - 1));
  };

  const handleNext = () => {
    scrollToPage(Math.min(pageCount - 1, activePage + 1));
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      handlePrev();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      handleNext();
    }
  };

  return (
    <section
      className={`carousel ${className}`.trim()}
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div
        ref={trackRef}
        className="carousel__track"
        tabIndex={canScroll ? 0 : -1}
        onKeyDown={handleKeyDown}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.key ?? index}
            ref={(element) => {
              slideRefs.current[index] = element;
            }}
            className="carousel__slide-wrap"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}`}
          >
            {slide}
          </div>
        ))}
      </div>

      {canScroll && (
        <div className="carousel__controls" aria-label={`${ariaLabel} controls`}>
          <button
            type="button"
            className="carousel__nav-btn"
            onClick={handlePrev}
            disabled={activePage === 0}
            aria-label={prevLabel}
          >
            <ChevronLeft className="carousel__nav-icon" aria-hidden="true" />
          </button>

          <div className="carousel__dots">
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                type="button"
                className={`carousel__dot${index === activePage ? " carousel__dot--active" : ""}`}
                aria-label={`${dotLabel} ${index + 1}`}
                aria-current={index === activePage ? "true" : undefined}
                onClick={() => scrollToPage(index)}
              />
            ))}
          </div>

          <button
            type="button"
            className="carousel__nav-btn"
            onClick={handleNext}
            disabled={activePage === pageCount - 1}
            aria-label={nextLabel}
          >
            <ChevronRight className="carousel__nav-icon" aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  );
}

export default Carousel;
