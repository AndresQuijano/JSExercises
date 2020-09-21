const boton=document.getElementById('cargar');

boton.addEventListener('click',cargarPosts);

function cargarPosts(evt){
    evt.preventDefault();

    const xhr=new XMLHttpRequest();

    xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);

    xhr.onload=function(){
        if(this.status===200){
            let html='';

            const listaPosts=JSON.parse(this.responseText);

            listaPosts.forEach(function(post) {
                html=html+`
                <h1>${post.title}</h1>
                <p>${post.body}</p>
                `;
            });

            document.getElementById('listado').innerHTML=html;
        }
    };

    xhr.send();
}