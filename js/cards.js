//create Object

let cards =[
	{
		icon:"fa-solid fa-medal",
		head:"Decade’s Hottest Career",
		para:"2021 witnessed a 21% jump in professionals.Industry Average Salary of an experienced developer is around INR 6.8 LPA"
	},
	{
		icon:"fa-solid fa-briefcase",
		head:"100% Placement Assured",
		para:"Our Programs are 100% Placement assured if you committed & complete your projects on fixed time duration"
	},
	{
		icon:"fa-solid fa-chart-line",
		head:"Gets You Interview Ready",
		para:"Customised career mentoring session. Profile enhancement, mock interviews and regular feedback"
	}
]
function elementcreate(cards){
	//create Element
	
	var cardDiv=document.createElement("div"),
	cardIcon=document.createElement("i"),
	cardHead=document.createElement("h4"),
	cardPara=document.createElement("p")
	
	//obj value assign
	
	cardHead.innerHTML = cards.head;
	cardPara.innerHTML = cards.para;
	
	//add class to Element
	
	cardIcon.setAttribute("class",cards.icon),
	cardHead.setAttribute("class","head"),
	cardPara.setAttribute("class","para"),
	cardDiv.setAttribute("class","card") 
	
	console.log(cardIcon,cardHead,cardPara);
	
	//append child
	
	cardDiv.appendChild(cardIcon)
	cardDiv.appendChild(cardHead)
	cardDiv.appendChild(cardPara)
	
	var cardList=document.getElementById("cards-list");
	
	cardList.appendChild(cardDiv)
}
for(let i=0; i<cards.length;i++){
	elementcreate(cards[i]);
}