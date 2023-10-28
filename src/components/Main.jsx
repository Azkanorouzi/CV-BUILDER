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
} from '../utils/helpers'
import FormError from './form/FormError'
import Skill from './form-field-parts/Skills'
import Languages from './form-field-parts/languages'
import Interests from './form-field-parts/interests'

export default function Main({ currentPage, setCurPage }) {
  const storedData = JSON.parse(localStorage.getItem('data'))
  const [currentStep, setCurrentStep] = useState(storedData?.currentStep ?? 1)

  const [err, setErr] = useState(false)
  const [generalData, setGeneralData] = useState(
    storedData?.generalData ?? {
      firstName: '',
      lastName: '',
      profession: '',
      cityOrCountry: '',
    }
  )
  const [contactData, setContactData] = useState(
    storedData?.contactData ?? {
      linkedinUserName: '',
      portfolioUrl: '',
      email: '',
      phoneNumber: '',
      description: '',
    }
  )
  const [educationData, setEducationData] = useState(
    storedData?.educationData ?? [
      {
        institutionName: '',
        degreeTitle: '',
        startingDate: '',
        endingDate: '',
        id: crypto.randomUUID(),
      },
    ]
  )
  const [jobExperienceData, setJobExperienceData] = useState(
    storedData?.jobExperienceData ?? [
      {
        position: '',
        company: '',
        location: '',
        startingDate: '',
        endingDate: '',
        description: '',
        id: crypto.randomUUID(),
      },
    ]
  )
  const [img, setImg] = useState(storedData?.img ?? '')
  const [skills, setSkills] = useState(storedData?.skills ?? ['', ''])
  const [languages, setLanguages] = useState(storedData?.languages ?? ['', ''])
  const [interest, setInterest] = useState(storedData?.interest ?? ['', ''])

  useEffect(() => {
    localStorage.setItem(
      'data',
      JSON.stringify({
        generalData,
        contactData,
        educationData,
        jobExperienceData,
        img,
        skills,
        languages,
        interest,
        currentStep,
      })
    )
  }, [
    generalData,
    contactData,
    educationData,
    jobExperienceData,
    img,
    skills,
    languages,
    interest,
    currentStep,
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
