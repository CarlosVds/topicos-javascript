function mostrar(){
    let image = document.querySelector('#pegar').files[0];

    let urlImage = document.createElement('img');
    urlImage.src = URL.createObjectURL(image);
    urlImage.width = 200;

    document.querySelector('.demo').appendChild(urlImage);

}