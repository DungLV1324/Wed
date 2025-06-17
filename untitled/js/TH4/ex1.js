let data = [
  {id: 1, name: "Dung", msv: "1", date: "1-1-2004", lop: "12"},
  {id: 2, name: "Dung2", msv: "2", date: "2-2-2004", lop: "12"},
  {id: 3, name: "Dung3", msv: "3", date: "3-3-2004", lop: "12"}
]

function getData() {
  var tbData = document.querySelector(".table_data")
  var elements = ""
  data.map(d => (
    elements += <tr>
      <td>${d.name}</td>
      <td>${d.msv}</td>
      <td>
        <button>Update</button>
        <button>Delete</button>
      </td>
    </tr>
  ))
  tbData.innerHTML = elements;
}
