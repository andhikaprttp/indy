// Tabel substitusi untuk enkripsi
const substitutionTable = {
  'a': 'V',
  'b': 'o',
  'c': 'R',
  'd': '8',
  'e': 's',
  'f': 'W',
  'g': 't',
  'h': '7',
  'i': 'X',
  'j': '0',
  'k': '!',
  'l': '@',
  'm': '#',
  'n': '$',
  'o': '%',
  'p': '^',
  'q': '&',
  'r': '*',
  's': '2',
  't': '6',
  'u': 'g',
  'v': 'Q',
  'w': '+',
  'x': '=',
  'y': '[',
  'z': ']',
  ' ': '|'
};

function validateLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Ganti dengan nama dan kata sandi yang sesuai
  const correctUsername = 'indy';
  const correctPassword = 'hustdiem';

  if (username === correctUsername && password === correctPassword) {
    // Mengalihkan ke halaman utama setelah berhasil login
    window.location.href = 'main.html';
  } else {
    // Menampilkan alert jika nama pengguna atau kata sandi salah
    alert('Nama pengguna atau kata sandi salah. Hayoo siapa kamu ');
  }
}

function shufflePassword() {
  const passwordInput = document.getElementById('password');
  
  if (passwordInput) {
    const password = passwordInput.value;
    const shuffledPassword = shuffleString(password);
    passwordInput.value = shuffledPassword;
  }
}

function decryptInputText() {
  const inputText = document.getElementById('inputText').value;
  const decryptedText = substituteDecrypt(inputText);
  document.getElementById('decryptedText').value = decryptedText;
}



function decryptOnType() {
  const encryptedInput = document.getElementById('encryptedInput');
  const decryptedOutput = document.getElementById('decryptedOutput');

  if (encryptedInput && decryptedOutput) {
    const encryptedText = encryptedInput.value;
    const decryptedText = substituteDecrypt(encryptedText);
    decryptedOutput.value = decryptedText;
  }
}

function shuffleString(str) {
  const arr = str.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
}

function substituteEncrypt(text) {
  return text.split('').map(char => substitutionTable[char] || char).join('');
}

function substituteDecrypt(text) {
  const reverseTable = {};
  for (const [key, value] of Object.entries(substitutionTable)) {
    reverseTable[value] = key;
  }

  return text.split('').map(char => reverseTable[char] || char).join('');
}

function encrypt() {
  const inputText = document.getElementById('inputText').value;
  const encryptedText = substituteEncrypt(inputText.toLowerCase());
  document.getElementById('outputText').value = encryptedText;
}

function decrypt() {
  const encryptedText = document.getElementById('outputText').value;
  const decryptedText = substituteDecrypt(encryptedText);
  document.getElementById('decryptedText').value = decryptedText;
    }
    
