window.addEventListener("DOMContentLoaded", (event) => {
    const classPrefix = 'anchor-item-';
    const anchors = document.querySelectorAll(`[class*="${classPrefix}"]`);
    anchors.forEach(anchor => {
        const anchorClass = anchor.className.split(' ').find(cls => cls.startsWith(classPrefix));
        anchor.id = anchorClass;
    });
});