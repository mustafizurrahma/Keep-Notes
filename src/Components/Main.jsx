import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

const Main = (prop) => {
  const [data, setData] = useState({
    title: '',
    desc: '',
  })
  function GetData(event) {
    const { name, value } = event.target
    setData((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      }
    })
  }
  function Submit(x) {
    x.preventDefault()
    prop.addNote(data)
    setData({
      title: '',
      desc: '',
    })
  }
  return (
    <>
      <section id="Main">
        <div id="Container">
          <div id="MainContentWrapper">
            <form onSubmit={Submit} autoComplete="off">
              <div id="HiddenField" id="InputField">
                <input
                  onChange={GetData}
                  required
                  type="text"
                  placeholder="Write a Short Title.."
                  name="title"
                  value={data.title}
                />
              </div>

              <div id="InputField">
                <textarea
                  onChange={GetData}
                  required
                  rows="5"
                  name="desc"
                  placeholder="Write Your Notes Here Shortly..."
                  value={data.desc}
                ></textarea>
              </div>
              <Button
                type="submit"
                style={{
                  background: 'rgba(255, 136, 0, 0.863)',
                  boxShadow: 'inset 1px 1px 6px  rgba(255, 0, 157, 0.815)',
                }}
                variant="outlined"
                color="secondary"
              >
                <AddIcon
                  style={{
                    color: '#fff',
                    fontSize: '40px',
                  }}
                />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
export default Main
