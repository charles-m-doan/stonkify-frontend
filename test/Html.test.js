import Html from "../src/js/Html/Html";

describe("Html", () => {
  test("able to create Html from exported function", () => {
    const newHTML = Html();
    expect(newHTML).toBeTruthy();
  });
});

// describe("select", () => {
//   test("should be able to select an element in the document"),
//     () => {
//       const underTest = Html();
//       const query = "body";
//       const result = underTest.select(query);
//       console.log(result);
//       //   expect(result).toBeInstanceOf(HTMLElement);
//       expect(result).toBeTruthy();
//     };
// });

describe("Create", () => {
  describe("element creator", () => {
    describe("should return a new element", () => {
      test("should be an h1 element", () => {
        expect(typeof Html().create("h1") instanceof HTMLHeadingElement);
      });
      test("should be an form element", () => {
        expect(typeof Html().create("form") instanceof HTMLFormElement);
      });
      test("should be an a element", () => {
        expect(typeof Html().create("a") instanceof HTMLAnchorElement);
      });
      test("should be an button element", () => {
        expect(typeof Html().create("button") instanceof HTMLButtonElement);
      });
      test("Should thow error for empty", () => {
        expect(() => Html().create("")).toThrow("Must pass valid HTML Element");
      });
      test("Should thow error for notValid", () => {
        expect(() => Html().create("notValid")).toThrow(
          "Must pass valid HTML Element"
        );
      });
    });
  });
});

describe("addAttribute", () => {
  test("should add alt of missing to img", () => {
    const newImg = Html()
      .create("img")
      .addAttribute("alt", "missing");
    expect(newImg.render().getAttribute("alt") == "missing");
  });
});

describe("addChild", () => {
  test("should add h1 element to div", () => {
    const newDiv = Html().create("div");
    const newH1 = Html().create("h1");
    newDiv.addChild(newH1);
    expect(newDiv.render().childElement instanceof HTMLHeadingElement);
  });
});

describe("addClass", () => {
  test("should add hidden class to div element", () => {
    const newDiv = Html().create("div");
    newDiv.addClass("hidden");
    expect(newDiv.render().classList.contains("hidden"));
  });
  test("should throw error when adding hidden class to div element that already has hidden", () => {
    const newDiv = Html().create("div");
    newDiv.addClass("hidden");
    expect(() => newDiv.addClass("hidden")).toThrow(
      "Element already contains class name"
    );
    expect(newDiv.render().classList.contains("hidden"));
  });
});

describe("text", () => {
  test("should be able to add text", () => {
    const underTest = Html().create("div");
    const expected = "test text";
    underTest.text(expected);
    const recieved = underTest.render().textContent;

    expect(recieved).toBe(expected);
  });
});

describe("text", () => {
  test("should return existing textContent", () => {
    const underTest = Html().create("div");
    underTest.render().textContent = "test text";
    expect(underTest.text()).toBe("test text");
  });
});

// -------------- DONNIE's TESTS BELOW ----------------

// describe("Html", () => {
//     describe("constructor", () => {
//       describe("should return new instance if none exists", () => {
//         test("should be an 'object'", () => {
//           expect(typeof Html().create("div")).toBe("object");
//         });
//       });
//     });

//     describe("addClass", () => {
//       test("Throws an error when class already exists", () => {
//         const underTest = Html().create("div");
//         underTest.render().classList.add("test");

//         expect(() => {
//           underTest.addClass("test");
//         }).toThrow("Class already exists on element.");
//       });

//       test("should add a class to an element", () => {
//         const underTest = Html().create("div");
//         underTest.addClass("test");

//         expect(underTest.render().classList.contains("test")).toBeTruthy();
//       });
//     });

//     describe("text", () => {
//       test("Return current value", () => {
//         const underTest = Html().create("div");
//         underTest.render().textContent = "test content";

//         expect(underTest.text()).toBe("test content");
//       });

//       test("Sets value when given a parameter", () => {
//         const underTest = Html().create("div");
//         underTest.text("test content");

//         expect(underTest.text()).toBe("test content");
//       });
//     });

//     describe("addChild", () => {
//       test("Throws error if given an improper HTML element", () => {
//         const underTest = Html().create("div");
//         const elementToAdd = Html().create("Donny");
//         console.log(elementToAdd);

//         expect(() => underTest.addChild(elementToAdd)).toThrow(
//           "Invalid HTML tag"
//         );
//       });

//       test("Adds valid HTML element", () => {
//         const underTest = Html().create("div");
//         const elementToAdd = Html().create("span");
//         underTest.addChild(elementToAdd);

//         expect(underTest.render().querySelector("span")).toStrictEqual(
//           elementToAdd.render()
//         );
//       });
//     });

//     describe("create", () => {
//       test("creates an element", () => {
//         const underTest = Html().create("div");

//         expect(underTest.render() instanceof HTMLDivElement).toBeTruthy();
//       });
//     });
//   });
