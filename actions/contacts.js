export const ADD_CONTACT = 'ADD_CONTACT'
export const MODIFY_CONTACT = 'MODIFY_CONTACT'
export const REMOVE_CONTACT = 'REMOVE_CONTACT'

export function addContact(values) {
  return {
    type: ADD_CONTACT,
    newProperties: values
  }
}

export function modifyContact(id, values) {
  return {
    type: MODIFY_CONTACT,
    contactId: id,
    newProperties: values
  }
}

export function removeContact(id) {
  return {
    type: REMOVE_CONTACT,
    idToRemove: id
  }
}
