import ModalWindowContainer from '../components/ModalWindowContainer'
import CreateGame from '../components/create-game/CreateGame'
import GameDetails from '../components/game-details/GameDetails'
import GameDetailsReadOnly from '../components/game-details/GameDetailsReadOnly'

const TestPage = ()=>{
    return (
        <>
            <ModalWindowContainer modalContent={GameDetails}/>
            <ModalWindowContainer modalContent={GameDetailsReadOnly}/>
            <ModalWindowContainer modalContent={CreateGame}/>
        </>
    )
}


export default TestPage