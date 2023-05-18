const Animals = () => {
    const urls = {
        dog: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
        cat: "https://cdn.onemars.net/sites/nutro_es_NkyIN_B9cV/image/gettyimages-175925832_1615921990619.jpeg",
        catdog: "https://upload.wikimedia.org/wikipedia/en/6/64/CatDog.jpeg"
    }; 
    const changeImg = (url) => {
        const image = document.getElementById("img");
        image.setAttribute("src", url);
    };
    return(
        <div>
            <div>
                <button id="dog" className="button" onClick={()=>changeImg(urls.dog)}>Dog</button>
                <button id="cat" className="button" onClick={()=>changeImg(urls.cat)}>Cat</button>
                <button id="catdog" className="button" onClick={()=>changeImg(urls.catdog)}>Catdog</button>
            </div>
            <img id="img" width="40%" src=""></img>
        </div>
    );
};
export default Animals