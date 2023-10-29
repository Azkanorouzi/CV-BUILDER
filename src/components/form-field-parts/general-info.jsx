import PicInput from '../form/PicInput'
import TextInput from '../form/TextInput'
import { dataChangeHandler } from '../../utils/helpers'

export default function GeneralInfo({ img, generalData, dispatch }) {
  function imgChangeHandler(e, target) {
    if (target ?? e.target?.files?.length) {
      const selectedFile = target?.files[0] ?? e.target.files[0]
      localStorage.removeItem('img')
      dispatch({ type: 'setImg', payLoad: URL.createObjectURL(selectedFile) })
    }
  }

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
