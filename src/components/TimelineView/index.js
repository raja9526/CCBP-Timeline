// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  console.log(timelineItemsList)
  return (
    <div className="container">
      <h1>
        MY JOURNEY OF
        <span className="maineHeading">CCBP 4.0</span>
      </h1>
      <div className="chronoContainer">
        <Chrono
          enableOutline
          theme={{secondary: 'white'}}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => {
            if (eachItem.categoryId === 'PROJECT') {
              return (
                <ProjectTimelineCard itemDetails={eachItem} key={eachItem.id} />
              )
            }
            return (
              <CourseTimelineCard itemDetails={eachItem} key={eachItem.id} />
            )
          })}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
