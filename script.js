const vm = new Vue({
  el: '#alpacaForm',
  data: {
    firstName: '',
    lastName: '',
    street: '',
    state: 'CO',
    availableStates: [
      { value: 'AL', name: 'Alabama'},
      { value: 'AK', name: 'Alaska'},
      { value: 'AZ', name: 'Arizona'},
      { value: 'AR', name: 'Arkansas'},
      { value: 'CA', name: 'California'},
      { value: 'CO', name: 'Colorado'},
    ],
    selectedColors: [],
    colors: [
      { name: 'White', value: 'white' },
      { name: 'Beige', value: 'beige' },
      { name: 'Fawn', value: 'fawn' },
      { name: 'Brown', value: 'brown' },
      { name: 'Rose Gray', value: 'rose-gray' }
    ],
    status: ''

  }
})
