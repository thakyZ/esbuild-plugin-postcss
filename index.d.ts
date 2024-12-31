import postcss from "postcss";
import { Plugin } from "esbuild";

declare interface Options {
    plugins: postcss.Plugin;
}

declare function esbuildPluginPostCss(options: Options): Plugin

export default esbuildPluginPostCss;
