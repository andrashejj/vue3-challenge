import { ref } from 'vue'
import { Person } from 'src/types/person'
import { createSharedComposable } from '@vueuse/core'
import { HTTPS_STATUS } from 'src/constants/status-code'
import { api } from 'src/boot/axios'


function usePerson() {
  const persons = ref<Partial<Person>[]>([])

  async function fetchingPersons() {
    // persons.value = [
    //   {
    //     firstName: 'Miguel',
    //     lastName: 'Bui',
    //     email: 'miguelbui@gmail.com',
    //     avatar: '/',
    //     id: 1

    //   },
    //   {
    //     firstName: 'Miguel',
    //     lastName: 'Bui',
    //     email: 'miguelbui@gmail.com',
    //     avatar: '/',
    //     id: 2

    //   },
    //   {
    //     firstName: 'Miguel',
    //     lastName: 'Bui',
    //     email: 'miguelbui@gmail.com',
    //     avatar: '/',
    //     id: 3

    //   },
    //   {
    //     firstName: 'Miguel',
    //     lastName: 'Bui',
    //     email: 'miguelbui@gmail.com',
    //     avatar: '/',
    //     id: 4

    //   }
    // ]

    try {
      const response = await api.get('https://fakerapi.it/api/v1/persons?_quantity=1&_gender=male&_birthday_start=2005-01-01')
      if (response?.status === HTTPS_STATUS[200]) {
        persons.value = response.data?.data||[]
      }
    } catch (error) {
      console.log(error)
    }
  }

  function addPerson() {

  }

  return { persons, fetchingPersons, addPerson }
}

const useSharedPerson = createSharedComposable(usePerson)

export default useSharedPerson
