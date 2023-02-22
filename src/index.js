import './style.css';
import Text from './modules/constructor';
import store from './modules/store';
// UI class
class UI{
  
  static display(){
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

    obj.forEach((txt) => UI.addActivity(txt));
  }
  static addActivity(txt){
    const list = document.querySelector('.lists');
    list.innerHTML += `
    <div class = "tree"> <div class = "list">
      <input type="checkbox" id="do1" name="do1" value="list">
      <h2>${txt.discription}</h2>
      </div>
      <i class="fa fa-trash fa-2x delete"></i>
      <i class="fa delete1">&#xf142;</i></div>
     
    `;
  }
  static deleteActivity(){

  }
}
//display
document.addEventListener('DOMContentLoaded',UI.display());
document.querySelector('.text').addEventListener('.text',()=>{
  const text = document.querySelector('.text').value;
  const txt = new Txt(text);
  //add activity
  UI.addActivity(txt);
});

//delete activity

// display
