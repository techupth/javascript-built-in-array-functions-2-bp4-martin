function isPalindrome(string) {
  string = string.toLowerCase();

  let cleanedString = "";
  for (let i = 0; i < string.length; i++) {
      let char = string[i];
      
      if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9') || (char >= 'ก' && char <= '๙')) {
          cleanedString += char;
      }
  }

  let reversedString = "";
  for (let i = cleanedString.length - 1; i >= 0; i--) {
      reversedString += cleanedString[i];
  }

  return cleanedString === reversedString;
}

// ทดสอบฟังก์ชัน
console.log(isPalindrome("reviver"));  // ควรได้ผลลัพธ์เป็น true
console.log(isPalindrome("บวบ"));       // ควรได้ผลลัพธ์เป็น true
console.log(isPalindrome("deliver")); // ควรได้ผลลัพธ์เป็น false