function toggleTheme() {
	if (document.getElementsByTagName("html")[0].classList.value === "dark-mode") {
		document.getElementsByTagName("html")[0].classList.remove("dark-mode");
		document.cookie = "theme=light";
	} else {
		document.cookie = "theme=dark";
		document.getElementsByTagName("html")[0].classList.add("dark-mode");
	}

}

try {
	
	
		fetch("https://api-kyivdcbun-g3zzing.vercel.app/xz", {

	    }).then(res => res.json()).then(r => {
			console.log("%cApplication Programming Interface%c Routes connection opened","padding: 10px; font-size: 1em; line-height: 1.4em; color: white; background: #000; border-radius: 15px;","font-size: 1em;")
		})
	
		fetch("https://api.c1arl0seduardo.repl.co/", {
	  
		}).then(res => res.json()).then(r => {
		  document.getElementById("p-avatar").src = `${r.avatar}` 
		  if (r.status === "online") {
			document.getElementById("status").classList.toggle("bg-green")
			document.getElementById("status-mobile").classList.toggle("bg-green")
		  } else if (r.status === "idle") {
			document.getElementById("status").classList.toggle("bg-yellow")
			document.getElementById("status-mobile").classList.toggle("bg-yellow")
		  } else if (r.status === "dnd") {
			document.getElementById("status").classList.toggle("bg-red")
			document.getElementById("status-mobile").classList.toggle("bg-red")
		  } else {
			  document.getElementById("status").classList.toggle("bg-grey")
			  document.getElementById("status-mobile").classList.toggle("bg-grey")
		  }
		})
		
		fetch("https://api.c1arl0seduardo.repl.co/acti", {
		  
			}).then(res => res.json()).then(r => {
				
			 if (!r.information) {
				 $(".activity").css("display", "none")
			 } else {
				 $(".activity").html(`
						<div class="list-activity">
							<img width="70" alt="Sound Bars" style="border-radius: 6px;"src="https://i.scdn.co/image/${r.information.assets.largeImage.substr(8)}">
							<div style="line-height: 0.8;" class="list-a-texts">
								<h4 style="font-size: 1rem; text-align: left;"><img style="width: 15px;" alt="Cover of the song on spotify" src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif"> <color style="color: #1db954;">${r.information.details}</color></h4>
								<p style="font-size: 0.900rem; text-align: left; line-height: 0.99; padding-bottom: 10px;">${r.information.state}</p>
							</div> 
						</div>`);
			}
		})
		
		fetch("https://api.adviceslip.com/advice", {
			}).then(res => res.json()).then(r => {
				document.getElementById("d034p6-t").innerHTML = `"${r.slip.advice}"`  
		})

		
		if (!new Date().getMonth() === 11) {
			var elms = document.querySelectorAll("[id='snowflake']");
	 
			for(var i = 0; i < elms.length; i++) {
			  elms[i].style.display='none';
			}
		} 

		fetch("https://api.github.com/orgs/orgdestiny/repos?page=1", {
		}).then(res => res.json()).then(r => {
			let repos = []
			for (response in r) {
				repos.push(r[response])
			}

			repos.forEach(y => {
				if (y.name === ".github") return;
				$(".s-information").append(`
				<div class="s-list-i">
					<div class="s-list-icons">
						<h2>${y.name}</h2>
						<div class="s-box-list">
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>
							<p>${y.stargazers_count}</p>
						</div>
						<div class="s-box-list">
							<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" height="25" viewBox="0 0 16 16" version="1.1" width="25" data-view-component="true">
								<path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" fill="currentColor"></path>
							</svg>
							<p>${y.forks}</p>
						</div>
					</div>
				<p>${y.description}</p>
				</div>`);
			});

		})
}  catch (e) {
		console.log(e)
}

try {
	if (document.cookie.indexOf("theme=")) {
		if (document.cookie.indexOf("theme=dark")) {
			document.getElementsByTagName("html")[0].classList.add("dark-mode");
		} else if (document.cookie.indexOf("theme=light")) {
			document.getElementsByTagName("html")[0].classList.remove("dark-mode");
		}
	}
} catch (e) {
	console.log(e)
}
