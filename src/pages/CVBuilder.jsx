import Pagination from '../components/form/Pagination'
import StepTitle from '../components/form-field-parts/StepTitle'
import CVBuilderBody from '../components/form-field-parts/CVBuilderBody'

import Skill from '../components/form-field-parts/Skills'
import Languages from '../components/form-field-parts/languages'
import Interests from '../components/form-field-parts/Interests'

import Form from '../components/form/Form'
import GeneralInfo from '../components/form-field-parts/General-info'
import ContactInfo from '../components/form-field-parts/ContactInfo'
import EducationInfo from '../components/form-field-parts/EducationInfo'
import JobExperience from '../components/form-field-parts/JobExperience'
import {
  returnArrWithLength,
  GenerateEducation,
  GenerateJob,
} from '../utils/helpers'
import { useParams } from 'react-router-dom'
import { useFormData } from '../contexts/FormDataContext'

export default function CVBuilder() {
  const { step: st = 1 } = useParams()
  const step = st > 7 ? 7 : st <= 0 ? 1 : isNaN(st) ? 1 : st ?? 1
  const { addNewItemHandler, data } = useFormData()

  return (
    <section className="grid place-content-center lg:w-full h-full animate-opacity-in opacity-0  ">
      <div className="flex items-center rounded-xl flex-col lg:flex-row">
        <Pagination currentStep={step}></Pagination>
        <StepTitle currentStep={step} />
      </div>
      <CVBuilderBody>
        <Form currentStep={step}>
          {step <= 1 && <GeneralInfo />}
          {step == 2 && <ContactInfo />}

          {step == 3 && (
            <>
              {returnArrWithLength(data.educationData.length + 1).map((_, i) =>
                data.educationData[i] ? (
                  <EducationInfo
                    key={data.educationData[i]?.id}
                    index={i}
                    handler={() =>
                      addNewItemHandler(
                        data.educationData,
                        'educationData',
                        GenerateEducation,
                        3
                      )
                    }
                  />
                ) : (
                  ''
                )
              )}{' '}
            </>
          )}

          {step == 4 && (
            <>
              {returnArrWithLength(data.jobExperienceData.length + 1).map(
                (_, i) =>
                  data.jobExperienceData[i] ? (
                    <JobExperience
                      key={data.jobExperienceData[i]?.id}
                      index={i}
                      handler={() =>
                        addNewItemHandler(
                          data.jobExperienceData,
                          'jobExperienceData',
                          GenerateJob,
                          3
                        )
                      }
                    />
                  ) : (
                    ''
                  )
              )}{' '}
            </>
          )}

          {step == 5 && <Skill />}

          {step == 6 && <Languages />}

          {step > 6 && <Interests />}

          {isNaN(+step) && <Interests />}
        </Form>
      </CVBuilderBody>
    </section>
  )
}
