// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {itemDetails} = props
  console.log(itemDetails)
  const {
    description,
    duration,
    imageUrl,
    projectTitle,
    projectUrl,
  } = itemDetails

  return (
    <div className="cards">
      <img className="projectImage" src={imageUrl} alt="project" />
      <div className="title">
        <h1>{projectTitle}</h1>
        <div className="duration">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a className="visit" href={projectUrl} target="_blank" rel="noReferrer">
        visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
