import { Theme } from "@mui/material";
import IconButton from "./icon-button";
import Link from "./link";
import Base from "./base";
import Button from "./button";
import Typography from "./typography";

export function overrides(theme: Theme) {
  return Object.assign(
    Link(theme),
    IconButton(theme),
    Base(theme),
    Button(theme),
    Typography(theme)
  );
}
