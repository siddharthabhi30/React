import PropTypes from 'prop-types'
import { Button } from './Button'

export const Header = ({title,onAdd,showAdd}) => {

   
    return (
       <header className='header'>
            <h1>
            {title}  </h1>
           <Button onClick={onAdd} color={showAdd?'green':'red'} text={showAdd?'Add':'CLose'} />          
       </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracker',
  }
  
  Header.propTypes = {
    title: PropTypes.string.isRequired,
  }
  