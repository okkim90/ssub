['DOMContentLoaded', 'resize'].forEach(event => window.addEventListener(event, function (ev) {
    const { innerHeight } = window;
    document.documentElement.style.setProperty("--app-height",`${innerHeight}px`);
}));




