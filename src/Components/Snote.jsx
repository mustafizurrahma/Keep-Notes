import React from 'react'
import Button from '@material-ui/core/Button'
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded'

const Snote = (prop) => {
  const DeletNote = () => {
    prop.deleteItem(prop.id)
  }
  return (
    <>
      <div id="SingleNote">
        <h2> {prop.title} </h2>
        <p> {prop.desc} </p>
        <div id="DeleteButton">
          <Button
            onClick={DeletNote}
            style={{
              borderRadius: '100%',
              padding: '15px',
              boxShadow: '1px 2px 10px black',
              color: 'red',
              background: 'white',
              float: 'right',
              margin: '10px 5px 5px 5px',
            }}
          >
            <DeleteForeverRoundedIcon
              style={{ fontSize: '30px', color: 'red' }}
            />
          </Button>
        </div>
      </div>
    </>
  )
}
export default Snote
