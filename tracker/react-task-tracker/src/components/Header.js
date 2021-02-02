import PropTypes from 'prop-types'
import { Button } from './Button'

export const Header = ({title}) => {

    const onClick=()=>{
        console.log("clcik")
    }
    return (
       <header className='header'>
            <h1>
            {title}  </h1>
           <Button onClick={onClick} color='green' text='Add' />          
       </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracker',
  }
  
  Header.propTypes = {
    title: PropTypes.string.isRequired,
  }
  