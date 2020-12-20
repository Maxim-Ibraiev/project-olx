import refs from './renderComponentsHTML'

refs.myCallSavaBtn = document.querySelector('[data-my-call="save"')
refs.myCallModal = document.querySelector('.js-my-call-modal')
refs.myCallClose = document.querySelector('[data-action="close-modal-calls"]')
refs.myCallOption = document.querySelector('.my-calls-option')
refs.myCallImg = document.querySelector('.my-calls-input-placeholders')
refs.myCallInputImg = document.querySelector('.js-my-call-input')
refs.form = document.querySelector('#form')

export default refs;