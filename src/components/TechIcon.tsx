import { useEffect, useState } from "react";

interface TechIconProps {
  src: string;
  className?: string;
}

export function TechIcon({ src, className = "" }: TechIconProps) {
  const [svgContent, setSvgContent] = useState<string>("");

  useEffect(() => {
    let isMounted = true;

    fetch(src)
      .then((res) => res.text())
      .then((svg) => {
        if (isMounted) {
          setSvgContent(svg);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [src]);

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}