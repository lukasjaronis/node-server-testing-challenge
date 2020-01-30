const express = require('express');
const CompanyModel = require('../companies/model');
const server = express();

server.use(express.json());

server.get('/', (res) => {
    CompanyModel.getAll()
    .then(companies => {
        res.status(200).json(companies)
    })
    .catch(error => {
        res.status(500).json({
            errorMessage: `There was an error retrieving the company information. ${error}`
        })
    })
})

server.delete('/:id', (req, res) => {
    const { id } = req.params;

    CompanyModel.remove(id)
    .then(company => {
        if (company) {
            res.status(201).json({
                successMessage: `Company ID ${id} has been deleted.`
            })
        } else {
            res.status(404).json({
                errorMessage: `That ID could not be found.`
            })
        }
    })
    .catch(error => {
        res.status(500).json({
            errorMessage: `There was an error. ${error}`
        })
    })
})

module.exports = server;