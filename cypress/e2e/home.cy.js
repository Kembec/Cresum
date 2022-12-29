describe("Check Home Page", () => {
	before(() => {
		cy.visit("/");
	});

	it("Validate titles", () => {
		cy.fixture("home_titles").then((titles) => {
			titles.forEach((t) => {
				cy.get(t.type).contains(t.title);
			});
		});
	});

	it("Try button", () => {
		cy.contains("Start now").click();
		cy.get("h2").should("exist");
	});
});
