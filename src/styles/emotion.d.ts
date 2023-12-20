import "@emotion/react";
import { type TypeOfPalette, type TypeOfTypo } from "./theme";

declare module "@emotion/react" {
  export interface Theme {
    palette: TypeOfPalette;
    typo: TypeOfTypo;
  }
}
