// 1. Оголошення змінних для збереження інформації про користувача
const userName: string = "Іван Петренко";
const birthDate: string | Date = "1990-05-15"; // може бути string або Date
const phoneNumber: string | number = "+380501234567"; // може бути string або number
const email: string | null = null; // може бути null або undefined
const address: string | undefined = undefined;

// 2. Функція для виведення даних користувача
const displayUserInfo = (
  name: string,
  birth: string | Date,
  phone: string | number,
  email?: string | null
): void => {
  console.log("=== Інформація про користувача ===");
  console.log(`Ім'я: ${name}`);
  console.log(`Дата народження: ${birth}`);
  console.log(`Телефон: ${phone}`);
  console.log(`Email: ${email ?? "не вказано"}`);
  console.log("================================");
};

// Виклик функції з різними типами даних
displayUserInfo(userName, birthDate, phoneNumber, email);

// Приклад з Date об'єктом
const birthDateObj: Date = new Date("1990-05-15");
const phoneNumberNum: number = 380501234567;

displayUserInfo(userName, birthDateObj, phoneNumberNum, "ivan@example.com");

// Приклад з undefined значенням
displayUserInfo("Марія Коваленко", "1985-12-03", "+380671234567");
