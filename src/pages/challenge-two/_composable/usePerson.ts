import { ref } from 'vue'
import { api } from 'boot/axios'
import { Person } from 'src/types/person'
import { HTTPS_STATUS } from 'src/constants/status-code'
import { reactive } from 'vue'
import { createSharedComposable } from '@vueuse/core'


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
        persons.value = _formatedPersons(response.data?.data||[])
      }
    } catch (error) {
      console.log(error)
    }
  }

  function _formatedPersons(persons: Person[]){
    return persons.map((item, index) => {
      return {
        ...item,
        firstName: item?.firstname,
        lastName: item?.lastname,
        order: index
      }
    })
  }

  function reorder(){
    persons.value.forEach((item, index) => (item.order = index))
  }

  function addPerson(person: Person){
    const payload = {
      ...person,
      order: persons.value?.length
    }
    persons.value.push(payload)
  }

  const dialogState = reactive({
    state: false,
    mode: 'ADD_NEW'
  })

  function toggleDialog(){
    dialogState.state = !dialogState.state
  }

  return { persons, fetchingPersons, reorder, addPerson, dialogState, toggleDialog }
}

const useSharedPerson = createSharedComposable(usePerson)

export default useSharedPerson
