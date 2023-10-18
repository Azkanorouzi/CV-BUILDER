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
  // First name hanlder
  function dataChangeHandler(propName) {
    return function (e) {
      setGeneralData({ ...generalData, [propName]: e.target.value })
    }
  }
  return (
    <>
      <PicInput img={img} imgChangeHandler={imgChangeHandler}></PicInput>
      <fieldset className="flex gap-10">
        <TextInput
          placeholder={'John'}
          onChange={dataChangeHandler('firstName')}
          value={generalData.firstName}
        >
          First name:{' '}
        </TextInput>
        <TextInput
          placeholder={'doe'}
          onChange={dataChangeHandler('lastName')}
          value={generalData.lastName}
        >
          Last name:{' '}
        </TextInput>
      </fieldset>
      <TextInput
        placeholder={'Front end developer'}
        onChange={dataChangeHandler('profession')}
        value={generalData.profession}
      >
        Profession:{' '}
      </TextInput>
      <TextInput
        placeholder={'Tehran'}
        onChange={dataChangeHandler('cityOrCountry')}
        value={generalData.cityOrCountry}
      >
        City or Country:{' '}
      </TextInput>
    </>
  )
}
