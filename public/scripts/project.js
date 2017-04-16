function scrollTo(element, to, duration) {
	if (duration < 0) return;
	var difference = to - element.scrollLeft;
	var perTick = difference / duration * 10;

	setTimeout(function () {
		element.scrollLeft = element.scrollLeft + perTick;
		if (element.scrollLeft === to) return;
		scrollTo(element, to, duration - 10);
	}, 10);
}

function initNav(container) {
	var images = Array.prototype.slice.call(container.querySelectorAll('.image'));

	return {
		next: function () {
			var target = images.find((function (img) {
				return img.offsetLeft + img.clientWidth > container.clientWidth + container.scrollLeft;
			})) || images[length - 1];
			scrollTo(container, target.offsetLeft, 500)
		},
		prev: function () {
			var target = images.reverse().find((function (img) {
				return img.offsetLeft + img.clientWidth < container.scrollLeft;
			})) || images[0];
			scrollTo(container, target.offsetLeft, 500)
		}
	}
}

function initGallery(container) {
	var nav = initNav(container.querySelector('.gallery'));
	container.querySelector('button.next').addEventListener('click', nav.next)
	container.querySelector('button.prev').addEventListener('click', nav.prev)
}

function initProjects() {
	document.querySelectorAll('.project').forEach(initGallery);
}

initProjects()
