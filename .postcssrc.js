// postcss

const postcss = require("postcss");

// Header
// ---------------------------------------------------------------------------

const data = require("./package.json");
const header = `/*! ${data.name} ${data.version} | ${data.license} license | ${data.homepage} */`;

// Options
// ---------------------------------------------------------------------------

module.exports = {
    plugins: [
        require("postcss-pxtorem")({
            mediaQuery: true,
            minPixelValue: 0,
            propList: ["*"],
            replace: true,
            unitPrecision: 6,
        }),
        require("css-mqpacker")({
            sort: true,
        }),
        require("cssnano")({
            preset: [
                "default",
                {
                    colormin: false,
                    convertValues: false,
                    discardComments: false,
                    mergeRules: false,
                    mergeIdents: false,
                },
            ],
        }),
        postcss.plugin("postcss-header", () => (css) => {
            css.walkComments((comment) => {
                comment.remove();
            });

            css.prepend(header);

            css.walk((rule) => {
                if (rule.prev() && rule.prev().type === "comment") {
                    rule.raws.before = "\n\n";
                }
            });
        }),
    ],
};
