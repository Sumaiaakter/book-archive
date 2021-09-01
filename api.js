const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data

    searchField.value = "";

    // load data
    const url = ` http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBook(data.docs[0]));
}
// searchBook();

const displayBook = author => {
    console.log(author);
    const bookName = document.getElementById('author-name');

    // clear div

    bookName.innerHTML = "";

    // error message

    if (!author) {
        document.getElementById("error-message").innerHTML =
            "<p class='text-center p-3 bg-danger'><b>Please enter a valid name...</b></p>";
    }
    else {

        const div = document.createElement('div');
        div.classList.add('card');

        div.innerHTML = `
        <div class="card-body">
                <img class="img-fluid" src='${author.imgUrl}'>
                <h5 class="card-title">${author.title}</h5>
                <p class="card-text">${author.first_publish_year}</p>
                <p class="card-text">${author.cover_i}</p>
                <p class="card-text">${author.author_name}</p>
                
        </div>

    `;
        bookName.appendChild(div);

    }





}


const displayImages = loadImage => {
    console.log(loadImage);
    const imgUrl = "https://covers.openlibrary.org/b/id/${554106}-L.jpg"
    fetch(imgUrl)
        .then(res => res.json())
        .then(data => coverImage(data.cover_i))

}
const coverImage = (images) => {
    console.log(images);
    const image = document.getElementById('image');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <div class="card-body">
                <h5 class="card-title">${images.publisher}</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
`;
    image.appendChild(div);


}


