import React from 'react'

const TodoForm = () => {
  return <div className="todo-form">
    <h2>Criar Tarefa</h2>
    <form>
        <input type="text" placeholder="Digit o titulo" />
        <select>
            <option value="">Selecione um categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar tarefa</button>
    </form>
  </div>
}

export default TodoForm