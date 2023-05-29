'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: "Leonardo",
    email: "leonardo@email.com",
    celular: "19932652498",
    cidade: "Itú"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? [];
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient));

/// CRUD - Create - Read - Update - Delete

/// CRUD - DELETE
const deleteClient = (index) => {
    const dbClient = readClient()
    dbClient.splice(index,1);
    setLocalStorage(dbClient);
}

/// CRUD - UPDATE
const updateCliente = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)    
}   

/// CRUD - READ 
const readClient = () => getLocalStorage(); 

/// CRUD - CREATE
const createClient = (client) => {
    const dbClient = getLocalStorage();
    dbClient.push(client);    
    setLocalStorage(dbClient);
}

/// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)