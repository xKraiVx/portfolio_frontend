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
export const LogoIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 512 512">
      <path
        d="m 256 16 a 1 1 0 0 0 0 480 a 1 1 0 0 0 0 -480 M 128 448 a 1 1 0 0 0 240 -368 a 1 1 0 0 0 -240 368 m 8 -8 a 1 1 0 0 0 208 -336 a 1 1 0 0 0 -208 336"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export const WomenSignIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 477.141 477.141">
      <path
        d="M326.711,341.99h-64.628v-64.634c0-0.686-0.142-1.323-0.213-1.997c65.409-11.119,115.378-68.161,115.378-136.681
		C377.249,62.208,315.044,0,238.571,0C162.103,0,99.892,62.208,99.892,138.678c0,68.521,49.973,125.562,115.375,136.681
		c-0.059,0.674-0.204,1.312-0.204,1.997v64.634h-64.631c-12.983,0-23.501,10.527-23.501,23.502c0,12.98,10.518,23.507,23.501,23.507
		h64.637v64.64c0,12.98,10.524,23.502,23.501,23.502c12.979,0,23.513-10.527,23.513-23.502v-64.64h64.628
		c12.986,0,23.508-10.526,23.508-23.507C350.219,352.518,339.698,341.99,326.711,341.99z M146.904,138.678
		c0-50.546,41.121-91.673,91.667-91.673c50.549,0,91.676,41.122,91.676,91.673s-41.127,91.667-91.676,91.667
		C188.031,230.346,146.904,189.224,146.904,138.678z"
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
