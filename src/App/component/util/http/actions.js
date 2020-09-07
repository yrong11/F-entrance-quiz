import httpClient from './index'

export function getPeopleList() {
  return httpClient.get('/peoples')
}

export function getPeopleGroup() {

}