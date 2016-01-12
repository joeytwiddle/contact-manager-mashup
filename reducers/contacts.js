import { ADD_CONTACT, MODIFY_CONTACT, REMOVE_CONTACT } from '../actions/contacts'

import defaultContactsStore from '../store/defaultStore'

export default function contacts(state = defaultContactsStore, action) {
  console.log("[reducers/contacts.js] state:", state);
  console.log("[reducers/contacts.js] action:", action);
  switch (action.type) {
    case ADD_CONTACT:
      // Inefficient!
      const largestId = Math.max.apply(Math, state.contacts.map( contact => contact.id ) )
      // In case largestId is -Infinity because contacts DB was empty
      const largestIdFixed = Math.max(largestId, 0)
      const nextId = largestIdFixed + 1
      const newContact = {
        ...action.newProperties,
        id: nextId
      }

      // TODO: This is WET.  We should extract the Contact Model from defaultStore are re-use it
      newContact.avatar = newContact.avatar || (1 + Math.floor(Math.random() * 15)) + '.jpg'

      return {
        ...state,
        contacts: state.contacts.concat([ newContact ])
      }
    case MODIFY_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map( contact => {
          return contact.id === action.contactId
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
