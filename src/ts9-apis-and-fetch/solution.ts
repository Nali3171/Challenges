/* Foundation Challenges */

export const getData = async (url: string): Promise<Person[]> => {
  const response = await fetch(url);
  const data: Person[] = await response.json();
  return data;
};

export const getNames = async (url: string): Promise<string[]> => {
  const response = await fetch(url);
  const data: Person[] = await response.json();
  return data.map(item => item.name);
};

export const getEmployedPeople = async (url: string): Promise<EmployedPerson[]> => {
  const response = await fetch(url);
  const people: Person[] = await response.json();
  return people.filter(person => person.isEmployed) as EmployedPerson[];
};

/* Intermediate Challenges */

export const findPersonWithId = async (url: string, id: string): Promise<Person | "Person not found"> => {
  const response = await fetch(url);
  const people: Person[] = await response.json();
  const foundPerson = people.find(person => person.id === id);
  return foundPerson ? foundPerson : "Person not found";
};

export const getPeopleWithMatchingInterests = async (url: string, interest: string) => {
  const response = await fetch(url);
  const people: Person[] = await response.json();
  const peopleWithMatchingInterests = people.filter(person => {
    return person.interests.includes(interest);
  });
  return peopleWithMatchingInterests.length ? peopleWithMatchingInterests : "No people with interest found";
};

/* Advanced Challenges */

export const setDescriptions = async (url: string): Promise<CompletePerson[]> => {
  const response = await fetch(url);
  const people: Person[] = await response.json();
  const peopleWithDescriptions = people.map(person => {
    const interests = person.interests.reduce((previous, current, index, arr) => {
      if (index === arr.length - 1) {
        return previous + ` and ${current}`;
      }

      if (index === 0) {
        return previous + current;
      }

      return previous + `, ${current}`;
    }, "");

    const description = `My name is ${person.name}, I am ${person.age} years old and ${
      person.height
    }cm tall. I enjoy ${interests}. ${person.isEmployed ? "I am currently employed" : "I am not currently employed"}`;

    const newPerson: CompletePerson = { ...person, description };

    return newPerson;
  });

  return peopleWithDescriptions;
};

/* Expert Challenges */

export const setInterestDetails = async (peopleUrl: string, interestsUrl: string): Promise<InterestingPerson[]> => {
  const response = await fetch(peopleUrl);
  const people: Person[] = await response.json();

  const response_1 = await fetch(interestsUrl);
  const interests: Interest[] = await response_1.json();

  const peopleWithComplexInterests: InterestingPerson[] = people.map(person => {
    const newInterests = person.interests.reduce((acc, cur) => {
      const interest = interests.find(interest => interest.interest === cur);
      if (interest) {
        acc.push(interest);
      }
      return acc;
    }, [] as Interest[]);

    const newPerson = { ...person, interests: newInterests };

    return newPerson;
  });
  return peopleWithComplexInterests;
};
