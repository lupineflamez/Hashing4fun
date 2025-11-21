function generateSalt(length = 16) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let salt = "";
  for (let i = 0; i < length; i++) {
    salt += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return salt;
}

function fakeHash(password, salt) {
  return btoa(password.split("").reverse().join("") + salt);
}

function generateHash() {
  const password = document.getElementById("password").value;
  if (!password) {
    alert("Please enter a password");
    return;
  }
  const salt = generateSalt();
  const hashed = fakeHash(password, salt);

  document.getElementById("output").innerHTML = `
    <p><strong>Entered Password:</strong> ${password}</p>
    <p><strong>Generated Salt:</strong> ${salt}</p>
    <p><strong>Salted Hash:</strong> ${hashed}</p>
  `;
}
