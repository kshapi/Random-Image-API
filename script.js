const image = document.querySelectorAll('.image img');
const refreshBtn = document.querySelector('.btn');
const loader = document.querySelector('.loader');


function pic () {
  //Get all tag
  image.forEach(img => {
    img.style.opacity = 0.1;
    //Set loader
    loader.style.display = 'block';
    //Fetch url
     const url = fetch(`https://source.unsplash.com/collection/928423/400x400/?sig=100`)
      .then(res => {
        /*
        When response came then set source and remove loader
        */
        img.src = res.url;
        img.style.opacity = 1;
        loader.style.display = 'none';
     })
     .catch(error => {
       refreshBtn.innerText = 'Error!'+error.message;
     });
     
  });
  
}
pic();

//Refresh Button
refreshBtn.addEventListener('click',
pic);

//kshapii