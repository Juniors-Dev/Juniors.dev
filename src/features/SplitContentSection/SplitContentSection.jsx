/**
 * Two-column layout for text-heavy sections (e.g. intro + visual aside).
 */
function SplitContentSection({ leading, trailing, className = "" }) {
  return (
    <div className={`grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 ${className}`.trim()}>
      <div className="min-w-0">{leading}</div>
      <div className="min-w-0">{trailing}</div>
    </div>
  );
}

export default SplitContentSection;
