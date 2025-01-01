import postcss from "postcss";
import { Plugin } from "esbuild";

declare interface Options<T> {
    plugins: T;
}

declare const esbuildPluginPostCss: <T extends postcss.Plugin>(options: Options<T>) => Plugin;

export = esbuildPluginPostCss;
