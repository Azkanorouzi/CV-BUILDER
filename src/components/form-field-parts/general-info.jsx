import PicInput from '../form/PicInput'
import TextInput from '../form/TextInput'
import { dataChangeHandler } from '../../utils/helpers'
import { useEffect } from 'react'

export default function GeneralInfo({
  setImg,
  img,
  generalData,
  setGeneralData,
}) {
  useEffect(() => {
    console.log(document.querySelector('.input-file')?.files)
  }, [])
  // image change handler
  function imgChangeHandler(e, target) {
    if (target ?? e.target?.files?.length) {
      const selectedFile = target?.files[0] ?? e.target.files[0]
      localStorage.removeItem('img')
      setImg(URL.createObjectURL(selectedFile))
    }
  }

  return (
    <>
      <PicInput img={img} imgChangeHandler={imgChangeHandler}></PicInput>
      <fieldset className="flex gap-10">
        <TextInput
          placeholder={'John'}
          onChange={dataChangeHandler('firstName', setGeneralData, generalData)}
          value={generalData.firstName}
        >
          First name:{' '}
        </TextInput>
        <TextInput
          placeholder={'doe'}
          onChange={dataChangeHandler('lastName', setGeneralData, generalData)}
          value={generalData.lastName}
        >
          Last name:{' '}
        </TextInput>
      </fieldset>
      <TextInput
        placeholder={'Front end developer'}
        onChange={dataChangeHandler('profession', setGeneralData, generalData)}
        value={generalData.profession}
      >
        Profession:{' '}
      </TextInput>
      <TextInput
        placeholder={'Tehran'}
        onChange={dataChangeHandler(
          'cityOrCountry',
          setGeneralData,
          generalData
        )}
        value={generalData.cityOrCountry}
      >
        City or Country:{' '}
      </TextInput>
    </>
  )
}
