let emprunts = [];
// export const enleverBook = (emprunts,id) => {
//    return emprunts.filter(book => book.id !== id)
//   //  alert("book deleted succefuly");

// }

export const getEmprunt = (id_user) => {
  const emp = JSON.parse(localStorage.getItem("listEmprunts"))
    ? JSON.parse(localStorage.getItem("listEmprunts"))
    : [];
  return emp.filter((e) => e.id_user === id_user);
};
export const empruntBook = (
  id_user,
  id,
  libellé,
  auteur,
  édition,
  nbreExemplaires
) => {
  const emp = JSON.parse(localStorage.getItem("listEmprunts"))
    ? JSON.parse(localStorage.getItem("listEmprunts"))
    : [];
  if (!JSON.parse(localStorage.getItem(id_user))) {
    localStorage.setItem(id_user, JSON.stringify([]));
  }
  if (JSON.parse(localStorage.getItem(id_user)).length < 2) {
    localStorage.setItem(
      id_user,
      JSON.stringify([
        ...JSON.parse(localStorage.getItem(id_user)),
        {
          id_user,
          id,
          libellé,
          auteur,
          édition,
          nbreExemplaires,
          dateEmprunt: new Date(),
        },
      ])
    );
    localStorage.setItem(
      "listEmprunts",
      JSON.stringify([
        ...emp,
        {
          id_user,
          id,
          libellé,
          auteur,
          édition,
          nbreExemplaires,
          dateEmprunt: new Date(),
        },
      ])
    );
    alert("book emprunted");
  } else {
    alert("You already emprunted 2 books");
  }
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const fetchEmprunt = async (searchedId) => {
  await delay(1000);
  // return tasks
  return emprunts.filter((el) => el.id_user.includes(searchedId));
};
