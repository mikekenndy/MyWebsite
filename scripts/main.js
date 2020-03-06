// JS for homepage
window.onscroll = function() {lockSidebar()};

// Get the sidebar
var sidebar = document.getElementById("sidebar");
console.log(sidebar);

// Get the offset position of the navbar
var sticky_var = sidebar.offsetTop;

// Add the sticky class to the sidebar when you reach its scroll position.  Remove "sticky" when you leave the scroll positon
function lockSidebar() {
	console.log(window.pageYOffset);
	console.log(sticky_var);
	if (window.pageYOffset > sticky_var)
		sidebar.classList.add("sticky");
	else
		sidebar.classList.remove("sticky");
}