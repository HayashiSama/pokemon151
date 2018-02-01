$(document).ready(function()
{
	var useapi= true;
	for(var i=1; i <=151; i++)
	{
		$('#pokemonholder').append("<div class=\"pokemon\" id=\"poke" + i + "\"></div>");
	}
	
	for(var i=1; i <=151; i++)
	{
		if(useapi==true){

			(function(i)//needed to deal with async
			{
				var pokeURL = "http://pokeapi.salestock.net/api/v2/pokemon/" + i;
				var pokeID = "#poke" + i;
		
		
				//getJSON call
				$.getJSON(pokeURL, function(data)
				{
				
					$(pokeID).append("<img src=\"" +data.sprites.front_default+"\">");
					
					//Primary Type is stored as second element
					if(data.types.length==2)
					{
						$(pokeID).attr("type1", data.types[1].type.name);
						$(pokeID).attr("type2", data.types[0].type.name);
					}
					else
					{
						$(pokeID).attr("type1", data.types[0].type.name)
						$(pokeID).attr("type2", null);
					}
					//Capitalize name
					var cap = data.name.charAt(0).toUpperCase();
					console.log(cap+data.name.slice(1));
					$(pokeID).attr("pokemonName", cap+data.name.slice(1));

					$(pokeID).attr("pweight", data.weight);
					$(pokeID).attr("pheight", data.height);
				})

				$(document).on("click", pokeID, function(e)
				{
			    	$("#pokedex").children("h2").text($(pokeID).attr("pokemonName"));
			    	$("#pokedex").children("ul").children("#typeone").text($(pokeID).attr("type1"));
			    	if($(pokeID).attr("type2") != null)
			    	{
			    		$("#pokedex").children("ul").children("#typetwo").text($(pokeID).attr("type2"));
			    	}
			    	else
			    	{
			    		$("#pokedex").children("ul").children("#typetwo").text("");
			    	}

			    	$("#pokedex").children("#deximage").attr("src", $(this).children("img").attr("src"));
			    	$("#dexweight").text($(this).attr("pweight"));
			    	$("#dexheight").text($(this).attr("pheight"));
                	e.stopPropagation();
				});
				
			})(i);
		}
		else
		{
			var pokeID = "#poke" + i;
			$(pokeID).append("<img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+i+".png\">");

		}

		
	}


})

