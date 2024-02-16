import { ref } from 'vue'
import { Person } from 'src/types/person'
import { createSharedComposable } from '@vueuse/core'


function usePerson() {
  const persons = ref<Partial<Person>[]>([])

  async function fetchingPersons() {
    persons.value = [
      {
        firstName: 'Miguel',
        lastName: 'Bui',
        email: 'miguelbui@gmail.com',
        avatar: '/',
        id: 1

      },
      {
        firstName: 'Miguel',
        lastName: 'Bui',
        email: 'miguelbui@gmail.com',
        avatar: '/',
        id: 2

      },
      {
        firstName: 'Miguel',
        lastName: 'Bui',
        email: 'miguelbui@gmail.com',
        avatar: '/',
        id: 3

      },
      {
        firstName: 'Miguel',
        lastName: 'Bui',
        email: 'miguelbui@gmail.com',
        avatar: '/',
        id: 4

      }
    ]
  }

  function addPerson(){

  }

  return { persons, fetchingPersons, addPerson}
}

const useSharedPerson = createSharedComposable(usePerson)

export default useSharedPerson
