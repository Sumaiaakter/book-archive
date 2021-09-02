const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data

    searchField.value = "";

    // load data
    const url = ` http://openlibrary.org/search.json?q=${searchText}`;

    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayBook(data.docs[0]));
}
// searchBook();

const displayBook = books => {

    console.log(books);


    // images collection

    const load = () => {
        const url = "https://ia902701.us.archive.org/view_archive.php?archive=/18/items/olcovers55/olcovers55-L.zip&file=554106-L.jpg";
        console.log(url);
        const movieContainer = document.getElementById("image-details")
        const movieBox = document.createElement("div")
        movieBox.classList.add("col-md-3")
        movieBox.innerHTML = `
            <div class="shadow rounded p-3 m-2">
                <img width="200px" height="200px" class="img-fluid" src='${url}'>

            </div>
`

        movieContainer.appendChild(movieBox)


    }
    load();




    const bookName = document.getElementById('author-name');
    const movieContainer = document.getElementById("image-details");
    const url = "https://ia902701.us.archive.org/${554106}-L.jpg";

    // clear div

    bookName.innerHTML = "";

    // error message

    if (!books) {
        document.getElementById("error-message").innerHTML =
            "<p class='text-center p-3 bg-danger'><b>Please enter a valid name...</b></p>";
    }
    else {

        const div = document.createElement('div');
        div.classList.add('col-md-3');

        div.innerHTML = `
           
            <div class="shadow rounded p-2 m-2">
                 
                <h5 class="card-title">Name: ${books.title}</h5>
                <p class="card-text">First Publish: ${books.first_publish_year}</p>
                <p class="card-text">Publisher: ${books.publisher}</p>
                <p class="card-text">Author Name: ${books.author_name}</p>

            </div>
           

    `;
        // bookName.appendChild(div);
        movieContainer.appendChild(div);

    }





}










