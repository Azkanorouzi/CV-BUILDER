import { useState } from 'react'
import PicInput from '../form/PicInput'
import TextInput from '../form/TextInput'
export default function GeneralInfo() {
    const [img, setImg]
  const [generalInfo, setGeneralInfo] = useState()
  return (
    <>
      <PicInput></PicInput>
      <fieldset className="flex gap-10">
        <TextInput placeholder={'John'}>First name: </TextInput>
        <TextInput placeholder={'doe'}>Last name: </TextInput>
      </fieldset>
      <TextInput placeholder={'Front end developer'}>*Profession: </TextInput>
      <TextInput placeholder={'Tehran'}>City or Country: </TextInput>
    </>
  )
}
