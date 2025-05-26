//App.tsx
import { Header } from "./components/Header"
import { ListaDeTarefas } from "./components/Main"


 
function App() {


  return (
  <div className="bg-[rgb(15,19,25)] h-screen w-screen text-white">
    <Header/>
    <ListaDeTarefas/>
    </div>
  )
}

export default App
