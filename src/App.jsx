import { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import './App.css'

function App() {
const   [listOrder, setListOrder] = useState()
const muntants = [
    
  {id: '1', name: 'nightcrawler', image: "src/assets/nc-gif.gif"},
  {id: '2',name: 'wolverine', image: "src/assets/wolverine.gif"},
  {id: '3',name: 'storm', image: "src/assets/storm_gif.gif"},
  {id:'4',name: 'baby yoda', image: "src/assets/yoda.gif"},
  {id: '5', name: 'quicksilver', image: "src/assets/quicksilver.gif"}
]

  return (
    <div className="main">
    <div className='header'>
       <h1>XMEN GIFS</h1>
    </div>

    {/* <img src='src/assets/cyclops.gif' /> */}
    <DragDropContext >
    <Droppable droppableId='xmen'>

    {
        (provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef} className='muntants'>

          {
            muntants.map(({id,name,image}, idx) => {

              return (
              <Draggable key={id} draggableId={id} index={idx}>

                {

                  (provided) => (

                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >


                    <div className='muntants_thumbs'>

                  
                    <img src={image} />

                    </div>


                    </li>
                  )

                  
                }
              </Draggable>
              )

            })
          }
          {/* {provided.placeholder} */}
          </ul>
        )


    }



    </Droppable>


    </DragDropContext>







    </div>
  )
}

export default App



// #header 

// #ul 

// #li 

// #p