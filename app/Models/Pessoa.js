'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pessoa extends Model {

  static get createdAtColumn(){
    return null
  }

  static get updatedAtColumn(){
    return null
  }

  static get primaryKey () {
    return 'ID_PESSOA'
  }

  static get table() {
    return 'pessoas'
  }
}

module.exports = Pessoa
