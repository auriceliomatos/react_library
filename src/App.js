import { useState } from "react";


function App() {
  const [tarefas, setTarefas] = useState([]);
  
  const [tarefaTemp, setTarefaTemp] = useState('');
  const urlImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyRho4BV9aV3zwBpxewfgVgXprwgo0rhWuA&s"

  function cadastrarTarefa() {
    setTarefas([...tarefas, tarefaTemp]);
    setTarefaTemp('');
  }

  return (
    <div className="App">
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img width={100} height={100} src={urlImg} alt="logo" />
        <div>
          <input data-testid="campo-tarefa" type="text" value={tarefaTemp} onChange={evento => setTarefaTemp(evento.target.value)} />
          <button data-testid="btn-cadastrar" onClick={cadastrarTarefa} type="button" style={{backgroundColor: "#4CAF50", color: "white", padding: "5px", border: "none", borderRadius: "4px"}}>inserir</button>
        </div>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

