const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // verwijder active class van alle tabs
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // hide alle tab contents
        contents.forEach(c => c.classList.remove('active'));

        // toon de geselecteerde tab
        const target = tab.dataset.tab;
        document.getElementById(target).classList.add('active');
    });
});
