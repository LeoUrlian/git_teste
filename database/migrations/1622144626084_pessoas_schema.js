'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PessoasSchema extends Schema {
  up () {
    this.create('pessoas', (table) => {
      table.increments('ID_PESSOA').unsigned().notNullable()
      table.string('NOME', 80).notNullable()
      table.string('SOBRENOME', 80).notNullable()
      table.integer('CPF', 11).notNullable()
      table.string('EMAIL', 255).notNullable().unique()
      table.string('CIDADE', 255)
      table.integer('CELULAR', 11)
    })
  }

  down () {
    this.drop('pessoas')
  }
}

module.exports = PessoasSchema
