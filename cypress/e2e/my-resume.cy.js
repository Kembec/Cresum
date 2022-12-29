describe("Check My Resume Page", () => {
	before(() => {
		cy.visit("/c/my-resume");
	});

	it("Try update left data", () => {
		cy.get(".left > div").within(() => {
			cy.get("b[contenteditable='true']").first().clear().type("Test");
			cy.get("span[contenteditable='true']").each(($e, i) => {
				cy.wrap($e)
					.clear()
					.type(`Test ${i + 1}`);
			});
			cy.get(".image").click();
			cy.get("#change-image").within(() => {
				cy.get("input").clear({ force: true }).type("https://i.redd.it/jeuusd992wd41.jpg", { force: true });
				cy.get("button").click();
			});
		});
	});

	it("Try 'Social Networks' button", () => {
		cy.get(".social-networks > a").click();
		cy.contains("Add Social Network").should("exist");
		cy.get(".close-modal").click();
	});

	it("Try 'Save My Data' button", () => {
		cy.get("#save-my-data").click();
		cy.contains("Save my data").should("exist");
		cy.get(".close-modal").click();
	});

	it("Try right buttons", () => {
		cy.get('[title="About me"]').click();
		cy.contains("About Me").should("exist");
		cy.get('[title="Resume"]').click();
		cy.contains("Resume").should("exist");
		cy.get('[title="Experience"]').click();
		cy.contains("Experience").should("exist");
		cy.get('[title="Certifications"]').click();
		cy.contains("Certifications").should("exist");
		cy.get('[title="Projects"]').click();
		cy.contains("Projects").should("exist");
	});

	it("Try update 'About Me' data", () => {
		cy.get('[title="About me"]').click();
		cy.get(".about_me *[contenteditable='true']").each(($e, i) => {
			cy.wrap($e)
				.clear()
				.type(`Test About Me ${i + 1}`);
		});
	});

	it("Try add/delete 'About Me' data", () => {
		cy.get('[title="About me"]').click();
		cy.get("#add_about_me").click();
		cy.get(".knowledge").within(() => {
			cy.get(".box").should("have.length", 7);
			cy.get(".box > button").last().click();
			cy.get(".box").should("have.length", 6);
		});
	});

	it("Try update 'Resume' data", () => {
		cy.get('[title="Resume"]').click();
		cy.get(".resume *[contenteditable='true']").each(($e, i) => {
			cy.wrap($e)
				.clear()
				.type(`Test Resume ${i + 1}`);
		});
	});

	it("Try add/delete 'Resume' data", () => {
		cy.get('[title="Resume"]').click();
		cy.get("#add_education").click();
		cy.get(".education").within(() => {
			cy.get(".box").should("have.length", 5);
			cy.get(".box > button").last().click();
			cy.get(".box").should("have.length", 4);
		});

		cy.get("#add_workingskills").click();
		cy.get(".working-skills").within(() => {
			cy.get(".skill").should("have.length", 6);
			cy.get(".skill > .percent > button").last().click();
			cy.get(".skill").should("have.length", 5);
		});

		cy.get("#add_softskills").click();
		cy.get(".soft-skills").within(() => {
			cy.get(".content > div").should("have.length", 11);
			cy.get(".content > div > button").last().click();
			cy.get(".content > div").should("have.length", 10);
		});
	});

	it("Try update 'Experience' data", () => {
		cy.get('[title="Experience"]').click();
		cy.get(".experience *[contenteditable='true']").each(($e, i) => {
			cy.wrap($e)
				.clear()
				.type(`Test Experience ${i + 1}`);
		});
	});

	it("Try add/delete 'Experience' data", () => {
		cy.get('[title="Experience"]').click();

		cy.get("#add_experience").click();
		cy.get(".work").within(() => {
			cy.get(".tab").should("have.length", 4);
			cy.get(".tab > button").last().click();
			cy.get(".tab").should("have.length", 3);
		});

		cy.get("#add_volunteer").click();
		cy.get(".volunteer").within(() => {
			cy.get(".tab").should("have.length", 4);
			cy.get(".tab > button").last().click();
			cy.get(".tab").should("have.length", 3);
		});
	});

	it("Try update 'Certifications' data", () => {
		cy.get('[title="Certifications"]').click();
		cy.get(".certifications *[contenteditable='true']").each(($e, i) => {
			cy.wrap($e)
				.clear()
				.type(`Test Certifications ${i + 1}`);
		});
	});

	it("Try add/delete 'Certifications' data", () => {
		cy.get('[title="Certifications"]').click();

		cy.get("#add_certifications").click();
		cy.get(".certs").within(() => {
			cy.get(".tab").should("have.length", 7);
			cy.get(".tab > button").last().click();
			cy.get(".tab").should("have.length", 6);
		});
	});

	it("Try get 'Projects' data", () => {
		cy.get('[title="Projects"]').click();
		cy.get(".projects > div > .box").each(($e, i) => {
			cy.wrap($e).click();
			cy.get(".close-modal").click();
		});
	});

	it("Try add/delete 'Projects' data", () => {
		cy.get('[title="Projects"]').click();

		cy.get("#add_projects").click();
		cy.get(".prjcts").within(() => {
			cy.get(".box").should("have.length", 7);
			cy.get(".box > button").last().click();
			cy.get(".box").should("have.length", 6);
		});
	});

	it("Try change 'Projects' data", () => {
		cy.get('[title="Projects"]').click();
		cy.get(".projects > div > .box").each(($el, i) => {
			cy.wrap($el).click();
			cy.get("#modal *[contenteditable='true']").each(($e, il) => {
				cy.wrap($e)
					.clear({ force: true })
					.type(`Test Project ${i + il + 1}`, { force: true });
			});
			cy.get(".get-project .can-change").click();
			cy.get("#change-image").within(() => {
				cy.get("input").clear({ force: true }).type("https://i.redd.it/jeuusd992wd41.jpg", { force: true });
				cy.get("button").click();
			});
			cy.get(".close-modal").click();
		});
	});

	it("Try add social network", () => {
		cy.get("#add-social-network").click();
		cy.contains("Add Social Network").should("exist");
		cy.get(".select-social-networks > button").click();
		cy.get(".social-networks > li").last().click();
		cy.get("#add-social-network > .add > input").clear().type("Test Input");
		cy.get("#add-social-network > .add > button").click();

		cy.get(".social-networks > button").first().click();
		cy.get(".close-modal").click();
	});

	it("Try save my data - Link to Show", () => {
		cy.visit("/c/my-resume");
		cy.get("#save-my-data").click();
		cy.get("#link-to-show").invoke("removeAttr", "target");
		cy.get("#link-to-show").click();
		cy.contains("About Me").should("exist");
	});

	it("Try save my data - Link to Update", () => {
		cy.visit("/c/my-resume");
		cy.get("#save-my-data").click();
		cy.get("#link-to-update").invoke("removeAttr", "target");
		cy.get("#link-to-update").click();
		cy.get("#save-my-data").should("exist");
	});
});
