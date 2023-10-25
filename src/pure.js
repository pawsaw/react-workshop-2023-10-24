// 1. Bei gleicher Eingabe (damit sind die Parameter gemeint), stets gleiche Ausgabe (Return statement)
// 2. Die Funktion nutzt keinen äußeren Zustand, weder lesend, noch schreibend

let lastId = 0;

function createId() {
  // keine Pure Function, da 1 und 2 verletzt
  return ++lastId;
}

function createId2(_lastId) {
  const result = _lastId + 1;
  lastId = result; // Seiteneffekt
  return result;
}

function createId3(_lastId) {
  return _lastId + 1;
}

function createId4() {
  return new Date().getTime();
}
