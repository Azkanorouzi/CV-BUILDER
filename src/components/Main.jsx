import { useState } from 'react'
import CVBuilder from '../pages/CVBuilder'
import Info from '../pages/CVBuilder'
import Resume from '../pages/resume'
import Form from './form/Form'
import GeneralInfo from './form-field-parts/General-info'
import ContactInfo from './form-field-parts/ContactInfo'
import EducationInfo from './form-field-parts/EducationInfo'
import { returnArrWithLength, GenerateEducation } from '../utils/helpers'
import FormError from './form/FormError'

export default function Main({ currentPage }) {
  const [currentStep, setCurrentStep] = useState(3)
  const [err, setErr] = useState(false)

  const [generalData, setGeneralData] = useState({
    firstName: '',
    lastName: '',
    profession: '',
    cityOrCountry: '',
  })
  const [contactData, setContactData] = useState({
    linkedinUserName: '',
    portfolioUrl: '',
    email: '',
    phoneNumber: '',
    description: '',
  })
  const [educationData, setEducationData] = useState({
    0: {
      institutionName: '',
      degreeTitle: '',
      startingDate: '',
      endingDate: '',
    },
    1: false,
    2: false,
    3: false,
    4: false,
    length: 1,
  })
  const [img, setImg] = useState('')

  function addNewItemHandler(setter, data, generator, max) {
    return function () {
      if (data.length === max) {
        setErr(`Error: Too many items (maximum number of items is ${max} )`)
        return
      }
      setter({
        ...data,
        [Array.from(data).length + 1]: generator(),
        length: data.length + 1,
      })
    }
  }
  return (
    <main className="pt-10">
      {err && <FormError setErr={setErr}>{err}</FormError>}
      {currentPage === 'info' && (
        <CVBuilder currentStep={currentStep} setCurrentStep={setCurrentStep}>
          <Form setCurrentStep={setCurrentStep}>
            {currentStep === 1 && (
              <GeneralInfo
                img={img}
                setImg={setImg}
                generalData={generalData}
                setGeneralData={setGeneralData}
              />
            )}
            {currentStep === 2 && (
              <ContactInfo
                contactData={contactData}
                setContactData={setContactData}
              />
            )}

            {currentStep === 3 && (
              <>
                {returnArrWithLength(educationData.length + 1).map((_, i) =>
                  educationData[i] ? <EducationInfo key={i} index={i} /> : ''
                )}{' '}
                <button
                  className="btn btn-primary text-black"
                  type="button"
                  onClick={addNewItemHandler(
                    setEducationData,
                    educationData,
                    GenerateEducation,
                    5
                  )}
                >
                  Add new degree
                </button>
              </>
            )}

            {/* <div className="bg-neutral p-3 flex flex-col gap-2 justify-center items-center rounded-2xl text-center">
                <fieldset className="flex gap-10">
                  <TextInput placeholder={'The odin project'}>
                    Institution name:{' '}
                  </TextInput>
                  <TextInput placeholder={'Full stack developer certification'}>
                    Degree, Certification or title:{' '}
                  </TextInput>
                </fieldset>
                <fieldset className="flex gap-10">
                  <TextInput placeholder={'The odin project'} type="date">
                    Starting date:{' '}
                  </TextInput>
                  <TextInput
                    placeholder={'Full stack developer certification'}
                    type="date"
                  >
                    Ending date:{' '}
                  </TextInput>
                </fieldset>
              </div>
              <div className="divider"></div>
              <button className="btn btn-primary text-black">
                Add new degree
              </button> */}

            {/* <div className="bg-neutral p-3 flex flex-col gap-2 justify-center items-center rounded-2xl text-center">
                <fieldset className="flex gap-10">
                  <TextInput placeholder={'Front end developer'}>
                    Your Position:{' '}
                  </TextInput>
                  <TextInput placeholder={'Google'}>Company: </TextInput>
                </fieldset>
                <fieldset className="flex gap-10">
                  <TextInput placeholder={'The odin project'} type="date">
                    Starting date:{' '}
                  </TextInput>
                  <TextInput
                    placeholder={'Full stack developer certification'}
                    type="date"
                  >
                    Ending date:{' '}
                  </TextInput>
                </fieldset>
                <fieldset>
                  <TextInput placeholder={'USA'}>Location: </TextInput>
                </fieldset>
                <label htmlFor="desc">
                  Description:
                  <textArea
                    placeholder="something"
                    className="w-full resize-none h-24 border border-secondary rounded-xl p-1 text-primary"
                    id="desc"
                  ></textArea>
                </label>
              </div>

              <div className="divider"></div>
              <button className="btn btn-primary text-black">
                Add new work experience
              </button> */}

            {/* <div className="bg-neutral p-3 flex flex-col gap-2 justify-center items-center rounded-2xl text-center">
                <fieldset className="flex gap-10">
                  <TextInput placeholder={'Js'}>Skill: </TextInput>
                </fieldset>
              </div>

              <div className="bg-neutral p-3 flex flex-col gap-2 justify-center items-center rounded-2xl text-center">
                <fieldset className="flex gap-10">
                  <TextInput placeholder={'Good communication skill'}>
                    Skill:{' '}
                  </TextInput>
                </fieldset>
              </div>
              <div className="divider"></div>
              <button className="btn btn-primary text-black">
                Add new Skill
              </button> */}

            {/* <div className="bg-neutral p-3 flex flex-col gap-2 justify-center items-center rounded-2xl text-center relative">
              <div>
                <i className="fa-solid fa-times text-danger absolute top-3 right-5 cursor-pointer"></i>
              </div>
              <fieldset className="flex gap-10">
                <TextInput placeholder={'Interest'}>Interest: </TextInput>
              </fieldset>
            </div>

            <div className="bg-neutral p-3 flex flex-col gap-2 justify-center items-center rounded-2xl text-center relative">
              <div>
                <i className="fa-solid fa-times text-danger absolute top-3 right-5 cursor-pointer"></i>
              </div>
              <fieldset className="flex gap-10">
                <TextInput placeholder={'Bodybuilding'}>Interest: </TextInput>
              </fieldset>
            </div>
            <div className="divider"></div>
            <button className="btn btn-primary text-black">
              Add new Skill
            </button> */}
          </Form>
        </CVBuilder>
      )}
      {currentPage === 'resume' && <Resume />}
    </main>
  )
}
