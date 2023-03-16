import { useEffect, useState } from "react";

import { isExternalLink } from "@common/utils/is-external-link";
import cn from "classnames";

interface Props {
  url?: string;
  width?: number;
  height?: number;
  className?: string;
}

export const UploadedSvg = ({ url, width, height, className }: Props) => {
  const path =
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
  let fullPath = null;

  if (!isExternalLink(url)) {
    fullPath = path + url;
  } else {
    fullPath = url;
  }

  const [svg, setSvg] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isErrored, setIsErrored] = useState(false);

  useEffect(() => {
    fetch(fullPath)
      .then((res) => res.text())
      .then(setSvg)
      .catch(setIsErrored)
      .then(() => setIsLoaded(true));
  }, [fullPath]);

  return (
    <div
      style={{ width, height }}
      className={cn(className, "svg-embed", {
        "svg-embed--loaded": isLoaded,
        "svg-embed--loading": !isLoaded,
        "svg-embed--errored": isErrored,
      })}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};
