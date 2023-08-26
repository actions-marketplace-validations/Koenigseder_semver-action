// Release types
export enum ReleaseType {
  Major = "major",
  Minor = "minor",
  Patch = "patch",
}

// Reset styles and colors
export const RCS = "\x1b[0m";

// Colors
export enum Color {
  Red = "\x1b[31m",
  Green = "\x1b[32m",
  Yellow = "\x1b[33m",
  Cyan = "\x1b[36m",
  White = "\x1b[37m",
  Black = "\x1b[30m",
}

export enum BgColor {
  Red = "\x1b[41m",
  Yellow = "\x1b[43m",
  Cyan = "\x1b[46m",
}

// Styles
export enum Style {
  Bold = "\x1b[1m",
  Italic = "\x1b[3m",
}
