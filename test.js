const pages = ['About Me', 'Portfolio', 'Contact', 'Resume']


const newPages = pages.map((page) => {
    return page.split('t')
});

console.log(newPages);