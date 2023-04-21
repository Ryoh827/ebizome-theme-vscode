import { createTheme, createThemesDirectory } from "./build";
import { ebizomePalette } from "./themes/ebizome/palette";

function main() {
  createThemesDirectory();

  // Create a theme
  createTheme({
    name: "Ebizome",
    fileName: "ebizome-theme",
    author: "ryoh827",
    palette: ebizomePalette,
    type: "dark",
  });
}

main();
