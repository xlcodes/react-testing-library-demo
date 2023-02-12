export default {
    process() {
        return {code: "module.exports = {}"};
    },
    getCacheKey() {
        return "svgTransform"; // SVG 固定返回字符串
    }
}