export const formatWidgetName = (name: string): string => {
  const formatedName = name.charAt(0).toUpperCase() + name.slice(1);
  return formatedName;
};
