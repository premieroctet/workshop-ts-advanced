import { NextResponse } from "next/server";

const cars = [
  {
    id: "fiat-talento-ii-2019",
    make: "FIAT",
    model: "Talento II Fourgon 1.0 2.0 Multijet 120ch Pack Pro Nav",
    year: 2019,
    transmission: "Manual",
    mileageKm: 98229,
    fuel: "Diesel",
    priceEur: 12990,
    createdAt: new Date("2025-01-01"),
  },
  {
    id: "hyundai-i20-ii-phase-2-2020",
    make: "HYUNDAI",
    model: "i20 II phase 2 1.2 75 Initia",
    year: 2020,
    transmission: "Manual",
    mileageKm: 64000,
    fuel: "Essence",
    priceEur: 8900,
    createdAt: new Date("2025-01-01"),
  },
  {
    id: "vw-transporter-v-2012",
    make: "VOLKSWAGEN",
    model: "Transporter V Fourgon 2.0 TDI 180ch L2H1 3.0T",
    year: 2012,
    transmission: "Manual",
    mileageKm: 95449,
    fuel: "Diesel",
    priceEur: 17990,
    createdAt: new Date("2025-01-01"),
  },
  {
    id: "ford-cmax-ii-phase-2-2019",
    make: "FORD",
    model: "C-MAX II phase 2 1.0 EcoBoost 125 Business Nav",
    year: 2019,
    transmission: "Manual",
    mileageKm: 143000,
    fuel: "Essence",
    priceEur: 7990,
    createdAt: new Date("2025-01-01"),
  },
  {
    id: "vw-caddy-v-fourgon-2023",
    make: "VOLKSWAGEN",
    model: "Caddy V Fourgon California 1.5 TSI 114 DSG7",
    year: 2023,
    transmission: "Auto",
    mileageKm: 14610,
    fuel: "Essence",
    priceEur: 21900,
    createdAt: new Date("2025-01-01"),
  },
  {
    id: "citroen-c3-ii-2009",
    make: "CITROEN",
    model: "C3 II 1.1 60 Generation",
    year: 2009,
    transmission: "Manual",
    mileageKm: 92000,
    fuel: "Essence",
    priceEur: 4200,
    createdAt: new Date("2025-01-01"),
  },
];

export async function GET() {
  return NextResponse.json(cars);
}
