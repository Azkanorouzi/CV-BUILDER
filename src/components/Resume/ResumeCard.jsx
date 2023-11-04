import { useFormData } from '../../contexts/FormDataContext'
import { shouldTextBeDark } from '../../utils/helpers'

export default function ResumeCard({ accentColor, bgColor, secBgColor }) {
  const isTextDark = shouldTextBeDark(bgColor)
  const isTextDark2 = shouldTextBeDark(secBgColor)
  const { data } = useFormData()
  return (
    <section
      className="flex max-w-4xl resume-card "
      style={{ background: secBgColor }}
    >
      <aside
        className="p-8 border-r-2 grid gap-10"
        style={{
          background: bgColor,
          borderColor: accentColor,
          color: isTextDark ? 'black' : 'white',
        }}
      >
        <div className="avatar justify-center">
          <div
            className={`w-36 h-36 rounded-full border {
              !data.img && 'border-3 border-dotted'
            }`}
            style={{ borderColor: accentColor }}
          >
            {data.img && <img src={data.img} />}
          </div>
        </div>
        <section className="">
          <h2 className="text-2xl">Skills</h2>
          <div className="divider mt-2"></div>
          <ul className="text-lg">
            {data?.skills.map((skill, i) =>
              skill ? (
                <li key={i}>
                  <p className="whitespace-nowrap">- {skill}</p>
                </li>
              ) : (
                ''
              )
            )}
          </ul>
        </section>
        <section className="py-5">
          <h2 className="text-2xl">Languages</h2>
          <div className="divider mt-2"></div>
          <ul className="text-lg">
            {data?.languages.map((lang, i) =>
              lang ? <li key={i}>- {lang}</li> : ''
            )}
          </ul>
        </section>
        <section className="py-5">
          <h2 className="text-2xl">Interests</h2>
          <div className="divider mt-2"></div>
          <ul className="text-lg grid gap-3">
            {data?.interests.map((interest, i) =>
              interest ? (
                <li key={i} className="whitespace-nowrap text-sm">
                  {interest}
                </li>
              ) : (
                ''
              )
            )}
          </ul>
        </section>
      </aside>
      <article
        className="p-5"
        style={{ color: isTextDark2 ? 'black' : 'white' }}
      >
        <section className="pt-10 flex gap-20">
          <div>
            <h1 className="text-6xl">
              <span style={{ color: accentColor }}>
                {data?.generalData?.firstName[0]}
              </span>
              {data?.generalData?.firstName.slice(1)}
            </h1>
            <h2 className="text-5xl ml-8 mb-20">
              {' '}
              <span style={{ color: accentColor }}>
                {data?.generalData?.lastName[0]}
              </span>
              {data?.generalData?.lastName.slice(1)}
            </h2>
          </div>
          <div className="mt-7">
            <h3
              style={{ color: accentColor }}
              className="text-2xl font-bold whitespace-nowrap"
            >
              {data?.generalData?.profession}
            </h3>
            <h4 className="text-xl ml-8">
              <span>
                <i
                  className="fa-solid fa-location mr-3"
                  style={{ color: accentColor }}
                ></i>
                {data?.generalData?.cityOrCountry}
              </span>
            </h4>
          </div>
        </section>
        <hr style={{ borderColor: accentColor }}></hr>
        <section className="mb-5">
          <p className="p-5 pl-0 font-bold">{data?.contactData?.description}</p>
          <article className="flex gap-10">
            <div>
              <h5 className="mb-3">
                <i
                  className="fa-solid fa-envelope mr-3"
                  style={{ color: accentColor }}
                ></i>
                <span>{data?.contactData?.email}</span>
              </h5>
              <h5>
                <i
                  className="fa-brands fa-linkedin-in mr-3"
                  style={{ color: accentColor }}
                ></i>
                <span>{data?.contactData?.linkedinUserName}</span>
              </h5>
            </div>
            <div>
              <h5 className="mb-3">
                <i
                  className="fa fa-phone mr-3"
                  style={{ color: accentColor }}
                ></i>
                <span>{data?.contactData?.phoneNumber}</span>
              </h5>
              <h5>
                <i
                  className="fa-brands fa-github mr-3"
                  style={{ color: accentColor }}
                ></i>
                <span>{data?.contactData?.portfolioUrl}</span>
              </h5>
            </div>
          </article>
        </section>
        <hr style={{ borderColor: accentColor }} className="mb-5"></hr>
        <section className="pb-3">
          <p className="text-xl font-bold mb-3" style={{ color: accentColor }}>
            Work experience
          </p>
          <ul className="grid gap-8">
            {data?.jobExperienceData.map((job, i) => {
              return (
                <li key={i}>
                  <h5 className="text-lg text-bold">{job?.position}</h5>
                  <h6 className="text-lg">
                    {job.company} ({job.location})
                  </h6>
                  <div>
                    <p style={{ color: accentColor }}>
                      {job.startingDate} - {job.endingDate}
                    </p>
                    <p>{job.description}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
        <hr style={{ borderColor: accentColor }}></hr>
        <section className="pt-4">
          <p className="text-xl font-bold mb-3" style={{ color: accentColor }}>
            Education
          </p>
          <ul className="grid gap-8">
            {data?.educationData.map((edu, i) => {
              return (
                <li key={i}>
                  <h5 className="text-lg text-bold">{edu?.institutionName}</h5>
                  <h6 className="text-lg">{edu.degreeTitle}</h6>
                  <div>
                    <p style={{ color: accentColor }}>
                      {edu.startingDate} - {edu.endingDate}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
      </article>
    </section>
  )
}
