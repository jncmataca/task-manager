import { useState } from "react";

export const ListaDeTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  const adicionarTarefa = () => {
    if (input.trim() === "") return;

    const novaTarefa = {
      id: Date.now(), 
      texto: input
    };

    setTarefas([...tarefas, novaTarefa]);
    setInput(""); 
  };

  const eliminarTarefa = (id) => {
    const atualizadas = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(atualizadas);
  };

  return (
    <div className="flex flex-col justify-center items-center" style={{ padding: "20px" }}>
      <h2 className="font-bold text-5xl">Lista de Tarefas</h2>
    <div className="flex flex row">
      <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite a tarefa"
      />
      <button onClick={adicionarTarefa} className="ml-2 p-3 rounded-b-sm rode bg-emerald-700">+</button>
        </div>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.texto}
            <button onClick={() => eliminarTarefa(tarefa.id)} style={{ marginLeft: "10px" }}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
