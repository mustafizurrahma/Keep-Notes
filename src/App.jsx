import React, { useState } from 'react'
import './index.css'
import './tabRes.css'
import './res.css'
import Header from './Components/Header'
import Main from './Components/Main'
import Bg from './Components/Bg'
import Snote from './Components/Snote'

const App = () => {
  const [newData, setNewData] = useState([])
  const Submit = (data) => {
    setNewData((prevData) => {
      return [...prevData, data]
      setNewData('')
    })
  }
  const Delete = (id) => {
    setNewData((oldData) =>
      oldData.filter((currentData, index) => {
        return index !== id
      }),
    )
  }
  return (
    <>
      <Bg />
      <Header />
      <Main addNote={Submit} />

      <section id="Note">
        <div id="Container">
          <div id="NoteContentWrapper">
            {newData.map((value, index) => {
              return (
                <Snote
                  key={index}
                  id={index}
                  title={value.title}
                  desc={value.desc}
                  deleteItem={Delete}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
export default App
