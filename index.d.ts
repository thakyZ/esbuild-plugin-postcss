import postcss from "postcss";
import { Plugin } from "esbuild";

declare interface Options {
    plugins: postcss.Plugin;
}

declare const esbuildPluginPostCss: (options: Options) => Plugin;

export = esbuildPluginPostCss;
