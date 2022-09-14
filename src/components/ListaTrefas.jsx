import React from 'react'
import { DivLista } from '../style/styled'
import Tarefa from './Tarefa'

export default function ListaTarefas() {
  return (
    <DivLista>
        <p>Lista de tarefas</p>
        <Tarefa/>
      <Tarefa/>
      <Tarefa/>
      <Tarefa/>
      <Tarefa/>
      <Tarefa/>
   
    </DivLista>
  )
}
