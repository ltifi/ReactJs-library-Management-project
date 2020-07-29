const books = [
  {
    id: "1",
    libellé: "Learn html",
    auteur: "victor hugo",
    édition: "dar ...",
    nbreExemplaires: 1500,
  },
  {
    id: "2",
    libellé: "Learn css",
    auteur: "victor hugo",
    édition: "dar ...",
    nbreExemplaires: 1500,
  },
  {
    id: "3",
    libellé: "Learn javascript",
    auteur: "victor hugo",
    édition: "dar al kitab",
    nbreExemplaires: 1500,
  },
];
export const getBook = (id) => {
  const books = JSON.parse(localStorage.getItem("books"));
  return books.filter((b) => b.id === id);
};
export const onSubmit = (e, libellé, auteur, édition, nbreExemplaires) => {
  e.preventDefault();
  var l3 = JSON.parse(localStorage.getItem("books"));
  localStorage.setItem(
    "books",
    JSON.stringify([
      ...l3,
      {
        id: toString(l3.length + 1),
        libellé,
        auteur,
        édition,
        nbreExemplaires,
      },
    ])
  );
  alert("livre ajouté");
};
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const fetchBooks = async () => {
  //await delay(1000)
  // return tasks
  return books;
};

export const fetchBooks2 = async (searchValue) => {
  await delay(0);
  // return tasks
  if (searchValue === "") {
    return books;
  } else {
    return books.filter((book) => book.libellé.includes(searchValue));
  }
};
export const fetchBooks3 = async (searchValue) => {
  // await delay(1000)
  // return tasks
  return books.filter((book) => book.auteur.includes(searchValue));
};
