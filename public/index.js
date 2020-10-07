function addImage(keyword, index){
    const image = document.createElement('img');
    image.src = `https://source.unsplash.com/400x255?${keyword}&sig=${index}`;
    image.className = "image"

    const gallery = document.querySelector('.gallery');
    gallery.appendChild(image);
}
function removeAllPhoto(){
    const galleryElment = document.querySelector(".gallery");
    galleryElment.innerHTML = '';
}
function searchPhoto(event){
    const keyword = event.target.value;
    console.log(keyword);

    if(event.key === 'Enter' && keyword){
        removeAllPhoto();
            for(let i=0; i<12; i++){
                addImage(keyword,i);
            }

    }
}

function handleUpdate(){
    const suffix = this.dataset.sizing || '' ;
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}

function main(){
    
    const inputControls = document.querySelectorAll('.controls input');
    //console.log(inputControls);
    inputControls.forEach((input)=>{input.addEventListener('change', handleUpdate);});
    // inputControls.forEach((input)=>{input.addEventListener('mousemove', handleUpdate);});

    const inputElment = document.querySelector('.search');
    inputElment.addEventListener('keydown',searchPhoto);
   
}
main();