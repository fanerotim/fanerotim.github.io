const toggle = document.querySelector('.toggle')
const nav = document.querySelector('.navbar')

		toggle.addEventListener('click', () => {
			document.body.classList.toggle('no-scroll')
			toggle.classList.toggle('active')
			nav.classList.toggle('active')

			
	
		})

		