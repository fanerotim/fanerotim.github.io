        const slide = document.querySelectorAll(".slides");
		const nextious = document.querySelector("#nextSlide");
		const previous = document.querySelector("#previous");
		const intervalTime1 = 5000;
		let slidesInterval;
		
		const nextiousSlider = () => {
			// Get current class
			const present = document.querySelector(".present");
			// Remove current class
			present.classList.remove("present");
			// Check for next slide
			if (present.nextElementSibling) {
				// add current to next sibling
		
				present.nextElementSibling.classList.add("present");
			} else {
				// add current to start
				slide[0].classList.add("present");
			}
			setTimeout(() => present.classList.remove("present"));
		};
		
			const previousSlides = () => {
				// Get current class
				const present = document.querySelector(".present");
				// Remoe current class
				present.classList.remove("present");
				// Check for prev slide
				if (present.previousElementSibling) {
					// Add  current to prev sibling
					present.previousElementSibling.classList.add("present");
				} else {
					// Add current to last
					slide[slide.length - 1].classList.add("present");
				}
				setTimeout(() => present.classList.remove("present"));
			};
		
			// button events
		
			nextious.addEventListener("click", e => {
				nextiousSlider();
				if (auto) {
					clearInterval(slidesInterval);
					slidesInterval = setInterval(nextiousSlider, intervalTime1);
				}
			});
		
			previous.addEventListener("click", e => {
				previousSlides();
				if (auto) {
					clearInterval(slidesInterval);
					slidesInterval = setInterval(nextiousSlider, intervalTime1);
				}
			});
		
			if (auto) {
				slidesInterval = setInterval(nextiousSlider, intervalTime1);
		}



        