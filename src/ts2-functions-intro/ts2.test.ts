import {
    calculateAreaOfCircle,
    calculateLifetimeSupply,
    celsiusToFahrenheit,
    checkIfNewHighScore,
    createFullName,
    findSmallestNumber,
    getGrade,
    getStudentSummary,
    multiplyNumbers,
} from "./challenge";

// REMOVE  FROM describe FUNCTION TO STOP SKIPPING TEST BLOCKS

describe("createFullName() tests", () => {
    it("Should work with basic inputs", () => {
        expect(createFullName("John", "Smith")).toBe("John Smith");
    });

    it("Should work with arbitrary inputs", () => {
        expect(createFullName("abc", "def")).toBe("abc def");
    });
});

describe("findSmallestNumber() tests", () => {
    it("Should return the smallest of two numbers", () => {
        // @ts-ignore - ONLY SO STUDENTS GET PRACTICE DEFINING PARAMETERS
        expect(findSmallestNumber(100, 200)).toBe(100);
    });

    it("Should work regardless of order", () => {
        // @ts-ignore - ONLY SO STUDENTS GET PRACTICE DEFINING PARAMETERS
        expect(findSmallestNumber(100, 200)).toBe(100);
        // @ts-ignore - ONLY SO STUDENTS GET PRACTICE DEFINING PARAMETERS
        expect(findSmallestNumber(200, 100)).toBe(100);
    });
});

describe("multiplyNumbers() tests", () => {
    it("Should multiply 3 and 6 to make 18", () => {
        // @ts-ignore - ONLY SO STUDENTS GET PRACTICE DEFINING PARAMETERS
        expect(multiplyNumbers(3, 6)).toBe(18);
    });

    it("Should multiply 12 and 6 to make 72", () => {
        // @ts-ignore - ONLY SO STUDENTS GET PRACTICE DEFINING PARAMETERS
        expect(multiplyNumbers(12, 6)).toBe(72);
    });
});

describe("checkIfNewHighScore() tests", () => {
    it("Should tell me if I beat the high score", () => {
        expect(checkIfNewHighScore(350, 325)).toBe("You got a new high score!");
    });

    it("Should tell me if the scores are the same", () => {
        expect(checkIfNewHighScore(325, 325)).toBe("So close!");
    });

    it("Should tell me if I don't beat the high score", () => {
        expect(checkIfNewHighScore(300, 325)).toBe("Better luck next time!");
    });
});

describe("celsiusToFahrenheit() tests", () => {
    it("Should convert 15 C to 59 F", () => {
        expect(celsiusToFahrenheit(15)).toBe(
            "15 degrees celsius is 59 degrees fahrenheit"
        );
    });
    it("Should convert -45 C to -49 F", () => {
        expect(celsiusToFahrenheit(-45)).toBe(
            "-45 degrees celsius is -49 degrees fahrenheit"
        );
    });
});

describe("calculateLifeTimeSupply() tests", () => {
    it("Should calculate the correct number if given 2 snickers, 25 years old and 90 years lifeExpectancy", () => {
        expect(calculateLifetimeSupply(2, 25, 90)).toBe(47450);
    });

    it("Should calculate the correct number if given 1 snickers, 20 years old and 70 years lifeExpectancy", () => {
        expect(calculateLifetimeSupply(1.5, 22, 77)).toBe(30112.5);
    });
});

describe("getGrade() tests", () => {
    it("Should return 'Score unavailable' if given an incorrect score", () => {
        expect(getGrade(-20)).toBe("Score unavailable");
        expect(getGrade(120)).toBe("Score unavailable");
    });

    it("Should return 'A' for a score over 79", () => {
        expect(getGrade(100)).toBe("A");
        expect(getGrade(80)).toBe("A");
    });

    it("Should return 'B' for a score between 79 - 70", () => {
        expect(getGrade(79)).toBe("B");
        expect(getGrade(70)).toBe("B");
    });

    it("Should return 'C' for a score between 69 - 60", () => {
        expect(getGrade(69)).toBe("C");
        expect(getGrade(60)).toBe("C");
    });

    it("Should return 'D' for a score between 59 - 50", () => {
        expect(getGrade(59)).toBe("D");
        expect(getGrade(50)).toBe("D");
    });

    it("Should return 'E' for a score between 49 - 40", () => {
        expect(getGrade(49)).toBe("E");
        expect(getGrade(40)).toBe("E");
    });

    it("Should return 'F' for a score between 39 - 0", () => {
        expect(getGrade(39)).toBe("F");
        expect(getGrade(0)).toBe("F");
    });
});

describe("calculateAreaOfCircle() tests", () => {
    it("Should have the answer to two decimal places", () => {
        expect(calculateAreaOfCircle(3)).toBeCloseTo(28.27, 2);
    });

    it("Should return the correct number for a range of radii", () => {
        expect(calculateAreaOfCircle(3)).toBe(28.27);
        expect(calculateAreaOfCircle(5)).toBe(78.54);
        expect(calculateAreaOfCircle(1)).toBe(3.14);
    });
});

describe("getStudentSummary() tests", () => {
    it("Should return 'My apologies NAME, there's been an error in processing your grade.' if a grade cannot be found", () => {
        expect(getStudentSummary(120, "John")).toBe(
            "My apologies John, there's been an error in processing your grade."
        );
        expect(getStudentSummary(-20, "John")).toBe(
            "My apologies John, there's been an error in processing your grade."
        );
    });

    it("Should return the correct summary for a score of over 79", () => {
        expect(getStudentSummary(100, "John")).toBe(
            "Congratulations John! You achieved a grade of A."
        );
        expect(getStudentSummary(80, "Jane")).toBe(
            "Congratulations Jane! You achieved a grade of A."
        );
    });

    it("Should return the correct summary for a score between 79 - 70", () => {
        expect(getStudentSummary(79, "John")).toBe(
            "Well done John! You achieved a grade of B."
        );
        expect(getStudentSummary(70, "Jane")).toBe(
            "Well done Jane! You achieved a grade of B."
        );
    });

    it("Should return the correct summary for a score between 69 - 60", () => {
        expect(getStudentSummary(69, "John")).toBe(
            "Nicely done John! You achieved a grade of C."
        );
        expect(getStudentSummary(60, "Jane")).toBe(
            "Nicely done Jane! You achieved a grade of C."
        );
    });

    it("Should return the correct summary for a score between 59 - 50", () => {
        expect(getStudentSummary(59, "John")).toBe(
            "That's okay John. You achieved a grade of D."
        );
        expect(getStudentSummary(50, "Jane")).toBe(
            "That's okay Jane. You achieved a grade of D."
        );
    });

    it("Should return the correct summary for a score between 49 - 40", () => {
        expect(getStudentSummary(49, "John")).toBe(
            "Too bad John. You achieved a grade of E."
        );
        expect(getStudentSummary(40, "Jane")).toBe(
            "Too bad Jane. You achieved a grade of E."
        );
    });

    it("Should return the correct summary for a score between 39 - 0", () => {
        expect(getStudentSummary(39, "John")).toBe(
            "Sorry John. You achieved a grade of F. There's always next year."
        );
        expect(getStudentSummary(0, "Jane")).toBe(
            "Sorry Jane. You achieved a grade of F. There's always next year."
        );
    });
});
