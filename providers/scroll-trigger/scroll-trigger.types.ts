export interface IScrollTrigger {
  scrolledDistance: number | null;
  isScrolled: boolean;
  isScrolledDown: boolean;
  isScrolledUp: boolean;
  blockScroll: () => void;
  enableScroll: () => void;
}
