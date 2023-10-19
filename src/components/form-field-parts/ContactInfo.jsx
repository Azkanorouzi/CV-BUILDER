import TextInput from '../form/TextInput'
import { dataChangeHandler } from '../../utils/helpers'

export default function ContactInfo({ contactData, setContactData }) {
  return (
    <>
      <fieldset className="flex gap-10">
        <TextInput
          placeholder={'e.g. Johndoe1234'}
          onChange={dataChangeHandler(
            'linkedinUserName',
            setContactData,
            contactData
          )}
          value={contactData.linkedinUserName}
        >
          Linkedin username:{' '}
        </TextInput>
        <TextInput
          placeholder={'e.g. https://github.com/Azkanorouzi'}
          onChange={dataChangeHandler(
            'portfolioUrl',
            setContactData,
            contactData
          )}
          value={contactData.portfolioUrl}
        >
          Portfolio Url:{' '}
        </TextInput>
      </fieldset>
      <TextInput
        placeholder={'Johndoe@gmail.com'}
        type={'email'}
        onChange={dataChangeHandler('email', setContactData, contactData)}
        value={contactData.email}
      >
        Email:{' '}
      </TextInput>
      <TextInput
        placeholder={'phone number'}
        type={'tel'}
        onChange={dataChangeHandler('phoneNumber', setContactData, contactData)}
        value={contactData.phoneNumber}
      >
        Phone number:{' '}
      </TextInput>
      <label htmlFor="desc">
        Description:
        <textarea
          placeholder="something"
          className="w-full resize-none h-24 border border-secondary rounded-xl p-1 text-primary"
          id="desc"
          onChange={dataChangeHandler(
            'description',
            setContactData,
            contactData
          )}
          value={contactData.description}
        ></textarea>
      </label>
    </>
  )
}
