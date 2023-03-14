type Furniture = { name: string; price: number };

type CompleteFurniture = Furniture & { location: string };

type SpaceShip = { name: string; noOfSeats: number; engineType: string; canTravelSolarSystems: boolean };

type User = { name: string; username?: string };

type CompleteUser = { name: string; username: string };

type Customer = { fullName: string };

type CompleteCustomer = Customer & { firstName: string; lastName: string };

type Address = { line1: string; line2: string; city: string; postcode: string };

type ShippingUser = { id: number; name: string; address: Address };

type RestaurantCustomer = { id: number; name: string; allergies: string[] };

type CompleteRestaurantCustomer = RestaurantCustomer & { safeAllergens: string[] };

type FurnitureLocationData = { id: number; location: string; sku: string };

type FurnitureProductData = { id: number; name: string; price: number; isAvailable: boolean };

type FurnitureData = FurnitureLocationData & FurnitureProductData;
