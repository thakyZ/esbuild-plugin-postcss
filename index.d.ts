import postcss from "postcss";
import { Plugin } from "esbuild";

declare interface Options {
    plugins: postcss.Plugin;
}

export default function(options: Options): Plugin;
