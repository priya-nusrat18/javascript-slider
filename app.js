
const photos = ["images/slide1.jpg" ,"images/slide2.jpg" , "images/slide3.jpg"]
const img = document.querySelector("img");
let count = 0;

next = () =>{
        count ++;
        if (count>= photos.length) {
            count = 0
        img.src = photos[count];
        }else{
        img.src = photos[count];
        }
}
prev = () => {
    count --;
    if (count < 0) {
		count = photos.length - 1;
        img.src = photos[count];
	} else {
		img.src = photos[count];
	}
};