function scrollTo(element, to, duration, oldDiff) {
	if (duration < 0) return;
	var difference = to - element.scrollLeft;
	var perTick = difference / duration * 10;

	if (oldDiff === difference)
		return;

	setTimeout(function () {
		element.scrollLeft = element.scrollLeft + perTick;
		if (element.scrollLeft === to) return;
		scrollTo(element, to, duration - 10, difference);
	}, 10);
}

function initNav(container) {
	var images = Array.prototype.slice.call(container.querySelectorAll('.image'));

	return {
		next: function () {
			var target = images.find((function (img) {
				return img.offsetLeft + Math.min(img.clientWidth, container.clientWidth) > container.clientWidth + container.scrollLeft;
			})) || images[images.length - 1];
			scrollTo(container, target.offsetLeft, 500)
		},
		prev: function () {
			var target = images.reverse().find((function (img) {
				return img.offsetLeft < container.scrollLeft;
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
