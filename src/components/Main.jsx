import { useState } from 'react'
import CVBuilder from '../pages/CVBuilder'
import Info from '../pages/CVBuilder'
import Resume from '../pages/resume'
import Form from './form/Form'
import GeneralInfo from './form-field-parts/General-info'
import ContactInfo from './form-field-parts/ContactInfo'
import EducationInfo from './form-field-parts/EducationInfo'
import JobExperience from './form-field-parts/JobExperience'
import {
  returnArrWithLength,
  GenerateEducation,
  GenerateJob,
} from '../utils/helpers'
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
  const [educationData, setEducationData] = useState([
    {
      institutionName: '',
      degreeTitle: '',
      startingDate: '',
      endingDate: '',
      id: crypto.randomUUID(),
    },
  ])
  const [jobExperienceData, setJobExperienceData] = useState([
    {
      position: '',
      company: '',
      location: '',
      startingDate: '',
      endingDate: '',
      description: '',
      id: crypto.randomUUID(),
    },
  ])
  const [img, setImg] = useState('')

  function addNewItemHandler(data, setter, generator, max) {
    if (data.length === max) {
      setErr(`Error: you can't have more than ${max} items`)
      return
    }
    const newItem = generator()
    setter([...data, newItem])
  }

  return (
    <main className="pt-10">
      {err && <FormError setErr={setErr}>{err}</FormError>}
      {currentPage === 'info' && (
        <CVBuilder currentStep={currentStep} setCurrentStep={setCurrentStep}>
          <Form setCurrentStep={setCurrentStep} currentStep={currentStep}>
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
                  educationData[i] ? (
                    <EducationInfo
                      key={educationData[i]?.id}
                      index={i}
                      educationData={educationData}
                      setEducationData={setEducationData}
                    />
                  ) : (
                    ''
                  )
                )}{' '}
                <button
                  className="btn btn-primary text-black"
                  type="button"
                  onClick={() =>
                    addNewItemHandler(
                      educationData,
                      setEducationData,
                      GenerateEducation,
                      3
                    )
                  }
                >
                  Add new degree
                </button>
              </>
            )}

            {currentStep === 4 && (
              <>
                {returnArrWithLength(jobExperienceData.length + 1).map((_, i) =>
                  jobExperienceData[i] ? (
                    <JobExperience
                      key={jobExperienceData[i]?.id}
                      index={i}
                      jobExperienceData={jobExperienceData}
                      setEducationData={setJobExperienceData}
                    />
                  ) : (
                    ''
                  )
                )}{' '}
                <button
                  className="btn btn-primary text-black"
                  type="button"
                  onClick={() =>
                    addNewItemHandler(
                      jobExperienceData,
                      setJobExperienceData,
                      GenerateJob,
                      3
                    )
                  }
                >
                  Add new Job experience
                </button>
              </>
            )}

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
