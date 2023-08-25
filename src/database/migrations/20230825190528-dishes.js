'use strict'

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('dishes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.DataTypes.INTEGER
            },
            name: {
                allowNull: false,
                type: Sequelize.DataTypes.STRING
            },
            details: {
                allowNull: false,
                type: Sequelize.DataTypes.TEXT
            },
            image_url: {
                type: Sequelize.DataTypes.STRING
            },
            vegetarian: {
                defaultValue: false,
                type: Sequelize.DataTypes.BOOLEAN
            },
            price: {
                allowNull: false,
                type: Sequelize.DataTypes.FLOAT
            },
            category_id: {
                allowNull: false,
                type: Sequelize.DataTypes.INTEGER,
                references: { model: 'categories', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT'
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DataTypes.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DataTypes.DATE
            }
        })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('dishes')
    }
}
