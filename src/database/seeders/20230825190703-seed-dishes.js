'use strict'

module.exports = {
    async up(queryInterface, Sequelize) {
        const [categories] = await queryInterface.sequelize.query('SELECT id FROM categories;')

        await queryInterface.bulkInsert('dishes', [
            {
                name: 'Prosciutto di Parma',
                details: 'Presunto italiano cru de altíssima qualidade cortado em tiras finas.',
                vegetarian: false,
                price: 19.95,
                category_id: categories[0].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Bruschetta di Mozzarella',
                details: 'Pães italianos tostados, acompanhados de mozzarella e molho sugo.',
                vegetarian: true,
                price: 20.95,
                category_id: categories[0].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Cotechinos',
                details:
                    'Deliciosa linguiça suína artesanal italiana. Acompanha lentilhas finamente temperadas..',
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
                vegetarian: false,
                price: 22.95,
                category_id: categories[0].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Gorgonzola Tagliato',
                details: 'Queijo gorgonzola fermentado e curado. Acompanha mel de Nápoles.',
                vegetarian: false,
                price: 18.95,
                category_id: categories[0].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Pecorino Romano Tagliato',
                details: 'Queijo de cabra saborosíssimo, de tradição romana antiga.',
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
                vegetarian: true,
                price: 15.95,
                category_id: categories[0].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Spaghetti a Cacio e Pepe',
                details:
                    'Spaghetti com molho à base de pimenta preta e queijo pecorino romano, saboroso e tradicional..',
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
                vegetarian: false,
                price: 55.95,
                category_id: categories[1].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Machiatto',
                details: 'Café expresso com partes iguais de leite e espuma.',
                vegetarian: true,
                price: 9.05,
                category_id: categories[2].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Latte',
                details: 'Café expresso com maior quantidade de leite e espuma vaporizada..',
                vegetarian: true,
                price: 7.55,
                category_id: categories[2].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Negroni',
                details: 'Clássico coquetel italiano feito com bitter e laranja.',
                vegetarian: true,
                price: 25.05,
                category_id: categories[2].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Vinho Rosé',
                details: 'Vinho de cor alaranjada, de sabor ácido e refrescante.',
                vegetarian: true,
                price: 22.95,
                category_id: categories[2].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Vinho Tinto Suave',
                details: 'Vinho de uva escura suave, com sabor suave e adocicado.',
                vegetarian: true,
                price: 19.95,
                category_id: categories[2].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Vinho Tinto Seco',
                details: 'Vinho de uva escura, com sabor intenso, encorpado e complexo.',
                vegetarian: true,
                price: 20.95,
                category_id: categories[2].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Vinho Branco',
                details: 'Vinho de uva verde, com sabor ácido e encorpado.',
                vegetarian: true,
                price: 23.95,
                category_id: categories[2].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Parmigiano Reggiano Ralato',
                details: 'Porção de parmigiano reggiano ralado na hora.',
                vegetarian: true,
                price: 10.05,
                category_id: categories[3].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Pesto',
                details: 'Porção de molho pesto.',
                vegetarian: true,
                price: 13.95,
                category_id: categories[3].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Tiramisu',
                details: 'Bolo macio e úmido feito à base de café, licor e chocolate meio-amargo.',
                vegetarian: true,
                price: 17.95,
                category_id: categories[4].id,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'Panna Cotta',
                details:
                    'Sobremesa feita à base de iogurte e leite de cabra, acompanhada de geléia de frutas da época e folhas de hortelã.',
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
