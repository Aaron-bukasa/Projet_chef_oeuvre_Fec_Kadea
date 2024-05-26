const select = document.getElementById("etat");
const thead = document.querySelector("thead.demandes");
const button = document.querySelector("button.filter");
const dateDebut = document.querySelector("input.date_debut");
const dateFin = document.querySelector("input.date_fin");
const tbody = document.querySelector("tbody.demandes");
const demandeDelete = localStorage.getItem("demandeDelete");

demandeDelete && demandeDelete === 'Demande supprimée avec succès' && messageAlerte(demandeDelete);
setTimeout(function() {
  document.querySelector(".confirmation")?.remove();
  window.localStorage.removeItem("demandeDelete");
}, 3000);

async function filterDemandes() {
  const response = await fetch("/demandes/json");
  const demandes = await response.json();
  let selectValue;

  select.addEventListener("change", () => {
    tbody.textContent = "";

    const valueChoice = select.value.split(": ");
    const title = valueChoice[0];
    const value = valueChoice[1];

    selectValue =
      value === ""
        ? demandes
        : demandes.filter((demande) => demande[title] === value);

    selectValue.map((element) => {
      tableDemandes(element);
    });
  });

  button.addEventListener("click", () => {
    tbody.textContent = "";
    const dateFilter = selectValue || demandes;
    const valueDebut = Number(dateDebut.value.replaceAll("-", ""));
    const valueFin = Number(dateFin.value.replaceAll("-", ""));

    const demandesDateFilter = dateFilter.filter((date) => {
      const dmdDate = date.date_soumission;
      const dateNumber = Number(
        dmdDate.match(/^[0-9][0-9-]+/)[0].replaceAll("-", "")
      );

      if (valueDebut && valueFin) {
        if (dateNumber >= valueDebut && dateNumber <= valueFin) {
          return date;
        }
      } else if (valueDebut && !valueFin) {
        if (dateNumber >= valueDebut) {
          return date;
        }
      } else if (!valueDebut && valueFin) {
        if (dateNumber <= valueFin) {
          return date;
        }
      }
    });

    demandesDateFilter.filter((element) => {
      tableDemandes(element);
    });
  });
}

filterDemandes();

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
  a.setAttribute("href", `/demandes/${element.id}`);
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

function messageAlerte(data) {
  const container = document.createElement("div");
  const p = document.createElement("p");
  const div = document.createElement("div");
  const annuler = document.createElement("button");

  p.textContent = data;
  annuler.textContent = "Ok";

  p.style.marginBottom = "6px";

  annuler.style.padding = "3px 4px";
  annuler.style.border = "2px solid white"
  annuler.classList.add("annuler");

  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.marginTop = "6px";

  container.style.padding = "16px";
  container.style.borderRadius = "12px";
  container.style.backgroundColor = "#fb7185";
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
    window.localStorage.removeItem("demandeDelete");
  }
}
