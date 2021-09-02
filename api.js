

const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);

    searchField.value = "";


    const bookUrl = `https://openlibrary.org/search.json?q=${searchText}`;

    // console.log(bookUrl);
    fetch(bookUrl)
        .then(res => res.json())
        .then(data => displayBook(data.docs))
}

const displayData = data => {
    console.log(data);
    if (searchField.value === '') {
        const error = document.createElement('p');
        error.innerHTML = `
        <h3 class="text-white text-center bg-danger mx-auto w-50">Please enter valid name</h3>

        `;
        errorHnadle.appendChild(error);
    }
    else {

    }
}

const displayBook = docs => {
    // console.log(docs)

    const searchResult = document.getElementById('search-result');
    // clear div
    searchResult.innerHTML = "";


    docs.forEach(doc => {
        console.log(doc);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
                <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Title: ${doc.title}</h5>
                    <p class="card-text">Author Name: ${doc.author_name}</p>
                    <p class="card-text">First Publish: ${doc.first_publish_year}</p>
                    <p class="card-text">Publisher: ${doc.publisher}</p>
                </div>
            </div>

        `;
        searchResult.appendChild(div);


    })

}


