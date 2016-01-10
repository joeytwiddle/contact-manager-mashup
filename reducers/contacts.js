import { ADD_CONTACT, MODIFY_CONTACT, REMOVE_CONTACT } from '../actions/contacts'

import defaultContactsStore from '../store/defaultStore'

export default function contacts(state = defaultContactsStore, action) {
  switch (action.type) {
    case ADD_CONTACT:
      // Inefficient!
      let largestId = Math.max.apply(Math, state.contacts.map( contact => contact.id ) )
      let nextId = largestId + 1
      return {
        ...state,
        contacts: state.contacts.concat([ {
          ...action.newProperties,
          id: nextId
        } ])
      }
    case MODIFY_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map( contact => {
          return contact.id === action.id
            ? {
                id: contact.id,
                ...action.newProperties
              }
            : contact
        })
      }
    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter( contact => contact.id != action.idToRemove )
      }
    default:
      return state
  }
}
