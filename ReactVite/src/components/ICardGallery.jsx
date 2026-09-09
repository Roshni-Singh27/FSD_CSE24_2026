import React from 'react'
import ICard from './ICard'

function ICardGallery() {
  const student=[{
    college:'ABES Engineering College',
    roll:'933',
    name:'Roshni',
    branch:'CSE'
  },
  {
    college:'ABES Engineering College',
    roll:'934',
    name:'Roshni',
    branch:'CSE'
  },
  {
    college:'ABES Engineering College',
    roll:'935',
    name:'Roshni',
    branch:'CSE'
  },
  {
    college:'ABES Engineering College',
    roll:'936',
    name:'Roshni',
    branch:'CSE'
  }
]
  return (
    <div>
    {/*<ICard college="ABES Engineering College" pic="download.jpeg" roll="933" name="Roshni" branch="CSE"/>*/}
  {/* <ICard data={student[2]}/>*/}
  {
    student.map((ele)=>(
      <ICard data={ele}/>
    ))
  }
    </div>
  )
}

export default ICardGallery