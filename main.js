let btnSave = document.getElementById("btnSave");

let dropdown = document.getElementById("hourClient");
for (let hour = 14; hour <= 22; hour++) {
  let option = document.createElement("option");
  option.text = hour + ":00";
  option.value = hour + ":00";
  dropdown.add(option);
}

function saveClient() {
  let nameClient = document.getElementById("nameClient").value;
  let surnameClient = document.getElementById("surnameClient").value;
  let dateClient = document.getElementById("dateClient").value;
  let selectedHour = document.getElementById("hourClient").value;

  //// Creando un objeto para almacenar los datos del cliente
  let client = {
    nameClient: nameClient,
    surnameClient: surnameClient,
    dateClient: dateClient,
    hourClient: selectedHour,
  };

  localStorage.setItem("client", JSON.stringify(client));

  alert("¡Su turno fue registrado con éxito! Lo esperamos.");
}

btnSave.addEventListener("click", saveClient);
