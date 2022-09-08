// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {itemDetails} = props
  const {courseTitle, description, duration, tagsList} = itemDetails

  return (
    <div className="card">
      <div className="title">
        <h1>{courseTitle}</h1>
        <div className="duration">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <div className="unList">
        {tagsList.map(each => (
          <p className="list" key={each.id}>
            {each.name}
          </p>
        ))}
      </div>
    </div>
  )
}
export default CourseTimelineCard
