import { colord, extend } from "colord";
import namesPlugin from "colord/plugins/names";
import hwbPlugin from "colord/plugins/hwb";
import lchPlugin from "colord/plugins/lch";
import cmykPlugin from "colord/plugins/cmyk";

extend([namesPlugin, hwbPlugin, lchPlugin, cmykPlugin]);

export { colord };
