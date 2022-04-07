`use strict`;
let imgc = document.querySelectorAll(".images");
let dots = document.querySelectorAll(".dot");
let ul = document.querySelector("ul");
let head = document.querySelector("header");
let list = document.querySelector(".list");
let nav=document.querySelectorAll(".navs");
let pages=document.querySelectorAll(".page");
let error=document.querySelectorAll(".handle");
let topic=document.querySelectorAll(".topics");
let content=document.querySelectorAll(".content1");
let counter=0;

slide();

//for the slide in the homepage
function slide(){
	for(let i=0; i<imgc.length; i++){
		imgc[i].classList.add("hide");
	}
	counter=counter+1;

	if (counter>imgc.length) {
		counter=1;
	} 

	for(let i=0; i<dots.length; i++){
		dots[i].classList.remove("active");
		//the code below is an alternative to the above
		//dots[i].className=dots[i].className.replace(" active","");
	}

	imgc[counter-1].classList.remove("hide");
	dots[counter-1].classList.add("active");
	//the code below is an alternative to the above
	//dots[counter-1].className+=" active";

	setTimeout(slide, 4000);
}

//to switch from a link to the other.
switchings(nav,"help");
switchings(topic,"spec");
function switchings(elems,change){
	let b=0;
	for (let i=0; i<elems.length; i++){
		elems[i].addEventListener("click", function(){
			elems[b].classList.remove(change);
			elems[i].classList.add(change);
			ul.classList.add("unsee");
			head.classList.remove("more");
			b=i;
		});
	}
}


//to switch between pages. just to hide the previous and show the new.
switchingPage(nav,"hide",pages);
switchingPage(topic,"hide",content);
function switchingPage(elems,change,page){
	let b=0;
	for (let i=0; i<elems.length; i++){
		elems[i].addEventListener("click", function(){
			page[i].classList.remove(change);
			if (i!==b){
				page[b].classList.add(change);
			}
			b=i;
		});
	}
}

// to Handle the error for the project page
handleError();
function handleError(){
	for (let i=0; i<nav.length; i++){
		nav[i].addEventListener("click",function(){
			if(i==1){
				error[0].classList.add("hide");
				error[1].classList.add("hide");
			} else{
				error[0].classList.remove("hide");
				error[1].classList.remove("hide");
			}
		});
	}
}


		list.addEventListener("click",function(){
				ul.classList.toggle("unsee");
				head.classList.toggle("more");
		});

const gitt=document.getElementsByClassName('git');
const icon=document.getElementsByClassName('icons');
const barLink=document.getElementsByClassName('barLink');
//dealing with the contact here
//write objects that would only contain pictures, links, and name of contact
function contact(){
	const contacts={
		git:{
			name:'GitHub',
			img:"img/github.png",
			link:'https://github.com/AkinolaVictor'
		},

		linkd:{
			name:'LinkedIn',
			img:"img/linkedin.jpeg",
			link:'http://www.linkedin.com/in/victoral'
		},

		mail:{
			name:'Gmail',
			img:"img/gmail.jpeg",
			link:'akinolavictor26<br/>@gmail.com'
		},

		phone:{
			name:'Phone',
			img:"img/phone.jpeg",
			link:'+2348-101-<br/>700-105'
		},

		fb:{
			name:'Facebook',
			img:"img/facebook2.png",
			link:'https://web.facebook.com/lekanvictor.akinola'
		}
	}

	let contact=[];
	for(let nm in contacts){
		contact.push(contacts[nm]);
	}

	for (let n=0; n<gitt.length; n++){
		gitt[n].innerText = contact[n].name;
		icon[n].setAttribute("src", contact[n].img);
		if(n!=2 && n!=3){
			barLink[n].setAttribute("href", contact[n].link);
		}
		barLink[2].innerHTML=contact[2].link;
		barLink[3].innerHTML=contact[3].link;
		
	}
}

contact();

function project(){

	const project={
		arcade:{
			name:'Arcade Game',
			picture:"img/arcade.png",
			demoLink:'https://akinolavictor.github.io/arcade-game/',
			repoLink:'https://github.com/AkinolaVictor/arcade-game',
			description:"This is a game built simply with HTML, CSS, and JAVASCRIPT (ES6). The aim of the player is to reach the water mark which is the top border in the game, to win. This game demonstrates my flexibility in some core aspects of JavaScript, as I built the game from the rendering of the Enemies and players to defining their interactions, and many others."
		},

		memory:{
			name:'Memory Game',
			picture:"img/memory.png",
			demoLink:'https://akinolavictor.github.io/matchCardGame/',
			repoLink:'https://github.com/AkinolaVictor/matchCardGame',
			description:"This is a game that helps a player to build a retentive memory. A constant playing of this game would improve the ability of the player to remember things. I built this game from scratch by myself and I was able to demonstrate a good understanding of how JavaScript works. While building, I kept responsiveness in relevance, so the game can work perfectly on all important categories of devices (phones, tablets, and laptops), giving different layouts based on the size of the screen of the user's device. It’s a lovely game to play."
		},

		pixel:{
			name:'Pixel Art App',
			picture:"img/pixel.png",
			demoLink:'https://akinolavictor.github.io/UdacityProject/',
			repoLink:'https://github.com/AkinolaVictor/UdacityProject',
			description:"This is an App that can be used to make colorful designs. It allows the user to set the width and breadth of the grid layout and also allows the user to choose different colors of their choices for the design they want to make. I used jQuery in the development of this app, which made development easy and faster."
		},

		mind:{
			name:'Mind Seer',
			picture:"img/mind seer.png",
			demoLink:'https://akinolavictor.github.io/Mind-Seer/',
			repoLink:'https://github.com/AkinolaVictor/Mind-Seer',
			description:"This app gets the exact word kept in the user’s mind, it asks some questions on the kept-word and then brings the exact word in the user’s mind without any mistake. This nice app works by the principle of algorithms that I wrote, which scans through the response of the user to make a final conclusion on what the word is. I built this App with HTML, CSS, and JAVASCRIPT (ES6)."
		},

		restaurant:{
			name:'Restaurant App',
			picture:"img/restaurant.png",
			demoLink:'https://akinolavictor.github.io/Restaurant-Review-App/',
			repoLink:'https://github.com/AkinolaVictor/Restaurant-Review-App',
			description:"I added responsiveness to this Web App so it can work perfectly well on all devices, I implemented accessibility (A11Y) to this Web App to make it fit for screen reader use, and I also added service worker to this App so it can work offline so as to give users the best of experience. This project was given to me for completion by UDACITY as one of the projects needed to be completed before graduation."
		}
	}

	let header=document.querySelectorAll(".projectLink");
	let pics=document.querySelectorAll(".project1Img");
	let repo=document.querySelectorAll(".repo");
	let desc=document.querySelectorAll(".project1Description");
	let proj=[];
	for (let i in project){
		proj.push(project[i]);
	}
		
	for (let i=0; i<proj.length; i++){
		//for the header
		header[2*i].innerHTML=proj[i].name;
		header[2*i].setAttribute("href", proj[i].demoLink);
		
		header[(2*i)+1].innerHTML=proj[i].name;
		header[(2*i)+1].setAttribute("href", proj[i].demoLink);

		// for the pictures
		pics[2*i].setAttribute("src", proj[i].picture);
		pics[(2*i)+1].setAttribute("src", proj[i].picture);

		

		//for description
		desc[2*i].innerHTML=proj[i].description;
		desc[(2*i)+1].innerHTML=proj[i].description;

		//for repositories
		repo[2*i].setAttribute("href", proj[i].repoLink);
		repo[(2*i)+1].setAttribute("href", proj[i].repoLink);
	}

}
project();


/*


function switchings(elems,change){
	let b=0;
	for (let i=0; i<elems.length; i++){
		elems[i].addEventListener("click", function(){
			elems[b].classList.remove(change);
			elems[i].classList.add(change);
			b=i;
		});
	}
}

*/