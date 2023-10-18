import { useState } from 'react'
import CVBuilder from '../pages/CVBuilder'
import Info from '../pages/CVBuilder'
import Resume from '../pages/resume'
import Form from './form/Form'
import GeneralInfo from './form-field-parts/General-info'

export default function Main({ currentPage }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [generalData, setGeneralData] = useState({
    firstName: '',
    lastName: '',
    profession: '',
    cityOrCountry: '',
  })
  const [img, setImg] = useState('')
  return (
    <main className="pt-10">
      {currentPage === 'info' && (
        <CVBuilder>
          <Form>
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
                img={img}
                setImg={setImg}
                generalData={generalData}
                setGeneralData={setGeneralData}
              />
            )}
            {/* <fieldset className="flex gap-10">
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
              </label> */}

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
