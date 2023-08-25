'use strict'

const bcrypt = require('bcrypt')

module.exports = {
    async up(queryInterface, Sequelize) {
        const adminPassword = await bcrypt.hash('fedeli_133', 10)
        await queryInterface.bulkInsert('users', [
            {
                first_name: 'Kitchen',
                last_name: 'Master',
                email: 'kitchenadministration@trattoriafedeli.com',
                password: adminPassword,
                role: 'admin',
                created_at: new Date(),
                updated_at: new Date()
            }
        ])
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('users', null, { where: { email: 'admin@email.com' } })
    }
}
