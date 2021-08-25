const div = document.getElementById('root');
let ul = document.createElement('ul');
div.append(ul);

 const books = [
    { 
      author: "Скотт Бэккер",
      name: "Тьма, что приходит прежде",
      price: 70 
    }, 
    {
     author: "Скотт Бэккер",
     name: "Воин-пророк",
    }, 
    { 
      name: "Тысячекратная мысль",
      price: 70
    }, 
    { 
      author: "Скотт Бэккер",
      name: "Нечестивый Консульт",
      price: 70
    }, 
    {
     author: "Дарья Донцова",
     name: "Детектив на диете",
     price: 40
    },
    {
     author: "Дарья Донцова",
     name: "Дед Снегур и Морозочка",
    }
  ];
 
  let li = document.createElement('li');
  books.forEach((el) => {
    const {author, name, price} = el;
    if (author && name && price) {
        li.insertAdjacentHTML("afterbegin", `<li>Автор: ${author}, Название: ${name}, Стоимость: ${price}</li>`);
        ul.append(li)
    }
});
  try {
    function checkField(price,author) {
      if (!price&&!author) {
          throw ({mesage:"нет поля Цена и поля Автор"})
      }

      }
      checkField();
  } catch (error) {
    console.log(error.mesage);
  }




