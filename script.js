//your code here!
const scrollContainer = document.getElementById("scroll-container")
let count = 1;
for (; count <=10; count++){
	const div = document.createElement("div");
	div.className = `item ${count}`;
	div.className = "item";
	 scrollContainer.appendchild(div);
} 
 scrollContainer.addEventListener("scroll", () => {
	 let scrolledHeight =  scrollContainer.scrollTop;
	 let maxScrollableHeight =  scrollContainer.scrollHeight -  scrollContainer.clientHeight;

	 if (maxScrollableHeight - scrolledHeight <= 5) {
	 	 addTwoMoreItems();
	 }
 })

function addTwoMoreItems() {
	const div1 = document.createElement("div");
	div1 innerText = `item ${count++}`
	div1.className = "item";

	const div2 = document.createElement("div");
	div2 innerText = `item ${count++}`
	div1.className = "item";

	scrollContainer.append(div1,div2);
}
