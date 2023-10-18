import { useState } from 'react'
import PicInput from '../form/PicInput'
import TextInput from '../form/TextInput'
export default function GeneralInfo({
  setImg,
  img,
  generalData,
  setGeneralData,
}) {
  function imgChangeHandler(e) {
    if (e.target?.files?.length) {
      const selectedFile = e.target.files[0]
      console.log(selectedFile.name)
      setImg(URL.createObjectURL(selectedFile))
    }
  }
  return (
    <>
      <PicInput img={img} imgChangeHandler={imgChangeHandler}></PicInput>
      <fieldset className="flex gap-10">
        <TextInput placeholder={'John'}>First name: </TextInput>
        <TextInput placeholder={'doe'}>Last name: </TextInput>
      </fieldset>
      <TextInput placeholder={'Front end developer'}>Profession: </TextInput>
      <TextInput placeholder={'Tehran'}>City or Country: </TextInput>
    </>
  )
}
