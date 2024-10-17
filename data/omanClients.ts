export interface Client {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  preferredFabric?: string;
  lastOrderDate?: string;
}

export const omanClients: Client[] = [
  {
    id: "OM001",
    name: "Fatima Al-Balushi",
    phone: "+968 9123 4567",
    email: "fatima.balushi@email.com",
    address: "1234 Sultan Qaboos Street, Muscat, Oman",
    preferredFabric: "Silk",
    lastOrderDate: "2023-11-15"
  },
  {
    id: "OM002",
    name: "Aisha Al-Habsi",
    phone: "+968 9234 5678",
    email: "aisha.habsi@email.com",
    address: "567 Ruwi High Street, Muscat, Oman",
    preferredFabric: "Cotton",
    lastOrderDate: "2024-01-20"
  },
  {
    id: "OM003",
    name: "Zainab Al-Lawati",
    phone: "+968 9345 6789",
    email: "zainab.lawati@email.com",
    address: "890 Muttrah Corniche, Muscat, Oman",
    preferredFabric: "Chiffon",
    lastOrderDate: "2023-12-05"
  },
  {
    id: "OM004",
    name: "Maryam Al-Busaidi",
    phone: "+968 9456 7890",
    email: "maryam.busaidi@email.com",
    address: "1234 Qurum Beach Road, Muscat, Oman",
    preferredFabric: "Linen",
    lastOrderDate: "2024-02-10"
  },
  {
    id: "OM005",
    name: "Laila Al-Kindi",
    phone: "+968 9567 8901",
    email: "laila.kindi@email.com",
    address: "5678 Seeb Local Beach, Seeb, Oman",
    preferredFabric: "Crepe",
    lastOrderDate: "2023-10-30"
  },
  {
    id: "OM006",
    name: "Noura Al-Siyabi",
    phone: "+968 9678 9012",
    email: "noura.siyabi@email.com",
    address: "9012 Nizwa Fort Road, Nizwa, Oman",
    preferredFabric: "Georgette",
    lastOrderDate: "2024-03-01"
  },
  {
    id: "OM007",
    name: "Salma Al-Kharousi",
    phone: "+968 9789 0123",
    email: "salma.kharousi@email.com",
    address: "3456 Salalah Beach Road, Salalah, Oman",
    preferredFabric: "Velvet",
    lastOrderDate: "2023-09-22"
  },
  {
    id: "OM008",
    name: "Huda Al-Zadjali",
    phone: "+968 9890 1234",
    email: "huda.zadjali@email.com",
    address: "7890 Sohar Corniche, Sohar, Oman",
    preferredFabric: "Satin",
    lastOrderDate: "2024-01-05"
  },
  {
    id: "OM009",
    name: "Amina Al-Rawahi",
    phone: "+968 9901 2345",
    email: "amina.rawahi@email.com",
    address: "2345 Sur Beach Road, Sur, Oman",
    preferredFabric: "Taffeta",
    lastOrderDate: "2023-11-28"
  },
  {
    id: "OM010",
    name: "Reem Al-Hashmi",
    phone: "+968 9012 3456",
    email: "reem.hashmi@email.com",
    address: "6789 Ibri City Center, Ibri, Oman",
    preferredFabric: "Organza",
    lastOrderDate: "2024-02-20"
  }
];