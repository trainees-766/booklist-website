const table = document.querySelector("table");
const form = document.querySelector("form");
const book = document.getElementById("bookName");
const author = document.getElementById("author");
const id = document.getElementById("bookId");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addRow(book.value, author.value, id.value);
  emptyFields();
});
const emptyFields = () => {
  book.value = author.value = id.value = "";
};
const addRow = (bookName, author, bookId) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${bookName}</td>
          <td>${author}</td>
          <td>${bookId}</td>
          <td><button class="remove">remove</button></td>`;
  table.appendChild(tr);
};
table.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
     e.target.parentElement.parentElement.remove();
  }
});
