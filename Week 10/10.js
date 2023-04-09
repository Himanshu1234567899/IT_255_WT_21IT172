const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');
const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');

Cat_btn.addEventListener('click', getRandomCat);
Dog_btn.addEventListener('click', getRandomDog);
function getRandomCat() {
	Fetch('https://aws.random.cat/meow').then(res => res.json()).then(data => 
    {
        Cat_result.innerHTML = `<img src=${data.file} alt=”cat” />`
	}
    );
}
function getRandomDog() {
	Fetch('https://random.dog/woof.json').then(res => res.json()).then(data => {
			If(data.url.includes('.mp4')) 
            {
				getRandomDog();
			}
			Else 
            {
				Dog_result.innerHTML = `<img src=${data.url} alt=”dog” />`;
			}
		});
}
