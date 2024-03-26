  function writeTable(url, bool){
			var out2 = 	"<tr>"+
				"<td align='center'>-></td>"+
				"<td align='center'><a href='" + url + "' target='_blank'>" + url + "</a> </td>"+
				"</tr>";
		  document.getElementById("adsd").innerHTML + out2;
		
	  }
      function pingURL(url) {
         // Getting the URL from the User
         var URL = url;
         var settings = {
            // Defining the request configuration
            cache: false,
            dataType: "jsonp",
            crossDomain: true,
            url: URL,
            method: "GET",
            timeout: 5000,
            headers: {accept: "application/json", "Access-Control-Allow-Origin": "*",},

            // Defines the response to be made
            // for certain status codes
            statusCode: {
               200: function (response) {
					document.getElementById("outputDiv").innerHTML="<h3 style='color:green'>Status 200: Page is up!</h3>";
					document.getElementById("adsd").innerHTML = document.getElementById("adsd").innerHTML + "<tr>"+
							"<td align='center'>-></td>"+
							"<td align='center'><a href='" + url + "' target='_blank'>" + url + "</a> </td>"+
							"</tr>";
				  //return "up";
				  //writeTable(url, true);
               },
               400: function (response) {
                  document.getElementById("outputDiv").innerHTML="<h3 style='color:red'>Status 400: Page is down.</h3>";
				  //return "down";
               },
               0: function (response) {
                  
				  document.getElementById("outputDiv").innerHTML="<h3 style='color:red'>Status 0: Page is down.</h3>";
				  //return "down";
               },
            },
         };
         // Sends the request and observes the response
         $.ajax(settings).done(function (response) {
            console.log(response);
         })
         .fail(function (response) {
            console.log("Error" + response);
         });
      }
	  
	  
	  
	  
	  
	  
	  
	  
		String.prototype.isMatch = function(s){
		   return this.match(s)!==null 
		}
		
			
		var Jsonfiles = [
			'ServerList.json'
		]; 


		ScanServers = function(arr){
		
			var out = "";
			var i, j;
			
			
			out += 	"<table width='80%' border style='font-size: 11px;font-family: Bahnschrift;' id='adsd'>" +
					"<tr>"+
					"<th>Server No.</th>"+
					"<th>URL</th></tr>";
			

			
			console.log('Json Count - > ' + arr.length);


			j = 0;
			for(i = 0; i<arr.length; i++){				//Iterate for total json file
				console.log(arr[i].URL);
				j++;
				
				pingURL(arr[i].URL);
				 
			}
				
			
			out += "</table>";
			document.getElementById('nua').innerHTML = out;
		}
		
	
		var xmlhttpRoutine = new XMLHttpRequest();
		var url = Jsonfiles[0];
		xmlhttpRoutine.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var ServerList = JSON.parse(this.responseText);
				ScanServers(ServerList);
			}
		};	
		xmlhttpRoutine.open("GET", url, true);
		xmlhttpRoutine.send();
