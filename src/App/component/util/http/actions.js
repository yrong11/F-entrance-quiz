import httpClient from './index'

export function getPeopleList() {
  return httpClient.get('/peoples')
}

export function addPeople(name) {
  return httpClient.post('/people', name, { headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }})
}

export function getGroupList() {
  return httpClient.get('/group')
}

export function modifyGroupName(name){
  return httpClient.post('/group/modify', name)
}