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
  const search = document.querySelector('.search');
  let users;

  search?.addEventListener('click', tabUsers);
  
  search?.addEventListener('input', (event) => {
  
    const userString = users.map((user) => Object.values(user).map((data) => typeof data === 'object' ? Object.values(data).join(' ') : data));
console.log(userString);
    userString.filter((user) => user.search(event.target.value) !== '-1' ? user : '')
  })

  async function tabUsers() {
    try {
      const response = await fetch(`/users/server/data`);
  
      if (response.status === 200) {
        const data = await response.json();
        users = data.users;
      }
    } catch (error) {
      return alert(error);
    }
  }
}
usersSearch()

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