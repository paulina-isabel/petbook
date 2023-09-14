const fetchPets = () => {
    return fetch('http://localhost:3001/api/v1/pets')
    .then(response => {
        if(response.ok) {
            return response.json()
        } else {
            throw new Error('Unable to retrieve contacts from server.')
        }
    })
}

const fetchPetsById = (id) => {
    return fetch(`http://localhost:3001/api/v1/pets/${id}`)
    .then(response => {
        if(response.ok) {
            console.log(response)
            return response.json()
        } else {
            throw new Error('Unable to retrieve contacts from server.')
        }
    })
}

const postPet = (newPet) => {
    return fetch('http://localhost:3001/api/v1/pets', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPet)
    })
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error('Unable to add new pet to server.')
        }
    })
}

export { fetchPets, postPet, fetchPetsById }