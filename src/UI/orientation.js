const rotateMessage = document.querySelector("#rotate-message");

function isMobile() {
	return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function updateOrientation() {

	const mobile = isMobile();
	const landscape = window.matchMedia(
		"(orientation: landscape)"
	).matches;

	if (mobile && landscape) {
		rotateMessage.style.display = "flex";
	} else {
		rotateMessage.style.display = "none";
	}
}

window.addEventListener("resize", updateOrientation);
window.addEventListener("orientationchange", updateOrientation);

updateOrientation();
