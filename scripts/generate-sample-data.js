/**
 * Generates public/downloads/SalesData.xlsx for PL-300 lab exercises.
 * Run once: node scripts/generate-sample-data.js
 */

const XLSX = require('xlsx');
const path = require('path');
const fs   = require('fs');

// ── Reference data ─────────────────────────────────────────────
const regions      = ['North', 'South', 'East', 'West'];
const salespersons = ['Amit Shah', 'Priya Singh', 'Rahul Verma', 'Neha Gupta', 'Raj Kumar'];

const products = [
  { name: 'Laptop Pro',       category: 'Electronics',  unitPrice: 85000 },
  { name: 'Monitor HD',       category: 'Electronics',  unitPrice: 22000 },
  { name: 'Webcam',           category: 'Peripherals',  unitPrice: 3500  },
  { name: 'Headset',          category: 'Peripherals',  unitPrice: 4800  },
  { name: 'Keyboard',         category: 'Peripherals',  unitPrice: 1800  },
  { name: 'Wireless Mouse',   category: 'Peripherals',  unitPrice: 1200  },
  { name: 'USB Hub',          category: 'Peripherals',  unitPrice: 1500  },
  { name: 'Docking Station',  category: 'Electronics',  unitPrice: 12500 },
];

const discounts = [0, 0, 0, 0.05, 0.05, 0.10]; // weighted toward 0%

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function deterministicDate(index) {
  // Spread 50 orders across Jan–Dec 2024 with some clustering
  const month = Math.floor(index / 50 * 12);          // 0–11
  const day   = 1 + (index * 7 % 28);                 // 1–28, varied
  const d = new Date(2024, month, day);
  return d.toISOString().split('T')[0];                // YYYY-MM-DD
}

// ── Build SalesData rows ────────────────────────────────────────
const salesHeader = [
  'OrderID', 'Date', 'Region', 'Salesperson',
  'Product', 'Category', 'Units', 'UnitPrice',
  'Amount', 'Discount', 'NetAmount'
];

const salesRows = [];
// Use a fixed seed sequence so the file is reproducible
const regionSeq     = [0,1,2,3,0,2,1,3,0,1,3,2,0,3,1,2,1,0,3,2,0,1,2,3,0,1,3,2,0,2,1,3,0,1,2,3,1,0,2,3,0,1,3,2,1,0,2,3,0,1];
const personSeq     = [0,1,2,3,4,1,0,3,2,4,0,2,4,1,3,0,4,2,1,3,4,0,3,1,2,0,1,4,2,3,1,0,4,3,2,0,2,3,4,1,0,3,1,4,2,0,4,2,3,1];
const productSeq    = [0,3,5,1,6,2,7,4,0,5,3,1,6,2,7,4,0,3,5,2,6,1,7,4,0,3,5,1,6,2,7,4,0,5,3,6,2,7,1,4,0,3,5,1,6,2,7,4,0,3];
const unitsSeq      = [2,5,1,10,3,7,1,15,2,4,8,1,5,3,12,2,6,1,9,4,2,7,1,3,11,2,5,1,8,3,6,2,4,1,10,5,2,7,3,1,12,4,2,8,1,5,3,6,2,4];
const discountSeq   = [0,0,1,0,2,0,0,1,0,0,2,0,1,0,0,0,2,0,1,0,0,0,1,0,2,0,0,1,0,0,2,0,0,1,0,0,2,0,1,0,0,0,2,0,1,0,0,2,0,0];

for (let i = 0; i < 50; i++) {
  const orderId   = 1001 + i;
  const date      = deterministicDate(i);
  const region    = regions[regionSeq[i]];
  const person    = salespersons[personSeq[i]];
  const prod      = products[productSeq[i]];
  const units     = unitsSeq[i];
  const unitPrice = prod.unitPrice;
  const amount    = units * unitPrice;
  const discount  = discounts[discountSeq[i]];
  const netAmount = Math.round(amount * (1 - discount));

  salesRows.push([
    orderId, date, region, person,
    prod.name, prod.category, units, unitPrice,
    amount, discount, netAmount
  ]);
}

// ── Build Regions sheet ─────────────────────────────────────────
const regionsData = [
  ['RegionID', 'RegionName', 'Manager',       'Target'],
  ['R01',      'North',      'Vikram Mehta',   5000000],
  ['R02',      'South',      'Anita Rao',      4500000],
  ['R03',      'East',       'Suresh Patel',   3800000],
  ['R04',      'West',       'Kavitha Nair',   4200000],
];

// ── Create workbook ─────────────────────────────────────────────
const wb = XLSX.utils.book_new();

const wsSales   = XLSX.utils.aoa_to_sheet([salesHeader, ...salesRows]);
const wsRegions = XLSX.utils.aoa_to_sheet(regionsData);

// Column widths for SalesData sheet
wsSales['!cols'] = [
  { wch: 10 }, { wch: 12 }, { wch: 8 }, { wch: 15 },
  { wch: 18 }, { wch: 14 }, { wch: 7 }, { wch: 11 },
  { wch: 12 }, { wch: 10 }, { wch: 12 },
];

// Column widths for Regions sheet
wsRegions['!cols'] = [
  { wch: 10 }, { wch: 12 }, { wch: 16 }, { wch: 12 },
];

XLSX.utils.book_append_sheet(wb, wsSales,   'SalesData');
XLSX.utils.book_append_sheet(wb, wsRegions, 'Regions');

// ── Write file ──────────────────────────────────────────────────
const outDir  = path.join(__dirname, '..', 'public', 'downloads');
const outPath = path.join(outDir, 'SalesData.xlsx');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

XLSX.writeFile(wb, outPath);

console.log('✓ SalesData.xlsx written to', outPath);
console.log('  Sheets: SalesData (50 rows, 11 cols), Regions (4 rows, 4 cols)');
