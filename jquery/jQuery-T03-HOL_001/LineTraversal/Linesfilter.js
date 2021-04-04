$(document).ready(function(){
	$('#search').click(function(){
		var s=$('#tb').val();
		var ta1=$('#ta1').val();

		var wrds=s.split(",");
		var ans="";
		var lines=ta1.split("\n");
		for(var j=0;j<wrds.length;j++){

		for(var i=0;i<lines.length;i++){
			if(lines[i].includes(wrds[j])){
				var lineWrds=lines[i].split(" ");
				for(var k=0;k<lineWrds.length;k++){
					if(wrds[j].localeCompare(lineWrds[k])){
						if(k==lineWrds.length-1)
						ans=ans.concat(lineWrds[k]).concat(", ");
						else
						ans=ans.concat(lineWrds[k]).concat(" ");
					}
					else
					{	if(k==lineWrds.length-1)
						ans=ans.concat("<b>").concat(lineWrds[k]).concat("</b>, ");
						else
						ans=ans.concat("<b>").concat(lineWrds[k]).concat("</b> ");
					}
				}



				
			}		
		}

		}
		$('#ta2').val(ans.substring(0,ans.length-2));

	})
})
           