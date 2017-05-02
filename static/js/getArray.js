$(document).ready(function() {
    $("#btnTeste").bind('click', function(){
        //Get all words from list
        var list = [];
        $("li").each(function(){
            list.push($(this).text());
        });



        //var list = $( "#wordlist option" ).val();
  
		$.getJSON($SCRIPT_ROOT + '/_array2python', {
		        wordlist: JSON.stringify(list)
		    }, function(data){
		        console.log(data.result)
		        $( "#result" ).text(data.result);
		    });
        return false;
    });
});