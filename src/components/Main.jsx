import { useEffect, useState } from 'react'
import CVBuilder from '../pages/CVBuilder'
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
  useLocalStorage,
} from '../utils/helpers'
import FormError from './form/FormError'
import Skill from './form-field-parts/Skills'
import Languages from './form-field-parts/languages'
import Interests from './form-field-parts/interests'

export default function Main({ currentPage, setCurPage }) {
  const [currentStep, setCurrentStep] = useState(1)
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
  const [skills, setSkills] = useState(['', ''])
  const [languages, setLanguages] = useState(['', ''])
  const [interest, setInterest] = useState(['', ''])
  const [localStorageValue, setLocalStorageStateValue] = useLocalStorage(
    'data',
    {
      generalData,
      contactData,
      educationData,
      jobExperienceData,
      img,
      skills,
      languages,
      interest,
    }
  )
  useEffect(() => {
    console.log(localStorageValue)
    setGeneralData(localStorageValue.generalData)
    setContactData(localStorageValue.contactData)
    setImg(localStorageValue.img)
    setSkills(localStorageValue.skills)
    setEducationData(localStorageValue.educationData)
    setJobExperienceData(localStorageValue.jobExperienceData)
    setLanguages(localStorageValue.languages)
    return () => {
      setLocalStorageStateValue({
        generalData,
        contactData,
        educationData,
        jobExperienceData,
        img,
        skills,
        languages,
        interest,
      })
    }
  }, [])
  useEffect(() => {
    setLocalStorageStateValue({
      generalData,
      contactData,
      educationData,
      jobExperienceData,
      img,
      skills,
      languages,
      interest,
    })
  }, [
    generalData,
    contactData,
    educationData,
    jobExperienceData,
    img,
    skills,
    languages,
    interest,
    setLocalStorageStateValue,
  ])
  function addNewItemHandler(data, setter, generator, max) {
    if (data.length === max) {
      setErr(`Error: you can't have more than ${max} items`)
      return
    }
    const newItem = generator()
    setter([...data, newItem])
  }

  return (
    <main className="pt-10 pb-20">
      {err && <FormError setErr={setErr}>{err}</FormError>}
      {currentPage === 'info' && (
        <CVBuilder
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          setCurPage={setCurPage}
          setLocalStorageStateValue={setLocalStorageStateValue}
          data={{
            generalData,
            contactData,
            educationData,
            jobExperienceData,
            img,
            skills,
            languages,
            interest,
          }}
        >
          <Form
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
            setCurPage={setCurPage}
          >
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
                      setJobExperienceData={setJobExperienceData}
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

            {currentStep === 5 && (
              <Skill skills={skills} setSkills={setSkills} setErr={setErr} />
            )}

            {currentStep === 6 && (
              <Languages
                languages={languages}
                setLanguages={setLanguages}
                setErr={setErr}
              />
            )}

            {currentStep === 7 && (
              <Interests
                interest={interest}
                setInterest={setInterest}
                setErr={setErr}
              />
            )}
          </Form>
        </CVBuilder>
      )}
      {currentPage === 'resume' && (
        <Resume
          data={{
            generalData,
            contactData,
            educationData,
            jobExperienceData,
            img,
            skills,
            languages,
            interest,
          }}
        />
      )}
    </main>
  )
}
