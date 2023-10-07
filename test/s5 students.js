function search() {
    let input = document.getElementById('searchbar').val
    input=input.toLowerCase();
    let x = document.getElementsByClassName('search');

    for (i=0; i< x.length; i++) {
        if (x[i].innerHTML.toLocaleLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";
        }
    }
}