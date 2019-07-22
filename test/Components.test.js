import Components from "../src/js/Components/Components";

describe("Components", () => {
	test("able to create Components from exported function", () => {
		let newComponents = Components();
		expect(newComponents).toBeTruthy();
	});
});
