const userDelete = localStorage.getItem("demandeDelete");
const userUpdate = localStorage.getItem("userUpdate");
const userCreate = localStorage.getItem("userCreate");
const userId = localStorage.getItem("userId");

userDelete &&
userDelete === undefined || userDelete === null ? '' :  messageAlerte(userDelete);
setTimeout(function () {
  document.querySelector(".confirmation")?.remove();
  window.localStorage.removeItem("userDelete");
}, 3000);

userUpdate &&
userUpdate === undefined || userUpdate === null ? '' :  messageAlerte(userUpdate);
setTimeout(function () {
  document.querySelector(".confirmation")?.remove();
  window.localStorage.removeItem("userUpdate");
}, 3000);

userCreate &&
userCreate === undefined || userCreate === null ? '' :  messageAlerte(userCreate);
setTimeout(function () {
  document.querySelector(".confirmation")?.remove();
  window.localStorage.removeItem("userCreate");
}, 3000);

userId &&
userId === undefined || userId === null ? '' :  putUser();
setTimeout(function () {
  window.localStorage.removeItem("userId");
}, 3000);

/* CREER UN COMPTE */
function createUser() {
  const signup = document.querySelector(".signup");
  const nom = document.querySelector(".signup #nomSignup");
  const prenom = document.querySelector(".signup #prenomSignup");
  const email = document.querySelector(".signup #emailSignup");
  const password = document.querySelector(".signup #passwordSignup");
  const telephone = document.querySelector(".signup #telephoneSignup");
  const role = document.querySelector(".signup #roleSignup");

  signup?.addEventListener("submit", signupUser);

  async function signupUser(e) {
    try {
      e.preventDefault();

      const postData = {
        nom: prenom.value + " " + nom.value,
        email: email.value,
        telephone: telephone.value,
        role: role.value,
        password: password.value,
      };

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      };

      const response = await fetch("/users/server/signup", requestOptions);
      if (response.status === 201) {
        const message = await response.json();
        window.localStorage.setItem('userCreate', message.message)
        return (window.location.href = "/users/server");
      }
      return messageAlerte(
        "Erreur inconnue lors de la création de l'utilisateur"
      );
    } catch (error) {
      console.error(error);
      messageAlerte("Une erreur est survenue. Veuillez réessayer plus tard.");
    }
  }
};
createUser();

//MISE A JOUR USER

function putUser() {
  const putUser = document.querySelector(".putUser");
  const selectUser = document.querySelector("#user");
  const nom = document.querySelector("#putNom");
  const prenom = document.querySelector("#putPrenom");
  const email = document.querySelector("#putEmail");
  const telephone = document.querySelector("#putTelephone");
  const password = document.querySelector("#putPassword");
  const role = document.querySelector("#putRole");

  let requestId;

  userId === null && localStorage.removeItem('userId');

  if(userId && userId !== undefined) {
    requestId = userId
    userFetch(requestId);
  } else {
    selectUser?.addEventListener("change", (event) => {
      requestId = event.target.value;
      userFetch(requestId);
    });
  }

  putUser?.addEventListener("submit", async (e) => {
    try {
      e.preventDefault();

      const postData = {
        nom: prenom.value + " " + nom.value,
        email: email.value,
        telephone: telephone.value,
        role: role.value,
        password: password.value,
      };

      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      };

      const response = await fetch(`/users/server/${requestId}`, requestOptions);

      if (response.status === 200) {
        const message = await response.json();
        window.localStorage.setItem('userUpdate', message.message)
        window.location.href = "/users/server";
      } else {
        const message = await response.json()
        messageAlerte(message.message)
      }
    } catch (error) {
      console.error(error);
      messageAlerte('erreur')
    } finally {
      
    }
  });

  async function userFetch(requestId) {
  
    try {
      const response = await fetch(`/users/server/data/${requestId}`);
  
      if (response.status === 200) {
        const user = await response.json(); 
  
        prenom.value = user.nom.split(' ')[0];
        nom.value = user.nom.split(' ')[1];
        email.value = user.email;
        telephone.value = user.profil_user.telephone;
        password.value = user.password;
        role.value = user.role;
      }
    } catch (error) {
      return alert(error);
    }
  };
};
putUser();

// usersSearch

function usersSearch() {
  const formSearch = document.querySelector('form#search');
  const search = document.querySelector('.search');

  formSearch?.addEventListener('submit', async (event) => {
    event.preventDefault();
    let users = [];

    try {
      const response = await fetch(`/users/server/data`);
  
      if (response.ok) {
        const data = await response.json();
        users = data.users;
      } else {
        console.error('Failed to fetch users data:', response.statusText);
        return;
      }
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      return;
    }

    const searchTerm = search.value.toLowerCase();

    const usersFilter = users.filter(user => {
      const userString = Object.values(user).map(data => {
        if (typeof data === 'object') {
          return Object.values(data).join(' ');
        }
        return data;
      }).join(' ').toLowerCase();

      return userString.includes(searchTerm);
    });

    console.log(usersFilter);
  });
}

usersSearch();

// Tableau filtrer

function tableDemandes(element) {
  const tr = document.createElement("tr");

  const td1 = document.createElement("td");
  td1.classList.add("text-center");
  td1.textContent = element.id;

  const td2 = document.createElement("td");
  td2.classList.add("text-center");
  td2.textContent = element.date_soumission.toLocaleString();

  const td3 = document.createElement("td");
  td3.classList.add("text-center");
  td3.textContent = element.nom;

  const td4 = document.createElement("td");
  td4.classList.add("text-center");
  td4.textContent = element.nom_organisation;

  const td5 = document.createElement("td");
  td5.classList.add("text-center");
  td5.textContent = element.forme_juridique;

  const td6 = document.createElement("td");
  td6.classList.add("text-center");
  td6.textContent = element.secteur_activite;

  const td7 = document.createElement("td");
  td7.classList.add("text-center");
  td7.textContent = element.province_activite;

  const td8 = document.createElement("td");
  td8.classList.add("text-center");
  td8.textContent = element.statut;

  const td9 = document.createElement("td");
  td9.classList.add("text-center");
  td9.textContent = element.confirmed;

  const td10 = document.createElement("td");
  td10.classList.add("text-center");
  const a = document.createElement("a");
  a.setAttribute("href", `/users/server/${element.id}`);
  a.classList.add(
    "font-semibold",
    "text-sky-blue",
    "hover:text-sky-blue",
    "visited:text-sky-blue"
  );
  a.textContent = "Voir";

  td10.appendChild(a);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);
  tr.appendChild(td7);
  tr.appendChild(td8);
  tr.appendChild(td9);
  tr.appendChild(td10);

  tbody.appendChild(tr);
}

//ALERTE MESSAGE

function messageAlerte(data) {
  const container = document.createElement("div");
  const p = document.createElement("p");
  const div = document.createElement("div");
  const annuler = document.createElement("button");

  p.textContent = data;
  annuler.textContent = "Ok";

  p.style.marginBottom = "6px";

  annuler.style.padding = "3px 4px";
  annuler.style.border = "2px solid white";
  annuler.classList.add("annuler");

  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.marginTop = "6px";

  container.style.padding = "16px";
  container.style.borderRadius = "12px";
  container.style.backgroundColor = "#81c784";
  container.style.color = "white";
  container.style.fontWeight = "500";
  container.style.fontSize = "18px";
  container.classList.add("confirmation");

  div.appendChild(annuler);

  container.appendChild(p);
  container.appendChild(div);

  container.style.position = "absolute";
  container.style.top = "50%";
  container.style.left = "50%";
  container.style.transform = "translate(-25%, -50%)";
  container.style.zIndex = "999";

  document.body.append(container);

  annuler && annuler.addEventListener("click", actionAnnuler);

  function actionAnnuler() {
    document.querySelector(".confirmation").remove();
    window.localStorage.removeItem("userDelete");
  }
}