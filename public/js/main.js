function toggleTheme() {
	if (document.getElementsByTagName("html")[0].classList.value === "dark-mode") {
		document.getElementsByTagName("html")[0].classList.remove("dark-mode");
		document.cookie = "theme=light";
	} else {
		document.cookie = "theme=dark";
		document.getElementsByTagName("html")[0].classList.add("dark-mode");
	}
	
	console.log(document.cookie)
}

try {
    fetch("https://api.g3z.repl.co/xyz", {
  
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

    fetch("https://api.adviceslip.com/advice", {

    }).then(res => res.json()).then(r => {
        document.getElementById("d034p6-t").innerHTML = `"${r.slip.advice}"`  
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