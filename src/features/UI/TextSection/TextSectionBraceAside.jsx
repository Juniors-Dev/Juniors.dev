/**
 * Work With Us callout: tall skinny `{` on the left, centered bold copy on the right.
 * Brace stretched with `scaleY` to hit the Figma aspect ratio (60×150 / 60×242 / 60×377).
 */
function TextSectionBraceAside({ before, emphasis, after, sentence }) {
  return (
    <>
      <p className="sr-only">{sentence}</p>
      <div
        aria-hidden="true"
        className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-10 xl:gap-16"
      >
        <span className="inline-block -my-12 select-none text-[140px] font-light leading-none tracking-normal text-primary-500 origin-[50%_60%] transform-[rotate(-90deg)] md:origin-center md:-mt-14 md:mb-0 md:text-[160px] md:leading-[1.51] md:transform-none xl:text-[250px]">
          {"{"}
        </span>
        <p className="max-w-[280px] text-center text-base font-bold leading-[1.4] text-primary-700 md:max-w-[260px] md:text-lg xl:max-w-[330px] xl:text-2xl">
          {before}
          <span className="font-extrabold uppercase">{emphasis}</span>
          {after}
        </p>
      </div>
    </>
  );
}

export default TextSectionBraceAside;
