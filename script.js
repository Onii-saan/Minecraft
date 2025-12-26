// Minimal page JavaScript
document.addEventListener('DOMContentLoaded', function () {
	// Prevent search form from causing full page reload during demo
	const searchForm = document.querySelector('form[role="search"]');
	if (searchForm) {
		searchForm.addEventListener('submit', function (e) {
			e.preventDefault();
			const q = this.querySelector('input[type="search"]').value.trim();
			if (q) {
				console.log('Search requested for:', q);
				alert('Search for: ' + q);
			}
		});
	}
});

