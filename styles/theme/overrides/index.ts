import { Theme } from "@mui/material";
import IconButton from "./icon-button";
import Link from "./link";

export function overrides(theme: Theme) {
  return Object.assign(Link(theme), IconButton(theme));
}
