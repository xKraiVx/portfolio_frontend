export const isExternalLink = (url: string): boolean => {
  return url?.includes("https" || "http");
};
