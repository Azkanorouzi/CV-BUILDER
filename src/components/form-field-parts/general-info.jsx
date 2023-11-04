import PicInput from './PicInput'
import TextInput from './TextInput'
import { dataChangeHandler } from '../../utils/helpers'
import { useFormData } from '../../contexts/FormDataContext'

export default function GeneralInfo() {
  const { data, dispatch, imgChangeHandler } = useFormData()
  const { img, generalData } = data

  return (
    <>
      <PicInput img={img} imgChangeHandler={imgChangeHandler}></PicInput>
      <fieldset className="flex gap-10">
        <TextInput
          placeholder={'John'}
          onChange={dataChangeHandler('firstName', dispatch, generalData)}
          value={generalData.firstName}
        >
          First name:{' '}
        </TextInput>
        <TextInput
          placeholder={'doe'}
          onChange={dataChangeHandler('lastName', dispatch, generalData)}
          value={generalData.lastName}
        >
          Last name:{' '}
        </TextInput>
      </fieldset>
      <TextInput
        placeholder={'Front end developer'}
        onChange={dataChangeHandler('profession', dispatch, generalData)}
        value={generalData.profession}
      >
        Profession:{' '}
      </TextInput>
      <TextInput
        placeholder={'Tehran'}
        onChange={dataChangeHandler('cityOrCountry', dispatch, generalData)}
        value={generalData.cityOrCountry}
      >
        City or Country:{' '}
      </TextInput>
    </>
  )
}
