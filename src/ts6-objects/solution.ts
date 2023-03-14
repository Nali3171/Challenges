/* Foundation Challenges */

export const getFurniturePrice = (furniture: Furniture): number => {
  const price = furniture.price;

  return price;
};

export const setFurnitureStoreLocation = (furniture: Furniture, location: string): CompleteFurniture => {
  const completeFurniture = { price: furniture.price, name: furniture.name, location: location };

  return completeFurniture;
};

export const makeSpaceship = (
  name: string,
  noOfSeats: number,
  engineType: string,
  canTravelSolarSystems: boolean
): SpaceShip => {
  const spaceship = {
    name: name,
    noOfSeats: noOfSeats,
    engineType: engineType,
    canTravelSolarSystems: canTravelSolarSystems,
  };

  return spaceship;
};

/* Intermediate Challenges */

export const setUserName = (user: User, username: string): CompleteUser => {
  const hasUserName = user.hasOwnProperty("username");

  if (!hasUserName) {
    user.username = username;
  }

  return user as CompleteUser;
};

export const splitFullNameToFirstAndLast = (customer: Customer): CompleteCustomer => {
  const fullName = customer.fullName;
  const splitNames = fullName.split(" ");
  const firstName = splitNames[0];
  const lastName = splitNames[1];

  const newCustomer = { fullName: fullName, firstName: firstName, lastName: lastName };

  return newCustomer;
};

export const accessGivenKey = (object: any, key: any) => {
  const value = object[key];

  return value;
};

/* Advanced Challenges */

export const getUserAddress = (user: ShippingUser): string => {
  const address = `${user.address.line1} ${user.address.line2} ${user.address.city} ${user.address.postcode}`;

  return address;
};

export const setSafeAllergens = (customer: RestaurantCustomer, allergenList: string[]): CompleteRestaurantCustomer => {
  const safeAllergens = allergenList.filter(allergen => {
    return !customer.allergies.includes(allergen);
  });

  const completeCustomer = { ...customer, safeAllergens };

  return completeCustomer;
};

/* Expert Challenges */

export const mergeFurniture = (
  furnitureLocationData: FurnitureLocationData,
  furnitureProductData: FurnitureProductData
) => {
  return {
    ...furnitureLocationData,
    ...furnitureProductData,
  };
};
