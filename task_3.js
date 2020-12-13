/*

    Задание 3:


    Написать класс Posts в котором есть данные:

    _id
    isActive,
    title,
    about,
    likes,
    created_at

    У класса должен быть метод addLike и render.

    Нужно сделать так чтобы:
    - После добавления поста, данные о нем записываются в localStorage.
    - После перезагрузки страницы, данные должны сохраниться.
    - Можно было предзагрузить данные в данный модуль: http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2

*/
var URLL = "http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2";
window.addEventListener("DOMContentLoaded", () => {
  class Statue {
    constructor(_id, isActive, title, about, created_at) {
      this._id = _id;
      this.isActive = isActive;
      this.title = title;
      this.about = about;
      this.likes = 0;
      this.created_at = created_at;

      this.likePlus = this.likePlus.bind(this);
    }

    likePlus() {
      this.likes++;
      var likesPlus = document.querySelector(`[data-id="${this._id}"] .like`);
      likesPlus.innerHTML = `&#10084;: ${this.likes}`;
    }

    render() {
        var block = document.createElement('div');
        block.dataset.id = this._id;
        block.innerHTML += `
        <p>Status ${this.isActive}</p>
        <p>Title ${this.title}</p>
        <p>About ${this.about}</p>
        <p class="like">&#10084;: ${this.likes}</p><button type="button" class="likePlusBtn">Like?</button>
        <p>Create at ${this.created_at}</p>
        `;
        var likeBtn = block.querySelector('.likePlusBtn');
        likeBtn.addEventListener('click', this.likePlus);
        var res = document.getElementById('show');
        res.appendChild(block);
    }

  }

  var btn = document.getElementById('load');
    btn.onclick = () => {
        fetch(URLL).then(
            (data) => {
                return data.json();
            }
        ).then(
            (item) => {
                console.log(item);
                item.forEach(el => {
                    var newElem = new Statue(
                        el._id,
                        el.isActive,
                        el.title,
                        el.about,
                        el.created_at
                    );
                    newElem.render();
                });
            }
        )
    }

    var objPosts = [];
    const GetSavedPosts = () => {
        let data = localStorage.getItem('Posts');
    
        if (data !== null) {
            objPosts = JSON.parse(data);
            return objPosts;
        }
    
        return null;
    }

    var obj = GetSavedPosts();

    if (obj !== null) {
        obj.forEach(function (post) {
            new Statue(post.about, post.created_at, post.isActive, post.likes, post.title, post._id);            
        })   
    }

    var createBtn = document.getElementById('create');
    var about = document.getElementById('about');
    var title = document.getElementById('title');

    createBtn.onclick = () => {
        if (title.value !== "" || about.value !== "" ) {
            var dateOfCreate = new Date();
            var createElement = new Statue(dateOfCreate, "true", title.value, about.value, dateOfCreate);
            objPosts.push(createElement);
            localStorage.setItem("Posts", JSON.stringify(objPosts));
            createElement.render();
        } else {
            alert("Enter something");
        }
    }
});

