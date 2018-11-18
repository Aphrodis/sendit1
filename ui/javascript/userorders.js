let btnCancelOrder =document.getElementsByClassName('btnCancelOrder');
for (let btn of btnCancelOrder){
	let parent = btn.parentNode.parentNode.parentNode.parentNode; 
	let grandParent = parent.parentNode;
	let parentnode=btn.parentNode.parentNode;
	let child= parentnode.children[5].innerHTML;
	if ( child ==="Not Delivered") {
		btn.onclick = function(){
	console.log("hey you clicked me");
	grandParent.removeChild(parent);
};
}else if (child === "In Transit"  || child === "Delivered") {
	btn.onclick = function(){
	console.log("hey you clicked me");
	alert("You can not change the destination because the status of your parcel is not market as Not Delivered");
};	
// } else (child ==="Delivered") {
// 	btn.onclick = function(){
// 	console.log("hey you clicked me");
// 	alert("You can not change the destination kkk");
// };
};
};