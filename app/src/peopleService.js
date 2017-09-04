const people = [
    {
        id: 1,
        name: 'Brettly',
        image: 'https://lh4.googleusercontent.com/NJucHBQVz7B6rC8Pr5kl931kft9rE2tPeMWJ2AeItk1Q01W2c0iuCvCQEsmPYKU6-Q9828ADdAev9rZPn74d5-XCLNixfoBNrJaP=w1440-h799',
        description: 'Orange and White Husky'
    },
    {
        id: 2,
        name: 'Wheatly',
        image: '',
        description: 'Blue and White Husky'
    }
]

export function getPeople(){
    return people;
}

export function getPerson(id){
    let person = people.filter(e => {
        if(e.id === +id){
            return e;
        }
    })
    return person[0];
}