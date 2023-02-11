import Button from 'react-bootstrap/Button'

export default function ResumeOverview() {
  return (
    <div className='resume-overview'>
      <div className='resume-overview-head'>
        <h2>概述</h2>
        <Button href='resume/my-resume.pdf' download className='resume-overview-button'>
        下载英文简历
        </Button>
      </div>
      <p className='resume-overview-body'>
        我是一名有2年经验的前端开发人员，我擅长快速排查bug解决问题和找到产品需求的突破点，并为客户和团队争取最佳结果。我乐于学习，在前端上充满着兴趣，不管是CSS还是JavaScript，对于后端，我抱着期待的态度，后端功能也很强大。我很喜欢与人沟通，因为我是个话痨(个人认为)，所以在团队合作方面我也能很清晰地明白需求、业务。我希望我未来能够与同事相处愉快，一路学习，并在事业上取得进步。最后，我愿意在我能力范围之内为公司的利益与同事和团队成员解决任何困难。
      </p>
    </div>
  )
}
