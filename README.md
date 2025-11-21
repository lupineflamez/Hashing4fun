# 🔐 Password Hashing Demo Web App

## Overview
This project is a simple **frontend web application** that demonstrates the concept of password hashing with salt.  
Users can enter a password, and the app will:
- Generate a random salt
- Produce a "hashed" password (demo logic for now)
- Display the entered password, the salt, and the salted hash

⚠️ **Note:** This is a **demo implementation**. The hashing logic currently uses a placeholder function (string manipulation + Base64 encoding). In production, this should be replaced with a secure algorithm such as **bcrypt** or **SHA‑256** via a backend (e.g., Flask).


## Features
- Clean, modern UI with separate `style.css` for styling
- Password input field with validation
- Salt generation (random alphanumeric string)
- Demo hash output (Base64 encoded string)
- Modular structure (`index.html`, `style.css`, `script.js`)

---

## Project Structure

