$(document).ready(function()
{
	var useapi= true;
	for(var i=1; i <=151; i++)
	{
		$('body').append("<div class=\"pokemon\" id=\"poke" + i + "\"></div>");
	}
	
	for(var i=1; i <=151; i++)
	{
		if(useapi==true){

			(function(i)
			{
				var pokeURL = "http://pokeapi.salestock.net/api/v2/pokemon/" + i;
				var pokeID = "#poke" + i;
		
		

				$.getJSON(pokeURL, function(data)
				{
				
					console.log(data.sprites.front_default);
					$(pokeID).append( ("<img src=\"" +data.sprites.front_default+"\">"));

				})
			})(i);
		}
		else
		{
			var pokeID = "#poke" + i;
			$(pokeID).append("<img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+i+".png\">");

		}
	}


})

