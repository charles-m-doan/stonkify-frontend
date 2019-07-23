import Html from "../src/js/Html/HTMLWrapper";

describe("HTMLWrapper", () => {
	test("able to create HTMLWrapper from exported function", () => {
		const newHTML = Html();
		expect(newHTML).toBeTruthy();
	});
});
