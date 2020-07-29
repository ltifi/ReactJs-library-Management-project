const { getAdherent, handleClick } = require("../../services/user.service");

describe("tester la fonction get adherent et ajout adherent  ", () => {
  test("get adherent par userID ", () => {
    const userId = 2;
    const expected = {
      id_user: "2",
      name: "sedki ltifi",
      userName: "sedki2020 ",
      email: "ltifisedkiinfo@gmail.com",
      password: "azerty",
      role: 0,
    };

    expect(getAdherent(userId)).toStrictEqual(expected);
  });
});

describe("test  pour la fonction addAdherent  ", () => {
  test("L'adherent est ajoutée avec succés ", () => {
    const name = "NomTest";
    const userName = "nomtest1234";
    const email = "Test@gmail.com";
    const password = "1234";
    listAdherent = handleClick(name, username, email, password);
    const expected = { name, userName, email, password };
    const adherentAdeed = listAdherent[listAdherent.length];

    expect(adherents).toStrictEqual(expected);
  });
});
