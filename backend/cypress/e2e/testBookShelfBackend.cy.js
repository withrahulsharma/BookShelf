// cypress/integration/post_spec.js
describe("Backend E2E  Tests", () => {
  it("should make a POST request and compare the result", () => {
    const requestData = {
      testData: {},
      searchingData: { author: "Rahul" },
      sortingData: { sortBy: "title" },
      addBook: {
        title: "New Title book",
        author: "New Author",
        genre: "New Genre",
        publishedDate: new Date(),
        available: true,
      },
    };

    //Test Initializion
    cy.request(
      "POST",
      "http://localhost:4000/api/getbooks",
      requestData.testData
    ).then((response) => {
      expect(response.status).to.equal(200);
      //By Default 3 books added in database
      expect(response.body.length).to.equal(3);
    });

    //Test Searching Functionality
    cy.request(
      "POST",
      "http://localhost:4000/api/getbooks",
      requestData.searchingData
    ).then((response) => {
      expect(response.status).to.equal(200);
      //By Default 3 books added in database
      expect(response.body.length).to.equal(1);
    });
    //Test Sorting Functionality
    cy.request(
      "POST",
      "http://localhost:4000/api/getbooks",
      requestData.sortingData
    ).then((response) => {
      expect(response.status).to.equal(200);
      //By Default 3 books added in database
      expect(response.body.length).to.equal(3);
    });
    //Test Add Book Functionality
    cy.request(
      "POST",
      "http://localhost:4000/api/book",
      requestData.addBook
    ).then((response) => {
      expect(response.status).to.equal(200);
      //By Default 3 books added in database
      expect(response.body.message).to.equal("Book added successfully");
    });
  });
});
