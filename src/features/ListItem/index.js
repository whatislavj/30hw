import './style.css'
import Checkbox from '../../components/Checkbox'

const ListItem = ({checked, title, toggle}) => {
    return (
        <div className='listItemWrapper'>
            <Checkbox value={checked} toggle={toggle}/>
            {title}
        </div>
    )
}

export default ListItem