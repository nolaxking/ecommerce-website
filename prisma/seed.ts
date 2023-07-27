import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  ///SEED data
  const customer = [
    {
      firstName: "Kerrin",
      lastName: "Carrivick",
      email: "kcarrivick0@smh.com.au",
      phoneNumber: "963-826-3743",
    },
    {
      firstName: "Dario",
      lastName: "Stockey",
      email: "dstockey1@linkedin.com",
      phoneNumber: "892-705-4649",
    },
    {
      firstName: "Ciel",
      lastName: "Rumming",
      email: "crumming2@cbslocal.com",
      phoneNumber: "746-552-7320",
    },
    {
      firstName: "Taddeusz",
      lastName: "Sandom",
      email: "tsandom3@eepurl.com",
      phoneNumber: "651-273-2831",
    },
    {
      firstName: "Vance",
      lastName: "Lias",
      email: "vlias4@fotki.com",
      phoneNumber: "530-786-3507",
    },
  ];
  const address = [
    {
      id: 1,
      unitNumber: "2334",
      streetNumber: "80",
      address1: "2nd Court",
      state: "California",
      city: "Los Angeles",
      zipCode: "90010",
      country: "us",
    },
    {
      id: 2,
      unitNumber: null,
      streetNumber: "0",
      address1: "Springs Crossing",
      state: "New York",
      city: "New York City",
      zipCode: "10120",
      country: "us",
    },
    {
      id: 3,
      unitNumber: "3001",
      streetNumber: "9",
      address1: "Fremont Park",
      state: "South Carolina",
      city: "Charleston",
      zipCode: "29424",
      country: "us",
    },
    {
      id: 4,
      unitNumber: null,
      streetNumber: "95",
      address1: " Eggendart Avenue",
      state: "Maryland",
      city: "Baltimore",
      zipCode: "21229",
      country: "us",
    },
    {
      id: 5,
      unitNumber: null,
      streetNumber: "64737",
      address1: " Algoma Hill",
      state: "District of Columbia",
      city: "Washington",
      zipCode: "20205",
      country: "us",
    },
  ];

  //////////////////////////////////////////////////////////
  /*await prisma.customer.createMany({
    data: [
      {
        id: 1,
        firstName: "Kerrin",
        lastName: "Carrivick",
        email: "kcarrivick0@smh.com.au",
        phoneNumber: "963-826-3743",
      },
      {
        id: 2,
        firstName: "Dario",
        lastName: "Stockey",
        email: "dstockey1@linkedin.com",
        phoneNumber: "892-705-4649",
      },
      {
        id: 3,
        firstName: "Ciel",
        lastName: "Rumming",
        email: "crumming2@cbslocal.com",
        phoneNumber: "746-552-7320",
      },
      {
        id: 4,
        firstName: "Taddeusz",
        lastName: "Sandom",
        email: "tsandom3@eepurl.com",
        phoneNumber: "651-273-2831",
      },
      {
        id: 5,
        firstName: "Vance",
        lastName: "Lias",
        email: "vlias4@fotki.com",
        phoneNumber: "530-786-3507",
      },
    ],
  });*/
  /* await prisma.address.createMany({
    data: address,
  });*/
  await prisma.productCategory.createMany({
    data: [
      { id: 1, categoryName: "phones" },
      { id: 2, categoryName: "watches" },
      { id: 3, categoryName: "accessories" },
      { id: 4, parentCategoryID: 1, categoryName: "Apple" },
      { id: 5, parentCategoryID: 4, categoryName: "Iphone14" },

      { id: 6, parentCategoryID: 4, categoryName: "Iphone14Pro" },

      { id: 7, parentCategoryID: 1, categoryName: "samsung " },
      { id: 8, parentCategoryID: 7, categoryName: "s22" },
      { id: 9, parentCategoryID: 7, categoryName: "s22Ultra " },
      { id: 10, parentCategoryID: 1, categoryName: "google" },
      { id: 11, parentCategoryID: 10, categoryName: "pixel7Pro" },
      { id: 12, parentCategoryID: 2, categoryName: "appleWatch" },

      { id: 13, parentCategoryID: 2, categoryName: "samsungWatch" },
      { id: 14, parentCategoryID: 2, categoryName: "googleWatch " },
      { id: 15, parentCategoryID: 3, categoryName: "appleAccessories " },
      { id: 16, parentCategoryID: 3, categoryName: "samsungAccessories" },
      { id: 17, parentCategoryID: 3, categoryName: "googleAccessories" },
    ],
  });
  await prisma.product.createMany({
    data: [
      {
        id: 1,
        categoryID: 5,
        name: "Iphone 14",
        description: "The latest iPhone with a 6.1-inch display.",
        imageUrl: 
          "https://drive.google.com/uc?id=1W0ADtFRYCbp1t0X_5AL9GxrF9D8MVc8d",
        
      },
      {
        id: 2,
        categoryID: 5,
        name: "Iphone 14 Max",
        description: "The latest iPhone with a 6.7-inch display.",
        imageUrl: 
          "https://drive.google.com/uc?id=1W0ADtFRYCbp1t0X_5AL9GxrF9D8MVc8d",
        
      },
      {
        id: 3,
        categoryID: 6,
        name: "Iphone 14 Pro",
        description: "The latest iPhone with a 6.1-inch display.",
        imageUrl: 
          "https://drive.google.com/uc?id=1QI7ZWx2O_UKhhD-Ev75qzwTJKQZ48S1W",
        
      },
      {
        id: 4,
        categoryID: 6,
        name: "Iphone 14 Pro Max",
        description: "The latest iPhone with a 6.7-inch display.",
        imageUrl: 
          "https://drive.google.com/uc?id=1W6oX67Xi6kDa4d5AIpkz6Kl--jbnaIjy",
        
      },

      {
        id: 5,
        categoryID: 8,
        name: "S23",
        description:
          "The Samsung S23 is a high-end smartphone with a sleek design and a 6.2-inch AMOLED display. It features a powerful processor, 5G connectivity, and a high-quality camera system.",

        imageUrl: 
          "https://drive.google.com/uc?id=1MYAC1-Oa4byYzG5MWpD5_IaLxTJVhElf",
        
      },
      {
        id: 6,
        categoryID: 8,
        name: "S23 plus",
        description:
          "The Samsung S23 Plus is a premium smartphone with a 6.7-inch Super AMOLED display, 5G connectivity, and a powerful Exynos 2200 processor. It also features a triple camera system, a 4500mAh battery, and runs on the latest Android operating system.",
        imageUrl: 
          "https://drive.google.com/uc?id=1MYAC1-Oa4byYzG5MWpD5_IaLxTJVhElf",
        
      },
      {
        id: 7,
        categoryID: 9,
        name: "S23 ultra",
        description:
          "The Samsung S23 Ultra is a high-end smartphone with a large 6.8-inch dynamic AMOLED display, 108MP camera, 5G connectivity, and a powerful Snapdragon 8 Gen 1 processor.",
        imageUrl: 
          "https://drive.google.com/uc?id=1UfUDqFrLieB5MRj01H_5Q_DBTKYINPdQ",
        
      },
      {
        id: 8,
        categoryID: 11,
        name: "Pixel 7 Pro ",
        description: "The most powerful Google Pixel yet.",
        imageUrl: 
          "https://drive.google.com/uc?id=1aEyJ7UoRxyVfNf7UWRntO55mCINOy6uJ",
        
      },
      {
        id: 9,
        categoryID: 12,
        name: "Apple Watch Ultra Alpine Loop  ",
        description: "The most rugged and capable Apple Watch ever.",
        imageUrl: 
          "https://drive.google.com/uc?id=1Dr0D4C5uAy4bRQ2Lfw71VuDlqwcp7vFj",
        
      },
      {
        id: 10,
        categoryID: 12,
        name: "Apple Watch Ultra Trail Loop  ",
        description: "The most rugged and capable Apple Watch ever.",
        imageUrl: 
          "https://drive.google.com/uc?id=1Dr0D4C5uAy4bRQ2Lfw71VuDlqwcp7vFj",
        
      },
      {
        id: 11,
        categoryID: 12,
        name: "Apple Watch Ultra Ocean Band  ",
        description: "The most rugged and capable Apple Watch ever.",
        imageUrl: 
          "https://drive.google.com/uc?id=1Dr0D4C5uAy4bRQ2Lfw71VuDlqwcp7vFj",
        
      },
      {
        id: 12,
        categoryID: 13,
        name: "Galaxy Watch5 Pro",
        description:
          "Adventurer-approved. Go the extra mile and back with durability designed for outdoor activities.",
        imageUrl: 
          "https://drive.google.com/uc?id=1uVp1u8CcoZvyYi8paEZreSWV-bXKy69Q",
        
      },
      {
        id: 13,
        categoryID: 14,
        name: "Google Pixel Watch",
        description:
          "The first smartwatch to deliver the best of Google and Fitbit.",
        imageUrl: 
          "https://drive.google.com/uc?id=1Ax6CM3AdlJO1n65_lZG2zPDdYNByy4-C",
        
      },
      {
        id: 14,
        categoryID: 15,
        name: "USB-C to Lightning Cable (1 m)",
        description:
          "Connect your iPhone, iPad, or iPod with Lightning connector to your USB-C or Thunderbolt 3 (USB-C) enabled Mac for syncing and charging, or to your USB-C enabled iPad for charging.",
        imageUrl: 
          "https://drive.google.com/uc?id=1g0-B3p99-dluPXNSDGY8ou8skWgtv6bs",
        
      },
      {
        id: 15,
        categoryID: 15,
        name: "USB-C to Lightning Cable (2 m)",
        description:
          "Connect your iPhone, iPad, or iPod with Lightning connector to your USB-C or Thunderbolt 3 (USB-C) enabled Mac for syncing and charging, or to your USB-C enabled iPad for charging.",
        imageUrl: 
          "https://drive.google.com/uc?id=1g0-B3p99-dluPXNSDGY8ou8skWgtv6bs",
        
      },
      {
        id: 16,
        categoryID: 15,
        name: "20W USB-C Power Adapter",
        description:
          "The Apple 20W USB‑C Power Adapter offers fast, efficient charging at home, in the office, or on the go.",
        imageUrl: 
          "https://drive.google.com/uc?id=1evLA8LHQnYg132neCYPwbN6FOgm0Gfx-",
        
      },
      {
        id: 17,
        categoryID: 15,
        name: "MagSafe Charger",
        description: "The MagSafe Charger makes wireless charging a snap.",
        imageUrl: 
          "https://drive.google.com/uc?id=1KsHXLawaP0AA1CFBPEUEiwW_xavA-0vr",
        
      },
      {
        id: 18,
        categoryID: 15,
        name: "Apple Watch Magnetic Fast Charger to USB-C Cable (1 m)",
        description:
          "Attaching the MagSafe Battery Pack is a snap. Its compact, intuitive design makes on-the-go charging easy",
        imageUrl: 
          "https://drive.google.com/uc?id=11W_qJmZtjMJ-vdWLMDusMLoU_35HgZ22",
        
      },
      {
        id: 19,
        categoryID: 15,
        name: "MagSafe Battery Pack",
        description: "Attaching the MagSafe Battery Pack is a snap",
        imageUrl: 
          "https://drive.google.com/uc?id=1H-10u54FWB-4r5p2MW78mnGdG8r5H-UJ",
        
      },
      {
        id: 20,
        categoryID: 16,
        name: "45W Power Adapter with Cable",
        description:
          "Charge your Samsung smartphone with this Samsung USB-C fast charging wall charger. The adapter delivers up to 3 amps for swift, stable charging, and the 45W super-fast-charge capability uses Power Delivery for efficient charging.",
        imageUrl: 
          "https://drive.google.com/uc?id=1cy2W3TqF_wqbhiAu9SEQK6-hWIUkIUvS",
        
      },
      {
        id: 21,
        categoryID: 16,
        name: "Smart watch wireless charger for Galaxy Watch5 Pro",
        description:
          "The all-new wireless watch charger has been refreshed to quickly power you up with fast USB-C charging. ",
        imageUrl: 
          "https://drive.google.com/uc?id=1GZBS6uo1qZgiCxPgqFiaPMRVS6y1XjpE",
        
      },
      {
        id: 22,
        categoryID: 17,
        name: "Google 30W USB-C Power Charger with Cable",
        description:
          "The charger delivers up to 66%1 more power to USB-C devices than the previous-generation 18W USB‑C charger.2 ",
        imageUrl: 
          "https://drive.google.com/uc?id=13j_RsG44OCvhZJikMljTF9VBkG7OIVpC",
        
      },
      {
        id: 23,
        categoryID: 17,
        name: "Google Pixel Watch USB-C® Magnetic Charging Cable",
        description:
          "The all-new wireless watch charger has been refreshed to quickly power you up with fast USB-C charging. ",
        imageUrl: 
          "https://drive.google.com/uc?id=1bvPfnqugllegAqk3FUt9YZld6HBAWgeV",
        
      },
    ],
  });
  await prisma.productItem.createMany({
    data: [
      {
        id: 1,
        productID: 1,
        stock: 50,
        imageUrl: {
          black: [
            "https://drive.google.com/uc?id=1um_K4EGmPFHvnc5PWwYgjCkhtvwNjs-i",
            "https://drive.google.com/uc?id=1KmwowtHUDVHmJ84GAST-3SwhzoG_CqFI",
            "https://drive.google.com/uc?id=160FgPa4E0BneaXeZei2_eh0XJ2-mUe5c",
          ],
          blue: [
            "https://drive.google.com/uc?id=1T24hfmuPZv7eN1piHwaZVweg0O5oFwE_",
            "https://drive.google.com/uc?id=1b36hWWj7yfAJaXbXqywZOimzkYAGfEAf",
            "https://drive.google.com/uc?id=1KyLUewkwhWg_D_x6nLcYYxa0OQrqfC60",
            "https://drive.google.com/uc?id=1KyLUewkwhWg_D_x6nLcYYxa0OQrqfC60",
          ],
          purple: [
            "https://drive.google.com/uc?id=1-qOlT52enX-81OvS3BkoEoco_3k8f1eI",
            "https://drive.google.com/uc?id=1a8AKb6bKGVbf8tTnRDkJ7agZZD31H-vO",
            "https://drive.google.com/uc?id=1Kih0a-EkhSk0W64ODYg1C8lmnlTGNG4S",
          ],

          red: [
            "https://drive.google.com/uc?id=1UopW7O4oSAFGy9QsndAyMZRAdIFtwkhV",
            "https://drive.google.com/uc?id=1gkln_bXP2SvgPi9iq_bCfN_oWbpjugkn",
            "https://drive.google.com/uc?id=1j5HiXoKkYv6yM1jVRiPURiApNH9dGAe9",
          ],
          starLight: [
            "https://drive.google.com/uc?id=1UopW7O4oSAFGy9QsndAyMZRAdIFtwkhV",
            "https://drive.google.com/uc?id=1gkln_bXP2SvgPi9iq_bCfN_oWbpjugkn",
            "https://drive.google.com/uc?id=1j5HiXoKkYv6yM1jVRiPURiApNH9dGAe9",
          ],
          yellow: [
            "https://drive.google.com/uc?id=10aBBZgzm7WGmQo8r_usG-C0mI27Vknba",
            "https://drive.google.com/uc?id=1csaTzpKs8gnXUBUPD5_-VrLMZz_Hh53l",
            "https://drive.google.com/uc?id=11yV3yya_72-N8EmlOpcXGhwo3rrkxLt6",
          ],
        },
        price: "$799",
      },
      {
        id: 2,
        productID: 1,
        stock: 50,
        imageUrl: {
          black: [
            "https://drive.google.com/uc?id=1um_K4EGmPFHvnc5PWwYgjCkhtvwNjs-i",
            "https://drive.google.com/uc?id=1KmwowtHUDVHmJ84GAST-3SwhzoG_CqFI",
            "https://drive.google.com/uc?id=160FgPa4E0BneaXeZei2_eh0XJ2-mUe5c",
          ],
          blue: [
            "https://drive.google.com/uc?id=1T24hfmuPZv7eN1piHwaZVweg0O5oFwE_",
            "https://drive.google.com/uc?id=1b36hWWj7yfAJaXbXqywZOimzkYAGfEAf",
            "https://drive.google.com/uc?id=1KyLUewkwhWg_D_x6nLcYYxa0OQrqfC60",
            "https://drive.google.com/uc?id=1KyLUewkwhWg_D_x6nLcYYxa0OQrqfC60",
          ],
          purple: [
            "https://drive.google.com/uc?id=1-qOlT52enX-81OvS3BkoEoco_3k8f1eI",
            "https://drive.google.com/uc?id=1a8AKb6bKGVbf8tTnRDkJ7agZZD31H-vO",
            "https://drive.google.com/uc?id=1Kih0a-EkhSk0W64ODYg1C8lmnlTGNG4S",
          ],

          red: [
            "https://drive.google.com/uc?id=1UopW7O4oSAFGy9QsndAyMZRAdIFtwkhV",
            "https://drive.google.com/uc?id=1gkln_bXP2SvgPi9iq_bCfN_oWbpjugkn",
            "https://drive.google.com/uc?id=1j5HiXoKkYv6yM1jVRiPURiApNH9dGAe9",
          ],
          starLight: [
            "https://drive.google.com/uc?id=1UopW7O4oSAFGy9QsndAyMZRAdIFtwkhV",
            "https://drive.google.com/uc?id=1gkln_bXP2SvgPi9iq_bCfN_oWbpjugkn",
            "https://drive.google.com/uc?id=1j5HiXoKkYv6yM1jVRiPURiApNH9dGAe9",
          ],
          yellow: [
            "https://drive.google.com/uc?id=10aBBZgzm7WGmQo8r_usG-C0mI27Vknba",
            "https://drive.google.com/uc?id=1csaTzpKs8gnXUBUPD5_-VrLMZz_Hh53l",
            "https://drive.google.com/uc?id=11yV3yya_72-N8EmlOpcXGhwo3rrkxLt6",
          ],
        },
        price: "$899",
      },
      {
        id: 3,
        productID: 1,
        stock: 50,
        imageUrl: {
          black: [
            "https://drive.google.com/uc?id=1um_K4EGmPFHvnc5PWwYgjCkhtvwNjs-i",
            "https://drive.google.com/uc?id=1KmwowtHUDVHmJ84GAST-3SwhzoG_CqFI",
            "https://drive.google.com/uc?id=160FgPa4E0BneaXeZei2_eh0XJ2-mUe5c",
          ],
          blue: [
            "https://drive.google.com/uc?id=1T24hfmuPZv7eN1piHwaZVweg0O5oFwE_",
            "https://drive.google.com/uc?id=1b36hWWj7yfAJaXbXqywZOimzkYAGfEAf",
            "https://drive.google.com/uc?id=1KyLUewkwhWg_D_x6nLcYYxa0OQrqfC60",
            "https://drive.google.com/uc?id=1KyLUewkwhWg_D_x6nLcYYxa0OQrqfC60",
          ],
          purple: [
            "https://drive.google.com/uc?id=1-qOlT52enX-81OvS3BkoEoco_3k8f1eI",
            "https://drive.google.com/uc?id=1a8AKb6bKGVbf8tTnRDkJ7agZZD31H-vO",
            "https://drive.google.com/uc?id=1Kih0a-EkhSk0W64ODYg1C8lmnlTGNG4S",
          ],

          red: [
            "https://drive.google.com/uc?id=1UopW7O4oSAFGy9QsndAyMZRAdIFtwkhV",
            "https://drive.google.com/uc?id=1gkln_bXP2SvgPi9iq_bCfN_oWbpjugkn",
            "https://drive.google.com/uc?id=1j5HiXoKkYv6yM1jVRiPURiApNH9dGAe9",
          ],
          starLight: [
            "https://drive.google.com/uc?id=1UopW7O4oSAFGy9QsndAyMZRAdIFtwkhV",
            "https://drive.google.com/uc?id=1gkln_bXP2SvgPi9iq_bCfN_oWbpjugkn",
            "https://drive.google.com/uc?id=1j5HiXoKkYv6yM1jVRiPURiApNH9dGAe9",
          ],
          yellow: [
            "https://drive.google.com/uc?id=10aBBZgzm7WGmQo8r_usG-C0mI27Vknba",
            "https://drive.google.com/uc?id=1csaTzpKs8gnXUBUPD5_-VrLMZz_Hh53l",
            "https://drive.google.com/uc?id=11yV3yya_72-N8EmlOpcXGhwo3rrkxLt6",
          ],
        },
        price: "$1099",
      },
      {
        id: 4,
        productID: 2,
        stock: 50,
        imageUrl: {
          black: [
            "https://drive.google.com/uc?id=1um_K4EGmPFHvnc5PWwYgjCkhtvwNjs-i",
            "https://drive.google.com/uc?id=1KmwowtHUDVHmJ84GAST-3SwhzoG_CqFI",
            "https://drive.google.com/uc?id=160FgPa4E0BneaXeZei2_eh0XJ2-mUe5c",
          ],
          blue: [
            "https://drive.google.com/uc?id=1T24hfmuPZv7eN1piHwaZVweg0O5oFwE_",
            "https://drive.google.com/uc?id=1b36hWWj7yfAJaXbXqywZOimzkYAGfEAf",
            "https://drive.google.com/uc?id=1KyLUewkwhWg_D_x6nLcYYxa0OQrqfC60",
            "https://drive.google.com/uc?id=1KyLUewkwhWg_D_x6nLcYYxa0OQrqfC60",
          ],
          purple: [
            "https://drive.google.com/uc?id=1-qOlT52enX-81OvS3BkoEoco_3k8f1eI",
            "https://drive.google.com/uc?id=1a8AKb6bKGVbf8tTnRDkJ7agZZD31H-vO",
            "https://drive.google.com/uc?id=1Kih0a-EkhSk0W64ODYg1C8lmnlTGNG4S",
          ],

          red: [
            "https://drive.google.com/uc?id=1UopW7O4oSAFGy9QsndAyMZRAdIFtwkhV",
            "https://drive.google.com/uc?id=1gkln_bXP2SvgPi9iq_bCfN_oWbpjugkn",
            "https://drive.google.com/uc?id=1j5HiXoKkYv6yM1jVRiPURiApNH9dGAe9",
          ],
          starLight: [
            "https://drive.google.com/uc?id=1UopW7O4oSAFGy9QsndAyMZRAdIFtwkhV",
            "https://drive.google.com/uc?id=1gkln_bXP2SvgPi9iq_bCfN_oWbpjugkn",
            "https://drive.google.com/uc?id=1j5HiXoKkYv6yM1jVRiPURiApNH9dGAe9",
          ],
          yellow: [
            "https://drive.google.com/uc?id=10aBBZgzm7WGmQo8r_usG-C0mI27Vknba",
            "https://drive.google.com/uc?id=1csaTzpKs8gnXUBUPD5_-VrLMZz_Hh53l",
            "https://drive.google.com/uc?id=11yV3yya_72-N8EmlOpcXGhwo3rrkxLt6",
          ],
        },
        price: "$899",
      },
      {
        id: 5,
        productID: 2,
        stock: 50,
        imageUrl: {
          black: [
            "https://drive.google.com/uc?id=1um_K4EGmPFHvnc5PWwYgjCkhtvwNjs-i",
            "https://drive.google.com/uc?id=1KmwowtHUDVHmJ84GAST-3SwhzoG_CqFI",
            "https://drive.google.com/uc?id=160FgPa4E0BneaXeZei2_eh0XJ2-mUe5c",
          ],
          blue: [
            "https://drive.google.com/uc?id=1T24hfmuPZv7eN1piHwaZVweg0O5oFwE_",
            "https://drive.google.com/uc?id=1b36hWWj7yfAJaXbXqywZOimzkYAGfEAf",
            "https://drive.google.com/uc?id=1KyLUewkwhWg_D_x6nLcYYxa0OQrqfC60",
            "https://drive.google.com/uc?id=1KyLUewkwhWg_D_x6nLcYYxa0OQrqfC60",
          ],
          purple: [
            "https://drive.google.com/uc?id=1-qOlT52enX-81OvS3BkoEoco_3k8f1eI",
            "https://drive.google.com/uc?id=1a8AKb6bKGVbf8tTnRDkJ7agZZD31H-vO",
            "https://drive.google.com/uc?id=1Kih0a-EkhSk0W64ODYg1C8lmnlTGNG4S",
          ],

          red: [
            "https://drive.google.com/uc?id=1UopW7O4oSAFGy9QsndAyMZRAdIFtwkhV",
            "https://drive.google.com/uc?id=1gkln_bXP2SvgPi9iq_bCfN_oWbpjugkn",
            "https://drive.google.com/uc?id=1j5HiXoKkYv6yM1jVRiPURiApNH9dGAe9",
          ],
          starLight: [
            "https://drive.google.com/uc?id=1UopW7O4oSAFGy9QsndAyMZRAdIFtwkhV",
            "https://drive.google.com/uc?id=1gkln_bXP2SvgPi9iq_bCfN_oWbpjugkn",
            "https://drive.google.com/uc?id=1j5HiXoKkYv6yM1jVRiPURiApNH9dGAe9",
          ],
          yellow: [
            "https://drive.google.com/uc?id=10aBBZgzm7WGmQo8r_usG-C0mI27Vknba",
            "https://drive.google.com/uc?id=1csaTzpKs8gnXUBUPD5_-VrLMZz_Hh53l",
            "https://drive.google.com/uc?id=11yV3yya_72-N8EmlOpcXGhwo3rrkxLt6",
          ],
        },
        price: "$999",
      },
      {
        id: 6,
        productID: 2,
        stock: 50,
        imageUrl: {
          black: [
            "https://drive.google.com/uc?id=1um_K4EGmPFHvnc5PWwYgjCkhtvwNjs-i",
            "https://drive.google.com/uc?id=1KmwowtHUDVHmJ84GAST-3SwhzoG_CqFI",
            "https://drive.google.com/uc?id=160FgPa4E0BneaXeZei2_eh0XJ2-mUe5c",
          ],
          blue: [
            "https://drive.google.com/uc?id=1T24hfmuPZv7eN1piHwaZVweg0O5oFwE_",
            "https://drive.google.com/uc?id=1b36hWWj7yfAJaXbXqywZOimzkYAGfEAf",
            "https://drive.google.com/uc?id=1KyLUewkwhWg_D_x6nLcYYxa0OQrqfC60",
            "https://drive.google.com/uc?id=1KyLUewkwhWg_D_x6nLcYYxa0OQrqfC60",
          ],
          purple: [
            "https://drive.google.com/uc?id=1-qOlT52enX-81OvS3BkoEoco_3k8f1eI",
            "https://drive.google.com/uc?id=1a8AKb6bKGVbf8tTnRDkJ7agZZD31H-vO",
            "https://drive.google.com/uc?id=1Kih0a-EkhSk0W64ODYg1C8lmnlTGNG4S",
          ],

          red: [
            "https://drive.google.com/uc?id=1UopW7O4oSAFGy9QsndAyMZRAdIFtwkhV",
            "https://drive.google.com/uc?id=1gkln_bXP2SvgPi9iq_bCfN_oWbpjugkn",
            "https://drive.google.com/uc?id=1j5HiXoKkYv6yM1jVRiPURiApNH9dGAe9",
          ],
          starLight: [
            "https://drive.google.com/uc?id=1UopW7O4oSAFGy9QsndAyMZRAdIFtwkhV",
            "https://drive.google.com/uc?id=1gkln_bXP2SvgPi9iq_bCfN_oWbpjugkn",
            "https://drive.google.com/uc?id=1j5HiXoKkYv6yM1jVRiPURiApNH9dGAe9",
          ],
          yellow: [
            "https://drive.google.com/uc?id=10aBBZgzm7WGmQo8r_usG-C0mI27Vknba",
            "https://drive.google.com/uc?id=1csaTzpKs8gnXUBUPD5_-VrLMZz_Hh53l",
            "https://drive.google.com/uc?id=11yV3yya_72-N8EmlOpcXGhwo3rrkxLt6",
          ],
        },
        price: "$1199",
      },
      {
        id: 7,
        productID: 3,
        stock: 50,
        imageUrl: {
          black: [
            "https://drive.google.com/uc?id=1WG1j4KG7pc3CgEbRjsD3q9WKFEBZajL8",
            "https://drive.google.com/uc?id=14juQl4kynTR3D-pWQCQA2VvPKADDLzor",
            "https://drive.google.com/uc?id=1pgCUvQaRPW6NBI7oVRoi0dpTGZxNLpV3",
          ],
          gold: [
            "https://drive.google.com/uc?id=1OQEpJiDiYnwK9KTnzKwWJIdhTTrdUjHM",
            "https://drive.google.com/uc?id=1xrOOB-Z7Xw8j3G42UDzibbK0Mu8zSFXk",
            "https://drive.google.com/uc?id=1_SRikr4CE2WupNlsK9QouYjpieW2kqJK",
          ],
          purple: [
            "https://drive.google.com/uc?id=1bR4yfViocxV8wictbT2YpY77cK3t78D0",
            "https://drive.google.com/uc?id=1iuxMhqodLSYJgRHbtOEDYkJ7TTRGtVAI",
            "https://drive.google.com/uc?id=1T8QYc08qdYcGcTiTIakpRgICnsrhm4uk",
          ],
          white: [
            "https://drive.google.com/uc?id=11kp2tZ-v8DZRky3CeK7z8u-0AduKNdZ_",
            "https://drive.google.com/uc?id=1zQXJRvGBCpl9VKJojO5NDcTb_V07PmSV",
            "https://drive.google.com/uc?id=1lB3d9umVrlzgHsw56DsTxeqAEy5ki70o",
          ],
        },
        price: "$999",
      },
      {
        id: 8,
        productID: 3,
        stock: 50,
        imageUrl: {
          black: [
            "https://drive.google.com/uc?id=1WG1j4KG7pc3CgEbRjsD3q9WKFEBZajL8",
            "https://drive.google.com/uc?id=14juQl4kynTR3D-pWQCQA2VvPKADDLzor",
            "https://drive.google.com/uc?id=1pgCUvQaRPW6NBI7oVRoi0dpTGZxNLpV3",
          ],
          gold: [
            "https://drive.google.com/uc?id=1OQEpJiDiYnwK9KTnzKwWJIdhTTrdUjHM",
            "https://drive.google.com/uc?id=1xrOOB-Z7Xw8j3G42UDzibbK0Mu8zSFXk",
            "https://drive.google.com/uc?id=1_SRikr4CE2WupNlsK9QouYjpieW2kqJK",
          ],
          purple: [
            "https://drive.google.com/uc?id=1bR4yfViocxV8wictbT2YpY77cK3t78D0",
            "https://drive.google.com/uc?id=1iuxMhqodLSYJgRHbtOEDYkJ7TTRGtVAI",
            "https://drive.google.com/uc?id=1T8QYc08qdYcGcTiTIakpRgICnsrhm4uk",
          ],
          white: [
            "https://drive.google.com/uc?id=11kp2tZ-v8DZRky3CeK7z8u-0AduKNdZ_",
            "https://drive.google.com/uc?id=1zQXJRvGBCpl9VKJojO5NDcTb_V07PmSV",
            "https://drive.google.com/uc?id=1lB3d9umVrlzgHsw56DsTxeqAEy5ki70o",
          ],
        },
        price: "$1099",
      },
      {
        id: 9,
        productID: 3,
        stock: 50,
        imageUrl: {
          black: [
            "https://drive.google.com/uc?id=1WG1j4KG7pc3CgEbRjsD3q9WKFEBZajL8",
            "https://drive.google.com/uc?id=14juQl4kynTR3D-pWQCQA2VvPKADDLzor",
            "https://drive.google.com/uc?id=1pgCUvQaRPW6NBI7oVRoi0dpTGZxNLpV3",
          ],
          gold: [
            "https://drive.google.com/uc?id=1OQEpJiDiYnwK9KTnzKwWJIdhTTrdUjHM",
            "https://drive.google.com/uc?id=1xrOOB-Z7Xw8j3G42UDzibbK0Mu8zSFXk",
            "https://drive.google.com/uc?id=1_SRikr4CE2WupNlsK9QouYjpieW2kqJK",
          ],
          purple: [
            "https://drive.google.com/uc?id=1bR4yfViocxV8wictbT2YpY77cK3t78D0",
            "https://drive.google.com/uc?id=1iuxMhqodLSYJgRHbtOEDYkJ7TTRGtVAI",
            "https://drive.google.com/uc?id=1T8QYc08qdYcGcTiTIakpRgICnsrhm4uk",
          ],
          white: [
            "https://drive.google.com/uc?id=11kp2tZ-v8DZRky3CeK7z8u-0AduKNdZ_",
            "https://drive.google.com/uc?id=1zQXJRvGBCpl9VKJojO5NDcTb_V07PmSV",
            "https://drive.google.com/uc?id=1lB3d9umVrlzgHsw56DsTxeqAEy5ki70o",
          ],
        },
        price: "$1299",
      },
      {
        id: 10,
        productID: 3,
        stock: 50,
        imageUrl: {
          black: [
            "https://drive.google.com/uc?id=1WG1j4KG7pc3CgEbRjsD3q9WKFEBZajL8",
            "https://drive.google.com/uc?id=14juQl4kynTR3D-pWQCQA2VvPKADDLzor",
            "https://drive.google.com/uc?id=1pgCUvQaRPW6NBI7oVRoi0dpTGZxNLpV3",
          ],
          gold: [
            "https://drive.google.com/uc?id=1OQEpJiDiYnwK9KTnzKwWJIdhTTrdUjHM",
            "https://drive.google.com/uc?id=1xrOOB-Z7Xw8j3G42UDzibbK0Mu8zSFXk",
            "https://drive.google.com/uc?id=1_SRikr4CE2WupNlsK9QouYjpieW2kqJK",
          ],
          purple: [
            "https://drive.google.com/uc?id=1bR4yfViocxV8wictbT2YpY77cK3t78D0",
            "https://drive.google.com/uc?id=1iuxMhqodLSYJgRHbtOEDYkJ7TTRGtVAI",
            "https://drive.google.com/uc?id=1T8QYc08qdYcGcTiTIakpRgICnsrhm4uk",
          ],
          white: [
            "https://drive.google.com/uc?id=11kp2tZ-v8DZRky3CeK7z8u-0AduKNdZ_",
            "https://drive.google.com/uc?id=1zQXJRvGBCpl9VKJojO5NDcTb_V07PmSV",
            "https://drive.google.com/uc?id=1lB3d9umVrlzgHsw56DsTxeqAEy5ki70o",
          ],
        },
        price: "$1499",
      },
      {
        id: 11,
        productID: 4,
        stock: 50,
        imageUrl: {
          black: [
            "https://drive.google.com/uc?id=1WG1j4KG7pc3CgEbRjsD3q9WKFEBZajL8",
            "https://drive.google.com/uc?id=14juQl4kynTR3D-pWQCQA2VvPKADDLzor",
            "https://drive.google.com/uc?id=1pgCUvQaRPW6NBI7oVRoi0dpTGZxNLpV3",
          ],
          gold: [
            "https://drive.google.com/uc?id=1OQEpJiDiYnwK9KTnzKwWJIdhTTrdUjHM",
            "https://drive.google.com/uc?id=1xrOOB-Z7Xw8j3G42UDzibbK0Mu8zSFXk",
            "https://drive.google.com/uc?id=1_SRikr4CE2WupNlsK9QouYjpieW2kqJK",
          ],
          purple: [
            "https://drive.google.com/uc?id=1bR4yfViocxV8wictbT2YpY77cK3t78D0",
            "https://drive.google.com/uc?id=1iuxMhqodLSYJgRHbtOEDYkJ7TTRGtVAI",
            "https://drive.google.com/uc?id=1T8QYc08qdYcGcTiTIakpRgICnsrhm4uk",
          ],
          white: [
            "https://drive.google.com/uc?id=11kp2tZ-v8DZRky3CeK7z8u-0AduKNdZ_",
            "https://drive.google.com/uc?id=1zQXJRvGBCpl9VKJojO5NDcTb_V07PmSV",
            "https://drive.google.com/uc?id=1lB3d9umVrlzgHsw56DsTxeqAEy5ki70o",
          ],
        },
        price: "$1099",
      },
      {
        id: 12,
        productID: 4,
        stock: 50,
        imageUrl: {
          black: [
            "https://drive.google.com/uc?id=1WG1j4KG7pc3CgEbRjsD3q9WKFEBZajL8",
            "https://drive.google.com/uc?id=14juQl4kynTR3D-pWQCQA2VvPKADDLzor",
            "https://drive.google.com/uc?id=1pgCUvQaRPW6NBI7oVRoi0dpTGZxNLpV3",
          ],
          gold: [
            "https://drive.google.com/uc?id=1OQEpJiDiYnwK9KTnzKwWJIdhTTrdUjHM",
            "https://drive.google.com/uc?id=1xrOOB-Z7Xw8j3G42UDzibbK0Mu8zSFXk",
            "https://drive.google.com/uc?id=1_SRikr4CE2WupNlsK9QouYjpieW2kqJK",
          ],
          purple: [
            "https://drive.google.com/uc?id=1bR4yfViocxV8wictbT2YpY77cK3t78D0",
            "https://drive.google.com/uc?id=1iuxMhqodLSYJgRHbtOEDYkJ7TTRGtVAI",
            "https://drive.google.com/uc?id=1T8QYc08qdYcGcTiTIakpRgICnsrhm4uk",
          ],
          white: [
            "https://drive.google.com/uc?id=11kp2tZ-v8DZRky3CeK7z8u-0AduKNdZ_",
            "https://drive.google.com/uc?id=1zQXJRvGBCpl9VKJojO5NDcTb_V07PmSV",
            "https://drive.google.com/uc?id=1lB3d9umVrlzgHsw56DsTxeqAEy5ki70o",
          ],
        },
        price: "$1199",
      },
      {
        id: 13,
        productID: 4,
        stock: 50,
        imageUrl: {
          black: [
            "https://drive.google.com/uc?id=1WG1j4KG7pc3CgEbRjsD3q9WKFEBZajL8",
            "https://drive.google.com/uc?id=14juQl4kynTR3D-pWQCQA2VvPKADDLzor",
            "https://drive.google.com/uc?id=1pgCUvQaRPW6NBI7oVRoi0dpTGZxNLpV3",
          ],
          gold: [
            "https://drive.google.com/uc?id=1OQEpJiDiYnwK9KTnzKwWJIdhTTrdUjHM",
            "https://drive.google.com/uc?id=1xrOOB-Z7Xw8j3G42UDzibbK0Mu8zSFXk",
            "https://drive.google.com/uc?id=1_SRikr4CE2WupNlsK9QouYjpieW2kqJK",
          ],
          purple: [
            "https://drive.google.com/uc?id=1bR4yfViocxV8wictbT2YpY77cK3t78D0",
            "https://drive.google.com/uc?id=1iuxMhqodLSYJgRHbtOEDYkJ7TTRGtVAI",
            "https://drive.google.com/uc?id=1T8QYc08qdYcGcTiTIakpRgICnsrhm4uk",
          ],
          white: [
            "https://drive.google.com/uc?id=11kp2tZ-v8DZRky3CeK7z8u-0AduKNdZ_",
            "https://drive.google.com/uc?id=1zQXJRvGBCpl9VKJojO5NDcTb_V07PmSV",
            "https://drive.google.com/uc?id=1lB3d9umVrlzgHsw56DsTxeqAEy5ki70o",
          ],
        },
        price: "$1399",
      },
      {
        id: 14,
        productID: 4,
        stock: 50,
        imageUrl: {
          black: [
            "https://drive.google.com/uc?id=1WG1j4KG7pc3CgEbRjsD3q9WKFEBZajL8",
            "https://drive.google.com/uc?id=14juQl4kynTR3D-pWQCQA2VvPKADDLzor",
            "https://drive.google.com/uc?id=1pgCUvQaRPW6NBI7oVRoi0dpTGZxNLpV3",
          ],
          gold: [
            "https://drive.google.com/uc?id=1OQEpJiDiYnwK9KTnzKwWJIdhTTrdUjHM",
            "https://drive.google.com/uc?id=1xrOOB-Z7Xw8j3G42UDzibbK0Mu8zSFXk",
            "https://drive.google.com/uc?id=1_SRikr4CE2WupNlsK9QouYjpieW2kqJK",
          ],
          purple: [
            "https://drive.google.com/uc?id=1bR4yfViocxV8wictbT2YpY77cK3t78D0",
            "https://drive.google.com/uc?id=1iuxMhqodLSYJgRHbtOEDYkJ7TTRGtVAI",
            "https://drive.google.com/uc?id=1T8QYc08qdYcGcTiTIakpRgICnsrhm4uk",
          ],
          white: [
            "https://drive.google.com/uc?id=11kp2tZ-v8DZRky3CeK7z8u-0AduKNdZ_",
            "https://drive.google.com/uc?id=1zQXJRvGBCpl9VKJojO5NDcTb_V07PmSV",
            "https://drive.google.com/uc?id=1lB3d9umVrlzgHsw56DsTxeqAEy5ki70o",
          ],
        },
        price: "$1599",
      },
      {
        id: 15,
        productID: 5,
        stock: 45,
        imageUrl: {
          green: [
            "https://drive.google.com/uc?id=1s2Ap7X4hm1d29vNNXvGr6NMFwAWmzdAd",
          ],
          PhantomBlack: [
            "https://drive.google.com/uc?id=/1lUnugvsyUCeN5Aso5gkScOJDriHAsLV7",
          ],
          lavender: [
            "https://drive.google.com/uc?id=10m0OsR48MR8bv1mD0SZL4o3jQnK67AfO",
          ],
          white: [
            "https://drive.google.com/uc?id=1V1sJJCOTqfsmMRhMnsdlF6xkjTUjZSsm",
          ],
        },
        price: "$799.99",
      },
      {
        id: 16,
        productID: 5,
        stock: 45,
        imageUrl: {
          green: [
            "https://drive.google.com/uc?id=1s2Ap7X4hm1d29vNNXvGr6NMFwAWmzdAd",
          ],
          PhantomBlack: [
            "https://drive.google.com/uc?id=/1lUnugvsyUCeN5Aso5gkScOJDriHAsLV7",
          ],
          lavender: [
            "https://drive.google.com/uc?id=10m0OsR48MR8bv1mD0SZL4o3jQnK67AfO",
          ],
          white: [
            "https://drive.google.com/uc?id=1V1sJJCOTqfsmMRhMnsdlF6xkjTUjZSsm",
          ],
        },
        price: "$859.99",
      },
      {
        id: 17,
        productID: 6,
        stock: 45,
        imageUrl: {
          green: [
            "https://drive.google.com/uc?id=1s2Ap7X4hm1d29vNNXvGr6NMFwAWmzdAd",
          ],
          PhantomBlack: [
            "https://drive.google.com/uc?id=/1lUnugvsyUCeN5Aso5gkScOJDriHAsLV7",
          ],
          lavender: [
            "https://drive.google.com/uc?id=10m0OsR48MR8bv1mD0SZL4o3jQnK67AfO",
          ],
          white: [
            "https://drive.google.com/uc?id=1V1sJJCOTqfsmMRhMnsdlF6xkjTUjZSsm",
          ],
        },
        price: "$999.99",
      },
      {
        id: 18,
        productID: 6,
        stock: 45,
        imageUrl: {
          green: [
            "https://drive.google.com/uc?id=1s2Ap7X4hm1d29vNNXvGr6NMFwAWmzdAd",
          ],
          PhantomBlack: [
            "https://drive.google.com/uc?id=/1lUnugvsyUCeN5Aso5gkScOJDriHAsLV7",
          ],
          lavender: [
            "https://drive.google.com/uc?id=10m0OsR48MR8bv1mD0SZL4o3jQnK67AfO",
          ],
          white: [
            "https://drive.google.com/uc?id=1V1sJJCOTqfsmMRhMnsdlF6xkjTUjZSsm",
          ],
        },
        price: "$1119.99",
      },
      {
        id: 19,
        productID: 7,
        stock: 45,
        imageUrl: {
          PhantomBlack: [
            "https://drive.google.com/uc?id=1GZHYQ78Gsp8BCSRU4abrPXJQkawtqOXe",
          ],
          green: [
            "https://drive.google.com/uc?id=11GIcA4BJxz7o7W8UBAIKOOx4ghUKNgA_",
          ],
          PhantomWhite: [
            "https://drive.google.com/uc?id=1t6rABDrpeaQTOl30VeSSMBSg_cklIBIY",
          ],
          SkyBlue: [
            "https://drive.google.com/uc?id=1p_MpVVa0xIi5_MKvvNeEbOUgOMgaVjIT",
          ],
          Burgundy: [
            "https://drive.google.com/uc?id=17lmTrL1uvMguCzuuDpoiuBfkOf8v4-0c",
          ],
        },
        price: "$1119.99",
      },
      {
        id: 20,
        productID: 7,
        stock: 45,
        imageUrl: {
          PhantomBlack: [
            "https://drive.google.com/uc?id=1GZHYQ78Gsp8BCSRU4abrPXJQkawtqOXe",
          ],
          green: [
            "https://drive.google.com/uc?id=11GIcA4BJxz7o7W8UBAIKOOx4ghUKNgA_",
          ],
          PhantomWhite: [
            "https://drive.google.com/uc?id=1t6rABDrpeaQTOl30VeSSMBSg_cklIBIY",
          ],
          SkyBlue: [
            "https://drive.google.com/uc?id=1p_MpVVa0xIi5_MKvvNeEbOUgOMgaVjIT",
          ],
          Burgundy: [
            "https://drive.google.com/uc?id=17lmTrL1uvMguCzuuDpoiuBfkOf8v4-0c",
          ],
        },
        price: "$1379.99",
      },
      {
        id: 21,
        productID: 7,
        stock: 45,
        imageUrl: {
          PhantomBlack: [
            "https://drive.google.com/uc?id=1GZHYQ78Gsp8BCSRU4abrPXJQkawtqOXe",
          ],
          green: [
            "https://drive.google.com/uc?id=11GIcA4BJxz7o7W8UBAIKOOx4ghUKNgA_",
          ],
          PhantomWhite: [
            "https://drive.google.com/uc?id=1t6rABDrpeaQTOl30VeSSMBSg_cklIBIY",
          ],
          SkyBlue: [
            "https://drive.google.com/uc?id=1p_MpVVa0xIi5_MKvvNeEbOUgOMgaVjIT",
          ],
          Burgundy: [
            "https://drive.google.com/uc?id=17lmTrL1uvMguCzuuDpoiuBfkOf8v4-0c",
          ],
        },
        price: "$1619.99",
      },
      {
        id: 22,
        productID: 8,
        stock: 45,
        imageUrl: {
          hazel: [
            "https://drive.google.com/uc?id=1LFrIHkofaCK5E7Yw1KwWQhyLeLGzuPIv",
            "https://drive.google.com/uc?id=1mGvGF7o9ktUvfc7DDLg78T14V80irTsO",
            "https://drive.google.com/uc?id=/1ivKbwLraB_9RI4wt6cCkQ3SXaheuqmIB",
            "https://drive.google.com/uc?id=1nWkUZdybZ8q1cBkqicmlc4nbzCVmOlPy",
            "",
          ],
          show: [
            "https://drive.google.com/uc?id=110N9ZbhuscLdoBQzW4bDddaoAkA1zAxa",
            "https://drive.google.com/uc?id=1413jSy_5GAhOJEKDAXvljPI2VMcE3q1L",
            "https://drive.google.com/uc?id=1dltNokORXB6iKlpaerAzo2GQow7A10hz",
          ],
          Obsidian: [
            "https://drive.google.com/uc?id=15C2sgTyo4m6JplZjadKdLfYkpQP4tyCg",
            "https://drive.google.com/uc?id=1CYdpNW4UGID3tBlaY5zJ5FUKoJkbjhzP",
            "https://drive.google.com/uc?id=13bpcs2i3eQBOCIHQhGUlZ6Hq6RRmPIbo",
          ],
        },
        price: "$1199.99",
      },
      {
        id: 23,
        productID: 8,
        stock: 45,
        imageUrl: {
          hazel: [
            "https://drive.google.com/uc?id=1LFrIHkofaCK5E7Yw1KwWQhyLeLGzuPIv",
            "https://drive.google.com/uc?id=1mGvGF7o9ktUvfc7DDLg78T14V80irTsO",
            "https://drive.google.com/uc?id=/1ivKbwLraB_9RI4wt6cCkQ3SXaheuqmIB",
            "https://drive.google.com/uc?id=1nWkUZdybZ8q1cBkqicmlc4nbzCVmOlPy",
            "",
          ],
          show: [
            "https://drive.google.com/uc?id=110N9ZbhuscLdoBQzW4bDddaoAkA1zAxa",
            "https://drive.google.com/uc?id=1413jSy_5GAhOJEKDAXvljPI2VMcE3q1L",
            "https://drive.google.com/uc?id=1dltNokORXB6iKlpaerAzo2GQow7A10hz",
          ],
          Obsidian: [
            "https://drive.google.com/uc?id=15C2sgTyo4m6JplZjadKdLfYkpQP4tyCg",
            "https://drive.google.com/uc?id=1CYdpNW4UGID3tBlaY5zJ5FUKoJkbjhzP",
            "https://drive.google.com/uc?id=13bpcs2i3eQBOCIHQhGUlZ6Hq6RRmPIbo",
          ],
        },
        price: "$1379.99",
      },
      {
        id: 24,
        productID: 8,
        stock: 45,
        imageUrl: {
          hazel: [
            "https://drive.google.com/uc?id=1LFrIHkofaCK5E7Yw1KwWQhyLeLGzuPIv",
            "https://drive.google.com/uc?id=1mGvGF7o9ktUvfc7DDLg78T14V80irTsO",
            "https://drive.google.com/uc?id=/1ivKbwLraB_9RI4wt6cCkQ3SXaheuqmIB",
            "https://drive.google.com/uc?id=1nWkUZdybZ8q1cBkqicmlc4nbzCVmOlPy",
            "",
          ],
          show: [
            "https://drive.google.com/uc?id=110N9ZbhuscLdoBQzW4bDddaoAkA1zAxa",
            "https://drive.google.com/uc?id=1413jSy_5GAhOJEKDAXvljPI2VMcE3q1L",
            "https://drive.google.com/uc?id=1dltNokORXB6iKlpaerAzo2GQow7A10hz",
          ],
          Obsidian: [
            "https://drive.google.com/uc?id=15C2sgTyo4m6JplZjadKdLfYkpQP4tyCg",
            "https://drive.google.com/uc?id=1CYdpNW4UGID3tBlaY5zJ5FUKoJkbjhzP",
            "https://drive.google.com/uc?id=13bpcs2i3eQBOCIHQhGUlZ6Hq6RRmPIbo",
          ],
        },
        price: "$1619.99",
      },
      {
        id: 25,
        productID: 9,
        stock: 100,
        imageUrl: {
          green: [
            "https://drive.google.com/uc?id=1NDXySSdGXPl8Z0ld9wUx1tmaZb45dZkI",
            "https://drive.google.com/uc?id=15d7i3VDbZHMRWeWxGEhHwjT9xkWrw3_6",
            "https://drive.google.com/uc?id=1gYP8HOX_AVTvInH7EanHX9ewj_vyXDqF",
          ],
          orange: [
            "https://drive.google.com/uc?id=12SXC0vzFk6BjMmIOfmoP4o4NK_dFoAFh",
            "https://drive.google.com/uc?id=1ghEvBen69rShOJrYh7yzNQ_KA2xXfg14",
            "https://drive.google.com/uc?id=1U21TIl4arS50niyptNZPzW-4T3ubVrdM",
          ],
          starLight: [
            "https://drive.google.com/uc?id=162w5sL1dE2h80y32jRp1l9VXtNKYshtR",
            "https://drive.google.com/uc?id=12XkEqdBmGamcQH0dsELT3pV4WiMq6bQw",
            "https://drive.google.com/uc?id=1so8q-Y8g7Y7XWaa4iH2XGsA6JKX-ZJws",
          ],
        },
        price: "$799",
      },
      {
        id: 26,
        productID: 10,
        stock: 100,
        imageUrl: {
          blue: [
            "https://drive.google.com/uc?id=/1yUgx6Bw2brvVHYwcbUNYkXeBqf7wxUAb",
            "https://drive.google.com/uc?id=1TtElo8yl3PDalf9zAQSGiDPRlog50HZH",
            "https://drive.google.com/uc?id=1wBtgDmceHvcf1eUlLzK9LSU5dGI-2f3o",
          ],
          black: [
            "https://drive.google.com/uc?id=1Le-ORBTZfk3N2TV5eU4_oi-tQBR-D5PB",
            "https://drive.google.com/uc?id=1XwDzQlpMFKpf2HLJF8NMZxURsKsmvD5h",
            "https://drive.google.com/uc?id=1XwDzQlpMFKpf2HLJF8NMZxURsKsmvD5h",
          ],
          yellow: [
            "https://drive.google.com/uc?id=1yUgx6Bw2brvVHYwcbUNYkXeBqf7wxUAb",
            "https://drive.google.com/uc?id=1TtElo8yl3PDalf9zAQSGiDPRlog50HZH",
            "https://drive.google.com/uc?id=1wBtgDmceHvcf1eUlLzK9LSU5dGI-2f3o",
          ],
        },
        price: "$799",
      },
      {
        id: 27,
        productID: 11,
        stock: 100,
        imageUrl: {
          midnight: [
            "https://drive.google.com/uc?id=1ti7LuqI39THYUZB3vRcus-79wGcBnPZQ",
            "https://drive.google.com/uc?id=1L3UMDq_vWmTCUdoE1ALVdX5gPePAnjXs",
            "https://drive.google.com/uc?id=1sZzMOschJQiDAvj4pyr_wPyLUSLUyxXq",
          ],
          white: [
            "https://drive.google.com/uc?id=1lFP9fs4naO2iWxlM3dv42x_CS-Povwy8",
            "https://drive.google.com/uc?id=14bDH3aCsSHpmfjjM-hPKPkyyAV766xLj",
            "https://drive.google.com/uc?id=16U8uFKDs3J8VycWyIpq6GKFuxD65-Ld0",
          ],
          yellow: [
            "https://drive.google.com/uc?id=1pEUPKDpitfUFbMSa3kdivIc6u0pipg4G",
            "https://drive.google.com/uc?id=19PBax9Y2sQEtVfDIouaP5O1wTM86hQiY",
            "https://drive.google.com/uc?id=1td8Ps3li6W3dokav5GFPJRBzlkb4f_n7",
          ],
        },
        price: "$799",
      },
      {
        id: 28,
        productID: 12,
        stock: 100,
        imageUrl: {
          blackTitanium: [
            "https://drive.google.com/uc?id=1eqI4oH_Ss06MvqGVmMoRfIsKro4kgDxm",
            "https://drive.google.com/uc?id=17MOZZrfKrIY4wBGDQvMfCXoJt7cEXzQN",
            "https://drive.google.com/uc?id=1kh7VAukenngp-EczqLLfDdxrQsbdPlVz",
            "https://drive.google.com/uc?id=1IXSVAYzTCh-7jKibNJkC0d_Hq7kp-SmA",
            "https://drive.google.com/uc?id=1yvXob76qf_D6k1RsFKqy7g7VrcEYzr6Z",
          ],
          grayTitanium: [
            "https://drive.google.com/uc?id=1VjocVhxpxUWrqsfyqNPvZljkYM281FZy",
            "https://drive.google.com/uc?id=1_8lgqlskvYtMm8iDkyP0_mRiNgUfSMdf",
            "https://drive.google.com/uc?id=1MfKuu1tEqZVT-noZI7m3E1fEPwA4oq5U",
            "https://drive.google.com/uc?id=1-Z_Feomz3q4lupifEW_UJbnFhmLzRXAn",
            "https://drive.google.com/uc?id=1PXPYnLUiYObGFij25036DkxyrU6JNyvz",
          ],
        },
        price: "$229.99",
      },
      {
        id: 29,
        productID: 13,
        stock: 100,
        imageUrl: {
          black: [
            "https://drive.google.com/uc?id=1Ax6CM3AdlJO1n65_lZG2zPDdYNByy4-C",
            "https://drive.google.com/uc?id=1EkZcTcnwnTtXNnZxwX3VgkoqcWII9Z8r",
            "https://drive.google.com/uc?id=1Kfc76RFOl_SdGLPnO-mLxaxcj33tEpMb",
          ],
          chalk: [
            "https://drive.google.com/uc?id=1r6T1JniPQIO_bVLgsbVp4ogxfb4a8DY6",
            "https://drive.google.com/uc?id=1_Y-gvUyrObHMmYNlLLvpe7HgQWnVwYZC",
            "https://drive.google.com/uc?id=1yXCwbC6Bv4kK1Vnu16WCrbQ6UpIaZoFI",
            "https://drive.google.com/uc?id=1kpjtxW-nXct7D-ENYFKFOEUjr1QVqbfF",
            "https://drive.google.com/uc?id=1kpjtxW-nXct7D-ENYFKFOEUjr1QVqbfF",
          ],
          gold: [
            "https://drive.google.com/uc?id=1Im0K8WBOuJn6MTjFiZoMaysKh_ZwXtbL",
            "https://drive.google.com/uc?id=1nH76qy48e48nt2lp0se090Dn7iphHxWe",
            "https://drive.google.com/uc?id=1Vds_kmvFpyFgJEt-GnMiQsXr6dPPx1bK",
            "https://drive.google.com/uc?id=1XJwX4sIUrT77g3JfV2G-XirZqH1q4p8l",
          ],
          sliver: [
            "https://drive.google.com/uc?id=1djsF8baA6kddHoDzQe6kPt4-IhI1Z1uy",
            "https://drive.google.com/uc?id=1IqCmis4F6PLW5rsrVJg64jHQ3mnuLQ0z",
            "https://drive.google.com/uc?id=1cC99hAZyhfX5bEXzCqjN_vYA3jzGqsVM",
            "https://drive.google.com/uc?id=1gNi_1Q-aQe9kyEc4yBGZeaDK6FIL6bpI",
          ],
        },
        price: "$399.99",
      },
      {
        id: 30,
        productID: 14,
        stock: 100,
        imageUrl: [
          "https://drive.google.com/uc?id=1g0-B3p99-dluPXNSDGY8ou8skWgtv6bs",
          "https://drive.google.com/uc?id=1ZjrphvBw7U8mHruhOPydOBYI7vkveFsx",
          "https://drive.google.com/uc?id=1F-WVJDwOAoKhstoRDFXtrhQM71e9-8rC",
          "https://drive.google.com/uc?id=1Ix4PFhbabg7FXL8QJTzX4Nugh2Cfth_T",
        ],
        price: "$19.00",
      },
      {
        id: 31,
        productID: 15,
        stock: 100,
        imageUrl: [
          "https://drive.google.com/uc?id=1g0-B3p99-dluPXNSDGY8ou8skWgtv6bs",
          "https://drive.google.com/uc?id=1ZjrphvBw7U8mHruhOPydOBYI7vkveFsx",
          "https://drive.google.com/uc?id=1F-WVJDwOAoKhstoRDFXtrhQM71e9-8rC",
          "https://drive.google.com/uc?id=1Ix4PFhbabg7FXL8QJTzX4Nugh2Cfth_T",
        ],
        price: "$29.00",
      },
      {
        id: 32,
        productID: 16,
        stock: 100,
        imageUrl: [
          "https://drive.google.com/uc?id=1evLA8LHQnYg132neCYPwbN6FOgm0Gfx-",
          "https://drive.google.com/uc?id=1kgBbyYub4dGVnTFgUxPB4qn1tcpw5nXN",
          "https://drive.google.com/uc?id=1q1twQfwzGJhmAWcTniWdHYWD3O62t70R",
        ],
        price: "$19.00",
      },
      {
        id: 33,
        productID: 17,
        stock: 100,
        imageUrl: [
          "https://drive.google.com/uc?id=1m4P8okyPawKzw_K6OX6dXe6qIJsHQcpb",
          "https://drive.google.com/uc?id=1saZpIkSKmF-jkZumsdzp0CiXzQReB6A7",
          "https://drive.google.com/uc?id=1KsHXLawaP0AA1CFBPEUEiwW_xavA-0vr",
          "https://drive.google.com/uc?id=152-LcApiVGZ7FlVRimcuEbufZDDYvi2F",
        ],
        price: "$39.00",
      },
      {
        id: 34,
        productID: 18,
        stock: 100,
        imageUrl: [
          "https://drive.google.com/uc?id=1LKUCPfMvXj2XdhO8fdZiHIlgd7K_f1jF",
          "https://drive.google.com/uc?id=1tC4jWmvgFjsQscUPWIO29HpPcnxXJ7E-",
          "https://drive.google.com/uc?id=1JXpnDLNmvN4YuMQpRJlnnI1bWBvBVZPI",
          "https://drive.google.com/uc?id=11W_qJmZtjMJ-vdWLMDusMLoU_35HgZ22",
        ],
        price: "$29.00",
      },
      {
        id: 35,
        productID: 19,
        stock: 100,
        imageUrl: [
          "https://drive.google.com/uc?id=1H-10u54FWB-4r5p2MW78mnGdG8r5H-UJ",
          "https://drive.google.com/uc?id=1W0U-gj4Z07DHxPmkeMauvu_SZAGwH-iJ",
          "https://drive.google.com/uc?id=1kCwObp3elBMb58JG9sY685YO7briQ7Wl",
          "https://drive.google.com/uc?id=17611AD4BnfIY2hJZQTu5LVNOQZ_0zFwJ",
          "https://drive.google.com/uc?id=1EXzSCRG1Z7ySDTsaIXHHgNWZ5BegzbyT",
        ],
        price: "$99.99",
      },
      {
        id: 36,
        productID: 20,
        stock: 100,
        imageUrl: [
          "https://drive.google.com/uc?id=1cy2W3TqF_wqbhiAu9SEQK6-hWIUkIUvS",
          "https://drive.google.com/uc?id=1qUk7YbB_KIfJYSMpmouV0EEJBXg5IfPO",
          "https://drive.google.com/uc?id=1Yj4Z5RNh3Z-M6fb4r_GWCmv0tDsEAn60",
          "https://drive.google.com/uc?id=1LBDQFvFiImZP2l--MKh4F2wlfTyZGjUy",
        ],
        price: "$49.99",
      },
      {
        id: 37,
        productID: 21,
        stock: 100,
        imageUrl: [
          "https://drive.google.com/uc?id=1S99UnoVw5y0vrUNTDagf8NrnhGKb6dnc",
          "https://drive.google.com/uc?id=1GZBS6uo1qZgiCxPgqFiaPMRVS6y1XjpE",
          "https://drive.google.com/uc?id=1ClPuGk3rn0M2ABZnQu6dVn0ZvRcvZUjV",
        ],
        price: "$29.99",
      },
      {
        id: 38,
        productID: 21,
        stock: 100,
        imageUrl: [
          "https://drive.google.com/uc?id=13j_RsG44OCvhZJikMljTF9VBkG7OIVpC",
          "https://drive.google.com/uc?id=1vaQOTvGtddYcyn2Lyr_gXfWxn6hSMztP",
        ],
        price: "$35.99",
      },
      {
        id: 39,
        productID: 21,
        stock: 100,
        imageUrl: [
          "https://drive.google.com/uc?id=1nGq-Y-iVayCxApf9gN6g9fstq9a_e71X",
          "https://drive.google.com/uc?id=1bvPfnqugllegAqk3FUt9YZld6HBAWgeV",
        ],
        price: "$29.99",
      },
    ],
  });
  await prisma.productVariant.createMany({
    data: [
      { id: 1, name: "iphone14color", categoryID: 5 },
      { id: 2, name: "iphone14ProColor", categoryID: 6 },
      { id: 3, name: "s23Color", categoryID: 8 },
      { id: 4, name: "s23UltraColor", categoryID: 9 },
      { id: 5, name: "pixel7Color", categoryID: 11 },
      { id: 6, name: "appleWatchUltraAlineLoopColor", categoryID: 7 },
      { id: 7, name: "appleWatchUltraTrailLoopColor", categoryID: 7 },
      { id: 8, name: "appleWatchUltraOceanBandColor", categoryID: 7 },
      { id: 9, name: "watch5ProColor", categoryID: 8 },
      { id: 10, name: "pixelWatchColor", categoryID: 9 },
      { id: 11, name: "Iphone14Storage", categoryID: 5 },
      { id: 12, name: "Iphone14ProStorage", categoryID: 6 },
      { id: 13, name: "s23Storage", categoryID: 8 },
      { id: 14, name: "s23PlusStorage", categoryID: 9 },
      { id: 15, name: "pixel7storage", categoryID: 11 },
    ],
  });

  await prisma.productVariantOption.createMany({
    data: [
      {
        id: 1,
        variantID: 1,
        value: {
          color: ["Blue", "Purple", "Yellow", "Midnight", "Starlight", "Red"],
          Storage: ["128GB", "256GB", "512GB"],
        },
      },
      {
        id: 2,
        variantID: 2,
        value: {
          color: ["Gold", "Silver", "Space Black", "Bora Purple"],
          Storage: ["128GB", "256GB", "512GB", "1TB"],
        },
      },
      {
        id: 3,
        variantID: 3,
        value: {
          color: ["lavender", "Green", "Phantom Black", "Phantom White"],
          Storage: ["128GB", "256GB"],
        },
      },

      {
        id: 4,
        variantID: 4,
        value: {
          color: [
            "Phantom Black",
            "Phantom White",
            "burgundy",
            "green",
            "sky blue",
          ],
          Storage: ["256GB", "512GB", "1TB"],
        },
      },

      {
        id: 5,
        variantID: 5,
        value: {
          color: ["Hazel", "Snow", "Obsidian"],
          Storage: ["128GB", "256GB", "512GB"],
        },
      },

      { id: 6, variantID: 6, value: ["green", "orange", "starlight"] },

      { id: 7, variantID: 7, value: ["blue", "black", "yellow"] },
      { id: 8, variantID: 8, value: ["midnight", "white", "yellow"] },
      { id: 9, variantID: 9, value: ["Black Titanium", "gray Titanium"] },

      { id: 10, variantID: 10, value: ["black", "chalk", "gold", "sliver"] },
    ],
  });

  await prisma.productConfiguration.createMany({
    data: [
      { id: 1, productItemID: 1, variantOptionID: 1 },
      { id: 2, productItemID: 2, variantOptionID: 1 },
      { id: 3, productItemID: 3, variantOptionID: 1 },
      { id: 4, productItemID: 4, variantOptionID: 1 },
      { id: 5, productItemID: 5, variantOptionID: 1 },
      { id: 6, productItemID: 6, variantOptionID: 1 },
      { id: 7, productItemID: 7, variantOptionID: 2 },
      { id: 8, productItemID: 8, variantOptionID: 2 },
      { id: 9, productItemID: 9, variantOptionID: 2 },
      { id: 10, productItemID: 10, variantOptionID: 2 },
      { id: 11, productItemID: 11, variantOptionID: 2 },
      { id: 12, productItemID: 12, variantOptionID: 2 },
      { id: 13, productItemID: 13, variantOptionID: 2 },
      { id: 14, productItemID: 14, variantOptionID: 2 },
      { id: 15, productItemID: 15, variantOptionID: 3 },
      { id: 16, productItemID: 16, variantOptionID: 3 },
      { id: 17, productItemID: 17, variantOptionID: 3 },
      { id: 18, productItemID: 18, variantOptionID: 3 },
      { id: 19, productItemID: 19, variantOptionID: 4 },
      { id: 20, productItemID: 20, variantOptionID: 4 },
      { id: 21, productItemID: 21, variantOptionID: 4 },
      { id: 22, productItemID: 22, variantOptionID: 5 },
      { id: 23, productItemID: 23, variantOptionID: 5 },
      { id: 24, productItemID: 24, variantOptionID: 5 },

      { id: 25, productItemID: 25, variantOptionID: 6 },
      { id: 26, productItemID: 26, variantOptionID: 7 },
      { id: 27, productItemID: 27, variantOptionID: 8 },
      { id: 28, productItemID: 28, variantOptionID: 9 },
      { id: 29, productItemID: 29, variantOptionID: 10 },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
