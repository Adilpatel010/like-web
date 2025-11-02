import { Captions } from "lucide-react";

const ProductCategory = [
    {
        id: 1,
        category: "oven",
        title: "Electric Deck Ovens",
        description: "Premium quality equipment for efficient baking",
        img: "https://lemarkzindustries.com/admin/images/1693813669oven.png",
        products: [
            {
                modelName: "1 Deck 1 Tray Electric Oven",
                modelNo: "DKL-101",
                images: [
                    "https://lemarkzindustries.com/admin/images/1693911153DKL-101.png",
                    "https://lemarkzindustries.com/admin/images/1693911153DKL-101.png",
                    "https://lemarkzindustries.com/admin/images/1694244127DKL-40.png",
                    "https://lemarkzindustries.com/admin/images/1693912872DKL-20.png",
                ],
                desc: "A 1 Deck 1 Tray Electric Oven is a kitchen appliance designed for baking, roasting, and cooking a variety of dishes using electricity as the primary source of heat. Its compact size and electric heating make it suitable for small-scale cooking applications, making it a valuable addition to both residential and commercial kitchens.",
                features: [
                    { title: "Applications", text: "This type of oven is commonly used in small bakeries, cafes, restaurants, and households for baking a wide range of items like cakes, cookies, pastries, and small roasts." },
                    { title: "Maintenance", text: "Regular cleaning and maintenance are essential to ensure the oven functions optimally and remains hygienic." },
                ],
                technical: {
                    Voltage: "220V / 50Hz",
                    Power: "3.2 kw/h",
                    "Dimension (L*W*H)": "645x510x155 mm",
                    "Net Weight": "70 KGS",
                },
            },
            {
                modelName: "1 Deck 2 Tray Electric Oven",
                modelNo: "DKL-20",
                images: [
                    "https://lemarkzindustries.com/admin/images/1693912872DKL-20.png",
                    "https://lemarkzindustries.com/admin/images/1694244367DKL-26.png",
                ],
                desc: "A 1 Deck 2 Tray Electric Oven is a kitchen appliance designed for baking, roasting, and cooking a variety of dishes using electricity as the primary source of heat. A 1 Deck 2 Tray Electric Oven is a versatile kitchen appliance suitable for medium to large-scale cooking applications.",
                features: [
                    { title: "Applications", text: "This type of oven is commonly used in commercial kitchens, such as bakeries, restaurants, and catering services, where larger quantities of baked goods and roasted items are prepared." },
                    { title: "Maintenance", text: "Regular cleaning and maintenance are essential to ensure the oven functions optimally and remains hygienic." },
                ],
                technical: {
                    Voltage: "220V / 50Hz",
                    Power: "6.3 kw/h",
                    "Dimension (L*W*H)": "1260 x 850 x 570 mm",
                    "Net Weight": "78/88 KGS",
                    "Chamber Size": "870 x 720 x 200 mm",
                    "Tray Size": "400 x 600 mm",
                },
            },
            {
                modelName: "2 Deck 4 Tray Electric Oven",
                modelNo: "DKL-40",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694244127DKL-40.png",
                    "https://lemarkzindustries.com/admin/images/1694244127DKL-40.png",
                ],
                desc: "A 2 Deck 4 Tray Electric Oven is a heavy-duty and high-capacity kitchen appliance tailored for commercial use, where the demand for baking and roasting large quantities of food is substantial. Its dual decks and multiple trays make it a valuable tool for businesses seeking efficiency and productivity in their cooking processes.",
                features: [
                    { title: "Applications", text: "This type of oven is commonly used in commercial kitchens, such as bakeries, restaurants, and catering services, where larger quantities of baked goods and roasted items are prepared." },
                    { title: "Maintenance", text: "Regular cleaning and maintenance are essential to ensure the oven functions optimally and remains hygienic." },
                ],
                technical: {
                    Voltage: "380V / 3~50Hz",
                    Power: "9.6 kW/h",
                    Dimension: "1250×900×1350 mm",
                    "Net Weight": "200 KGS",
                    "Temperature Range": "50°C – 300°C",
                    "Tray Size": "400×600 mm",
                },
            },
            {
                modelName: "2 Deck 6 Tray Electric Oven",
                modelNo: "DKL-26",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694244367DKL-26.png",
                    "https://lemarkzindustries.com/admin/images/1694244127DKL-40.png",
                ],
                desc: "A 2 Deck 6 Tray Electric Oven is a heavy-duty and high-capacity kitchen appliance tailored for commercial use, where the need for baking and roasting substantial quantities of food is essential. Its dual decks and multiple trays make it an invaluable tool for businesses seeking efficiency and productivity in their cooking processes.",
                features: [
                    { title: "Applications", text: "This type of oven is commonly used in commercial kitchens, such as bakeries, restaurants, and catering services, where larger quantities of baked goods and roasted items are prepared." },
                    { title: "Maintenance", text: "Regular cleaning and maintenance are essential to ensure the oven functions optimally and remains hygienic." },
                ],
                technical: {
                    Voltage: "380V / 50Hz",
                    Power: "16 kW/h",
                    Dimension: "1680 x 850 x 1240 mm",
                    "Net Weight": "180 KGS",
                    // "Temperature Range": "50°C – 300°C",
                    "Tray Size": "400 x 600 mm",
                },
            },
            {
                modelName: "3 Deck 6 Tray Electric Oven",
                modelNo: "DKL-60",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694245927DKL-60.png",
                    "https://lemarkzindustries.com/admin/images/1694244127DKL-40.png",
                ],
                desc: "A 3 Deck 6 Tray Electric Oven is an industrial-grade and exceptionally high-capacity kitchen appliance tailored for commercial use. Its triple decks and multiple trays make it an invaluable tool for businesses seeking maximum efficiency and productivity in their large-scale cooking processes.",
                features: [
                    { title: "Applications", text: "This type of oven is commonly used in commercial kitchens, such as bakeries, restaurants, and catering services, where larger quantities of baked goods and roasted items are prepared." },
                    { title: "Maintenance", text: "Regular cleaning and maintenance are essential to ensure the oven functions optimally and remains hygienic." },
                ],
                technical: {
                    Voltage: "380V / 50Hz",
                    Power: "25 kW/h",
                    Dimension: "1340 x 950 x 1690 mm",
                    "Net Weight": "220 KGS",
                    // "Temperature Range": "50°C – 300°C",
                    // "Tray Size": "400 x 600 mm",
                },
            },
        ],
    },
    {
        id: 2,
        category: "oven",
        title: "Gas Deck Ovens",
        description: "Premium quality equipment for efficient baking",
        img: "https://lemarkzindustries.com/admin/images/16939099693%20Deck%2012%20Tray%20Gas%20Oven.png",
        products: [
            {
                modelName: "1 Deck 1 Tray Gas Oven",
                modelNo: "RQL-101",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694253267RQL-101.png",
                    "https://lemarkzindustries.com/admin/images/1694253267RQL-101.png",
                ],
                desc: "A 1 Deck 1 Tray Gas Oven is a compact and efficient kitchen appliance primarily used for baking and roasting tasks. Its small size and gas heating make it suitable for small-scale cooking applications, making it a valuable addition to both residential and commercial kitchens.",
                features: [
                    { title: "Applications", text: "This type of oven is commonly used in small bakeries, cafes, restaurants, and households for baking a wide range of items like cakes, cookies, pastries, and small roasts." },
                    { title: "Maintenance", text: "Regular cleaning and maintenance are essential to ensure the oven functions optimally and remains safe and hygienic, particularly when using gas as a heat source." },
                ],
                technical: {
                    Voltage: "220V / 50Hz",
                    Power: "75 W/h",
                    "Dimension (L*W*H)": "1045 x 680 x 650 mm",
                    "Net Weight": "80 KGS",
                    "Tray Size": "400 x 600 mm",
                },
            },
            {
                modelName: "1 Deck 2 Tray Gas Oven",
                modelNo: "RQL-20",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694253733RQL-20.png",
                    "https://lemarkzindustries.com/admin/images/1694244367DKL-26.png",
                ],
                desc: "A 1 Deck 2 Tray Gas Oven is a compact and efficient kitchen appliance primarily used for baking and roasting tasks. Its moderate cooking capacity, along with the convenience of gas heating, makes it a valuable addition to both residential and small to medium-scale commercial kitchens.",
                features: [
                    { title: "Applications", text: "This type of oven is commonly used in commercial kitchens, such as bakeries, restaurants, and catering services, where larger quantities of baked goods and roasted items are prepared." },
                    { title: "Maintenance", text: "Regular cleaning and maintenance are essential to ensure the oven functions optimally and remains safe and hygienic, particularly when using gas as a heat source." },
                ],
                technical: {
                    Voltage: "220V / 50Hz",
                    Power: "75 W/h",
                    "Dimension (L*W*H)": "1330 x 860 x 665 mm",
                    "Net Weight": "135 KGS",
                    "Tray Size": "400 x 600 mm",
                },
            },
            {
                modelName: "1 Deck 3 Tray Gas Oven",
                modelNo: "RQL-13",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694253974RQL-13.png",
                    "https://lemarkzindustries.com/admin/images/1694244127DKL-40.png",
                ],
                desc: "A 1 Deck 3 Tray Gas Oven is a practical and efficient kitchen appliance primarily used for baking and roasting tasks. Its moderate cooking capacity, along with the convenience of gas heating, makes it a valuable addition to both residential and small to medium-scale commercial kitchens.",
                features: [
                    { title: "Applications", text: "This type of oven is commonly used in commercial kitchens, such as bakeries, restaurants, and catering services, where larger quantities of baked goods and roasted items are prepared." },
                    { title: "Maintenance", text: "Regular cleaning and maintenance are essential to ensure the oven functions optimally and remains safe and hygienic, particularly when using gas as a heat source." },
                ],
                technical: {
                    Voltage: "220V / 50Hz",
                    Power: "75 W/h",
                    "Dimension (L*W*H)": "1815 x 925 x 660 mm",
                    "Net Weight": "170 KGS",
                    "Tray Size": "400 x 600 mm",
                },
            },
            {
                modelName: " 1 Deck 4 Tray Gas Oven",
                modelNo: "RQL-14",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694254244RQL-14.png",
                    "https://lemarkzindustries.com/admin/images/1694244127DKL-40.png",
                ],
                desc: "A 1 Deck 4 Tray Gas Oven is a practical and efficient kitchen appliance primarily used for baking and roasting tasks. Its moderate cooking capacity, along with the convenience of gas heating, makes it a valuable addition to both residential and small to medium-sized commercial kitchens.",
                features: [
                    { title: "Applications", text: "This type of oven is commonly used in commercial kitchens, such as bakeries, restaurants, and catering services, where larger quantities of baked goods and roasted items are prepared." },
                    { title: "Maintenance", text: "Regular cleaning and maintenance are essential to ensure the oven functions optimally and remains safe and hygienic, particularly when using gas as a heat source." },
                ],
                technical: {
                    Voltage: "220V / 50Hz",
                    Power: "75 W/h",
                    "Dimension (L*W*H)": "1860 x 1310 x 740 mm",
                    "Net Weight": "230 KGS",
                    // "Temperature Range": "50°C – 300°C",
                    "Tray Size": "400 x 600 mm",
                },
            },
            {
                modelName: "1 Deck 6 Tray Gas Oven",
                modelNo: "RQL-16",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694254476RQL-16.png",
                    "https://lemarkzindustries.com/admin/images/1694244127DKL-40.png",
                ],
                desc: "A 1 Deck 6 Tray Gas Oven is a robust and efficient kitchen appliance primarily used for baking and roasting tasks in medium to large-scale commercial kitchens. Its high cooking capacity, along with the convenience of gas heating, makes it an invaluable tool for businesses seeking maximum efficiency and productivity in their cooking processes.",
                features: [
                    { title: "Applications", text: "This type of oven is commonly used in commercial kitchens, such as bakeries, restaurants, and catering services, where larger quantities of baked goods and roasted items are prepared." },
                    { title: "Maintenance", text: "Regular cleaning and maintenance are essential to ensure the oven functions optimally and remains safe and hygienic, particularly when using gas as a heat source." },
                ],
                technical: {
                    Voltage: "220V / 50Hz",
                    Power: "85 W/h",
                    "Dimension (L*W*H)": "1780 x 1460 x 660 mm",
                    "Net Weight": "220 KGS",
                    // "Temperature Range": "50°C – 300°C",
                    "Tray Size": "400 x 600 mm",
                },
            },
            {
                modelName: "2 Deck 4 Tray Gas Oven",
                modelNo: "RQL-40",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694254781DKL-40.png",
                    "https://lemarkzindustries.com/admin/images/1694244127DKL-40.png",
                ],
                desc: "A 2 Deck 4 Tray Gas Oven is a robust and efficient kitchen appliance primarily used for baking and roasting tasks in medium to large-scale commercial kitchens. Its dual decks and multiple trays make it an invaluable tool for businesses seeking maximum efficiency and productivity in their cooking processes.",
                features: [
                    { title: "Applications", text: "This type of oven is commonly used in commercial kitchens, such as bakeries, restaurants, and catering services, where larger quantities of baked goods and roasted items are prepared." },
                    { title: "Maintenance", text: "Regular cleaning and maintenance are essential to ensure the oven functions optimally and remains safe and hygienic, particularly when using gas as a heat source." },
                ],
                technical: {
                    Voltage: "220V / 50Hz",
                    Power: "150 W/h",
                    "Dimension (L*W*H)": "1330 x 860 x 1375 mm",
                    "Net Weight": "235 KGS",
                    // "Temperature Range": "50°C – 300°C",
                    "Tray Size": "400 x 600 mm",
                },
            },
            {
                modelName: "2 Deck 6 Tray Gas Oven",
                modelNo: "RQL-26",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694254955RQL-26.png",
                    "https://lemarkzindustries.com/admin/images/1694244127DKL-40.png",
                ],
                desc: "A 2 Deck 6 Tray Gas Oven is a robust and efficient kitchen appliance primarily used for baking and roasting tasks in medium to large-scale commercial kitchens. Its dual decks and multiple trays make it an invaluable tool for businesses seeking maximum efficiency and productivity in their cooking processes.",
                features: [
                    { title: "Applications", text: "This type of oven is commonly used in commercial kitchens, such as bakeries, restaurants, and catering services, where larger quantities of baked goods and roasted items are prepared." },
                    { title: "Maintenance", text: "Regular cleaning and maintenance are essential to ensure the oven functions optimally and remains safe and hygienic, particularly when using gas as a heat source." },
                ],
                technical: {
                    Voltage: "220V / 50Hz",
                    Power: "225 W/h",
                    "Dimension (L*W*H)": "1815 x 925 x 1400 mm",
                    "Net Weight": "280 KGS",
                    // "Temperature Range": "50°C – 300°C",
                    "Tray Size": "400 x 600 mm",
                },
            },
            {
                modelName: "3 Deck 6 Tray Gas Oven",
                modelNo: "RQL-60",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694255222RQL-60.png",
                    "https://lemarkzindustries.com/admin/images/1694255222RQL-60.png",
                ],
                desc: "A 3 Deck 6 Tray Gas Oven is an industrial-grade and exceptionally high-capacity kitchen appliance tailored for large-scale commercial use. Its triple decks and multiple trays make it an invaluable tool for businesses seeking maximum efficiency and productivity in their cooking processes.",
                features: [
                    { title: "Applications", text: "This type of oven is commonly used in commercial kitchens, such as bakeries, restaurants, and catering services, where larger quantities of baked goods and roasted items are prepared." },
                    { title: "Maintenance", text: "Regular cleaning and maintenance are essential to ensure the oven functions optimally and remains safe and hygienic, particularly when using gas as a heat source." },
                ],
                technical: {
                    Voltage: "220V / 50Hz",
                    Power: "225 W/h",
                    "Dimension (L*W*H)": "1330 x 850 x 1680 mm",
                    "Net Weight": "390 KGS",
                    // "Temperature Range": "50°C – 300°C",
                    "Tray Size": "400 x 600 mm",
                },
            },
            {
                modelName: "3 Deck 9 Tray Gas Oven",
                modelNo: "RQL-90",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694255468RQL-90.png",
                    "https://lemarkzindustries.com/admin/images/1694244127DKL-40.png",
                ],
                desc: "A 3 Deck 9 Tray Gas Oven is an industrial-grade and exceptionally high-capacity kitchen appliance tailored for large-scale commercial use. Its triple decks and multiple trays make it an invaluable tool for businesses seeking maximum efficiency and productivity in their cooking processes.",
                features: [
                    { title: "Applications", text: "This type of oven is commonly used in commercial kitchens, such as bakeries, restaurants, and catering services, where larger quantities of baked goods and roasted items are prepared." },
                    { title: "Maintenance", text: "Regular cleaning and maintenance are essential to ensure the oven functions optimally and remains safe and hygienic, particularly when using gas as a heat source." },
                ],
                technical: {
                    Voltage: "220V / 50Hz",
                    Power: "225 W/h",
                    "Dimension (L*W*H)": "1815 x 925 x 1705 mm",
                    "Net Weight": "500 KGS",
                    // "Temperature Range": "50°C – 300°C",
                    "Tray Size": "400 x 600 mm",
                },
            },
            {
                modelName: "3 Deck 12 Tray Gas Oven",
                modelNo: "RQL-312",
                images: [
                    "https://lemarkzindustries.com/admin/images/16942556233%20Deck%2012%20Tray%20Gas%20Oven.png",
                    "https://lemarkzindustries.com/admin/images/1694244127DKL-40.png",
                ],
                desc: "A 3 Deck 12 Tray Gas Oven is an industrial-grade and exceptionally high-capacity kitchen appliance tailored for large-scale commercial use. Its triple decks and multiple trays make it an invaluable tool for businesses seeking maximum efficiency and productivity in their cooking processes.",
                features: [
                    { title: "Applications", text: "This type of oven is commonly used in commercial kitchens, such as bakeries, restaurants, and catering services, where larger quantities of baked goods and roasted items are prepared." },
                    { title: "Maintenance", text: "Regular cleaning and maintenance are essential to ensure the oven functions optimally and remains safe and hygienic, particularly when using gas as a heat source." },
                ],
                technical: {
                    Voltage: "220V / 50Hz",
                    Power: "300 W/h",
                    "Dimension (L*W*H)": "1850 x 1200 x 215 mm",
                    "Net Weight": "750 KGS",
                    "Chamber Size": "1300 x 1000 x 215 mm",
                    "Tray Size": "400 x 600 mm",
                },
            },
        ],
    },

    {
        id: 3,
        category: "oven",
        title: "Pizza Ovens",
        description: "Premium quality equipment for efficient baking",
        img: "https://lemarkzindustries.com/admin/images/1693909838WP1ST%201.png",
        products: [
            {
                modelName: "1 Deck Pizza Oven",
                modelNo: "WP1ST",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694259256WP1ST%201.png",
                    "https://lemarkzindustries.com/admin/images/1694259256WP1ST%201.png",
                ],
                desc: "A 16 x 16 Pizza Oven is a high-capacity and specialized kitchen appliance designed for the efficient and consistent cooking of pizzas in commercial settings.",
                features: [
                    { title: "Applications", text: "Designed to bake pizzas evenly with crispy crusts and perfectly melted cheese. Ideal for baking artisan breads, garlic breads, and flatbreads. Can also be used for roasting vegetables, meats, or reheating pre-cooked foods efficiently." },
                    { title: "Maintenance", text: "Regular cleaning and maintenance are essential to ensure the oven functions optimally and remains safe and hygienic, particularly in a commercial setting." },
                ],
                technical: {
                    Voltage: "220-240V / 50-60Hz",
                    Power: "2 KW/h",
                    "Dimension (L*W*H)": "560 x 570 x 280 mm",
                    "Chamber Size": "16 x 16",
                    "Temperature": "0-350",
                },
            },
            {
                modelName: "2 Deck Pizza Oven",
                modelNo: "WP2ST",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694259649WP2ST.png",
                    "https://lemarkzindustries.com/admin/images/1694244367DKL-26.png",
                ],
                desc: "A 2 Deck Pizza Oven is a versatile and efficient kitchen appliance designed for baking pizzas to perfection. Its dual decks allow for increased production capacity, making it an ideal choice for businesses seeking to offer a diverse range of pizzas while maintaining consistent quality.",
                features: [
                    { title: "Applications", text: "Designed to bake pizzas evenly with crispy crusts and perfectly melted cheese. Ideal for baking artisan breads, garlic breads, and flatbreads. Can also be used for roasting vegetables, meats, or reheating pre-cooked foods efficiently." },
                    { title: "Maintenance", text: "Regular cleaning and maintenance are essential to ensure the oven functions optimally and remains safe and hygienic, particularly in a commercial setting." },
                ],
                technical: {
                    Voltage: "220-240V / 50-60Hz",
                    Power: "3 KW/h",
                    "Dimension (L*W*H)": "560 x 570 x 440 mm",
                    // "Chamber Size": "16 x 16",
                    "Temperature": "0-350",
                },
            },
            {
                modelName: "Conveyor Pizza Oven",
                modelNo: "WP3ST",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694259793Conveyr%20pizza%20oven.png",
                    "https://lemarkzindustries.com/admin/images/1694244127DKL-40.png",
                ],
                desc: "A Pizza Oven is a high-capacity and specialized kitchen appliance designed for the efficient and consistent cooking of pizzas in commercial settings. Its conveyor belt system and adjustable settings make it a valuable tool for businesses aiming to produce a large number of pizzas quickly and uniformly.",
                features: [
                    { title: "Applications", text: "Designed to bake pizzas evenly with crispy crusts and perfectly melted cheese. Ideal for baking artisan breads, garlic breads, and flatbreads. Can also be used for roasting vegetables, meats, or reheating pre-cooked foods efficiently." },
                    { title: "Maintenance", text: "Regular cleaning and maintenance are essential to ensure the oven functions optimally and remains safe and hygienic, particularly in a commercial setting." },
                ],
                technical: {
                    Voltage: "220V / 50Hz",
                    Power: "75 W/h",
                    "Dimension (L*W*H)": "1815 x 925 x 660 mm",
                    "Net Weight": "170 KGS",
                    "Tray Size": "400 x 600 mm",
                },
            },
        ],
    },

    {
        id: 4,
        category: "oven",
        title: "Convection Ovens",
        description: "Premium quality equipment for efficient baking",
        img: "https://lemarkzindustries.com/admin/images/1693909749Convection%20Oven%206%20Tray1.png",
        products: [
            {
                modelName: "4 Tray Convection Oven",
                modelNo: "ESD-4A",
                images: [
                    "https://lemarkzindustries.com/admin/images/16942603694%20Tray%20Convection.png",
                    "https://lemarkzindustries.com/admin/images/1694259256WP1ST%201.png",
                ],
                desc: "A 4 Tray Electric Convection Oven is a versatile and efficient kitchen appliance primarily used for baking and roasting tasks. Its moderate cooking capacity, even heat distribution, and precision temperature control make it a valuable addition to both commercial kitchens and households.",
                features: [
                    { title: "Ventilation", text: "Proper ventilation systems are integrated into these ovens to ensure heat and moisture are released safely and efficiently." },
                    { title: "Maintenance", text: "Regular cleaning and maintenance are essential to ensure the oven functions optimally and remains safe and hygienic." },
                ],
                technical: {
                    Voltage: "220V / 50Hz",
                    Power: "2.6 KW/h",
                    "Dimension (L*W*H)": "595 x 600 x 580 mm",
                },
            },
            {
                modelName: "5 Tray Convection Oven",
                modelNo: "",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694260766Convection%20Oven%205%20Tray.png",
                    "https://lemarkzindustries.com/admin/images/1694259256WP1ST%201.png",
                ],
                desc: "A 5 Tray Convection Oven is a versatile and efficient kitchen appliance primarily used for baking and roasting tasks. Its medium cooking capacity, even heat distribution, and precision temperature control make it a valuable addition to both commercial kitchens and households.",
                features: [
                    { title: "Ventilation", text: "Proper ventilation systems are integrated into these ovens to ensure heat and moisture are released safely and efficiently." },
                    { title: "Maintenance", text: "Regular cleaning and maintenance are essential to ensure the oven functions optimally and remains safe and hygienic." },
                ],
                technical: {
                    Voltage: "380V / 3~50Hz",
                    Power: "Elec : 9 KW/h Gas: 0.5 kW/h",
                    "Dimension (Elec) (L*W*H)": "Elec : 1370 x 910 x 890 mm",
                    "Dimension (Gas) (L*W*H)": "Gas : 1420 x 930 x 1100 mm",
                },
            },
            {
                modelName: "8/10/12 Tray Convection Oven",
                modelNo: "esd",
                images: [
                    "https://lemarkzindustries.com/admin/images/16942676168,10%20Tray%20Convection%20Oven.png",
                    "https://lemarkzindustries.com/admin/images/1694259256WP1ST%201.png",
                ],
                desc: "Convection ovens with 8, 10, or 12 trays are versatile and efficient kitchen appliances designed for high-capacity baking and roasting tasks. Their large cooking capacity, even heat distribution, and precision temperature control make them valuable additions to commercial kitchens and foodservice establishments that require consistent and efficient cooking processes.",
                features: [
                    { title: "Ventilation", text: "Proper ventilation systems are integrated into these ovens to ensure heat and moisture are released safely and efficiently." },
                    { title: "Maintenance", text: "Regular cleaning and maintenance are essential to ensure the oven functions optimally and remains safe and hygienic." },
                ],
                technical: {
                    Voltage: "220V / 50Hz",
                    Power: "Elec : 18kW/h Gas: 0.9kW/h",
                },
            },
        ],
    },
    {
        id: 5,
        category: "oven",
        title: "Proofers",
        description: "Premium quality equipment for efficient baking",
        img: "https://lemarkzindustries.com/admin/images/169441637632%20Tray%20Proofers.png",
        products: [
            {
                modelName: "6/12 Tray Proofer",
                modelNo: "6/12",
                images: [
                    "https://lemarkzindustries.com/admin/images/16944167996-12%20Tray%20Proofer.png",
                    "https://lemarkzindustries.com/admin/images/169441707832%20Tray%20Proofers.png",
                ],
                desc: "A 6 Tray Proofer and a 12 Tray Proofer are essential tools for commercial bakers and kitchens. They provide a controlled environment for proofing dough, ensuring that baked goods rise properly and achieve the desired texture and flavor. These proofers are designed to enhance the quality and consistency of bakery products in a professional kitchen setting.",
                features: [
                    { title: "Application", text: "Ideal for fermenting large batches of dough in commercial bakeries and food factories. Ensures consistent rising for breads, buns, pizza dough, and pastries. Perfect for high-volume production environments like hotels, industrial kitchens, and bakery chains." },
                    {
                        title: "Maintenance",
                        text: [
                            "Regular cleaning and maintenance are essential to ensure the proofers function optimally and remain safe and hygienic.",
                            "Cleaning the trays, shelves, and interior of the proofer is necessary to prevent the buildup of residue and maintain a clean environment for proofing."
                        ]
                    },
                ],
                technical: {
                    Voltage: "220V / 50Hz",
                    Power: "2.35 KW/h",
                },
            },
            {
                modelName: "16/32 Tray Proofer",
                modelNo: "16/32",
                images: [
                    "https://lemarkzindustries.com/admin/images/169441707832%20Tray%20Proofers.png",
                    "https://lemarkzindustries.com/admin/images/16944167996-12%20Tray%20Proofer.png",
                ],
                desc: "A 16 Tray Proofer and a 32 Tray Proofer are industrial-sized bakery equipment designed to meet the high-capacity proofing needs of large-scale bakeries and food production facilities. They play a crucial role in ensuring consistent quality and production efficiency in the baking process, particularly when dealing with substantial quantities of dough.",
                features: [
                    { title: "Application", text: "Ideal for fermenting large batches of dough in commercial bakeries and food factories. Ensures consistent rising for breads, buns, pizza dough, and pastries. Perfect for high-volume production environments like hotels, industrial kitchens, and bakery chains." },
                    {
                        title: "Maintenance",
                        text: [
                            "Regular cleaning and maintenance are essential to ensure the proofers function optimally and remain safe and hygienic.",
                            "Cleaning the trays, shelves, and interior of the proofer is necessary to prevent the buildup of residue and maintain a clean environment for proofing."
                        ]
                    },
                ],
                technical: {
                    Voltage: "220V / 50Hz",
                    Power: "3.2 KW/h",
                },
            },
        ],
    },
    {
        id: 6,
        category: "oven",
        title: "rotary ovens",
        description: "Premium quality equipment for efficient baking",
        img: "https://lemarkzindustries.com/admin/images/1694417459Rotary%20Oven.png",
        products: [
            {
                modelName: "12/16/32/64 Tray Rotary Ovens",
                modelNo: "12/16/32/64 tray",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694417831Rotary%20Oven.png",
                    "https://lemarkzindustries.com/admin/images/1694259256WP1ST%201.png",
                ],
                desc: "12, 16, 32, and 64 Tray Rotary Ovens are industrial-sized baking ovens with rotating rack systems, designed for large-scale baking operations. Their rotating feature ensures even baking and consistent results, making them vital tools for high-capacity commercial bakeries and food production facilities.",
                features: [
                    {
                        title: "Application",
                        text: [
                            "12, 16, 32, and 64 Tray Rotary Ovens are used exclusively in large-scale commercial bakeries and food production facilities.",
                            "They are essential for baking a wide variety of products, including bread, pastries, cakes, and other baked goods, with an emphasis on efficiency and consistency."
                        ]
                    },
                    {
                        title: "Maintenance",
                        text:
                            [
                                "Regular cleaning and maintenance are crucial to ensure the ovens function optimally and maintain high hygiene standards.",
                                "Cleaning the racks, trays, and the interior of the oven is essential to prevent residue buildup and maintain a clean baking environment.",
                            ]
                    },
                ],
                technical: {
                    Voltage: "380V / 3~50Hz",
                    "Power (Elec)": "Elec : 28/35/50/76 KW/h",
                    "Power (Gas)": "Gas/Diesel : 3.5/5/7 KW/h",
                    "Tray Size": "400 x 600 mm",
                },
            },
        ],
    },

    {
        id: 7,
        category: "mixer",
        title: "Spiral Mixers",
        description: "Premium quality equipment for efficient baking",
        img: "https://lemarkzindustries.com/admin/images/1694001067Spiral%2025-40.png",
        products: [
            {
                modelName: "Spiral Mixers",
                modelNo: "spiral",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694426091Spiral%2025-40.png",
                    "https://lemarkzindustries.com/admin/images/1694426439Spiral%20Mixer.png",
                ],
                desc: "A spiral mixer is a vital tool in the world of commercial baking, renowned for its efficiency in mixing and kneading dough. Its robust design, adjustable speed controls, and ease of cleaning make it an indispensable piece of equipment for bakeries and food production facilities where consistent and high-capacity dough preparation is required.",
                features: [
                    {
                        title: "Application",
                        text: [
                            "Spiral mixers are essential for preparing dough in bakeries and food production facilities.",
                            "They are suitable for mixing and kneading a wide range of dough types, from soft and sticky to dense and heavy."
                        ]
                    },
                    {
                        title: "Maintenance",
                        text:
                            [
                                "Regular cleaning and maintenance are essential to ensure the mixer functions optimally and maintains high hygiene standards.",
                                "Lubrication of moving parts and routine inspection are part of regular maintenance procedures.",
                            ]
                    },
                    {
                        title: "Size Variants",
                        text: "Spiral mixers come in various size variants, such as small countertop models for small bakeries and larger floor-standing units for industrial bakeries with high production demands.",
                    },
                ],
                technical: {
                    Voltage: "220 - 380 V ",
                    Capacity: " min:- 10L Max:- on Requirement",
                    Speed: "130/260 RPM one Direction as wells as both Direction, two speed",
                    "Flour Capacity": "min:- 10L Max:- on Requirement",
                },
            },
            {
                modelName: "Heavy Duty Spiral Mixer",
                modelNo: "heavy spiral",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694426439Spiral%20Mixer.png",
                    "https://lemarkzindustries.com/admin/images/1694426091Spiral%2025-40.png",
                ],
                desc: "A Heavy Duty Spiral Mixer is a specialized and powerful kitchen appliance designed for commercial and industrial settings, particularly in large-scale bakeries and food production facilities. This type of spiral mixer is engineered to handle heavy, continuous mixing and kneading of dough and other dense mixtures. Here's a detailed description of a Heavy Duty Spiral Mixer:",
                features: [
                    {
                        title: "Robust and Durable Design",
                        text: [
                            "Heavy Duty Spiral Mixers are built with a focus on durability and longevity to withstand the rigorous demands of commercial and industrial use.",
                            "They feature a sturdy and robust construction, often made of high-quality stainless steel or other durable materials, ensuring they can handle heavy loads and frequent operation."
                        ]
                    },
                    {
                        title: "High Mixing Capacity",
                        text: [
                            "These mixers are known for their exceptional mixing capacity, making them suitable for large batches of dough and other dense mixtures.",
                            "They can handle a wide variety of dough types, including bread, pizza, pastry, and more, with ease."
                        ]
                    },
                    {
                        title: "Spiral Agitator Arm",
                        text: [
                            "The signature feature of a Heavy Duty Spiral Mixer is its spiral-shaped agitator arm, also known as a spiral hook or spiral arm. This agitator arm is designed to effectively knead and mix dough, mimicking the manual kneading process.",
                            "The spiral action of the agitator arm gradually combines and develops the gluten structure in the dough."
                        ]
                    },
                    {
                        title: "Powerful Motor",
                        text: [
                            "These mixers are equipped with powerful electric motors that provide the necessary torque and speed for heavy-duty mixing and kneading.",
                            "The motor's strength ensures that even dense and tough doughs are thoroughly mixed and kneaded."
                        ]
                    },
                    {
                        title: "Adjustable Speed Controls",
                        text: [
                            "Most Heavy Duty Spiral Mixers feature adjustable speed controls, allowing users to select the appropriate mixing speed for different types and quantities of dough.",
                            "Lower speeds are typically used for initial mixing, while higher speeds are employed for kneading and development."
                        ]
                    },
                    {
                        title: "Safety Features",
                        text: [
                            "Safety features, such as bowl guards and emergency stop buttons, are integrated into the design to protect operators during operation.",
                            "These features enhance the overall safety of the mixing process."
                        ]
                    },
                    {
                        title: "Large Mixing Bowl",
                        text: [
                            "Heavy Duty Spiral Mixers are equipped with spacious mixing bowls, often made of stainless steel, to accommodate substantial dough quantities.",
                            "The size of the mixing bowl varies depending on the specific model and capacity."
                        ]
                    },
                    {
                        title: "Forward and Reverse Mixing",
                        text: "Some models offer a reverse mixing feature, which aids in dislodging dough from the agitator arm, ensuring more even mixing.",
                    },
                    {
                        title: "Ease of Cleaning",
                        text: "These mixers are designed for ease of cleaning, with removable agitator arms and bowls, as well as smooth, easy-to-clean surfaces.",
                    },
                    {
                        title: "Applications",
                        text:
                            [
                                "Heavy Duty Spiral Mixers are indispensable in large-scale commercial bakeries and food production facilities where high-capacity dough preparation is required.",
                                "They excel at mixing and kneading dough for various baked goods, including bread, rolls, pastries, and more.",
                            ]
                    },
                    {
                        title: "Maintenance",
                        text: "Routine maintenance, including lubrication of moving parts and regular inspection, is essential to keep the mixer in optimal working condition and maintain high hygiene standards.",
                    },
                ],
                technical: {
                    Voltage: "220 - 380 V ",
                    Capacity: "min:-10L Max:- on Requirement",
                    Speed: "130/260 RPM one Direction as wells as both Direction, two speed",
                    "Flour Capacity": "min:-10L Max:- on Requirement",
                },
            },
            {
                modelName: "Self-Tipping Spiral Mixer",
                modelNo: "Self-Tipping",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694426955Heavy%20Duty%20Spiral%20Mixer%20200L.png",
                    "https://lemarkzindustries.com/admin/images/1694426091Spiral%2025-40.png",
                ],
                desc: "A self-tipping spiral mixer, also known as a self-dumping spiral mixer, is an advanced and highly convenient piece of commercial bakery equipment designed to simplify the process of unloading dough after mixing. These mixers are commonly used in bakeries and food production facilities to streamline dough handling and improve efficiency. Here's a detailed description of a self-tipping spiral mixer:",
                features: [
                    {
                        title: "Design and Operation",
                        text: [
                            "A self-tipping spiral mixer has a similar design to a traditional spiral mixer but includes an innovative feature that allows the mixing bowl to tilt or tip forward, making it easier to unload the mixed dough.",
                            "The mixer is equipped with a hydraulic or electric system that controls the tilting mechanism, allowing for controlled and effortless dough discharge."
                        ]
                    },
                    {
                        title: "Spiral Agitator Arm",
                        text: [
                            "Like traditional spiral mixers, self-tipping models also feature a spiral-shaped agitator arm within the mixing bowl.",
                            "The spiral arm effectively kneads and mixes the dough during the mixing process, ensuring even and consistent results."
                        ]
                    },
                    {
                        title: "High Mixing Capacity",
                        text: [
                            "Self-tipping spiral mixers come in various sizes and capacities to cater to the specific needs of bakeries and food production facilities.",
                            "They can handle a wide range of dough types and quantities, making them suitable for small to large-scale operations."
                        ]
                    },
                    {
                        title: "Tilting Mechanism",
                        text: [
                            "The primary distinguishing feature of a self-tipping spiral mixer is its tilting mechanism, which allows the entire mixing bowl to tip forward for dough discharge.",
                            "This feature eliminates the need for manual labor to remove dough from the bowl, reducing physical strain and saving time."
                        ]
                    },
                    {
                        title: "Control Panel",
                        text: [
                            "These mixers typically include a user-friendly control panel that allows operators to set mixing times, speeds, and tilting functions.",
                            "The control panel may have digital displays for easy customization of mixing parameters."
                        ]
                    },
                    {
                        title: "Safety Features",
                        text: [
                            "Self-tipping spiral mixers are equipped with safety features to ensure the protection of operators during the tilting process.",
                            "These features may include safety guards, emergency stop buttons, and automatic locking mechanisms."
                        ]
                    },
                    {
                        title: "Dough Unloading",
                        text:
                            [
                                "When the mixing cycle is complete, the operator can initiate the tilting mechanism from the control panel.",
                                "The mixing bowl tilts forward, allowing the dough to smoothly and automatically slide out onto a conveyor belt, table, or other receptacle for further processing.",
                            ]
                    },
                    {
                        title: "Ease of Cleaning",
                        text: "Just like traditional spiral mixers, self-tipping models are designed for easy cleaning, with removable agitator arms and smooth, easy-to-clean surfaces.",
                    },
                    {
                        title: "Applications",
                        text:
                            [
                                "Self-tipping spiral mixers are commonly used in bakeries and food production facilities to mix and knead dough for various baked goods, including bread, pizza, pastries, and more.",
                                "They are especially beneficial in operations where efficiency and labor savings are a priority.",
                            ]
                    },
                    {
                        title: "Maintenance",
                        text: "Routine maintenance, including lubrication of moving parts and regular inspection, is essential to ensure the mixer and tilting mechanism operate optimally.",
                    },
                ],
                technical: {
                    Voltage: "380 V - 3~50Hz ",
                    Capacity: "200L and More",
                    Speed: "130/260 RPM both Direction, two speed.",
                    "Flour Capacity": "200L and More",
                },
            },
        ],
    },

    {
        id: 8,
        category: "mixer",
        title: "Planetary Mixers",
        description: "Premium quality equipment for efficient baking",
        img: "https://lemarkzindustries.com/admin/images/1694001333Planetary%20Mixer.png",
        products: [
            {
                modelName: "7L Food Mixer",
                modelNo: "ST-B7C",
                images: [
                    "https://lemarkzindustries.com/admin/images/16944284717L%20Food%20Mixer.png",
                    "https://lemarkzindustries.com/admin/images/1694426439Spiral%20Mixer.png",
                ],
                desc: "A 7-Liter Planetary Mixer is a versatile and compact kitchen appliance designed to handle a variety of mixing tasks. Its planetary mixing action, variable speed control, and range of attachments make it a valuable tool for both home and small commercial kitchens, allowing users to efficiently prepare a wide array of culinary delights.",
                features: [
                    {
                        title: "Application",
                        text: [
                            "A 7-Liter Planetary Mixer is versatile and can be used for a wide range of culinary tasks, including mixing cake batter, cookie dough, pizza dough, bread dough, meringues, and more.",
                            "It is suitable for both home cooks and small-scale commercial kitchens where space is a consideration."
                        ]
                    },
                    {
                        title: "Maintenance",
                        text: "Regular maintenance, such as cleaning and lubricating moving parts, is essential to ensure the mixer continues to function optimally over time.",
                    },
                ],
                technical: {
                    Voltage: "220 V / 50 Hz",
                    Power: "0.35 W/h",
                    "Dimension (L*W*H)": "420 x 250 x 425 mm",
                    "Net Weight": "22/28 KGS",
                    Capacity: "7 Liter",
                    "Flour Capacity": "7 Liter",
                },
            },
            {
                modelName: "Planetary Mixer",
                modelNo: "Planetary",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694429532Planetary%20Mixer.png",
                    "https://lemarkzindustries.com/admin/images/1694426091Spiral%2025-40.png",
                ],
                desc: "Planetary mixers are essential kitchen appliances used for a wide range of culinary tasks, from baking to food preparation in commercial kitchens. The capacity of planetary mixers can vary significantly, and here's a description of planetary mixers with capacities of 10, 20, 30, and 40 liters:",
                features: [
                    {
                        title: "Design and Size:",
                        text: [
                            "Planetary mixers with capacities of 10, 20, 30, and 40 liters are versatile and durable kitchen appliances designed to handle various mixing and food preparation tasks.",
                            "They feature a robust and compact design, with a motorized base and a top-mounted mixing head.",
                            "The mixing bowl, along with its attachments, is placed under the mixing head.",
                        ]
                    },
                    {
                        title: "Mixing Capacity:",
                        text: [
                            "These planetary mixers come in various capacities: 10 liters, 20 liters, 30 liters, and 40 liters, making them suitable for a range of batch sizes.",
                            "The mixing bowl's capacity indicates the maximum amount of ingredients that can be processed at once."
                        ]
                    },
                    {
                        title: "Planetary Mixing Action:",
                        text: [
                            "Planetary mixers use a planetary mixing action, where the mixing head and attachments move in a circular, planetary motion within the stationary mixing bowl.",
                            "This action ensures thorough and consistent mixing, blending, and kneading of ingredients."
                        ]
                    },
                    {
                        title: "Attachments:",
                        text: [
                            "Each planetary mixer typically comes with a set of attachments, including a flat beater, a dough hook, and a wire whip.",
                            "The flat beater is used for general mixing and creaming tasks.",
                            "The dough hook is designed for kneading and mixing heavier dough.",
                            "The wire whip is ideal for whipping cream, beating eggs, and creating light and airy textures.",
                        ]
                    },
                    {
                        title: "Variable Speed Control:",
                        text: [
                            "Planetary mixers offer variable speed control, allowing users to adjust the mixing speed to suit the specific recipe and ingredients.",
                            "Multiple speed settings are often available to provide versatility in mixing capabilities."
                        ]
                    },
                    {
                        title: "Safety Features",
                        text: "Safety features, such as a safety guard or interlocking mechanism, are typically included to prevent accidents and ensure safe operation.",
                    },
                    {
                        title: "Durable Construction:",
                        text: "These mixers are built to last, often featuring a metal housing and stainless steel attachments for long-lasting performance.",
                    },
                    {
                        title: "Applications:",
                        text: [
                            "Planetary mixers with capacities of 10, 20, 30, and 40 liters are versatile and can handle a wide range of culinary tasks.",
                            "They are used for mixing cake batter, cookie dough, pizza dough, bread dough, meringues, and more.",
                            "These mixers are commonly found in bakeries, restaurants, and commercial kitchens.",
                        ]
                    },
                    {
                        title: "Ease of Cleaning",
                        text: "Many planetary mixers are designed for easy cleaning, with removable attachments and accessible surfaces.",
                    },
                    {
                        title: "Maintenance:",
                        text: "Regular maintenance, such as cleaning and lubricating moving parts, is essential to ensure the mixer continues to function optimally over time.",
                    },
                ],
                technical: {
                    Voltage: "220 - 380 V ",
                    Power: "0.95 - 2 KW/h",
                    Capacity: "10,20,30 & 40 Liter",
                    Speed: "80/160/310r/min",
                    "Flour Capacity": "10,20,30 & 40 Liter",
                },
            },
            {
                modelName: "Planetary Mixer1",
                modelNo: "Planetary1",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694429390Bigger.png",
                    "https://lemarkzindustries.com/admin/images/1694426091Spiral%2025-40.png",
                ],
                desc: "Planetary mixers with larger capacities, such as 60, 80, 100 liters, and more, are heavy-duty kitchen appliances designed for high-volume commercial and industrial food preparation. These large-capacity planetary mixers are essential in large bakeries, catering companies, and food production facilities. Here's a description of planetary mixers with capacities of 60, 80, 100 liters, and beyond:",
                features: [
                    {
                        title: "Design and Size:",
                        text: [
                            "Planetary mixers with capacities of 60, 80, 100 liters, and more are substantial kitchen appliances known for their heavy-duty construction.",
                            "They have a sturdy and robust design with a motorized base and a top-mounted mixing head.",
                            "The mixing bowl, along with its attachments, is positioned under the mixing head."
                        ]
                    },
                    {
                        title: "Mixing Capacity:",
                        text: [
                            "These planetary mixers are designed for high-volume food preparation, making them suitable for large-scale commercial and industrial kitchens.",
                            "The mixing bowl's capacity indicates the maximum amount of ingredients that can be processed in a single batch."
                        ]
                    },
                    {
                        title: "Planetary Mixing Action:",
                        text: [
                            "Like their smaller counterparts, large-capacity planetary mixers use a planetary mixing action, where the mixing head and attachments move in a circular, planetary motion within the stationary mixing bowl.",
                            "This action ensures thorough and consistent mixing, blending, and kneading of ingredients, even in large quantities."
                        ]
                    },
                    {
                        title: "Attachments:",
                        text: [
                            "Each large-capacity planetary mixer typically comes with a set of attachments, including a flat beater, a dough hook, and a wire whip.",
                            "The flat beater is used for general mixing and creaming tasks.",
                            "The dough hook is designed for kneading and mixing heavier dough, while the wire whip is ideal for whipping cream, beating eggs, and creating light and airy textures."
                        ]
                    },
                    {
                        title: "Variable Speed Control:",
                        text: [
                            "Large-capacity planetary mixers offer variable speed control, allowing users to adjust the mixing speed to accommodate specific recipes and ingredients.",
                            "Multiple speed settings are available to provide flexibility in mixing capabilities."
                        ]
                    },
                    {
                        title: "Safety Features",
                        text: "Safety features, such as a safety guard or interlocking mechanism, are integrated to ensure the safety of operators during operation, especially when dealing with large volumes of ingredients.",
                    },
                    {
                        title: "Durable Construction:",
                        text: "These mixers are built to withstand heavy use and are often constructed with a metal housing and stainless steel attachments for durability and longevity.",
                    },
                    {
                        title: "Ease of Cleaning",
                        text: [
                            "Many large-capacity planetary mixers are designed for easier cleaning, with removable attachments and accessible surfaces.",
                            "Given their size, some models may have features like tilting heads for easier access to the bowl."
                        ]
                    },
                    {
                        title: "Applications",
                        text:
                            [
                                "Large-capacity planetary mixers are used in commercial bakeries, catering companies, and food production facilities to handle high-volume food preparation.",
                                "They are capable of mixing large batches of cake batter, cookie dough, pizza dough, bread dough, and more.",
                            ]
                    },
                    {
                        title: "Maintenance",
                        text: "Regular maintenance, such as cleaning and lubrication of moving parts, is essential to ensure the mixer continues to operate optimally and maintain high hygiene standards.",
                    },
                ],
                technical: {
                    Voltage: "220 - 380 V",
                    Power: "4 KW/h",
                    Capacity: "60, 80, 100 and More",
                    Speed: "220/111/74",
                    "Flour Capacity": "60, 80, 100 and More",
                },
            },
        ],
    },

    {
        id: 9,
        category: "doughsheeter",
        title: "Floor Dough Sheeters",
        description: "Premium quality equipment for efficient baking",
        img: "https://lemarkzindustries.com/admin/images/1694431200Floor%20Model%20Sheeter%20650.png",
        products: [
            {
                modelName: "Dough Sheeter 650",
                modelNo: "sheeter 650",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694431663Floor%20Model%20Sheeter%20650.png",
                    "https://lemarkzindustries.com/admin/images/1694426439Spiral%20Mixer.png",
                ],
                desc: "A 650 Dough Sheeter is a specialized piece of bakery equipment designed for rolling and flattening dough to a consistent thickness. These machines are commonly used in bakeries, pastry shops, and food production facilities to streamline the dough preparation process. Here's a detailed description of a 650 Dough Sheeter.",
                features: [
                    {
                        title: "Design and Size:",
                        text: [
                            "A 650 Dough Sheeter typically features a robust and compact design, making it suitable for use in commercial kitchens with limited space.",
                            "It consists of a motorized base with a pair of parallel, counter-rotating rollers mounted on top."
                        ]
                    },
                    {
                        title: "Roller Width:",
                        text:
                            [
                                `The number "650" in the name often refers to the width of the rollers in millimeters, which is approximately 650 mm (25.6 inches).`,
                                "The width of the rollers determines the maximum width of dough that can be processed.",
                            ]
                    },
                    {
                        title: "Rolling Mechanism:",
                        text:
                            [
                                "The dough sheeter uses a rolling mechanism that passes the dough between the two counter-rotating rollers.",
                                "As the dough passes through, it is gradually flattened and rolled to the desired thickness.",
                            ]
                    },
                    {
                        title: "Adjustable Thickness:",
                        text:
                            [
                                "650 Dough Sheeters typically offer adjustable thickness settings, allowing users to control the thickness of the rolled dough.",
                                "These settings are often easy to adjust using knobs or levers, allowing for precise thickness control.",
                            ]
                    },
                    {
                        title: "Conveyor Belt:",
                        text:
                            [
                                "Many dough sheeters feature a conveyor belt system that helps guide the dough through the rollers and ensures an even and consistent thickness.",
                                "The conveyor belt can be adjusted to accommodate different dough sizes and thicknesses.",
                            ]
                    },
                    {
                        title: "Safety Features:",
                        text: "Safety features such as emergency stop buttons and safety guards are commonly integrated to ensure the safety of operators during operation.",
                    },
                    {
                        title: "Durable Construction:",
                        text: "These machines are built with durability in mind, often featuring a metal housing and stainless steel rollers for long-lasting performance.",
                    },
                    {
                        title: "Ease of Cleaning:",
                        text:
                            [
                                "Many dough sheeters are designed for ease of cleaning, with removable parts and accessible surfaces.",
                                "Regular cleaning and maintenance are essential to keep the machine in optimal working condition.",
                            ]
                    },
                    {
                        title: "Applications:",
                        text:
                            [
                                "A 650 Dough Sheeter is used primarily for rolling and flattening dough for a wide range of baked goods, including bread, pizza, pastry, croissants, and more.",
                                "It is an essential tool in bakeries and food production facilities to ensure uniform dough thickness.",
                            ]
                    },
                    {
                        title: "Maintenance:",
                        text: "Routine maintenance, such as cleaning, lubrication of moving parts, and belt adjustments, is crucial to ensure the dough sheeter continues to function optimally."
                    },
                ],
                technical: {
                    Voltage: "220 - 380 V",
                    Power: "1.10 KW/h",
                    "Dimension (L*W*H)": "1100 x 3100 x 1100 mm",
                    Capacity: "6.5 Kg",
                    "Flour Capacity": "6.5 Kg",
                },
            },
            {
                modelName: "Dough Sheeter 520",
                modelNo: "sheeter 520",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694431854Dough%20Sheeter%20520.png",
                    "https://lemarkzindustries.com/admin/images/1694431663Floor%20Model%20Sheeter%20650.png",
                ],
                desc: "A 520 Dough Sheeter is a specialized bakery machine used for rolling and flattening dough to a consistent thickness. These machines are commonly found in bakeries, pastry shops, and commercial kitchens where precision in dough preparation is crucial. Here's a detailed description of a 520 Dough Sheeter:",
                features: [
                    {
                        title: "Design and Size:",
                        text: [
                            "A 520 Dough Sheeter is designed with a compact and efficient structure, making it suitable for smaller commercial kitchens and bakeries.",
                            "It typically consists of a motorized base with a pair of parallel, counter-rotating rollers mounted on top.",
                        ]
                    },
                    {
                        title: "Roller Width:",
                        text: [
                            `The "520" in the name generally refers to the width of the rollers in millimeters, which is approximately 520 mm (20.5 inches).`,
                            "The width of the rollers determines the maximum width of dough that can be processed."
                        ]
                    },
                    {
                        title: "Rolling Mechanism:",
                        text: [
                            "The dough sheeter utilizes a rolling mechanism that passes the dough between the two counter-rotating rollers.",
                            "As the dough is fed through, it is progressively flattened and rolled to achieve the desired thickness."
                        ]
                    },
                    {
                        title: "Adjustable Thickness:",
                        text: [
                            "520 Dough Sheeters typically come with adjustable thickness settings, allowing users to control the thickness of the rolled dough.",
                            "These settings are often easy to adjust using knobs or levers for precise thickness control.",
                        ]
                    },
                    {
                        title: "Conveyor Belt:",
                        text: [
                            "Many dough sheeters feature a conveyor belt system that assists in guiding the dough through the rollers, ensuring even and consistent thickness.",
                            "The conveyor belt can be adjusted to accommodate different dough sizes and thicknesses."
                        ]
                    },
                    {
                        title: "Safety Features",
                        text: "Safety features such as emergency stop buttons and safety guards are typically incorporated to ensure the safety of operators during operation.",
                    },
                    {
                        title: "Durable Construction:",
                        text: "These machines are constructed with durability in mind, often featuring a metal housing and stainless steel rollers to ensure longevity and withstand heavy use.",
                    },
                    {
                        title: "Ease of Cleaning",
                        text: [
                            "Many dough sheeters are designed for ease of cleaning, with removable parts and accessible surfaces.",
                            "Regular cleaning and maintenance are essential to ensure the machine continues to operate efficiently."
                        ]
                    },
                    {
                        title: "Applications:",
                        text: [
                            "A 520 Dough Sheeter is primarily used for rolling and flattening dough to a consistent thickness.",
                            "It is an essential tool in bakeries and commercial kitchens for preparing dough for various baked goods, including bread, pizza, pastry, croissants, and more.",
                        ]
                    },
                    {
                        title: "Maintenance:",
                        text: "Routine maintenance, such as cleaning, lubrication of moving parts, and belt adjustments, is crucial to maintain the dough sheeter's optimal performance.",
                    },
                ],
                technical: {
                    Voltage: "220 - 380 V ",
                    Power: "0.55 KW/h",
                    "Dimension (L*W*H)": "960 x 2700 x 1100 mm",
                    Capacity: "5.5 Kg",
                    "Flour Capacity": "5.5 Kg",
                },
            },
        ],
    },
    {
        id: 10,
        category: "doughsheeter",
        title: "TableTop Dough Sheeter",
        description: "Premium quality equipment for efficient baking",
        img: "https://lemarkzindustries.com/admin/images/1694431305Tabletop.png",
        products: [
            {
                modelName: "Tabletop Dough Sheeter",
                modelNo: "tabletop",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694432570Tabletop.png",
                    "https://lemarkzindustries.com/admin/images/1694426439Spiral%20Mixer.png",
                ],
                desc: "A tabletop sheeter is a compact and versatile piece of bakery equipment designed for rolling and flattening dough to a consistent thickness. These machines are commonly used in smaller bakeries, pastry shops, and even home kitchens where space is limited. Here's a detailed description of a tabletop sheeter:",
                features: [
                    {
                        title: "Design and Size:",
                        text: [
                            "A tabletop sheeter is designed to be compact and space-saving, making it suitable for countertops or tables with limited space.",
                            "It typically consists of a motorized base with a pair of parallel, counter-rotating rollers mounted on top."
                        ]
                    },
                    {
                        title: "Roller Width:",
                        text:
                            [
                                "The roller width on tabletop sheeters varies, but it is designed to be compact and efficient for small-scale operations.",
                                "Smaller tabletop models may have a roller width of around 10 to 15 inches (25 to 38 centimeters).",
                            ]
                    },
                    {
                        title: "Rolling Mechanism:",
                        text:
                            [
                                "Tabletop sheeters employ a rolling mechanism where the dough is fed between the two counter-rotating rollers.",
                                "As the dough passes through, it is progressively flattened and rolled to achieve the desired thickness.",
                            ]
                    },
                    {
                        title: "Adjustable Thickness:",
                        text:
                            [
                                "Most tabletop sheeters are equipped with adjustable thickness settings, allowing users to control the thickness of the rolled dough.",
                                "These settings are typically easy to adjust using knobs or levers, providing precise thickness control.",
                            ]
                    },
                    {
                        title: "Conveyor Belt:",
                        text:
                            [
                                "Some tabletop sheeters feature a conveyor belt system that assists in guiding the dough through the rollers, ensuring even and consistent thickness.",
                                "The conveyor belt can be adjusted to accommodate different dough sizes and thicknesses.",
                            ]
                    },
                    {
                        title: "Safety Features:",
                        text: "Safety features, such as emergency stop buttons and safety guards, may be included to ensure the safety of operators during operation.",
                    },
                    {
                        title: "Durable Construction:",
                        text: "While tabletop sheeters are compact, they are still constructed to be durable and sturdy, often featuring a metal housing and stainless steel rollers for longevity.",
                    },
                    {
                        title: "Ease of Cleaning:",
                        text:
                            [
                                "Many tabletop sheeters are designed for ease of cleaning, with removable parts and accessible surfaces.",
                                "Regular cleaning and maintenance are essential to ensure the machine continues to operate efficiently.",
                            ]
                    },
                    {
                        title: "Applications:",
                        text:
                            [
                                "A tabletop sheeter is primarily used for rolling and flattening dough to a consistent thickness.",
                                "It is suitable for smaller bakeries, pastry shops, cafes, and home kitchens for preparing dough for various baked goods, including bread, pizza, pastry, croissants, and more.",
                            ]
                    },
                    {
                        title: "Maintenance:",
                        text: "Routine maintenance, such as cleaning, lubrication of moving parts, and belt adjustments, is important to maintain the tabletop sheeter's optimal performance."
                    },
                ],
                technical: {
                    Voltage: "220 - 380 V",
                    Power: "0.55 KW/h",
                    "Dimension (L*W*H)": "910 x 1890 x 590 mm",
                    Capacity: "5 Kg",
                    "Flour Capacity": "5 Kg",
                },
            },
        ],
    },

    {
        id: 11,
        category: "doughseries",
        title: "Rounder and Divider",
        description: "Premium quality equipment for efficient baking",
        img: "https://lemarkzindustries.com/admin/images/1694437604Semi%20Auto%20Rounder%20and%20Divider.png",
        products: [
            {
                modelName: "Semi Auto Rounder and Divider",
                modelNo: "divider",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694438229Semi%20Auto%20Rounder%20and%20Divider.png",
                    "https://lemarkzindustries.com/admin/images/1694253267RQL-101.png",
                ],
                desc: "A Semi-Automatic Rounder and Divider is a specialized piece of bakery equipment designed to streamline the dough dividing and rounding process in commercial bakeries and food production facilities. This versatile machine is used to portion and shape dough into consistent portions, making it an essential tool for creating uniform baked goods.",
                features: [
                    {
                        title: "Applications",
                        text:
                            ["Semi-Automatic Rounder and Divider machines are commonly used in bakeries and food production facilities to streamline the dough portioning and shaping process.",
                                "They are essential for preparing dough portions for various baked goods, including bread, rolls, buns, and other dough-based products."
                            ]
                    },
                    { title: "Maintenance", text: "Routine maintenance, including cleaning, lubrication of moving parts, and inspection, is essential to keep the machine in top working condition." },
                ],
                technical: {
                    Voltage: "220 - 380 V",
                    Power: "1.5 KW/h",
                    "Net Weight": "300 KGS",
                    Capacity: "30 Cuts (30-100)/ 36 Cuts( 20-70) / 26 Cuts (50-140) / 20 Cuts (60-180)",
                    "Flour Capacity": "30 Cuts (30-100)/ 36 Cuts( 20-70) / 26 Cuts (50-140) / 20 Cuts (60-180)"
                },
            },
            {
                modelName: "Full Auto Rounder and Divider",
                modelNo: "Full",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694440475Full%20Auto%20Rounder%20and%20divider.png",
                    "https://lemarkzindustries.com/admin/images/1694440475Full%20Auto%20Rounder%20and%20divider.png",
                ],
                desc: "A Full Automatic Rounder and Divider is an advanced and efficient bakery machine designed to automate the entire process of dough division and rounding in commercial bakeries and food production facilities. This high-capacity machine is essential for achieving precise and consistent portions of dough, streamlining production, and maintaining product quality.",
                features: [
                    {
                        title: "Applications",
                        text:
                            [
                                "Full Automatic Rounder and Divider machines are essential for efficiently preparing dough portions for various baked goods, including bread, rolls, buns, and other dough-based products.",
                                "They are commonly used in large bakeries and food production facilities to ensure consistency and quality in dough processing."
                            ]
                    },
                    { title: "Maintenance", text: "Routine maintenance, including cleaning, lubrication of moving parts, and inspection, is crucial to keep the machine in top working condition." },
                ],
                technical: {
                    Voltage: "220 - 380 V",
                    Power: "0.75 KW/h",
                    "Dimension (L*W*H)": "550 x 720 x 1350 mm",
                    "Net Weight": "290 KGS",
                    Capacity: "30 Cuts (30-100)/ 36 Cuts( 20-70) / 26 Cuts (50-140) / 20 Cuts (60-180)",
                    "Flour Capacity": "30 Cuts (30-100)/ 36 Cuts( 20-70) / 26 Cuts (50-140) / 20 Cuts (60-180)"
                },
            },
            {
                modelName: "36 pc Dough Divider",
                modelNo: "36 pc",
                images: [
                    "https://lemarkzindustries.com/admin/images/169444081536%20Pcs%20Dogh%20Divider.png",
                    "https://lemarkzindustries.com/admin/images/1694244127DKL-40.png",
                ],
                desc: "A 36-Piece Dough Divider is a specialized bakery equipment designed to accurately and efficiently divide a batch of dough into 36 equal portions. These machines are commonly used in commercial bakeries, pizzerias, and food production facilities where consistency and precision in dough portioning are essential.",
                features: [
                    {
                        title: "Applications",
                        text:
                            [
                                "A 36-Piece Dough Divider is used to efficiently divide dough into 36 equal portions, making it suitable for a wide range of baked goods, including bread, rolls, buns, and more.",
                                "It is a crucial piece of equipment in commercial settings where consistency and speed in dough portioning are paramount."
                            ]
                    },
                    { title: "Maintenance", text: "Routine maintenance, including cleaning, lubrication of moving parts, and inspection, is crucial to keep the machine operating efficiently." },
                ],
                technical: {
                    Voltage: "220 - 380 V",
                    Power: "0.75 KW/h",
                    "Dimension (L*W*H)": "410 x 520 x 1240 mm",
                    "Net Weight": "180 KGS",
                    Capacity: "36 Pcs (30 -180 g)",
                    "Flour Capacity": "36 Pcs (30 -180 g)"
                },
            },
            {
                modelName: "Manual Dough Divider",
                modelNo: "manual",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694440968Manul%20Dough%20Divider.png",
                    "https://lemarkzindustries.com/admin/images/1694244127DKL-40.png",
                ],
                desc: "A Manual Dough Divider is a bakery tool designed to portion dough into equal or desired-sized portions manually, without the need for electricity or automated mechanisms. It is commonly used in small bakeries, home kitchens, and settings where simplicity and precision in dough portioning are important.",
                features: [
                    { title: "Applications", text: "Ensures uniform dough portions for breads, buns, pizza bases, rolls, and pastries.Ideal for small bakeries, cafes, cloud kitchens, and home baking setups needing accurate dough division." },
                    { title: "Maintenance", text: "Routine maintenance, such as cleaning, lubrication of moving parts, and inspection, is essential to ensure the manual dough divider continues to operate smoothly." },
                ],
                technical: {
                    Voltage: "--",
                    Power: "--",
                    "Dimension (L*W*H)": "520 x 400 x 1040 mm",
                    "Net Weight": "160 KGS",
                    Capacity: "36 Pcs (30 -140 g)",
                    "Flour Capacity": "36 Pcs (30 -140 g)"
                },
            },
            {
                modelName: "Hydraulic Dough Divider",
                modelNo: "Hydraulic",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694441220Hydrolic%20Dough%20Divider.png",
                    "https://lemarkzindustries.com/admin/images/1694244127DKL-40.png",
                ],
                desc: "A Hydraulic Dough Divider is a specialized bakery machine designed to efficiently and accurately portion large quantities of dough into equal-sized pieces. These machines are commonly used in commercial bakeries, industrial food production facilities, and large-scale operations where high precision, consistency, and speed in dough portioning are essential.",
                features: [
                    {
                        title: "Applications",
                        text:
                            [
                                "A Hydraulic Dough Divider is used to efficiently divide dough into equal portions for various baked goods, including bread, rolls, buns, and more.",
                                "It is an essential piece of equipment in large-scale operations where precision, speed, and consistency in dough portioning are paramount."
                            ]
                    },
                    { title: "Maintenance", text: "Routine maintenance, including cleaning, lubrication of moving parts, and inspection, is crucial to keep the machine operating efficiently." },
                ],
                technical: {
                    Voltage: "380 V - 3~50Hz",
                    Power: "2.2 KW/h",
                    "Dimension (L*W*H)": "660 x 700 x 1060 mm",
                    "Net Weight": "400 KGS",
                    Capacity: "20 Cuts (135 - 900g) / 30 Cuts (90 - 800g)",
                    "Flour Capacity": "20 Cuts (135 - 900g) / 30 Cuts (90 - 800g)"
                },
            },
            {
                modelName: "Volumetric Divider",
                modelNo: "RQL-40",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694441397Volumetric%20Divider.png",
                    "https://lemarkzindustries.com/admin/images/1694441220Hydrolic%20Dough%20Divider.png",
                ],
                desc: "A Volumetric Divider is a specialized bakery machine used for portioning dough into equal-sized pieces based on volume. This type of divider is commonly used in commercial bakeries and food production facilities to ensure consistency in dough portioning for various baked goods.",
                features: [
                    {
                        title: "Applications",
                        text:
                            [
                                "A Volumetric Divider is used to precisely portion dough based on volume for various baked goods, including bread, rolls, buns, and more.",
                                "It is an essential piece of equipment in commercial settings where consistency and precision in dough portioning are paramount."
                            ]
                    },
                    { title: "Maintenance", text: "Routine maintenance, including cleaning, lubrication of moving parts, and inspection, is crucial to keep the machine operating efficiently." },
                ],
                technical: {
                    Voltage: "--",
                    Power: "3 KW",
                    "Dimension (L*W*H)": "700 x 1370 x 1600 mm",
                    Capacity: "2000 Pcs per hour",
                    Temperature: "--",
                    Speed: "--",
                    "Flour Capacity": "2000 Pcs per hour"

                },
            },
            {
                modelName: "Conical Rounder",
                modelNo: "Conical",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694441640Conical%20Rounder.png",
                    "https://lemarkzindustries.com/admin/images/1694441220Hydrolic%20Dough%20Divider.png",
                ],
                desc: "A Conical Rounder, also known as a Conical Dough Rounder, is a specialized bakery machine designed for shaping dough into round or oval forms, particularly for bread and rolls. This machine is commonly used in commercial bakeries and food production facilities to streamline the dough rounding process and ensure uniformity in the final products.",
                features: [
                    {
                        title: "Applications",
                        text:
                            [
                                "A Conical Rounder is used to efficiently round dough for various baked goods, including bread, rolls, buns, and more.",
                                "It is an essential piece of equipment in commercial settings where consistency and efficiency in dough rounding are crucial."
                            ]
                    },
                    { title: "Maintenance", text: "Routine maintenance, including cleaning, lubrication of moving parts, and inspection, is crucial to keep the machine operating efficiently." },
                ],
                technical: {
                    Voltage: "--",
                    Power: "0.75 KW",
                    "Dimension (L*W*H)": "1300 x 500 x 1050 mm",
                    "Net Weight": "--",
                    Capacity: "--",
                    Temperature: "--",
                    Speed: "--",
                    "Flour Capacity": "--"
                },
            },
        ],
    },
    {
        id: 12,
        category: "doughseries",
        title: "Toast Moulder",
        description: "Premium quality equipment for efficient baking",
        img: "https://lemarkzindustries.com/admin/images/1694437649Toast%20Moulder.png",
        products: [
            {
                modelName: "Toas Moulder",
                modelNo: "Toast Moulder",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694512444Toast%20Moulder.png",
                    "https://lemarkzindustries.com/admin/images/1694512444Toast%20Moulder.png",
                ],
                desc: "A toast moulder, also known as a bread moulder or bread rolling machine, is a specialized kitchen or bakery appliance designed for shaping and preparing bread dough for baking. It plays a crucial role in the production of various types of bread, including loaves, baguettes, and other baked goods. Here's a detailed description of a typical toast moulder:",
                features: [
                    {
                        title: "Construction and Design:",
                        text: [
                            "A toast moulder typically consists of a sturdy metal frame with various components made of stainless steel or food-grade materials.",
                            "It has a conveyor belt system that allows the bread dough to pass through the machine.",
                            "The machine usually includes adjustable rollers and pressure plates, which can be fine-tuned to control the thickness and shape of the dough."
                        ]
                    },
                    {
                        title: "Operation:",
                        text:
                            [
                                "To use a toast moulder, a baker or operator places a portion of bread dough onto the input side of the conveyor belt.",
                                "The dough is then gently fed into the machine, where a series of rotating rollers and pressure plates gradually shape and flatten it.",
                                "As the dough passes through, it is compressed and elongated into the desired shape, whether it's a long baguette or a loaf of bread."
                            ]
                    },
                    {
                        title: "Adjustability:",
                        text:
                            [
                                "Toast moulders often feature adjustable settings to accommodate different dough sizes, shapes, and recipes.",
                                "Operators can fine-tune parameters such as roller pressure, dough thickness, and conveyor speed to achieve the desired bread shape and texture.",
                            ]
                    },
                    {
                        title: "Versatility:",
                        text: "While primarily used for bread production, some toast moulders can handle various types of dough, including pizza dough and pastry dough, making them versatile tools in a bakery or kitchen."
                    },
                    {
                        title: "Benefits:",
                        text:
                            [
                                "Saves Time: A toast moulder significantly speeds up the bread preparation process compared to manual shaping, making it an essential tool in commercial bakeries with high production demands.",
                                "Consistency: It ensures uniformity in the size and shape of bread, resulting in more consistent baking and presentation.",
                                "Labor Efficiency: Reduces the need for skilled manual labor in shaping dough, allowing bakers to focus on other aspects of production.",
                                "Improved Texture: Properly moulded dough can lead to a better texture and crumb structure in the finished bread."
                            ]
                    },
                    {
                        title: "Maintenance:",
                        text: "Regular cleaning and maintenance are essential to keep the toast moulder in optimal working condition. This includes cleaning rollers, belts, and other components.",
                    },
                ],
                technical: {
                    Voltage: "220 - 380 V",
                    Power: "1.1 KW/h",
                    "Dimension (L*W*H)": "980 x 1090 x 1580 mm",
                    "Net Weight": "220 KGS",
                    Capacity: "--",
                    Temperature: "--",
                    Speed: "--",
                    "Flour Capacity": "--",
                },
            },
        ],
    },

    {
        id: 13,
        category: "doughseries",
        title: "Bread Slicer",
        description: "Premium quality equipment for efficient baking",
        img: "https://lemarkzindustries.com/admin/images/1694437684Bread%20Slicer.png",
        products: [
            {
                modelName: " Bread Slicer 10/12/16 mm",
                modelNo: "Bread Slicer",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694513497Bread%20Slicer.png",
                    "https://lemarkzindustries.com/admin/images/1694513497Bread%20Slicer.png",
                ],
                desc: "A bread slicer is a kitchen appliance or a commercial tool used to cut bread into evenly sized and uniform slices. It is an essential piece of equipment in bakeries, sandwich shops, and households where freshly baked or store-bought loaves of bread need to be portioned neatly. Here's a detailed description of a typical bread slicer:",
                features: [
                    {
                        title: "Construction and Design:",
                        text: [
                            "Bread slicers come in various sizes, from compact countertop models for home use to larger, freestanding units for commercial bakeries.",
                            "The main components of a bread slicer typically include a sturdy frame, a slicing mechanism, and adjustable slicing guides or blades.",
                            "The frame is usually made of stainless steel or durable plastic to ensure longevity and ease of cleaning.",
                            "The slicing mechanism can be either manual, semi-automatic, or automatic, depending on the type and purpose of the slicer."
                        ]
                    },
                    {
                        title: "Operation:",
                        text:
                            [
                                "To use a bread slicer, an operator places a whole loaf of bread or a portion of it onto the slicer's platform.",
                                "The slicing guides or blades are adjusted to the desired thickness of the bread slices.",
                                "The operator then pushes the loaf through the slicing mechanism, which cuts it into even slices."
                            ]
                    },
                    {
                        title: "Adjustability:",
                        text: "Bread slicers often feature adjustable slicing guides or blades, allowing users to choose the thickness of the slices. This is particularly important for accommodating different types of bread, from thin sandwich bread to thick artisan loaves."
                    },
                    {
                        title: "Safety Features:",
                        text: "Many modern bread slicers include safety features such as finger guards and automatic shutoff mechanisms to prevent accidents and ensure user safety."
                    },
                    {
                        title: "Versatility:",
                        text: "While primarily used for slicing bread, some bread slicers can also be used for slicing other baked goods like cakes and pastries."
                    },
                    {
                        title: "Benefits:",
                        text:
                            [
                                "Consistency: Bread slicers ensure that each slice is of uniform thickness, resulting in a professional and visually appealing presentation.",
                                "Time Efficiency: In commercial settings, bread slicers significantly speed up the slicing process compared to manual methods, saving time and labor.",
                                "Reduced Waste: Precise slicing helps minimize bread waste, as there is less likelihood of uneven or irregular slices.",
                                "Convenience: Bread slicers are convenient for both home and commercial use, making it easy to prepare sandwiches or toast."
                            ]
                    },
                    {
                        title: "Maintenance:",
                        text: "Regular cleaning and maintenance are essential to keep the bread slicer functioning smoothly. This includes cleaning slicing blades and removing any bread crumbs or debris.",
                    },
                ],
                technical: {
                    Voltage: "220 V - 50Hz",
                    Power: "0.25 KW/h",
                    "Dimension (L*W*H)": "650 x 660 x 760 mm / 750 x 760 x 760 mm",
                    "Net Weight": "85 KGS",
                    Capacity: "--",
                    Temperature: "--",
                    Speed: "--",
                    "Flour Capacity": "--",
                },
            },
        ],
    },
    {
        id: 14,
        category: "kitchenequipments",
        title: "Popcorn and candy Floss Machine",
        description: "Premium quality equipment for efficient baking",
        img: "https://lemarkzindustries.com/admin/images/1694515337Popcorn%20and%20candy%20floss%20Poster.png",
        products: [
            {
                modelName: "Candy Floss with Cart and Without Cart",
                modelNo: "Candy Floss",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694516644Candy%20Floss%20Machine.png",
                    "https://lemarkzindustries.com/admin/images/1694516644Candy%20Floss%20Machine.png",
                ],
                desc: "A candy floss machine, also known as a cotton candy machine, is a delightful and popular confectionery appliance used to create sweet and fluffy cotton candy from spun sugar. These machines are commonly found at fairs, carnivals, amusement parks, and various events. Here's a detailed description of a typical candy floss machine:",
                features: [
                    {
                        title: "Construction and Design:",
                        text: [
                            "A candy floss machine typically consists of a base or housing made of stainless steel or other food-grade materials, ensuring durability and cleanliness.",
                            "It features a spinning head or bowl, which is a central component where the magic of cotton candy creation takes place.",
                            "Many machines have a clear, see-through bubble or dome that covers the spinning head, allowing spectators to watch the candy floss being made.",
                        ]
                    },
                    {
                        title: "Operation:",
                        text:
                            [
                                "The primary ingredient for making cotton candy is granulated sugar, often pre-mixed with food coloring to create vibrant colors and flavors.",
                                "To operate the machine, the user pours the colored and flavored sugar into a designated reservoir, often located at the top of the machine.",
                                "The machine's heating element melts the sugar, turning it into a liquid state.",
                                "As the melted sugar is spun out of tiny holes in the spinning head, it is exposed to the air, causing it to solidify into fine, sugary threads that collect on a rotating cone or stick."
                            ]
                    },
                    {
                        title: "Adjustability:",
                        text: "Candy floss machines usually have adjustable settings for temperature, spinning speed, and sugar flow rate. These settings allow the operator to fine-tune the texture and size of the cotton candy."
                    },
                    {
                        title: "Safety Features:",
                        text: "Many modern candy floss machines include safety features like built-in fuses and overheating protection to ensure safe operation."
                    },
                    {
                        title: "Versatility:",
                        text: "While cotton candy is the most common product made with these machines, some models can also be used to create other spun sugar treats, such as spun sugar nests or sculptures."
                    },
                    {
                        title: "Benefits:",
                        text:
                            [
                                "Entertainment Value: Candy floss machines provide a fun and interactive experience for both operators and spectators, as they can watch the transformation of sugar into fluffy candy.",
                                "Profitable Concession: In commercial settings, such as fairs and amusement parks, cotton candy is a popular and profitable concession stand item.",
                                "Customization: Users can create a variety of cotton candy flavors and colors to cater to different tastes and preferences.",
                                "Nostalgia: Cotton candy is a nostalgic treat enjoyed by people of all ages, making it a hit at events and parties."
                            ]
                    },
                    {
                        title: "Maintenance:",
                        text: "Routine cleaning is essential to keep the candy floss machine in good working condition. This includes cleaning the spinning head, sugar reservoir, and any removable parts.",
                    },
                ],
                technical: {
                    Voltage: "220-240V / 50-60Hz",
                    Power: "0.9 KW/h",
                    "Dimension (L*W*H)": "460 x 460 x 501 mm",
                    "Net Weight": "--",
                    Capacity: "--",
                    Temperature: "--",
                    Speed: "--",
                    "Flour Capacity": "--",
                },
            },
        ],
    },

    {
        id: 15,
        category: "kitchenequipments",
        title: "Fast Food Equipment",
        description: "Premium quality equipment for efficient baking",
        img: "https://lemarkzindustries.com/admin/images/1694515975FastFood_Poster-removebg-preview.png",
        products: [
            {
                modelName: "Sandwich Griller Double Head, Single Head",
                modelNo: "sandwich griller",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694518763Contact%20grill%20(1).png",
                    "https://lemarkzindustries.com/admin/images/1694515975FastFood_Poster-removebg-preview.png",
                ],
                desc: "A sandwich griller, also known as a panini press or sandwich press, is a versatile kitchen appliance designed for grilling and toasting sandwiches, paninis, and other similar items. It's a popular choice for both home kitchens and commercial establishments like cafes and delis",
                features: [
                    {
                        title: "Maintenance",
                        text:
                            [
                                "Cleaning a sandwich griller is relatively straightforward. Many models have removable, dishwasher-safe plates for easy cleaning.",
                                "Regular maintenance includes wiping down the exterior, cleaning the cooking plates, and ensuring that the hinge mechanism functions smoothly."
                            ]
                    },
                ],
                technical: {
                    Voltage: "220-240V / 50-60Hz",
                    Power: "2.2 KW/h",
                    "Dimension (L*W*H)": "--",
                    "Net Weight": "--",
                    Capacity: "--",
                    Temperature: "--",
                    Speed: "--",
                    "Flour Capacity": "--"
                },
            },
            {
                modelName: "Fryers",
                modelNo: "fryers",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694519755Fryer-removebg-preview.png",
                    "https://lemarkzindustries.com/admin/images/1694515975FastFood_Poster-removebg-preview.png",
                ],
                desc: "A fryer is a kitchen appliance designed for the cooking method of deep frying, which involves submerging food in hot oil to create crispy, golden-brown exteriors and deliciously cooked interiors. Fryers come in various sizes and designs, ranging from small countertop models for home use to large, commercial fryers for restaurants and fast-food establishments.",
                features: [
                    {
                        title: "Benefits:",
                        text:
                            [
                                "Speed and Efficiency: Deep frying cooks food quickly, resulting in crispy exteriors and tender interiors.",
                                "Consistency: Fryers maintain consistent oil temperatures, ensuring uniform cooking and crispiness.",
                                "Flavor Enhancement: Frying enhances the flavor and texture of many foods, making them more enjoyable.",
                                "Versatile Cooking: Fryers are suitable for preparing a wide range of dishes, from savory to sweet."
                            ]
                    },
                    {
                        title: "Maintenance:",
                        text: "Regular maintenance involves changing the cooking oil, cleaning the fryer's components, and ensuring that the heating element or burner is free from debris and residue."
                    },
                ],
                technical: {
                    Voltage: "220-240V / 50-60Hz",
                    Power: "2.5 KW/h",
                    "Dimension (L*W*H)": "According to requirement",
                    "Net Weight": "--",
                    Capacity: "On Requirement",
                    Temperature: "--",
                    Speed: "--",
                    "Flour Capacity": "On Requirement"
                },
            },
            {
                modelName: "Griddle",
                modelNo: "griddle",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694522486Griddle-removebg-preview.png",
                    "https://lemarkzindustries.com/admin/images/1694515975FastFood_Poster-removebg-preview.png",
                ],
                desc: "A griddle is a flat, solid cooking surface typically made of metal, often used for cooking a variety of foods, from pancakes and eggs to burgers and vegetables. Griddles are a versatile and essential kitchen tool found in both residential and commercial settings.",
                features: [
                    {
                        title: "Benefits:",
                        text:
                            [
                                "Large Cooking Area: Griddles provide ample space for cooking multiple items simultaneously, making them ideal for preparing meals for family and guests.",
                                "Even Heat Distribution: The flat surface ensures uniform heat distribution, reducing the risk of hot spots and uneven cooking.",
                                "Easy Cleanup: Many griddles have non-stick surfaces, making them easy to clean after use.",
                                "Versatile Cooking: Griddles offer the flexibility to cook a variety of dishes, making them a valuable addition to any kitchen."
                            ]
                    },
                    {
                        title: "Maintenance",
                        text:
                            [
                                "Cleaning a griddle typically involves wiping down the surface with a damp cloth or sponge. Some models have removable, dishwasher-safe plates for easy cleaning.",
                                "For cast iron griddles, seasoning with oil is important to maintain their non-stick properties and prevent rust."
                            ]
                    },
                ],
                technical: {
                    Voltage: "220-240V / 50-60Hz",
                    Power: "2.5 KW/h",
                    "Dimension (L*W*H)": "According to requirement",
                    "Net Weight": "--",
                    Capacity: "On Requirement",
                    Temperature: "--",
                    Speed: "--",
                    "Flour Capacity": "On Requirement"
                },
            },
            {
                modelName: "Waffle Baker",
                modelNo: "wafflebaker",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694589006Waffle_Baker-removebg-preview.png",
                    "https://lemarkzindustries.com/admin/images/1694515975FastFood_Poster-removebg-preview.png",
                ],
                desc: "A waffle baker, also commonly referred to as a waffle iron or waffle maker, is a kitchen appliance specifically designed for creating delicious, crispy, and perfectly textured waffles. This handy device consists of two hinged metal plates with a patterned grid on the inside, which helps shape the waffles into their signature grid-like pattern.",
                features: [
                    {
                        title: "Non-Stick Plates",
                        text: "To ensure easy waffle removal and minimal mess, the cooking plates are often coated with a non-stick surface. This prevents the waffle batter from sticking to the plates and makes cleanup a breeze."
                    },
                ],
                technical: {
                    Voltage: "220-240V / 50-60Hz",
                    Power: "1 KW/h -- 2.2 KW/h",
                    "Dimension (L*W*H)": "According to requirement",
                    "Net Weight": "--",
                    Capacity: "On Requirement",
                    Temperature: "--",
                    Speed: "--",
                    "Flour Capacity": "On Requirement"
                },
            },
            {
                modelName: "Crepe Maker",
                modelNo: "crepemaker",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694589289Crepe_Maker-removebg-preview.png",
                    "https://lemarkzindustries.com/admin/images/1694515975FastFood_Poster-removebg-preview.png",
                ],
                desc: "A crepe maker, also known as a crepe griddle or crepe pan, is a specialized kitchen appliance designed for effortlessly crafting thin, delicate, and perfectly cooked crepes. This culinary tool offers a flat cooking surface specifically optimized for cooking these versatile, thin pancakes.",
                features: [
                    {
                        title: "Easy to Clean",
                        text: "The non-stick surface and minimalistic design of crepe makers make them easy to clean. They can usually be wiped down with a damp cloth or sponge after use."
                    },
                    {
                        title: "Portable and Compact",
                        text: "Smaller crepe makers are designed to be portable and easy to store, making them suitable for home kitchens of all sizes."
                    },
                ],
                technical: {
                    Voltage: "220V / 50Hz",
                    Power: "3-4-6-8 KW/h",
                    "Dimension (L*W*H)": "According to requirement",
                    "Net Weight": "--",
                    Capacity: "On Requirement",
                    Temperature: "--",
                    Speed: "--",
                    "Flour Capacity": "On Requirement"
                },
            },
            {
                modelName: "Pan Cake",
                modelNo: "pancake",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694589615Pan_Cake_Maker-removebg-preview.png",
                    "https://lemarkzindustries.com/admin/images/1694515975FastFood_Poster-removebg-preview.png",
                ],
                desc: "A pancake maker, also known as an electric pancake griddle or pancake machine, is a kitchen appliance designed specifically for making pancakes with ease and convenience. It simplifies the pancake cooking process and offers several features tailored for efficient pancake production.",
                features: [
                    {
                        title: "Non-Stick Surface",
                        text: "The cooking surface is typically coated with a non-stick material, which prevents pancakes from sticking and facilitates easy flipping and removal. This feature also makes cleaning up a breeze."
                    },
                    {
                        title: "Compact and Storage-Friendly",
                        text: "Pancake makers are designed to be compact and easy to store, often featuring a vertical storage option, making them suitable for kitchens with limited counter space."
                    },
                ],
                technical: {
                    Voltage: "220-240V / 50-60Hz",
                    Power: "2.4 KW/h",
                    "Dimension (L*W*H)": "According to requirement",
                    "Net Weight": "--",
                    Capacity: "On Requirement",
                    Temperature: "--",
                    Speed: "--",
                    "Flour Capacity": "On Requirement"
                },
            },
            {
                modelName: "Shawarma Machine",
                modelNo: "shawarma",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694590005Shawrma%20Machine.png",
                    "https://lemarkzindustries.com/admin/images/1694515975FastFood_Poster-removebg-preview.png",
                ],
                desc: "A Shawarma machine, also known as a Shawarma grill or Shawarma rotisserie, is a specialized piece of cooking equipment designed for preparing and cooking delicious Shawarma, a popular Middle Eastern street food. Shawarma consists of thinly sliced marinated meat, often chicken, beef, lamb, or a mixture of these, which is cooked on a vertical rotisserie.",
                features: [
                    {
                        title: "Visual Appeal",
                        text: "Shawarma machines are not only functional but also serve as a visually captivating centerpiece in restaurants and food establishments. The sight of the meat turning on the rotisserie is both appetizing and enticing to customers."
                    },
                ],
                technical: {
                    Voltage: "--",
                    Power: "--",
                    "Dimension (L*W*H)": "According to requirement",
                    "Net Weight": "--",
                    Capacity: "On Requirement",
                    Temperature: "--",
                    Speed: "--",
                    "Flour Capacity": "On Requirement"
                },
            },
            {
                modelName: "Commerical Blender",
                modelNo: "blender",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694590275Blender.png",
                    "https://lemarkzindustries.com/admin/images/1694515975FastFood_Poster-removebg-preview.png",
                ],
                desc: "A commercial blender, often referred to as an industrial blender, is a robust and high-capacity kitchen appliance designed for heavy-duty blending tasks in professional foodservice establishments. These blenders are built to withstand continuous use, blend large quantities of ingredients, and deliver consistent results quickly.",
                features: [
                    {
                        title: "Heavy-Duty Construction",
                        text: "Commercial blenders are constructed with durability in mind. They feature a sturdy and rugged build, often made of materials like stainless steel or heavy-duty plastic, designed to withstand the demands of a busy commercial kitchen."
                    },
                    {
                        title: "Easy-to-Clean Design",
                        text: "Commercial blenders are engineered for easy cleaning. Our models have removable blades and containers that can be quickly disassembled and cleaned, making them suitable for high-volume use."
                    },
                ],
                technical: {
                    Voltage: "220 V / 50Hz",
                    Power: "1.6 KW/h",
                    "Dimension (L*W*H)": "According to requirement",
                    "Net Weight": "--",
                    Capacity: "On Requirement",
                    Temperature: "--",
                    Speed: "23000 ~ 26000 R/M",
                    "Flour Capacity": "On Requirement"
                },
            },
            {
                modelName: "Vegetable Cutter",
                modelNo: "cutter",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694590626Vegetable%20Cutter.png",
                    "https://lemarkzindustries.com/admin/images/1694515975FastFood_Poster-removebg-preview.png",
                ],
                desc: "A vegetable cutter, also known as a vegetable slicer or vegetable chopper, is a kitchen tool designed to simplify the process of cutting, chopping, and slicing vegetables. It streamlines food preparation tasks, saves time, and helps achieve uniform and consistent cuts.",
                features: [
                    {
                        title: "Blades and Attachments",
                        text: "The most essential component of a vegetable cutter is its blades and attachments. These devices feature different blades and cutting mechanisms tailored for specific vegetable preparation tasks."
                    },
                    {
                        title: "Compact and Storage-Friendly",
                        text: "Our manual vegetable cutters are compact and easy to store in a kitchen drawer or cabinet. Electric models may require more counter space."
                    },
                ],
                technical: {
                    Voltage: "220 V / 50Hz",
                    Power: "1.6 KW/h",
                    "Dimension (L*W*H)": "According to requirement",
                    "Net Weight": "--",
                    Capacity: "On Requirement",
                    Temperature: "--",
                    Speed: "--",
                    "Flour Capacity": "On Requirement"
                },
            },
            {
                modelName: "Efficient Meat Slicer: Slice Meat with Precision and Ease",
                modelNo: "meat slicer",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694591195Meat_slicer-removebg-preview.png",
                    "https://lemarkzindustries.com/admin/images/1694515975FastFood_Poster-removebg-preview.png",
                ],
                desc: "A meat slicer, also known as a deli slicer or food slicer, is a kitchen appliance designed for efficiently and precisely slicing various types of meat, including deli meats, roasts, and cured meats. It is commonly used in both home kitchens and commercial food establishments like delis, sandwich shops, and butcher shops.",
                features: [
                    {
                        title: "Circular Blade",
                        text: "The central component of a meat slicer is its circular blade, which is made from high-quality stainless steel and is exceptionally sharp. The blade can vary in size, with larger blades suitable for slicing larger cuts of meat."
                    },
                    {
                        title: "Adjustable Thickness Control",
                        text: "Meat slicers come with a thickness control knob or dial that allows users to adjust the thickness of the slices to their desired level. This feature is vital for achieving consistent results and accommodating different types of meats and slicing preferences."
                    },
                    {
                        title: "Food Carriage",
                        text: "The food carriage, or platform, is where you place the meat to be sliced. It usually includes a metal or plastic guard to hold the meat in place and prevent your hands from coming into contact with the blade during operation."
                    },
                    {
                        title: "Non-Slip Feet",
                        text: "To ensure stability during operation, meat slicers are equipped with non-slip rubber or suction cup feet that keep the appliance firmly in place on the countertop."
                    },
                    {
                        title: "Easy to Clean",
                        text: "The design of meat slicers often allows for easy disassembly and cleaning. The blade, food carriage, and other removable parts are typically dishwasher-safe or easy to clean by hand."
                    },
                ],
                technical: {
                    Voltage: "220 V / 50Hz",
                    Power: "--",
                    "Dimension (L*W*H)": "According to requirement",
                    "Net Weight": "--",
                    Capacity: "On Requirement",
                    Temperature: "--",
                    Speed: "--",
                    "Flour Capacity": "On Requirement"
                },
            },
            {
                modelName: "Grill to Perfection: Electric and Gas Barbecue Machines for Your Culinary Adventures - LIKE",
                modelNo: [
                    `Elevate Your Outdoor Cooking Game with LIKE's Electric and Gas Barbecue Machines"`,
                    `Discover the Best in Grilling: LIKE's Barbecue Machines for Every Grill Master"`
                ],
                images: [
                    "https://lemarkzindustries.com/admin/images/1694591738Elctric_Barbeque-removebg-preview.png",
                    "https://lemarkzindustries.com/admin/images/1694515975FastFood_Poster-removebg-preview.png",
                ],
                desc: "Are you ready to take your outdoor cooking to the next level? Look no further than LIKE's outstanding selection of electric and gas barbecue machines. Whether you're a seasoned grill master or a barbecue enthusiast, our top-of-the-line grills are designed to deliver exceptional results and elevate your culinary adventures.",
                features: [
                    {
                        title: "Precision Cooking with Electric Grills",
                        text: [
                            "Our electric barbecue machines offer precise temperature control, allowing you to grill your favorite meats and vegetables to perfection.",
                            "Experience hassle-free ignition and consistent heating for even cooking every time."
                        ]
                    },
                    {
                        title: "Power and Performance with Gas Grills",
                        text: [
                            "LIKE's gas barbecue machines are powered by high-performance burners, delivering quick preheating and efficient cooking.",
                            "Enjoy the convenience of adjustable flame controls for customized grilling."
                        ]
                    },
                    {
                        title: "Quality Craftsmanship",
                        text: [
                            "Crafted with high-quality materials, our barbecue machines are built to withstand the rigors of outdoor cooking.",
                            "Stainless steel construction ensures durability and resistance to rust and corrosion."
                        ]
                    },
                    {
                        title: "Spacious Cooking Areas",
                        text: [
                            "Our grills feature spacious cooking areas, perfect for hosting outdoor gatherings and cooking for a crowd.",
                            "Multiple burners on gas grills provide versatility and allow for simultaneous cooking of various dishes."
                        ]
                    },
                    {
                        title: "Easy to Clean",
                        text: [
                            "LIKE's barbecue machines are designed for easy maintenance. Removable grill grates and grease trays simplify the cleaning process.",
                            "Spend more time enjoying your meal and less time on cleanup."
                        ]
                    },
                    {
                        title: "Versatile Cooking Options",
                        text: [
                            "Whether you're grilling, roasting, smoking, or searing, our barbecue machines offer versatile cooking options to suit your culinary preferences.",
                            "Experiment with a wide range of flavors and techniques."
                        ]
                    },
                    {
                        title: "Why Choose LIKE Barbecue Machines?",
                        text: [
                            "When it comes to outdoor cooking, quality and performance matter. With LIKE, you get grills that are engineered for excellence. Elevate your barbecue game and create memorable moments with friends and family in your backyard.",
                            "Explore our range of electric and gas barbecue machines today. Join the ranks of satisfied grill enthusiasts who trust LIKE for their outdoor culinary adventures. Get ready to grill to perfection with the best in the business."
                        ]
                    },
                ],
                technical: {
                    Voltage: "--",
                    Power: "--",
                    "Dimension (L*W*H)": "According to requirement",
                    "Net Weight": "--",
                    Capacity: "On Requirement",
                    Temperature: "--",
                    Speed: "--",
                    "Flour Capacity": "On Requirement"
                },
            },
            {
                modelName: "Quench Your Thirst: Slush Machine and Juice Dispenser Solutions - LIKE",
                modelNo: "Beat the heat and satisfy your cravings with LIKE's slush machine and juice dispenser. Discover high-quality, versatile equipment perfect for refreshing beverages and icy treats.",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694593419Slush%20And%20dispenser%20Machine.png",
                    "https://lemarkzindustries.com/admin/images/1694515975FastFood_Poster-removebg-preview.png",
                ],
                desc: "Are you looking for the ultimate solution to keep your customers refreshed and satisfied during hot summer days or year-round? Look no further than LIKE's exceptional range of slush machines and juice dispensers. Our high-performance equipment is designed to quench your thirst for delicious, icy treats and flavorful beverages.",
                features: [
                    {
                        title: "Slush Machines for Frozen Delights",
                        text: [
                            "Indulge in frozen goodness with our slush machines, perfect for creating mouthwatering slushies, frozen cocktails, and granitas.",
                            "Experience consistent and reliable performance, ensuring a smooth and icy texture every time."
                        ]
                    },
                    {
                        title: "Juice Dispensers for Fresh Flavors",
                        text: [
                            "LIKE's juice dispensers are ideal for serving fresh, chilled fruit juices, iced teas, and other refreshing beverages.",
                            "Multiple dispensing options and flavor combinations make customization a breeze."
                        ]
                    },
                    {
                        title: "User-Friendly Operation",
                        text: [
                            "Our slush machines and juice dispensers are designed with user-friendliness in mind, allowing for easy operation and minimal maintenance.",
                            "Intuitive controls make serving and refilling a breeze, even during busy periods."
                        ]
                    },
                    {
                        title: "High Capacity and Versatility",
                        text: [
                            "Enjoy the convenience of high-capacity containers that cater to large gatherings or bustling commercial settings.",
                            "Both our slush machines and juice dispensers offer versatile options to cater to a wide range of beverage preferences."
                        ]
                    },
                    {
                        title: "Durable Construction",
                        text: [
                            "Crafted with durable materials, our equipment is built to withstand the demands of commercial use while maintaining a sleek and appealing design.",
                            "Easy-to-clean components ensure longevity and hygiene."
                        ]
                    },
                    {
                        title: "Visual Appeal and Aesthetic Design",
                        text: [
                            "Our slush machines and juice dispensers are not just functional; they also enhance the visual appeal of your beverage station or bar area.",
                            "Choose from various designs and finishes to complement your establishment's style."
                        ]
                    },
                    {
                        title: "Why Choose LIKE?",
                        text: [
                            "At LIKE, we are dedicated to delivering top-quality slush machines and juice dispensers that cater to your beverage service needs. Our equipment is trusted by businesses and individuals alike for its reliability, efficiency, and versatility.",
                            "Elevate your refreshment game and beat the heat with LIKE's slush machines and juice dispensers. Explore our range and quench your thirst with delicious and satisfying beverages."
                        ]
                    },
                ],
                technical: {
                    Voltage: "220 V / 50Hz",
                    Power: "--",
                    "Dimension (L*W*H)": "According to requirement",
                    "Net Weight": "--",
                    Capacity: "On Requirement",
                    Temperature: "--",
                    Speed: "--",
                    "Flour Capacity": "On Requirement"
                },
            },
            {
                modelName: "Keep Food Fresh and Hot: Warming Showcase Solutions - LIKE",
                modelNo: "Elevate your foodservice with LIKE's warming showcase. Explore high-quality, temperature-controlled displays designed to keep your dishes fresh and piping hot, ready to delight your customers.",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694593754Warming%20ShowCase.png",
                    "https://lemarkzindustries.com/admin/images/1694515975FastFood_Poster-removebg-preview.png",
                ],
                desc: "Are you in search of the perfect solution to maintain the freshness and warmth of your culinary creations, whether you're in the catering business or running a bustling restaurant? Look no further than LIKE's exceptional range of warming showcases. Our temperature-controlled displays are designed to elevate your food presentation, ensuring that every dish is served fresh and piping hot.",
                features: [
                    {
                        title: "Precise Temperature Control",
                        text: [
                            "LIKE's warming showcases are equipped with state-of-the-art temperature control systems, allowing you to maintain your dishes at the ideal serving temperature.",
                            "Achieve consistency and ensure your customers enjoy each meal at its best."
                        ]
                    },
                    {
                        title: "Sleek Design and Visibility",
                        text: [
                            "Our showcases are designed with an emphasis on aesthetics and visibility, ensuring your food is both well-preserved and beautifully presented.",
                            "Showcase your culinary creations and entice customers with the tempting display."
                        ]
                    },
                    {
                        title: "Efficient Lighting",
                        text: [
                            "Illuminated displays enhance the visibility of your dishes, making them more appealing to customers.",
                            "Energy-efficient LED lighting provides optimal illumination while minimizing power consumption."
                        ]
                    },
                    {
                        title: "Spacious Capacity",
                        text: [
                            "LIKE's warming showcases offer ample capacity to accommodate a variety of dishes, from entrees and sides to desserts and pastries.",
                            "Adjustable shelves provide flexibility in arranging your food items."
                        ]
                    },
                    {
                        title: "Easy Maintenance",
                        text: [
                            "Cleaning and maintenance are hassle-free with removable components and easy-to-clean materials.",
                            "Spend less time on upkeep and more time delighting your customers."
                        ]
                    },
                    {
                        title: "Durability and Longevity",
                        text: [
                            "Crafted with high-quality materials, our showcases are built to withstand the demands of commercial use while maintaining an appealing appearance.",
                            "Rugged construction ensures a long service life."
                        ]
                    },
                    {
                        title: "Why Choose LIKE?",
                        text: [
                            "At LIKE, we take pride in delivering top-quality warming showcases that cater to your foodservice needs. Our showcases are trusted by professionals and businesses alike for their reliability, efficiency, and visual appeal.",
                            "Elevate your food presentation and ensure that every dish is served at its best with LIKE's warming showcases. Explore our range and experience the perfect blend of functionality and aesthetics."
                        ]
                    },
                ],
                technical: {
                    Voltage: "--",
                    Power: "--",
                    "Dimension (L*W*H)": "According to requirement",
                    "Net Weight": "--",
                    Capacity: "On Requirement",
                    Temperature: "--",
                    Speed: "--",
                    "Flour Capacity": "On Requirement"
                },
            },
        ],
    },

    {
        id: 16,
        category: "showcases",
        title: "Cake Display Counters",
        description: "Premium quality equipment for efficient baking",
        img: "https://lemarkzindustries.com/admin/images/1694613705Cooling_Showcase-removebg-preview.png",
        products: [
            {
                modelName: "Customized Display Counters",
                modelNo: "display counter",
                images: [
                    "https://lemarkzindustries.com/admin/images/1694613705Cooling_Showcase-removebg-preview.png",
                    "https://lemarkzindustries.com/admin/images/17319988541694679773Counter.png",
                ],
                desc: "Welcome to LEMARKZ, where we turn your sweet dreams into stunning reality with our Customized Cake display showcase. Elevate your bakery's presentation and customer experience with these beautifully crafted showcases. Discover how our custom counters can transform your cake display while enticing more customers to indulge in your delicious creations.",
                features: [
                    {
                        title: "Why Choose Our Cake display counter?",
                        text: [
                            "Tailored to Your Vision: At LEMARKZ, we understand that your bakery has a unique personality and style. Our artisans work closely with you to design a cooling display counter or non cooling display counter that aligns perfectly with your brand image. Whether you prefer a classic, modern, or eclectic design, we've got you covered.",
                            "Quality That Lasts: We believe in quality craftsmanship. Our cake display counters are constructed using premium materials to ensure they withstand the demands of a busy bakery. You can count on these counters for durability and long-lasting beauty.",
                        ]
                    },
                    {
                        title: "Order Your Custom Cake Display Counter Today",
                        text:
                            [
                                "Ready to transform your bakery's presentation presence? Order your Customized Cake Display Counter from LEMARKZ today and watch as your bakery's reputation and revenue reach new heights.",
                                "Contact us to discuss your vision, and let us create a custom counter that not only showcases your cakes beautifully but also brings more customers through your bakery's doors, both online and in-store. Your sweet success story begins with us!",
                            ]
                    },
                ],
                technical: {
                    Voltage: "--",
                    Power: "--",
                    "Dimension (L*W*H)": "According to requirement",
                    "Net Weight": "--",
                    Capacity: "On Requirement",
                    Temperature: "--",
                    Speed: "--",
                    "Flour Capacity": "On Requirement",
                },
            },
        ],
    },
    {
        id: 17,
        category: "all",
        title: "Gas Deck Oven",
        description: "Premium quality equipment for efficient baking",
        img: "https://lemarkzindustries.com/admin/images/1753947672Catalog%20-%20images%2017.jpg",
        modelName: "2 Deck 2 Tray Gas Oven",
        modelNo: "DKL-202",
        images: [
            "https://lemarkzindustries.com/admin/images/1694518763Contact%20grill%20(1).png",
            "https://lemarkzindustries.com/admin/images/1694519755Fryer-removebg-preview.png",
            "https://lemarkzindustries.com/admin/images/1694522486Griddle-removebg-preview.png",
        ],
        desc:
            "A double-deck oven for professional use — ideal for high-volume baking operations.",
        features: [
            {
                title: "Applications",
                text: "Perfect for commercial bakeries and large restaurants.",
            },
            {
                title: "Maintenance",
                text: "Clean trays after each use and check gas lines regularly.",
            },
        ],
        technical: {
            Voltage: "220V / 50Hz",
            Power: "6.4 kW/h",
            Dimension: "1200×850×1200 mm",
            "Net Weight": "140 KGS",
            "Temperature Range": "50°C – 300°C",
            "Tray Size": "400×600 mm",
        },
    },
];

export default ProductCategory;
