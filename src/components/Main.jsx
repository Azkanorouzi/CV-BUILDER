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
import { useReducer } from 'react'
import initialData from '../data/initialData'
import previewData from '../data/previewData'

function reducer({ state, data }, { type, payLoad }) {
  switch (type) {
    case 'err':
      return { data: { ...data }, state: { ...state, err: payLoad } }
    case 'removeErr':
      return { data: { ...data }, state: { ...state, err: false } }
    case 'setStep':
      return { data: { ...data }, state: { ...state, currentStep: payLoad } }
    case 'setStepFinal':
      return {
        data: { ...data },
        state: { ...state, step: 1 },
      }
    case 'newItem':
      return {
        state: { ...state },
        data: {
          ...data,
          [payLoad.propName]: [...data[payLoad.propName], payLoad.newItem],
        },
      }
    case 'setItems':
      return {
        state: { ...state },
        data: {
          ...data,
          [payLoad.propName]: [...payLoad.newItems],
        },
      }
    case 'deleteItem':
      return {
        state: { ...state },
        data: {
          ...data,
          [payLoad.propName]: payLoad.newItems,
        },
      }
    case 'setImg':
      return { state: { ...state }, data: { ...data, img: payLoad } }
    case 'setGeneralData':
      return { state: { ...state }, data: { ...data, generalData: payLoad } }
    case 'setContactData':
      return { state: { ...state }, data: { ...data, contactData: payLoad } }
    case 'setSkills':
      return { state: { ...state }, data: { ...data, skills: payLoad } }
    case 'setLanguages':
      return { state: { ...state }, data: { ...data, languages: payLoad } }
    case 'setInterests':
      return { state: { ...state }, data: { ...data, interests: payLoad } }
    case 'setPreview':
      return previewData
  }
}
export default function Main({ currentPage, setCurPage }) {
  const [{ state, data }, dispatch] = useReducer(reducer, initialData)
  function addNewItemHandler(data, setter, generator, max) {
    if (data.length === max) {
      dispatch({
        type: 'err',
        payLoad: `Error: you can't have more than ${max} items`,
      })
      return
    }
    const newItem = generator()
    dispatch({ type: 'newItem', payLoad: { propName: setter, newItem } })
  }

  return (
    <main className="pb-20 pt-40">
      {state.err && <FormError dispatch={dispatch}>{state.err}</FormError>}
      {currentPage === 'info' && (
        <CVBuilder
          currentStep={state.currentStep}
          dispatch={dispatch}
          data={data}
          setCurPage={setCurPage}
        >
          <Form
            dispatch={dispatch}
            currentStep={state.currentStep}
            setCurPage={setCurPage}
          >
            {state.currentStep === 1 && (
              <GeneralInfo
                img={data.img}
                generalData={data.generalData}
                dispatch={dispatch}
              />
            )}
            {state.currentStep === 2 && (
              <ContactInfo contactData={data.contactData} dispatch={dispatch} />
            )}

            {state.currentStep === 3 && (
              <>
                {returnArrWithLength(data.educationData.length + 1).map(
                  (_, i) =>
                    data.educationData[i] ? (
                      <EducationInfo
                        key={data.educationData[i]?.id}
                        index={i}
                        educationData={data.educationData}
                        dispatch={dispatch}
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
                      data.educationData,
                      'educationData',
                      GenerateEducation,
                      3
                    )
                  }
                >
                  Add new degree
                </button>
              </>
            )}

            {state.currentStep === 4 && (
              <>
                {returnArrWithLength(data.jobExperienceData.length + 1).map(
                  (_, i) =>
                    data.jobExperienceData[i] ? (
                      <JobExperience
                        key={data.jobExperienceData[i]?.id}
                        index={i}
                        jobExperienceData={data.jobExperienceData}
                        dispatch={dispatch}
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
                      data.jobExperienceData,
                      'jobExperienceData',
                      GenerateJob,
                      3
                    )
                  }
                >
                  Add new Job experience
                </button>
              </>
            )}

            {state.currentStep === 5 && (
              <Skill skills={data.skills} dispatch={dispatch} />
            )}

            {state.currentStep === 6 && (
              <Languages languages={data.languages} dispatch={dispatch} />
            )}

            {state.currentStep === 7 && (
              <Interests interest={data.interests} dispatch={dispatch} />
            )}
          </Form>
        </CVBuilder>
      )}
      {currentPage === 'resume' && <Resume data={data} dispatch2={dispatch} />}
    </main>
  )
}
