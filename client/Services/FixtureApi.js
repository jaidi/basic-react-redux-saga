export default {
  // Functions return fixtures
  getRoot: () => {
    return {
      ok: true,
    }
  },
  getRecipies: () => {
    return {
      ok: true,
      data: [
        {
          id: 1,
          name: 'omelate',
          ingredients: ['egg', 'onion', 'pepper'],
          description: 'haider abbas'
        },
        {
          id: 1,
          name: 'cake',
          ingredients: ['egg', 'sugar', 'flour'],
          description: '! haider abbas'
        }
      ]
    }
  },
  getCollections: (id) => {
    return {
      ok: true,
      data: {
        id: id,
        name: 'breakfast',
        recipies: [1,2]
      }
    }
  },
  createCollection: (name) => {
    return {
      ok: true,
      data: {
        id: 1,
        name: name,
        recipies: []
      }
    }
  }
}
