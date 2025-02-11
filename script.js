document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.block');

    blocks.forEach(block => {
        const h2 = block.querySelector('h2');
        const options = block.querySelector('.options');

        if (h2 && options) {
            h2.addEventListener('click', () => {
                options.style.display = options.style.display === 'block'? 'none': 'block';
            });
        } else {
            console.error("h2 or options element NOT found in block:", block);
            if (!h2) console.error("h2 is missing");
            if (!options) console.error("options is missing");
        }
    });
});