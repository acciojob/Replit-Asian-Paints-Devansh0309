//your JS code here. If required.
function changeColor(){
	const id= document.getElementById("input-id").value
	
	const color= document.getElementById("color-id").value
	// alert("hello",id,color)
	if(parseInt(id)>=1 && parseInt(id)<=9 && color){
		document.getElementById(id).style.background=color
		for(let i=1;i<10;i++){
			if(i!=id){
				document.getElementById(i).style.background="transparent"
			}
		}
	}
}