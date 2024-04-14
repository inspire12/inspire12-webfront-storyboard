import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from "./components/TaskList.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TaskList
          onArchiveTask={ (idx) => console.log(idx)}
          tasks={[
            {
              id: '1',
              state: 'TASK_INBOX',
              title: 'Task 1',
              updatedAt: new Date('2021-01-01T00:00:00.000Z')
            },
            {
              id: '2',
              state: 'TASK_INBOX',
              title: 'Task 2',
              updatedAt: new Date('2021-01-01T00:00:00.000Z')
            },
            {
              id: '3',
              state: 'TASK_INBOX',
              title: 'Task 3',
              updatedAt: new Date('2021-01-01T00:00:00.000Z')
            },
            {
              id: '4',
              state: 'TASK_INBOX',
              title: 'Task 4',
              updatedAt: new Date('2021-01-01T00:00:00.000Z')
            },
            {
              id: '5',
              state: 'TASK_INBOX',
              title: 'Task 5',
              updatedAt: new Date('2021-01-01T00:00:00.000Z')
            },
            {
              id: '6',
              state: 'TASK_INBOX',
              title: 'Task 6',
              updatedAt: new Date('2021-01-01T00:00:00.000Z')
            }
          ]}
      />
    </div>
  )
}

export default App
