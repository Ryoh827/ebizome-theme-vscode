import { createTheme, createThemesDirectory } from "./build";
import { fairyPalette } from "./themes/fairy/palette";

function main() {
  createThemesDirectory();

  createTheme({
    name: "Fairy",
    fileName: "Fairy-color-theme",
    author: "ryoh827",
    palette: fairyPalette,
    type: "light",
  });
}

main();
