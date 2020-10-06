module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],

    outputDir: "../backend/crunch_server/src/main/resources/static",
    indexPath: "../static/index.html",

    devServer: {
        proxy: "http://localhost:3000"
    },
    chainWebpack: config => {
        const svgRule = config.module.rule("svg");
        svgRule.uses.clear();
        svgRule.use("vue-svg-loader").loader("vue-svg-loader");
    }
}