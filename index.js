function addImage(keyword,index){
    const image = document.createElement('img');
    image.src = `https://source.unsplash.com/400x255?${keyword}&sig=${index}`;

    const gallery = document.querySelector(".gallery");
    gallery.appendChild(image);

}
function removeAllPhoto(){
    const galleryElement =document.querySelector(".gallery");
    galleryElement.innerHTML = '';

}

function searchPhoto(event){
    const keyword = event.target.value;
    
    if(event.key === 'Enter' && keyword){
        removeAllPhoto();
        console.log(keyword); //check ค่า ว่ามีค่าเข้ามาไหม
        for(let i=0;i<9;i++){
            addImage(keyword,i);

        }
    }
}

function handleUpdate(){
    const suffix = this.dataset.sizing ||'';
    console.log(`--${this.name}:${this.value+suffix}`);
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);

}

function main(){
    const inputControls = document.querySelectorAll('.controls input');
    console.log(inputControls);
    inputControls.forEach((input)=>{input.addEventListener('change',handleUpdate);});
    inputControls.forEach((input)=>{input.addEventListener('mousemove',handleUpdate);})

    const inputElement = document.querySelector('.search');
    inputElement.addEventListener('keydown',searchPhoto);

    


}

main();