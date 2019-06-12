const ahnoldmoon = {
    name : "munnt",
    age : 48,
    gender : "male"
};

const resolvers = {
    Query: {
        person: () => ahnoldmoon
    }
};

export default resolvers;