export default function ContactInfo({
  setImg,
  img,
  generalData,
  setGeneralData,
}) {
  return (
    <>
      <fieldset className="flex gap-10">
        <TextInput placeholder={'e.g. Johndoe1234'}>
          Linkedin username:{' '}
        </TextInput>
        <TextInput placeholder={'e.g. https://github.com/Azkanorouzi'}>
          Portfolio Url:{' '}
        </TextInput>
      </fieldset>
      <TextInput placeholder={'Johndoe@gmail.com'} type={'email'}>
        Email:{' '}
      </TextInput>
      <TextInput placeholder={'phone number'} type={'tel'}>
        Phone number:{' '}
      </TextInput>
      <label htmlFor="desc">
        Description:
        <textArea
          placeholder="something"
          className="w-full resize-none h-24 border border-secondary rounded-xl p-1 text-primary"
          id="desc"
        ></textArea>
      </label>
    </>
  )
}
