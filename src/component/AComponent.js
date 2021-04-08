
import {useUserAge} from '../component/context'

const AComponent = () => {

    const {user1} = useUserAge()
    return (
        <div>
            <h1>Welcome to our website. Your Age {user1}</h1>
        </div>
    )
}

export default AComponent


