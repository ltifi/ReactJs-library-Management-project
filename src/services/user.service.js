const users = [
  {
    id_user: "1",
    name: "tarek bejaoui",
    userName: "tarek1995 ",
    email: "tarek.bejaoui@edu.isetcom.tn",
    password: "azerty",
    role: 0,
  },
  {
    id_user: "2",
    name: "sedki ltifi",
    userName: "sedki2020 ",
    email: "ltifisedkiinfo@gmail.com",
    password: "azerty",
    role: 0,
  },
  {
    id_user: "3",
    name: "ahmed",
    userName: "ahmed2004 ",
    email: "ahmed.bejaoui@gmail.com",
    password: "azerty",
    role: 0,
  },
  {
    id_user: "4",
    name: "ahmed",
    userName: "ahmed2004 ",
    email: "a",
    password: "b",
    role: 0,
  },
];
export const getAdherent = (id_user) => {
  const adh = JSON.parse(localStorage.getItem("ListAdherents"))
    ? JSON.parse(localStorage.getItem("ListAdherents"))
    : [];
  return adh.filter((d) => d.id_user === Number(id_user));
};
export const handleClick = (
  name,
  userName,
  email,
  password,
  validate,
  history
) => {
  if (validate()) {
    var l3 = JSON.parse(localStorage.getItem("DemandesAdh"));
    localStorage.setItem(
      "DemandesAdh",
      JSON.stringify([
        ...l3,
        { id_user: l3.length + 1, name, userName, email, password, role: 0 },
      ])
    );
    history.push("/login");
  } else {
    alert("Something is wrong!!!");
  }
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const fetchUsers = async () => {
  await delay(0);
  // return tasks
  return users;
};
