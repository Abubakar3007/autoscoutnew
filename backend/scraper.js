// scraper.js
// Cardekho Used Cars Noida Deep Scraper
// Page 1 → Page 10
// Listing page → Detail page → Full details + Images
//
// Install:
// npm install puppeteer fs
//
// Run:
// node scraper.js
//
// Output:
// full-cardekho-noida-cars.json

// const puppeteer = require("puppeteer");
// const fs = require("fs");

// const TOTAL_PAGES = 10;
// const BASE_URL = "https://www.cardekho.com/used-cars+in+noida/page-";

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function autoScroll(page) {
//   await page.evaluate(async () => {
//     await new Promise((resolve) => {
//       let totalHeight = 0;
//       const distance = 300;

//       const timer = setInterval(() => {
//         window.scrollBy(0, distance);
//         totalHeight += distance;

//         // full page scroll nahi — limited scroll
//         if (totalHeight >= 3000) {
//           clearInterval(timer);
//           resolve();
//         }
//       }, 300);
//     });
//   });
// }

// async function createBrowser() {
//   const browser = await puppeteer.launch({
//     headless: true,
//     defaultViewport: null,
//     protocolTimeout: 300000,
//     args: [
//       "--no-sandbox",
//       "--disable-setuid-sandbox",
//       "--disable-dev-shm-usage",
//       "--disable-gpu"
//     ]
//   });

//   const page = await browser.newPage();

//   await page.setUserAgent(
//     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36"
//   );

//   // unnecessary resources block
//   await page.setRequestInterception(true);

//   page.on("request", (req) => {
//     const type = req.resourceType();

//     if (
//       type === "font" ||
//       type === "media"
//     ) {
//       req.abort();
//     } else {
//       req.continue();
//     }
//   });

//   return { browser, page };
// }

// async function getCarLinks(page, pageNumber) {
//   const url = `${BASE_URL}${pageNumber}`;

//   console.log(`\nOpening Listing Page: ${url}`);

//   await page.goto(url, {
//     waitUntil: "domcontentloaded",
//     timeout: 0
//   });

//   await delay(4000);
//   await autoScroll(page);

//   const links = await page.evaluate(() => {
//     const anchors = Array.from(
//       document.querySelectorAll("a")
//     );

//     const validLinks = anchors
//       .map((a) => a.href)
//       .filter(
//         (href) =>
//           href &&
//           (
//             href.includes("/used-car-details/") ||
//             href.includes("/buy-used-car-details/")
//           )
//       );

//     return [...new Set(validLinks)];
//   });

//   console.log(`Found ${links.length} car links`);

//   return links;
// }

// async function scrapeCarDetails(page, url) {
//   try {
//     console.log(`Scraping: ${url}`);

//     await page.goto(url, {
//       waitUntil: "domcontentloaded",
//       timeout: 0
//     });

//     await delay(4000);
//     await autoScroll(page);

//     const data = await page.evaluate(() => {
//       const pageText = document.body.innerText;

//       const extract = (regex) => {
//         const match = pageText.match(regex);
//         return match ? match[0] : "";
//       };

//       const getText = (selector) =>
//         document.querySelector(selector)
//           ?.innerText
//           ?.trim() || "";

//       // image collection
//       const images = Array.from(
//         document.querySelectorAll("img")
//       )
//         .map((img) => img.src)
//         .filter(
//           (src) =>
//             src &&
//             src.startsWith("http") &&
//             !src.includes("logo") &&
//             !src.includes("icon") &&
//             !src.includes("svg")
//         );

//       const uniqueImages = [...new Set(images)];

//       // top features
//       let topFeatures = [];

//       if (pageText.includes("Top Features")) {
//         const afterFeatures =
//           pageText.split("Top Features")[1] || "";

//         topFeatures = afterFeatures
//           .split("\n")
//           .map((x) => x.trim())
//           .filter(Boolean)
//           .slice(0, 8);
//       }

//       return {
//         title: getText("h1"),

//         price:
//           extract(/₹\d+(\.\d+)?\s*Lakh/i) ||
//           extract(/₹\d+(,\d+)+/),

//         original_price:
//           extract(/₹\d+(\.\d+)?\s*Lakh\s*\(Save/i),

//         kms_driven:
//           extract(/\d{1,3}(,\d{3})*\s*Kms/i),

//         fuel_type:
//           extract(/Petrol|Diesel|CNG|Electric/i),

//         transmission:
//           extract(/Manual|Automatic/i),

//         ownership:
//           extract(
//             /First Owner|Second Owner|Third Owner|Fourth Owner/i
//           ),

//         engine:
//           extract(/\d{3,4}\s*cc/i),

//         mileage:
//           extract(/\d+(\.\d+)?\s*kmpl/i),

//         power:
//           extract(/\d+(\.\d+)?\s*bhp/i),

//         seats:
//           extract(/\d+\s*Seats/i),

//         insurance:
//           extract(/Comprehensive|Third Party/i),

//         registration:
//           extract(
//             /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{4}/i
//           ),

//         rto:
//           extract(/New Delhi|Delhi|Noida|UP16|UP32/i),

//         location:
//           extract(/Sector\s+\d+,\s+Noida/i) ||
//           extract(/Noida/i),

//         seller_type:
//           pageText.includes("Direct Owner")
//             ? "Direct Owner"
//             : "Dealer",

//         top_features: topFeatures,

//         images: uniqueImages,

//         total_images: uniqueImages.length,

//         url: window.location.href
//       };
//     });

//     return data;
//   } catch (error) {
//     console.log("Scrape failed:", error.message);

//     return {
//       url,
//       error: error.message
//     };
//   }
// }

// (async () => {
//   const { browser, page } =
//     await createBrowser();

//   let allCars = [];

//   for (let pageNumber = 1; pageNumber <= TOTAL_PAGES; pageNumber++) {
//     try {
//       const links = await getCarLinks(
//         page,
//         pageNumber
//       );

//       for (const link of links) {
//         const car = await scrapeCarDetails(
//           page,
//           link
//         );

//         allCars.push(car);

//         console.log(
//           `Saved: ${car.title || "Unknown Car"}`
//         );

//         // anti-block delay
//         await delay(2500);
//       }
//     } catch (error) {
//       console.log(
//         `Page ${pageNumber} Error:`,
//         error.message
//       );
//     }
//   }

//   // remove duplicates by URL
//   const uniqueCars = Array.from(
//     new Map(
//       allCars.map((item) => [
//         item.url,
//         item
//       ])
//     ).values()
//   );

//   fs.writeFileSync(
//     "full-cardekho-noida-cars.json",
//     JSON.stringify(uniqueCars, null, 2),
//     "utf-8"
//   );

//   console.log(
//     `\nDONE → ${uniqueCars.length} cars saved`
//   );

//   await browser.close();
// })();

const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./car.json", "utf-8"));
const driveTypes = ["FWD", "RWD", "AWD", "4WD"];
const bodyTypes = [
  "Hatchback",
  "Sedan",
  "SUV",
  "Compact SUV",
  "MUV",
  "MPV",
  "Coupe",
  "Convertible",
  "Pickup Truck",
  "Crossover",
  "Wagon",
  "Van"
];

const gears = [
  "4-Speed",
  "5-Speed",
  "6-Speed",
  "7-Speed",
  "8-Speed",
  "9-Speed",
  "10-Speed",
  "CVT",
  "AMT",
  "DCT"
];

const updated = data.map((item) => {
  return {
    ...item,
    doors: Math.floor(Math.random() * 6) + 1,
    country: "India",
    drive_type: driveTypes[Math.floor(Math.random() * driveTypes.length)],
    body_shape: bodyTypes[Math.floor(Math.random() * bodyTypes.length)],
    gears: gears[Math.floor(Math.random() * gears.length)],
  };
});

fs.writeFileSync("./updated-car.json", JSON.stringify(updated, null, 2), "utf-8");
console.log("updated-car.json created successfully");