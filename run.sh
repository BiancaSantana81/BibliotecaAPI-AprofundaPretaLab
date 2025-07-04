#!/bin/bash

function clean() {
  echo "Limpando executáveis e node_modules..."
  find . -type f -executable -exec rm -v {} \;
  find . -type d -name "node_modules" -exec rm -rfv {} \;
  echo "Limpeza concluída!"
}

function setup() {
  echo "Inicializando o projeto..."
  npm install
}

function test() {
  echo "Rodando testes..."
  npm test
}

function start_server() {
  echo "Iniciando servidor..."
  npm start
}

if [ "$1" == "clean" ]; then
  clean

elif [ "$1" == "test" ]; then
  setup
  test

else
  echo "Iniciando projeto..."
  setup
  test
  start_server
fi