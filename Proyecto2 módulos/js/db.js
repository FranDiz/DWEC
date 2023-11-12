
//Generación de la base de datos IndexedDB
let db;

export function iniciarDB() {
  let request = window.indexedDB.open("MyDatabase", 1);
  request.onupgradeneeded = function(event) { 
    db = event.target.result;
    let objectStore = db.createObjectStore("formObjects", { autoIncrement : true });
  };

  request.onsuccess = function(event) {
    db = request.result;
  };

  request.onerror = function(event) {
    console.log("Error al abrir la base de datos", event);
  };
}

export function añadirDB(cliente) {
    let transaction = db.transaction(["formObjects"], "readwrite");
        let objectStore = transaction.objectStore("formObjects");
        let request = objectStore.add(cliente);
      
        request.onsuccess = function(e) {
          console.log("Datos agregados a la base de datos");
        };
      
        request.onerror = function(e) {
          console.log("Error al agregar datos", e);
        };
}