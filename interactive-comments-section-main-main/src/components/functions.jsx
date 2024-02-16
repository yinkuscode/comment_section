function calculateBMI(height, weight) {
  if (height <= 0) {
    throw new Error("Height must be greater than zero");
  }
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  const roundedBMI = Math.round(bmi * 100) / 100;
  return roundedBMI;
}

function createPlaylist(songs) {
  // Check if the songs array is empty
  if (songs.length === 0) {
    throw new Error("Playlist must contain at least one song");
  }
  const playlistId = generateUniqueId();

  const playlist = {
    id: playlistId,
    songs: songs,
    createdAt: new Date(),
  };

  return playlist;
}
function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

// Import the QRCode library
const QRCode = require("qrcode-generator");
// Generates a QR code for a given data
function generateQRCode(data) {
  // Create a QRCode object with the provided data
  const qr = QRCode(0, "L");
  qr.addData(data);
  qr.make();

  // Get the QR code as a data URL
  const dataURL = qr.createDataURL(4, 0);
  return dataURL;
}
//To test: Generate a QR code for a URL
const qrCodeDataURL = generateQRCode("https://www.example.com");
console.log(qrCodeDataURL);

function formatDate(date) {
  const formattedDate = new Date(date).toLocaleDateString();
  return formattedDate;
}
const format = formatDate("");
function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}
const result = isPalindrome("A man, a plan, a canal, Panama!");
console.log(result); // Output: true
function counter() {
    let count = 0;
  
    return function () {
      count++;
      return count;
    };
  }
  const increment = counter();
  console.log(increment()); 
  console.log(increment());
  console.log(increment());
  
  function calculator(a, b, operation) {
    switch (operation) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        return a / b;
      default:
        return 'Invalid operation';
    }
  }
  
  const addResult = calculator(5, 3, 'add');
  const subtractResult = calculator(8, 2, 'subtract');
  const multiplyResult = calculator(4, 6, 'multiply');
  const divideResult = calculator(10, 2, 'divide');
  
  console.log(addResult);      // Output: 8
  console.log(subtractResult); // Output: 6
  console.log(multiplyResult); // Output: 24
  console.log(divideResult);   // Output: 5
  
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Example usage:
  const randomNum = generateRandomNumber(1, 100);
  console.log(randomNum); // Output: Random number between 1 and 100
  