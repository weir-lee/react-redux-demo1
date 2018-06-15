import * as actionTypes from './actionTypes.js'

export const addOne = () => ({
  type: actionTypes.ADD_ONE
})

export const descOne = () => ({
  type: actionTypes.DESC_ONE
})

export const addNum = (num) => ({
  type: actionTypes.ADD_NUM,
  num
})