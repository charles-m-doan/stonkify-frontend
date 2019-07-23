export default function(htmlElementType) {
	return new HTMLWrapper(htmlElementType);
}

class HTMLWrapper {
	constructor(htmlElementType) {
		this.element = document.getElementsByTagName("html")[0];
		if (htmlElementType !== undefined) {
			const newElement = document.createElement(elementType);
			if (newElement instanceof HTMLUnknownElement) {
				throw new Error("Invalid HTML tag");
			} else {
				this.element = newElement;
			}
		}
	}
}
