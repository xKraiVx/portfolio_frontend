import { SvgIcon, SvgIconProps } from "@mui/material";

export const CloseIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 100 100">
      <path
        d="m 10 20 l 70 70 a 1 1 0 0 0 7 -7 l -70 -70 a 1 1 0 0 0 -7 7"
        fill="currentColor"
      />
      <path
        d="m 90 20 l -70 70 a 1 1 0 0 1 -7 -7 l 70 -70 a 1 1 0 0 1 7 7"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export const BurgerIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 100 100">
      <path
        d="m 10 20 h 80 a 1 1 0 0 0 0 -10 h -80 a 1 1 0 0 0 0 10 z"
        fill="currentColor"
      />
      <path
        d="m 10 50 h 80 a 1 1 0 0 0 0 -10 h -80 a 1 1 0 0 0 0 10 z"
        fill="currentColor"
      />
      <path
        d="m 10 80 h 80 a 1 1 0 0 0 0 -10 h -80 a 1 1 0 0 0 0 10 z "
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export const SkyBackground = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 2400 1024">
      <rect width="2400" height="1024" fill="url(#paint0_radial_1_3)" />
      <defs>
        <radialGradient
          id="paint0_radial_1_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1375 1024) rotate(-68.187) scale(1376.56 2678.59)"
        >
          <stop stop-color="white" />
          <stop offset="0.640625" stop-color="#2D92F1" />
          <stop offset="1" stop-color="#090049" />
        </radialGradient>
      </defs>
    </SvgIcon>
  );
};
