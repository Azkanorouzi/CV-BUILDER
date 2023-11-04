import TextInput from './TextInput'
import { dataChangeHandler } from '../../utils/helpers'
import { useFormData } from '../../contexts/FormDataContext'

export default function ContactInfo() {
  const { data, dispatch } = useFormData()
  const { contactData } = data

  return (
    <>
      <fieldset className="flex gap-10">
        <TextInput
          placeholder={'e.g. Johndoe1234'}
          onChange={dataChangeHandler(
            'linkedinUserName',
            dispatch,
            contactData,
            'setContactData'
          )}
          value={contactData.linkedinUserName}
        >
          Linkedin username:{' '}
        </TextInput>
        <TextInput
          placeholder={'e.g. https://github.com/Azkanorouzi'}
          onChange={dataChangeHandler(
            'portfolioUrl',
            dispatch,
            contactData,
            'setContactData'
          )}
          value={contactData.portfolioUrl}
        >
          Portfolio Url:{' '}
        </TextInput>
      </fieldset>
      <TextInput
        placeholder={'Johndoe@gmail.com'}
        type={'email'}
        onChange={dataChangeHandler(
          'email',
          dispatch,
          contactData,
          'setContactData'
        )}
        value={contactData.email}
      >
        Email:{' '}
      </TextInput>
      <TextInput
        placeholder={'phone number'}
        type={'tel'}
        onChange={dataChangeHandler(
          'phoneNumber',
          dispatch,
          contactData,
          'setContactData'
        )}
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
            dispatch,
            contactData,
            'setContactData'
          )}
          value={contactData.description}
        ></textarea>
      </label>
    </>
  )
}
