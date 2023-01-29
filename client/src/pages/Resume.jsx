import ResumeAnchor from '../components/ResumeAnchor'
import ResumeEducation from '../components/ResumeEducation'
import ResumeFuture from '../components/ResumeFuture'
import ResumeOverview from '../components/ResumeOverview'
import ResumeSkill from '../components/ResumeSkill'

export default function Resume() {
  return (
    <div className='resume'>
      <ResumeOverview />
      <ResumeSkill />
      <ResumeEducation />
      <ResumeFuture />
      <ResumeAnchor />
    </div>
  )
}
