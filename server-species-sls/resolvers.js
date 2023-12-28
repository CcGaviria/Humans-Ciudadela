const resolvers = {
    Query: {
    characters: (_, __, context) => {
        return "Hello, Here Fetch Data from ricka nd morty api!";
      },
    },
  };
  
  module.exports = resolvers;