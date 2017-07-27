let taupe = ["img/illidan.jpg"];

recupImg = document.querySelectorAll('img'); //Récupère les images
imagesI= []; // Tableau qui va contenir les images



function change(){

	for (let i = 0; i < recupImg.length; i++){

				setTimeout(function(){
				recupImg[2].setAttribute("src", taupe[0]);
				console.log(taupe[0]);


				setInterval(function(){
				recupImg[2].setAttribute("src", "img/doscarte.jpg"); 
				},1000);
			},2000);
	}
}
change();
		

				











	// function shuffle(a) {
	// 		position.push(recupImg[i].src);
	//     	for (let i = position.length; i; i--) {
	// 	        let j = Math.floor(Math.random() * i);
	// 	        [a[i - 1], a[j]] = [a[j], a[i - 1]];
	//     	}
	// 	}

	//     	shuffle(position);

	
		




// for (let i = 0; i < idDosCarte.length; i++){
// 		console.log(Math.floor(Math.random(idDosCarte[i]) * 10));
// }

		



	





