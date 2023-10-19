import PicInput from '../form/PicInput'
import TextInput from '../form/TextInput'
import { dataChangeHandler } from '../../utils/helpers'

export default function GeneralInfo({
  setImg,
  img,
  generalData,
  setGeneralData,
}) {
  // image change handler
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
