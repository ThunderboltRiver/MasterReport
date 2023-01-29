var contentsList = Array.from(document.getElementsByClassName("contents"));
dottedline = (element) => {
    const sectionName = element.firstElementChild;
    const pageNumber = element.lastElementChild;
    const dottedline = document.createElement('p');
    while (sectionName.clientWidth + dottedline.clientWidth + pageNumber.clientWidth < element.clientWidth) {
        dottedline.textContent += "\u00A0 .";
    }
    element.insertBefore(dottedline, pageNumber);
}

(async (contents) => {
    for (const element of contents) {
        dottedline(element);
    }
}).call(contentsList)


var contentsList = Array.from(document.getElementsByClassName("contents"));
dottedline = (element) => {
    const sectionName = element.firstElementChild;
    const pageNumber = element.lastElementChild;
    const dottedline = document.createElement('p');
    dottedline.textContent = "\u00A0 .";
    while (sectionName.clientWidth + dottedline.clientWidth + pageNumber.clientWidth < element.clientWidth) {
        dottedline.textContent += "\u00A0 .";
    }
    element.insertBefore(dottedline, pageNumber);
}
for (const element of contents) {
    const sectionName = element.firstElementChild;
    const pageNumber = element.lastElementChild;
    const dottedline = document.createElement('p');
    dottedline.textContent = "\u00A0 .";
    while (sectionName.clientWidth + dottedline.clientWidth + pageNumber.clientWidth < element.clientWidth) {
        dottedline.textContent += "\u00A0 .";
    }
    element.insertBefore(dottedline, pageNumber);
}