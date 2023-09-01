'use strict'

module.exports = {
    async up(queryInterface, Sequelize) {
        const [categories] = await queryInterface.sequelize.query('SELECT id FROM categories;')

        await queryInterface.bulkInsert('dishes', [
            {
                name: 'Prosciutto di Parma',
                details: 'Presunto italiano cru de altíssima qualidade cortado em tiras finas.',
                image_url: 'https://i.imgur.com/JxikFZv.jpg',
                vegetarian: false,
                price: 19.95,
                category_id: categories[0].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Bruschetta di Mozzarella',
                details: 'Pães italianos tostados, acompanhados de mozzarella e molho sugo.',
                image_url: 'https://i.imgur.com/gfgkpDX.jpg',
                vegetarian: true,
                price: 20.95,
                category_id: categories[0].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Cotechinos',
                details:
                    'Deliciosa linguiça suína artesanal italiana. Acompanha lentilhas finamente temperadas.',
                    image_url: 'https://i.imgur.com/7DoUycn.jpg',
                vegetarian: false,
                price: 23.45,
                category_id: categories[0].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Insalata di Aragosta',
                details:
                    'Saborosa salada de lagosta cozida no vapor e finalizada no carvão. Acompanha molho especial e tomates.',
                    image_url: 'https://i.imgur.com/C5NAJIK.jpg',
                vegetarian: false,
                price: 39.95,
                category_id: categories[0].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Insalata Caprese',
                details:
                    'Salada refinada, com folhas de alface, tomates verdes, amarelos e vermelhos, mozzarella e azeite de altíssima qualidade.',
                    image_url: 'https://i.imgur.com/4SY2aKs.jpg',
                vegetarian: true,
                price: 29.95,
                category_id: categories[0].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Parmigiano Reggiano Tagliato',
                details:
                    'O melhor queijo nativo da região de Parma. Com altas notas de umami, e um sabor intenso.',
                    image_url: 'https://i.imgur.com/wfuiRyT.jpg',
                vegetarian: false,
                price: 22.95,
                category_id: categories[0].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Gorgonzola Tagliato',
                details: 'Queijo gorgonzola fermentado e curado. Acompanha mel de Nápoles.',
                image_url: 'https://i.imgur.com/R0cyXHy.jpg',
                vegetarian: false,
                price: 18.95,
                category_id: categories[0].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Pecorino Romano Tagliato',
                details: 'Queijo de cabra saborosíssimo, de tradição romana antiga.',
                image_url: 'https://i.imgur.com/ZcCQFZZ.jpg',
                vegetarian: false,
                price: 21.55,
                category_id: categories[0].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Mozzarella di Napoli',
                details:
                    'Queijo suave, magro e saboroso, com baixíssima quantidade calórica e intenso valor nutricional. Acompanha pão e azeite.',
                    image_url: 'https://i.imgur.com/r56R8El.jpg',
                vegetarian: true,
                price: 15.95,
                category_id: categories[0].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Spaghetti a Cacio e Pepe',
                details:
                    'Spaghetti com molho à base de pimenta preta e queijo pecorino romano, saboroso e tradicional.',
                    image_url: 'https://i.imgur.com/ay4KTvs.jpg',
                vegetarian: true,
                price: 35.95,
                category_id: categories[1].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Spaghetti a Carbonara',
                details:
                    'Spaghetti com molho de gemas, pecorino romano, pimenta preta e guanciale (bochecha de porco curada e defumada).',
                    image_url: 'https://i.imgur.com/w3InzkI.jpg',
                vegetarian: false,
                price: 39.95,
                category_id: categories[1].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Tortelloni di Brocolis',
                details:
                    'Pasta fresca refogada em molho aglio olio, acompanhado de brócolis temperado.',
                    image_url: 'https://i.imgur.com/6Cg2EB3.jpg',
                vegetarian: true,
                price: 34.95,
                category_id: categories[1].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Lasagna a Bolognesa',
                details:
                    'Lasanha ao molho bolognesa, recheada de carne temperada e prosciutto di parma tostado.',
                    image_url: 'https://i.imgur.com/ykQAyLf.jpg',
                vegetarian: false,
                price: 39.95,
                category_id: categories[1].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Spaghetti al Pesto',
                details:
                    'Spaghetti com molho a base de manjericão, parmesão, azeite e castanhas. Refeição leve e saborosíssima.',
                    image_url: 'https://i.imgur.com/wnY70K1.jpg',
                vegetarian: true,
                price: 33.95,
                category_id: categories[1].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Fetuccini di Aragosta',
                details:
                    'Fetuccini com molho especial a base de caldo de lagosta, com pedaços de lagosta grelhada.',
                    image_url: 'https://i.imgur.com/NkqQ7Wu.jpg',
                vegetarian: false,
                price: 59.95,
                category_id: categories[1].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Spaghetti Nero',
                details:
                    'Spaghetti com molho nero, à base de tinta preta de lula: um clássico de Nápoles.',
                    image_url: 'https://i.imgur.com/6KDQh3t.jpg',
                vegetarian: false,
                price: 45.95,
                category_id: categories[1].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Bisteca alla Fiorentina',
                details:
                    'Bisteca Fiorentina Angus grelhada no carvão e servida com sal e pimenta preta.',
                    image_url: 'https://i.imgur.com/egdSS6f.jpg',
                vegetarian: false,
                price: 55.95,
                category_id: categories[1].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Machiatto',
                details: 'Café expresso com partes iguais de leite e espuma.',
                image_url: 'https://i.imgur.com/is35ar8.jpg',
                vegetarian: true,
                price: 9.05,
                category_id: categories[2].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Latte',
                details: 'Café expresso com maior quantidade de leite e espuma vaporizada..',
                image_url: 'https://i.imgur.com/G7wdavy.jpg',
                vegetarian: true,
                price: 7.55,
                category_id: categories[2].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Negroni',
                details: 'Clássico coquetel italiano feito com bitter e laranja.',
                image_url: 'https://i.imgur.com/OPm0iYS.jpg',
                vegetarian: true,
                price: 25.05,
                category_id: categories[2].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Vinho Rosé',
                details: 'Vinho de cor alaranjada, de sabor ácido e refrescante.',
                image_url: 'https://i.imgur.com/T3UTxII.jpg',
                vegetarian: true,
                price: 22.95,
                category_id: categories[2].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Vinho Tinto Suave',
                details: 'Vinho de uva escura suave, com sabor suave e adocicado.',
                image_url: 'https://i.imgur.com/OwgYV5C.jpg',
                vegetarian: true,
                price: 19.95,
                category_id: categories[2].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Vinho Tinto Seco',
                details: 'Vinho de uva escura, com sabor intenso, encorpado e complexo.',
                image_url: 'https://i.imgur.com/vPdGHOR.jpg',
                vegetarian: true,
                price: 20.95,
                category_id: categories[2].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Vinho Branco',
                details: 'Vinho de uva verde, com sabor ácido e encorpado.',
                image_url: 'https://i.imgur.com/4vm5FUM.jpg',
                vegetarian: true,
                price: 23.95,
                category_id: categories[2].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Parmigiano Reggiano Ralato',
                details: 'Porção de parmigiano reggiano ralado na hora.',
                image_url: 'https://i.imgur.com/zWEfYQL.jpg',
                vegetarian: true,
                price: 10.05,
                category_id: categories[3].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Pesto',
                details: 'Porção de molho pesto.',
                image_url: 'https://i.imgur.com/Yac9Ix0.jpg',
                vegetarian: true,
                price: 13.95,
                category_id: categories[3].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Caponata',
                details: 'Porção de berinjela e legumes confitados em azeite.',
                image_url: 'https://i.imgur.com/mANpBqC.jpg',
                vegetarian: true,
                price: 23.95,
                category_id: categories[3].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Tiramisu',
                details: 'Bolo macio e úmido feito à base de café, licor e chocolate meio-amargo.',
                image_url: 'https://i.imgur.com/rU9QLFu.jpg',
                vegetarian: true,
                price: 17.95,
                category_id: categories[4].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Panna Cotta',
                details: 'Sobremesa feita à base de iogurte e leite de cabra, acompanhada de geléia de frutas da época e folhas de hortelã.',
                image_url: 'https://i.imgur.com/9ma8VZ4.jpg',
                vegetarian: true,
                price: 15.95,
                category_id: categories[4].id,
                created_at: new Date(),
                updated_at: new Date()
            }
        ])
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('dishes', null, {})
    }
}
