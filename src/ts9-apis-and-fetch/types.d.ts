type Interest = {
  interest: string;
  costPerAnnum: number;
  sizeOfCommunity: number;
  isDoneInGroups: boolean;
};

type Person = { id: string; name: string; age: number; height: number; interests: string[]; isEmployed: boolean };

type EmployedPerson = Person & { isEmployed: true };

type CompletePerson = Person & { description: string };

type InterestingPerson = Omit<Person, "interests"> & { interests: Interests[] };
