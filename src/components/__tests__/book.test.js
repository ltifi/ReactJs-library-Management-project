const { getBook, onSubmit } = require("../../services/books.service");

describe("tester la fonction get book et ajout book  ", () => {
  test("get book par ID ", () => {
    const Id = 3;
    const expected = {
      id: "3",
      libellé: "Learn javascript",
      auteur: "victor hugo",
      édition: "dar al kitab",
      nbreExemplaires: 1500,
    };

    expect(getBook(Id)).toStrictEqual(expected);
  });
});

describe("test pour la fonction d'ajout d'un livre  ", () => {
  test("Le livre est ajoutée avec succés ", () => {
    libellé = "Learn react";
    auteur = "victor hugo";
    nbreExelibellémplaires = 20;
    édition = "dar al kitab";
    listBook = onSubmit(libellé, auteur, édition, nbreExelibellémplaires);
    const expected = { name, userName, email, password };
    const bookAdded = listBook[listBook.length];

    expect(bookAdded).toStrictEqual(expected);
  });
});
