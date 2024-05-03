import { useState } from "react";
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
  const format = (userName) => `@${userName}`
  const [name, setName] = useState('elopezm3')

  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={format}
        userName={name} initialIsFollowing >
        Esteban López
      </TwitterFollowCard>
      <TwitterFollowCard
        formatUserName={format}
        userName="midudev">
        Miguel Ángel Durán
      </TwitterFollowCard>
      <TwitterFollowCard
        formatUserName={format}
        userName="visionmedia">
        YJ Holowaychuk
        </TwitterFollowCard>
      <TwitterFollowCard
        formatUserName={format}
        userName="c9s">
        Yo-An Lin
      </TwitterFollowCard>

      <button onClick={() => setName('estebanlopez99')}>
        Cambio Nombre
      </button>
    </section>
  )
}
