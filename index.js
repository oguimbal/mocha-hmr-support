module.exports = function(mod) {
    if (mod.hot) {
        mod.hot.accept();
        const hr = global['mocha-hot-reload'];
        if (hr) {
            hr();
        }
    }
}
