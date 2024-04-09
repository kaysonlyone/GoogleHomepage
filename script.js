
function myFunction() {
    let search = document.getElementById("search").value;
    alert(`You searched: ${search}.`);
    window.location.href = `https://www.google.com/search?q=${search}`;
  }
  