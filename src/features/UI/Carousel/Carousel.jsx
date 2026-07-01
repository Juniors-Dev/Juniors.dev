import { Children } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useCarousel } from "./useCarousel";

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
  const slides = Children.toArray(children);

  const {
    trackRef,
    setSlideRef,
    activePage,
    canScroll,
    scrollToPage,
    handlePrev,
    handleNext,
    handleKeyDown,
  } = useCarousel({ className, pageCount, slideCount: slides.length });

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
            ref={(element) => setSlideRef(index, element)}
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
