// postcss

module.exports = {
    plugins: [
        require("autoprefixer"),
        require("postcss-convert-values"),
        require("postcss-merge-longhand"),
        require("postcss-minify-font-values"),
        require("postcss-minify-gradients"),
        require("postcss-normalize-charset"),
        require("postcss-normalize-display-values"),
        require("postcss-normalize-positions"),
        require("postcss-normalize-repeat-style"),
        require("postcss-normalize-string"),
        require("postcss-normalize-timing-functions"),
        require("postcss-normalize-unicode"),
        require("postcss-normalize-url"),
        require("postcss-ordered-values"),
        require("postcss-reduce-initial"),
        require("postcss-reduce-transforms"),
    ],
};