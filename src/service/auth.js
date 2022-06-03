export function isLoggedIn() {
  const token = localStorage.getItem("token");
  return token != null;
}

export function isLoggedAdmin() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  if (role === "admin") {
    return role != null;
  }
}

export function isLoggedCondidat() {
  const token = localStorage.getItem("token");
  const role = JSON.parse(localStorage.getItem("role"));
  if (role === "candidat") {
    return token != null;
  }
}

export function isLoggedEntreprise() {
  const token = localStorage.getItem("token");
  const role = JSON.parse(localStorage.getItem("role"));
  console.log(role);
  if (role === "entreprise") {
    return role != null;
  }
}
