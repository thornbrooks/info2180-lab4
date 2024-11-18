document.getElementById('searchButton').addEventListener('click', () => {
    const inputEle = document.querySelector('#searchHero');
    const searchValue = inputEle.value.trim();
    const url = searchValue ? `superheroes.php?search=${encodeURIComponent(searchValue)}` : 'superheroes.php';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.text();
        })
        .then(text => {
            const resultEle = document.querySelector('#result');
            if (resultEle) {
                resultEle.innerHTML = text;
            } else {
                console.error('Result element not found in the DOM');
            }
        })
        .catch(error => {
            console.error('Fetch operation failed:', error);
            alert(`Error fetching data: ${error.message}`);
        });
});
