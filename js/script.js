// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lucas Osmond
// Created on: March 2023
// This file contains the JS functions for index.html 

'use strict'
/**
 * This function calculates area and perimeter of triangle.
 */
function calculate () {
  // input
  const length = parseFloat(document.getElementById('length-of-triangular-prism').value)
  const width = parseFloat(document.getElementById('width-of-triangular-prism').value)
  const height = parseFloat(document.getElementById('height-of-triangular-prism').value)

  // process
  const volume = 1/2 * height * length * width

  // output
  document.getElementById('area').innerHTML = 'volume is: ' + volume + ' cm³'
}
