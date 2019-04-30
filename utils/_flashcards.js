export const FLASHCARDS_KEY = 'UdaciMobile:flashcards'

export const initialDecks = {
    React: {
      title: 'React',
      cards: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        },
        {
          question: 'What is composition?',
          answer: 'Combining simple functions together to create complex functions'
        },
        {
          question: 'How does one use composition with React?',
          answer: 'React buids up pieces of UI using components. Simple components can be combined (composed) to form more complex components.'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      cards: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
}




