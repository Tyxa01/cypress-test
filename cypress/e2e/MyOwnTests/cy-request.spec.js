/// <reference types = "cypress" />

describe("Tests for GET, POST, PUT, PATCH , DELETE and status code checking ", () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  it("We use method POST for creating post on the website", () => {
    cy.request("POST", URL, {
      title: "Artour",
      body: "Post",
      userId: 15,
    }).then((res) => {
      expect(res.status).to.eq(201);
    });
  });

  it("We use method GET for getting posts from the website", () => {
    cy.request("GET", URL).then((res) => {
      expect(res.status).to.eq(200);
    });
  });

  it("We use method PUT for updating post on the website", () => {
    cy.request("PUT", "https://jsonplaceholder.typicode.com/posts/99", {
      title: "Artour",
      body: "PUT",
      userId: 4,
    }).then((res) => {
      expect(res.status).to.eq(200);
    });
  });

  it("We use method PATCH for updating post on the website", () => {
    cy.request("PATCH", "https://jsonplaceholder.typicode.com/posts/99", {
      title: "Patch Name",
    }).then((res) => {
      expect(res.status).to.eq(200);
    });
  });

  it("We use method DELETE for delete post on the website", () => {
    cy.request("DELETE", "https://jsonplaceholder.typicode.com/posts/99").then(
      (res) => {
        expect(res.status).to.eq(200);
      }
    );
  });
});
