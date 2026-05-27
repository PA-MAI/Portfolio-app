import { useEffect, useState } from "react";

interface TechIconProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

export function TechIcon({ src, className = "", style }: TechIconProps) {
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
      style={style}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}