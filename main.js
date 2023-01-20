const toggle = document.querySelector('.toggle')
const nav = document.querySelector('.navbar')

		toggle.addEventListener('click', () => {
			document.body.classList.toggle('no-scroll')
			toggle.classList.toggle('active')
			nav.classList.toggle('active')
		})

		const slides = document.querySelectorAll(".slide");
		const next = document.querySelector("#next");
		const prev = document.querySelector("#prev");
		const intervalTime = 5000;
		let slideInterval;
		
		const nextSlide = () => {
			// Get current class
			const current = document.querySelector(".current");
			// Remove current class
			current.classList.remove("current");
			// Check for next slide
			if (current.nextElementSibling) {
				// add current to next sibling
		
				current.nextElementSibling.classList.add("current");
			} else {
				// add current to start
				slides[0].classList.add("current");
			}
			setTimeout(() => current.classList.remove("current"));
		};
		
			const prevSlide = () => {
				// Get current class
				const current = document.querySelector(".current");
				// Remoe current class
				current.classList.remove("current");
				// Check for prev slide
				if (current.previousElementSibling) {
					// Add  current to prev sibling
					current.previousElementSibling.classList.add("current");
				} else {
					// Add current to last
					slides[slides.length - 1].classList.add("current");
				}
				setTimeout(() => current.classList.remove("current"));
			};
		
			// button events
		
			next.addEventListener("click", e => {
				nextSlide();
				if (auto) {
					clearInterval(slideInterval);
					slideInterval = setInterval(nextSlide, intervalTime);
				}
			});
		
			prev.addEventListener("click", e => {
				prevSlide();
				if (auto) {
					clearInterval(slideInterval);
					slideInterval = setInterval(nextSlide, intervalTime);
				}
			});
		
			if (auto) {
				slideInterval = setInterval(nextSlide, intervalTime);
		}

		