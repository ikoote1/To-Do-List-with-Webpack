import './style.css';
// arrow object
const obj = [
  {
    discription: 'ikoote cooking style',
    commpleted: '',
    index: 1,
  },
  {
    discription: 'rehema coding in java',
    commpleted: '',
    index: 2,
  },
  {
    discription: 'namusobya developing website',
    commpleted: '',
    index: 3,
  },
];
// display
const list = document.querySelector('.lists');
obj.forEach((o) => {
  list.innerHTML += `
  <div class = "tree"> <div class = "list">
    <input type="checkbox" id="do1" name="do1" value="list">
    <h2>${o.discription}</h2>
    </div>
    <i class="fa fa-trash fa-2x delete"></i>
    <i class="fa delete1">&#xf142;</i></div>
   
  `;
});