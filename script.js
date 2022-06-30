const form = document.querySelector('#searchform');
const display = document.querySelector('#display');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchedTerm = form.elements.input.value;
    try {
        const response = await axios.get(`https://api.api-ninjas.com/v1/cats?name=${searchedTerm}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': '9lwgJdDwMsi2WPjbZb9Y8A==6iOhIDVitEZgcgiH'
            }
        });
        if (response.data.length === 0) {
            alert('No match found!!!')
        }
        else {
            makeNewInfo(response.data);
        }
    }
    catch (error) {
        alert(`ENTRY INCORRECT: ${error}`);
    }

    function makeNewInfo(cats) {
        
        for(let result of cats) {
            let div = document.createElement('div');
            div.setAttribute('id', 'catResult');
        
            const catName = result.name
            const imgSrc = result.image_link

            const img = document.createElement('img')
            img.src = imgSrc
            div.appendChild(img);

            const name = document.createElement('h3')
            name.textContent = catName
            div.appendChild(name);

            display.appendChild(div);
        }
    }
    
});

