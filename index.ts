import {Options} from "prettier";

namespace config {
    export interface Config extends Options {
        overrides?: Overrides[];
    }

    export interface Overrides {
        files: string | string[];
        options: Options;
    }
}

const config: config.Config = {
    printWidth: 100,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: false,
    quoteProps: "consistent",
    jsxSingleQuote: false,
    trailingComma: "none",
    bracketSpacing: false,
    bracketSameLine: false,
    arrowParens: "avoid",
    requirePragma: false,
    insertPragma: false,
    proseWrap: "always",
    htmlWhitespaceSensitivity: "css",
    vueIndentScriptAndStyle: true,
    endOfLine: "auto",
    overrides: [
        {
            files: [
                "*.css",
                "*.htm",
                "*.html",
                "*.json",
                "*.less",
                "*.sass",
                "*.yaml",
                "*.yml",
                "*.xml"
            ],
            options: {
                tabWidth: 2
            }
        },
        {
            files: ["*.md"],
            options: {
                printWidth: 80
            }
        }
    ]
};

export = config;
