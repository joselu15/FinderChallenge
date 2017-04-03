$.getJSON("books-schema.json", 
            	function(datos) {
            		//var a;
            		console.log(datos);
    
            		$.each(datos.data, function(key, books) {
            			$('.main table').append('<tr><td><article class="books_array">' + 
            			'<img src=" ' +  books.image + '" />' +
            			'<h2>' + books.title + '</h2>' +
            			'<p class="desc">' + books.teaser + '</p></article></td></tr>');
            		});

            		$.each(datos.entities.categories, function(key, entities_x) {
            			$.each(entities_x, function(ky, entities_val){
            				$('aside .categorias').append('<a href="#">' + entities_val.label + '</a>');
            			});
            		});

            		$.each(datos.entities.lang, function(key, lenguage) {
            			$.each(lenguage, function(ky, lenguage_val){
            				$('aside .idiomas').append('<a href="#">' + lenguage_val.label + '</a>');
            			});
            		});

            		$.each(datos.entities.saved, function(key, saved) {
            			$('aside .busqueda_save').append('<a href="' + saved.url + '">' + saved.label + '</a>');
            			
            		});
    
                    $.each(datos.entities.edition, function(key, edition) {
            			$.each(edition, function(ky, edition_val){
            				$('aside .ediciones').append('<a href="#">' + edition_val.label + '</a>');
            			});
            		});

            });