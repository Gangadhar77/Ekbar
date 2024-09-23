// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         }else{
//             entry.target.classList.remove('show');
//         }
        
// });
// });
// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));

// document.body.onmousemove = e => {
// 	document.body.style.setProperty("--mouse-x", e.clientX);
// 	document.body.style.setProperty("--mouse-y", e.clientY);
// };

document.querySelectorAll('.card').forEach(card => {
	card.addEventListener('mousemove', (e) => {
		const { left, top, width, height } = card.getBoundingClientRect();
		const x = ((e.clientX - left) / width) * 100;
		const y = ((e.clientY - top) / height) * 100;
		card.style.setProperty('--x', `${x}%`);
		card.style.setProperty('--y', `${y}%`);
	});
});