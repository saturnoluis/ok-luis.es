export function toggleClassName(element, className) {
	const elementClassName = element?.className.split(' ') || [];

	if (elementClassName.includes(className)) {
		element.className = elementClassName
			.filter((n) => n !== className)
			.join(' ');
	} else {
		elementClassName.push(className);
		element.className = elementClassName.join(' ');
	}
}
