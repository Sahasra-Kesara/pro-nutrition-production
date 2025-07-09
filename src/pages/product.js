// product.js

const creatineProducts = [
  { id: 1, name: "Gold Creatine", price: 59.99, image: "https://fitcookie.co.uk/wp-content/uploads/2022/05/gold-creatine-levrone-signature-series.jpg", rating: 4.9, popularity: 100 },
  { id: 2, name: "Scitec Nutrition - 100% Creatine Monohydrate", price: 49.99, image: "https://th.bing.com/th/id/OIP.Lnq5iHdsXvafuxMwabLp9gHaFj?rs=1&pid=ImgDetMain", rating: 4.7, popularity: 90 },
  { id: 3, name: "ProScience - Creatine Monohydrate", price: 44.99, image: "https://tse4.mm.bing.net/th/id/OIP.AOya5K4ZeJQ6anqymfPwyQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.6, popularity: 85 },
  { id: 4, name: "Ultimate Sports Nutrition - Pure Creatine Monohydrate Powder", price: 49.99, image: "https://www.usn.co.za/cdn/shop/files/creatine.webp?v=1728289890&width=480", rating: 4.7, popularity: 88 },
  { id: 5, name: "Applied Nutrition - Creatine Monohydrate", price: 44.99, image: "https://www.beingbuilder.com/image/cache/catalog/Untitled%20design%20-%202023-06-17T191152.793-900x1200.jpg", rating: 4.6, popularity: 85 },
  { id: 6, name: "Applied Nutrition - Creatine Monohydrate (Flavoured)", price: 44.99, image: "https://www.icebergsupplements.com/wp-content/uploads/2023/02/ga1-1-4.jpg", rating: 4.6, popularity: 85 },
  { id: 7, name: "Core Champ Creatine", price: 44.99, image: "https://www.bodybuilding.lk/wp-content/uploads/2024/01/Core-Champs-Creatine-1-600x600.jpg", rating: 4.6, popularity: 85 },
  { id: 8, name: "Muscletech Creatine", price: 44.99, image: "https://drnutrition.com/storage/media/5YzvOfhaNNqyN2l4AhxGYHLKRvcxbP19sBt33gx7.jpg", rating: 4.6, popularity: 85 },
  { id: 9, name: "Big Ramy Labs - Red Rex Creatine", price: 44.99, image: "https://www.maxmuscleelite.com/web/image/product.template/7437/image_1024?unique=08f53b8", rating: 4.6, popularity: 85 },
  { id: 10, name: "Inner Armour - Creatine Monohydrate", price: 44.99, image: "https://nutrispothonduras.com/wp-content/uploads/2024/07/Creatina-Inner-400g-v1.jpg", rating: 4.6, popularity: 85 },
  { id: 11, name: "Skull Labs - Creatine", price: 44.99, image: "https://www.maxmuscleelite.com/web/image/product.product/7868/image_1920/[5902448245737]%20Skull%20Labs%20Creatine%20Monohydrate%20Pharmaceutical%20Grade-66Serv.-300G.-Unflavored?unique=5af16d0", rating: 4.6, popularity: 85 },
  { id: 12, name: "Ultimate Nutrition - Creatine Monohydrate", price: 44.99, image: "https://nutrishop.pe/wp-content/uploads/2022/05/c5989687-7197-4118-bba1-ae1429580028-1024x1024.jpg", rating: 4.6, popularity: 85 },
];

const wheyProducts = [
  { id: 1, name: "Gold Standard Whey - Optimum Nutrition", price: 69.99, image: "https://supplement.lk/wp-content/uploads/2024/10/gold-standard-whey-10lbs-1.jpg", rating: 4.9, popularity: 100 },
  { id: 2, name: "Applied Nutrition - Diet Whey Protein - Vanilla Ice Cream", price: 49.99, image: "https://th.bing.com/th/id/OIP.PR1R3ExDdq-Z9Ag91E5PaAAAAA?rs=1&pid=ImgDetMain", rating: 4.7, popularity: 90 },
  { id: 3, name: "Applied Nutrition - Diet Whey Protein - Banana Milkshake", price: 49.99, image: "https://hyjiyastore.b-cdn.net/images/products/applied-nutrition-diet-whey-protein-18-kg-banana-milkshake-01.jpg", rating: 4.6, popularity: 85 },
  { id: 4, name: "Applied Nutrition - Diet Whey Protein - Chocolate", price: 49.99, image: "https://hyjiyastore.b-cdn.net/images/products/applied-nutrition-diet-whey-protein-18-kg-chocolate-dessert-01.jpg", rating: 4.7, popularity: 88 },
  { id: 5, name: "Applied Nutrition - Critical Way Advanced Protein", price: 59.99, image: "https://th.bing.com/th/id/R.09cac2fe9f407758a8575a0f1c778f40?rik=N%2bkxnT9emj%2fM3Q&pid=ImgRaw&r=0", rating: 4.8, popularity: 92 },
  { id: 6, name: "Applied Nutrition - Vegan Pro - Chocolate", price: 55.99, image: "https://th.bing.com/th/id/OIP.9gFmT5pHE4boCuosn2XJvwHaHa?rs=1&pid=ImgDetMain", rating: 4.6, popularity: 84 },
  { id: 8, name: "Gold Whey - Dennis James - Chocolate Fudge", price: 64.99, image: "https://cdn.shopify.com/s/files/1/0725/1270/0689/files/DennisJamesWhey03.jpg?v=1682487984", rating: 4.8, popularity: 90 },
  { id: 9, name: "Gibbon Nutrition Whey Protein Isolate & Concentrate - Butter Scotch", price: 62.99, image: "https://brandscrate.com/cdn/shop/products/GibbonWhiteSeriesTheWheyVanilla_1.webp?v=1693828922&width=480", rating: 4.7, popularity: 87 },
  { id: 10, name: "Scitec Nutrition Whey Protein Professional", price: 49.99, image: "https://th.bing.com/th/id/R.3c070ac0f6105182dfbe1574a4342d74?rik=xMQ64HqsWz7I%2bA&riu=http%3a%2f%2fresources.sport-tiedje.com%2fbilder%2fscitec%2fscitec_professional%2fscitec_professional_1_1600.jpg&ehk=zddtUaj61pZ%2bYIG7otc%2fbHzqnWrUGrZKlmNbAJVfahI%3d&risl=&pid=ImgRaw&r=0", rating: 4.6, popularity: 80 },
  { id: 11, name: "Proscience Whey Anobolic Whey Protein Isolate", price: 54.99, image: "https://www.myvitaminstore.pk/cdn/shop/files/ProscienceAnabolicWheyProteinIsolate_GourmetChocolate_5Lbs.jpg?v=1724907708", rating: 4.8, popularity: 88 },
  { id: 12, name: "Dexter Jackson Black Series Whey Isolate & Hydrolyzed Protein", price: 65.99, image: "https://m.media-amazon.com/images/I/71Q2MWcWtWL._SL1500_.jpg", rating: 4.9, popularity: 92 },
  { id: 13, name: "Core Champ Whey Protein Ultra-Filter", price: 59.99, image: "https://th.bing.com/th/id/OIP.7OxzPKVMdpqbB2w97QlOowHaHa?rs=1&pid=ImgDetMain", rating: 4.7, popularity: 86 },
  { id: 14, name: "Nuclear Nutrition Isotope Whey Protein Isolate", price: 69.99, image: "https://th.bing.com/th/id/OIP.1_RaiQHC4vlGrMyxGWOm3QAAAA?rs=1&pid=ImgDetMain", rating: 4.9, popularity: 94 },
  { id: 15, name: "Flex Wheeler Nutrition Whey Protein", price: 58.99, image: "https://th.bing.com/th/id/R.37958844c74427898a4a017b9f3f72d1?rik=amtwWQVlZBL8Xg&riu=http%3a%2f%2fflexwheelernutrition.com%2fcdn%2fshop%2ffiles%2fFlexWheelerWheyChocolate02_1200x1200.png%3fv%3d1700305829&ehk=YG3Yj6LdxLNluG4ZOd14nygx%2bniTs51PHkNnEE6nU0E%3d&risl=&pid=ImgRaw&r=0", rating: 4.7, popularity: 85 },
  { id: 16, name: "Pole Nutrition Whey Protein - Cookies", price: 49.99, image: "https://5.imimg.com/data5/SELLER/Default/2022/12/GN/JG/KX/149711169/pole-nutrition-whey-protein-500x500.jpg", rating: 4.6, popularity: 80 },
  { id: 17, name: "Monster Labs Whey", price: 45.99, image: "https://res.cloudinary.com/dwf8ifbzs/image/upload/v1741411439/WhatsApp_Image_2025-03-08_at_10.53.40_AM_jj01xn.jpg", rating: 4.5, popularity: 75 },
  { id: 18, name: "Dymatize ISO 100 Hydrolyzed - 100% Whey Protein", price: 45.99, image: "https://cdn.nutrabay.com/wp-content/uploads/2023/04/NB-DYM-1003-03-01.jpg", rating: 4.5, popularity: 75 },
  { id: 19, name: "Pro science Whey", price: 45.99, image: "https://jackednutrition.pk/cdn/shop/files/100whey_1200x1364.png?v=1693825156", rating: 4.5, popularity: 75 },
  { id: 20, name: "Punisher Whey", price: 45.99, image: "https://www.bangla99.com/image/cache/catalog/product/punisher-whey-protein-5-lbs-700x700w.jpg", rating: 4.5, popularity: 75 },
  { id: 21, name: "Redcon - Isotope Whey", price: 45.99, image: "https://thelipoguy.com.au/wp-content/uploads/2023/09/Choc.jpg", rating: 4.5, popularity: 75 },
  { id: 22, name: "MuscleMeds - Carnivor Beef Protein", price: 45.99, image: "https://a1protein.com/wp-content/uploads/2021/12/MuscleMeds-Carnivor-Beef-Protein-Isolate-Fruit-Punch-1808-gm.jpg", rating: 4.5, popularity: 75 },
  { id: 23, name: "Kevin Levrone - Gold Whey", price: 45.99, image: "https://fitnesstack.com/wp-content/uploads/2024/03/Kevin-Levrone-Gold-Whey-2kg-New-Pack-1.png", rating: 4.5, popularity: 75 },
];

const preWorkoutProducts = [
  { id: 1, name: "Curse", price: 39.99, image: "https://th.bing.com/th/id/R.7be509531cc5f9b12278a59318891834?rik=2%2fBeUcrp3xD6DA&pid=ImgRaw&r=0", rating: 4.7, popularity: 90 },
  { id: 2, name: "C4", price: 29.99, image: "https://th.bing.com/th/id/R.d13efe8e5733e6fca1907e12d7ad5ffa?rik=os2coPrzbzGpMw&pid=ImgRaw&r=0", rating: 4.6, popularity: 85 },
  { id: 3, name: "Yeah Buddy", price: 39.99, image: "https://cdn.shopify.com/s/files/1/0873/8466/products/yeahbuddy_cherrylimeade_1_1024x1024.jpg?v=1480119064", rating: 4.8, popularity: 92 },
  { id: 4, name: "Psychotic", price: 49.99, image: "https://th.bing.com/th/id/R.9040c45502dc4e5890c76e4cca9024e9?rik=NdfmiH5VVZrQdg&riu=http%3a%2f%2froll-line-hockeyinline.com%2fwp-content%2fuploads%2f2019%2f10%2finsane-labz-psychotic-int-220g-p26942-17306_image.png&ehk=2o5dY4lDZM4d8LIu9f0QjQ%2fVTmFbOITbOM5KkdQ81yk%3d&risl=&pid=ImgRaw&r=0", rating: 4.7, popularity: 90 },
  { id: 5, name: "Reckful - The Pump", price: 45.99, image: "https://th.bing.com/th/id/OIP.WaE6hZP1FLRIwNOO1rn3ZwHaHa?rs=1&pid=ImgDetMain", rating: 4.6, popularity: 88 },
  { id: 6, name: "Spartan", price: 34.99, image: "https://n2.sdlcdn.com/imgs/h/h/e/Spartan-PUMP-Pre-workout-Watermelon-SDL082913666-1-e13da.jpg", rating: 4.7, popularity: 85 },
  { id: 7, name: "Pre Rulz Shred", price: 39.99, image: "https://res.cloudinary.com/dwf8ifbzs/image/upload/v1741412301/WhatsApp_Image_2025-03-08_at_11.08.05_AM_pfnofs.jpg", rating: 4.7, popularity: 82 },
  { id: 8, name: "MR pre rulz", price: 39.99, image: "https://res.cloudinary.com/dwf8ifbzs/image/upload/v1741412594/WhatsApp_Image_2025-03-08_at_11.12.53_AM_n5rdgc.jpg", rating: 4.7, popularity: 82 },
  { id: 9, name: "GAT Caffeine Tablets", price: 49.99, image: "https://res.cloudinary.com/dwf8ifbzs/image/upload/v1741413710/WhatsApp_Image_2025-03-08_at_11.30.56_AM_kpgyl4.jpg", rating: 4.7, popularity: 85 },
  { id: 10, name: "Applied Nutrition ABE", price: 49.99, image: "https://lk-live-21.slatic.net/kf/Sd47ef9cb9b2949a0a673c0a8bd616d0cP.jpg", rating: 4.7, popularity: 85 },
  { id: 11, name: "Redcon - Total War", price: 49.99, image: "https://m.media-amazon.com/images/I/61mV1JdDFTL.jpg", rating: 4.7, popularity: 85 },
  { id: 12, name: "No - Xplode Pre Workout", price: 49.99, image: "https://www.primeprotein.in/admin/upload/products/Pi7compressedBSN_no_xplode.jpeg", rating: 4.7, popularity: 85 },
  { id: 13, name: "Reckful - The Pump", price: 49.99, image: "https://static.tildacdn.one/tild3862-3465-4631-b463-336338636136/1_pump.png", rating: 4.7, popularity: 85 },
  { id: 14, name: "The Ripped - Fat Burner", price: 49.99, image: "https://tse2.mm.bing.net/th/id/OIP.HXZZT9muTSbwV5-BYG809QHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.7, popularity: 85 },
  { id: 15, name: "Yeah Buddy XTreame", price: 49.99, image: "https://cdn.muscleandstrength.com/store/media/catalog/product/cache/all/image/700x700/602f0fa2c1f0d1ba5e241f914e856ff9/y/b/ybxtreme_cherrylime_6.jpg", rating: 4.7, popularity: 85 },
];

const massGainersProducts = [
  { id: 1, name: "Kevin Levrone Gold Lean Mass", price: 54.99, image: "https://cdn.nutrabay.com/wp-content/uploads/2023/04/NB-KEV-1008-01-01.jpg", rating: 4.8, popularity: 95 },
  { id: 2, name: "Kevin Levrone Anabolic Mass", price: 59.99, image: "https://th.bing.com/th/id/R.1844a0031c2d657ecaa8785311cd6987?rik=2r3PG1g8p4tJpg&riu=http%3a%2f%2fwww.hyjiyastore.com%2fimages%2fproducts%2f71HecFvYxwL.jpg&ehk=gQr1W4cSB3SEAM78idRrMlbjOTOUuk9ds34Fe4Ml%2bbI%3d&risl=&pid=ImgRaw&r=0", rating: 4.7, popularity: 92 },
  { id: 3, name: "Applied Nutrition Critical Mass", price: 49.99, image: "https://th.bing.com/th/id/OIP.Y2Fv5aOgRPAcafxVvedUyQHaHa?w=1080&h=1080&rs=1&pid=ImgDetMain", rating: 4.6, popularity: 89 },
  { id: 4, name: "Carvino Mass", price: 44.99, image: "https://th.bing.com/th/id/OIP.aN3Sr42Jwd7b_224HDKDHwHaHa?rs=1&pid=ImgDetMain", rating: 4.5, popularity: 85 },
  { id: 5, name: "Extream Napalm Mass", price: 49.99, image: "https://cdn.salla.sa/eNzGa/26b0ad38-11e0-4775-9e02-65e1eb2b5b4f-994.0119760479x1000-K4Qb0ALoVQxdWNh743gj4BUU19qFfImODTqC7Hhi.png", rating: 4.6, popularity: 90 },
  { id: 6, name: "Big Ramy Labs Beef Mass", price: 59.99, image: "https://paraflorida.ma/wp-content/uploads/2024/10/Big-Ramy-Beef-Mass-Plus-10-Lbs-Chocolate.jpg", rating: 4.7, popularity: 93 },
  { id: 7, name: "Nuclear Nutrition Atomic Mass Gainer Formula", price: 69.99, image: "https://fasklep.pl/1964-large_default/nuclear-nutrition-atomic-mass-gainer-formula-7-kg.jpg", rating: 4.9, popularity: 94 },
];

const fatBurnerProducts = [
  { id: 1, name: "Muscle Tech Hydroxy Cut Hardcore", price: 39.99, image: "https://theirongear.com/cdn/shop/products/supplement_3a0f8993-0709-4971-bdcb-3a7e3a9fcbe8.png?v=1668239261", rating: 4.6, popularity: 88 },
  { id: 2, name: "Nutrex Lipo 6", price: 39.99, image: "https://www.xtr.gr/images/detailed/862/01-133-005_nutrex_lipo_6_black_120_web.jpg", rating: 4.6, popularity: 88 },
  { id: 3, name: "Nutrex Lipo 6 - Hers", price: 39.99, image: "https://tse3.mm.bing.net/th/id/OIP.ffBtndRFGLapD8TsBZyfIQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", rating: 4.6, popularity: 88 },
  { id: 4, name: "Core Champs Shred-n-Burn", price: 39.99, image: "https://corechamps.com/cdn/shop/files/Core-Champs-Shred-_-Burn-60-Capsules.png?v=1699435495", rating: 4.6, popularity: 88 },
  { id: 5, name: "Nutrex CLA 1000", price: 39.99, image: "https://rightnutrition.com.ec/wp-content/uploads/2023/01/Nutrex-CLA-1000-180-Cap.jpg", rating: 4.6, popularity: 88 },
];

const lCarnitineProducts = [
  { id: 1, name: "Core Champ - 3000mg", price: 29.99, image: "https://th.bing.com/th/id/R.c8e031a4c307d13935486611e62e6306?rik=f388C5%2bqUMXmqg&riu=http%3a%2f%2fwww.hyjiyastore.com%2fimages%2fproducts%2fcore-champs-l-carnitine-ultra-concentrate-3000mg-fruit-punch-01.jpg&ehk=WZ3fZ6ZcXQ8fBjnb4VBtdqLc8rFFWS1bDjs%2f%2fwvABhw%3d&risl=&pid=ImgRaw&r=0", rating: 4.8, popularity: 90 },
  { id: 2, name: "RC - 3000mg", price: 27.99, image: "https://m.media-amazon.com/images/I/51+hxdlQjjL.jpg", rating: 4.7, popularity: 85 },
  { id: 3, name: "Applied Nutrition l-Carnitine", price: 27.99, image: "https://cdn.salla.sa/ZnKl/7og2ea4mrdEZeKktzRY6IlzRkYMNIc8Ne5Svv800.jpg", rating: 4.7, popularity: 85 },
  { id: 4, name: "Nutrex l-Carnitine", price: 27.99, image: "https://vitamins.lv/cdn/shop/products/NutrexLiquidCarni300_CherryLime.jpg?crop=center&height=600&v=1677501878&width=600", rating: 4.7, popularity: 85 },
  { id: 5, name: "Pole Nutrition - L-Cartine 3000", price: 27.99, image: "https://www.themusclekart.com/cdn/shop/products/Pole-Nutrition-L-Carnitine-Liquid-473-ml-Sour-Apple.jpg?v=1623394327&width=533", rating: 4.7, popularity: 85 },
];

const claProducts = [
  { id: 1, name: "Core Champ CLA", price: 34.99, image: "https://nutrition.ae/cache/product/show/core-champs-cla.jpg", rating: 4.6, popularity: 80 },
  { id: 2, name: "Applied Nutrition - CLA", price: 34.99, image: "https://m.media-amazon.com/images/I/61lclxkdYyL.jpg", rating: 4.6, popularity: 80 },
];

const multiVitaminProducts = [
  { id: 1, name: "Core Champs Multi-vitamin", price: 24.99, image: "https://th.bing.com/th/id/OIP.2jHcly0J40yivFTN-Go1GwHaHa?rs=1&pid=ImgDetMain", rating: 4.7, popularity: 85 },
  { id: 2, name: "Applied Nutrition Multi-vitamin Complex", price: 22.99, image: "https://res.cloudinary.com/dwf8ifbzs/image/upload/v1741414773/WhatsApp_Image_2025-03-08_at_11.48.30_AM_a4qn1j.jpg", rating: 4.6, popularity: 80 },
  { id: 3, name: "Core Champ Ashwa Ghanda", price: 22.99, image: "https://res.cloudinary.com/dwf8ifbzs/image/upload/v1741415044/WhatsApp_Image_2025-03-08_at_11.53.22_AM_yuhziz.jpg", rating: 4.6, popularity: 80 },
  { id: 4, name: "Applied Nutrition Ashwa Ghanda", price: 22.99, image: "https://cdn.shopify.com/s/files/1/1611/4145/products/applied_nutrition_ashwagandha_ksm_66_1_1024x1024.jpg?v=1671103069", rating: 4.6, popularity: 80 },
  { id: 5, name: "Core Champ Vitamin D3", price: 22.99, image: "https://res.cloudinary.com/dwf8ifbzs/image/upload/v1741415368/WhatsApp_Image_2025-03-08_at_11.59.09_AM_wos2qs.jpg", rating: 4.6, popularity: 80 },
];

// Export categories for use in the pages
export {
  creatineProducts,
  wheyProducts,
  preWorkoutProducts,
  fatBurnerProducts,
  lCarnitineProducts,
  claProducts,
  multiVitaminProducts,
  massGainersProducts
};
