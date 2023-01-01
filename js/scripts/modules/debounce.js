function debounce(callback, timer) {
    let interval;
    return function () {
        interval && clearTimeout(interval);
        interval = setTimeout(() => {
            callback();
        }, timer);
    };
}
export default debounce;
//# sourceMappingURL=debounce.js.map