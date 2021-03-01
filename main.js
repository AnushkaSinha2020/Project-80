function getParagraph1(){
		var inputs = [];
		for(var i = 1 ; i <=6 ; i++){
			inputs.push(document.getElementById("div_a_" + i).value);
		}
	document.getElementById("showParagraph1").innerHTML = inputs.join(". ");
}

function getParagraph2(){
		var inputs = [];
		for(var i = 1 ; i <=6 ; i++){
			inputs.push(document.getElementById("div_b_" + i).value);
		}
	document.getElementById("showParagraph2").innerHTML = inputs.join(". ");
}

function getTitle(){
        var title = document.getElementById("title").value;
        document.getElementById("showTitle").innerHTML = title;
}