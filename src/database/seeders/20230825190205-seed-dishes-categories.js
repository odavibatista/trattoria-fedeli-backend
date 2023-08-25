'use strict'

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'categories',
            [
                {
                    name: 'Entradas',
                    description: 'Porções saborosas que preparam o paladar para o que há de vir.',
                    position: 1,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    name: 'Principais',
                    description: 'Pratos tradicionais, ricos em sabor e em história.',
                    position: 2,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    name: 'Bebidas',
                    description: 'Bebidas quentes ou geladas, para acompanhar bem a refeição.',
                    position: 3,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    name: 'Extras',
                    description: 'Porções saborosas que preparam o paladar para o que há de vir.',
                    position: 4,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    name: 'Sobremesas',
                    description: 'Opções doces e com sabor sem igual.',
                    position: 5,
                    created_at: new Date(),
                    updated_at: new Date()
                }
            ],
            {}
        )
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('categories', null, {})
    }
}
