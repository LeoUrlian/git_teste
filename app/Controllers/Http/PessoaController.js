'use strict'

const Pessoa = use('App/Models/Pessoa')

class PessoaController {

  async create ({request, response}){
    const data = request.post()

    let pessoasCreated = await Pessoa.create(data)

    response.status(200).send({"error": false, "result": pessoasCreated})
  }

  async get ({response}){
    const getPessoa = await Pessoa.all()

    response.status(200).send({"error": false, "result": getPessoa})
  }

  async getById ({response, params}){
    const getPessoa = await Pessoa.query()
      .where('ID_PESSOA', params.id)
      .first()

    response.status(200).send({"error": false, "result": getPessoa})
  }

  async getPaginado ({response, request}){
    const page = request.input('page', 1)
    const limit = request.input('limit', null)
    let pessoas = {}

    if(limit){
      pessoas = await Pessoa.query().paginate(page, limit)
    }
    else{
      let pessoasData = await Pessoa.query().fetch()
      pessoas.total = pessoasData.toJSON().length
      pessoas.perPage = pessoasData.toJSON().length
      pessoas.page = 1
      pessoas.lastPage = 1
      pessoas.data = pessoasData.toJSON()
    }

    response.status(200).send({"error": false, "result": pessoas})
  }

  async update ({response, request, params}) {
    const data = request.post()

    let pessoa = await Pessoa.find(params.id)

    if(pessoa == null){
      response.status(404).send({"error": true, "result": "Registro não encontrado!"})
    }else{
      pessoa.merge(data)
      await pessoa.save()

      response.status(200).send({"error": false, "result": "Registro Alterado com Sucesso"})
    }
    
  }

  async delete ({response, params}) {
    let pessoa = await Pessoa.find(params.id)

    await pessoa.delete()

    response.status(200).send({"error": false, "result": "Deletado com Sucesso"})
  }

}

module.exports = PessoaController
