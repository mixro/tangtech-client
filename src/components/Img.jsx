import { useEffect, useRef, useState } from "react";
import { imageSources } from "../data/images";

/**
 * Responsive image with a fixed aspect ratio (no layout shift), lazy loading,
 * and a branded fallback if the remote image fails to load.
 */
export default function Img({ image, ratio = "4/3", sizes = "(max-width: 760px) 100vw, 50vw", max = 1600, priority = false, className = "" }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef(null);
  const { src, srcSet } = imageSources(image, { max, ratio: ratio.replace("/", ":") });

  // An image that failed before hydration never fires React's onError.
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className={`img ${className}`} style={{ aspectRatio: ratio }}>
      {!failed && src ? (
        <img
          ref={ref}
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={image?.alt ?? ""}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="img-fallback" role="img" aria-label={image?.alt ?? ""} />
      )}
    </div>
  );
}
