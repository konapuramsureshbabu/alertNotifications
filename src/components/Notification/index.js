import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="container">
      <h1>{children}</h1>
      <GrFormClose className="icon" />
    </div>
  )
}
export default Notification
