interface DummyjsonUserRs {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: Gender;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
  role: string;
}

enum Gender {
  MALE = "male",
  FEMALE = "female",
}

interface Crypto {
  coin: string;
  wallet: string;
  network: string;
}

interface Company {
  department: string;
  name: string;
  title: string;
  address: Address;
}

interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface Hair {
  color: string;
  type: string;
}

async function fetchUsers(): Promise<Array<DummyjsonUserRs>> {
  const res: Response = await fetch(`https://dummyjson.com/users`);
  if (!res.ok) {
    throw new Error(`${res.status}`);
  }

  const result: Array<DummyjsonUserRs> = await res.json();
  return result;
}

(async () => {
  fetchUsers().then(console.log);
})();
