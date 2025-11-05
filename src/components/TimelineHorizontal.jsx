import { useReveal } from '../utils/useReveal.js'

export default function TimelineHorizontal() {
  const ref = useReveal()
  const milestones = [
    {
      year: '2005',
      date: '05-10-2005',
      title: 'Born',
      description: '',
      icon: '🎂'
    },
    {
      year: '2017',
      date: '2017',
      title: 'Early Education',
      description: 'Nagarjuna Public School, Nanded',
      icon: '📚'
    },
    {
      year: '2019-2023',
      date: '2019 - 2023',
      title: 'Undergraduate',
      description: 'B.Tech in E&TC from PICT, Pune',
      icon: '🎓'
    },
    {
      year: '2023+',
      date: '2023 - Present',
      title: 'Career',
      description: 'Full Stack Software Engineer at BNY, Pune',
      icon: '💼'
    }
  ]
  
  return (
    <div>
      <div className="container">
        <h2 className="section-title text-center mb-4">Life Milestones</h2>
      </div>
      <div className="timeline-container-new" ref={ref}>
        <div className="timeline-new">
          {milestones.map((milestone, index) => (
            <div key={index} className="timeline-card-new reveal">
              <div className="timeline-card-icon">{milestone.icon}</div>
              <div className="timeline-card-content">
                <div className="timeline-year-badge">{milestone.year}</div>
                <h4 className="timeline-card-title">{milestone.title}</h4>
                <p className="timeline-card-desc">{milestone.description}</p>
                <div className="timeline-card-date">{milestone.date}</div>
              </div>
              {index < milestones.length - 1 && <div className="timeline-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


