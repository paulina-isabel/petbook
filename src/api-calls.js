export function fetchPets() {
    return fetch('http://localhost:3001/api/v1/pets')
    .then(response => {
        if(response.ok) {
            return response.json()
        } else {
            throw new Error('Unable to retrieve contacts from server.')
        }
    })

}