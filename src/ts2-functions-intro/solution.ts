/* Foundation Challenges */

export const createFullName = (firstName: string, lastName: string): string => {
  const fullName = firstName + " " + lastName;

  return fullName;
};

export const findSmallestNumber = (number1: number, number2: number): number => {
  if (number1 < number2) {
    return number1;
  } else {
    return number2;
  }
};

export const multiplyNumbers = (number1: number, number2: number): number => {
  const product = number1 * number2;

  return product;
};

/* Intermediate Challenges */

export const checkIfNewHighScore = (
  score: number,
  highScore: number
): "You got a new high score!" | "So close!" | "Better luck next time!" => {
  const isNewHighScore = score > highScore;

  if (isNewHighScore) {
    return "You got a new high score!";
  } else if (score === highScore) {
    return "So close!";
  } else {
    return "Better luck next time!";
  }
};

export const celsiusToFahrenheit = (tempInCelsius: number): string => {
  const tempInFahrenheit = (tempInCelsius * 9) / 5 + 32;

  const temperatureString = tempInCelsius + " degrees celsius is " + tempInFahrenheit + " degrees fahrenheit";

  return temperatureString;
};

export const calculateLifetimeSupply = (snickersPerDay: number, age: number, maxAge: number): number => {
  const snickersPerYear = snickersPerDay * 365;
  const yearsLeft = maxAge - age;

  const lifetimeSupplyOfSnickers = snickersPerYear * yearsLeft;

  return lifetimeSupplyOfSnickers;
};

/* Advanced Challenges */

export const getGrade = (score: number): string => {
  if (score < 0 || score > 100 || typeof score !== "number") {
    return "Score unavailable";
  }

  if (score >= 80) {
    return "A";
  } else if (score >= 70) {
    return "B";
  } else if (score >= 60) {
    return "C";
  } else if (score >= 50) {
    return "D";
  } else if (score >= 40) {
    return "E";
  } else {
    return "F";
  }
};

export const calculateAreaOfCircle = (radius: number): number => {
  const PI = Math.PI;
  const area = PI * radius ** 2;
  const areaTo2DecimalPlaces = area.toFixed(2);

  return parseFloat(areaTo2DecimalPlaces);
};

/* Expert Challenges */

export const getStudentSummary = (score: number, name: string): string => {
  const letterGrade = getGrade(score);

  switch (letterGrade) {
    case "A":
      return `Congratulations ${name}! You achieved a grade of ${letterGrade}.`;
    case "B":
      return `Well done ${name}! You achieved a grade of ${letterGrade}.`;
    case "C":
      return `Nicely done ${name}! You achieved a grade of ${letterGrade}.`;
    case "D":
      return `That's okay ${name}. You achieved a grade of ${letterGrade}.`;
    case "E":
      return `Too bad ${name}. You achieved a grade of ${letterGrade}.`;
    case "F":
      return `Sorry ${name}. You achieved a grade of ${letterGrade}. There's always next year.`;
    default:
      return `My apologies ${name}, there's been an error in processing your grade.`;
  }
};
