function toggleTheme() {
    document.getElementsByTagName('html')[0].classList.toggle("dark-mode");
}

try {
    fetch("https://api.g3z.repl.co/xyz", {
  
    }).then(res => res.json()).then(r => {
      document.getElementById('p-avatar').src = `${r.avatar}` 
	  if (r.status === "online") {
		document.getElementById('status').classList.toggle("bg-green")
	  } else if (r.status === "idle") {
		document.getElementById('status').classList.toggle("bg-yellow")
	  } else if (r.status === "dnd") {
		document.getElementById('status').classList.toggle("bg-red")
	  } else {
		  document.getElementById('status').classList.toggle("bg-grey")
	  }
    })

    fetch("https://api.adviceslip.com/advice", {

    }).then(res => res.json()).then(r => {
        document.getElementById('d034p6-t').innerHTML = `"${r.slip.advice}"`  
    })
  }  catch (e) {
    console.log(e)
}