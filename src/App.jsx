import { useState } from "react";
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
  const users = [
    {
      userName: 'elopezm3',
      name: 'Esteban Lopez',
      isFollowing: true
    },
    {
      userName: 'midudev',
      name: 'Miguel Rodríguez',
      isFollowing: false
    },
    {
      userName: 'visionmedia',
      name: 'YJ Holowaychuk',
      isFollowing: true
    },
    {
      userName: 'c9s',
      name: 'Yo-An Lin',
      isFollowing: false
    }
  ]

  return (
    <section className="App">
      {
        users.map(user => {
          const { name, userName, isFollowing } = user
          return (
            <TwitterFollowCard
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}
