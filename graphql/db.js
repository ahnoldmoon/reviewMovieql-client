export const people = [
    {
        id: "0",
        name : "munnt",
        age : 48,
        gender : "male"
    },
    {
        id: "1",
        name : "munnt2",
        age : 47,
        gender : "male"
    },
    {
        id: "2",
        name : "munnt3",
        age : 46,
        gender : "male"
    },
    {
        id: "3",
        name : "munnt4",
        age : 45,
        gender : "male"
    },
    {
        id: "4",
        name : "munnt5",
        age : 44,
        gender : "male"
    },
    {
        id: "5",
        name : "munnt6",
        age : 43,
        gender : "male"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}