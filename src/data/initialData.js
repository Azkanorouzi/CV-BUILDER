export default {
  state: {
    currentStep: 1,
    err: false,
  },
  data: {
    img: '',
    skills: ['', ''],
    languages: ['', ''],
    interests: ['', ''],
    generalData: {
      firstName: '',
      lastName: '',
      profession: '',
      cityOrCountry: '',
    },
    contactData: {
      linkedinUserName: '',
      portfolioUrl: '',
      email: '',
      phoneNumber: '',
      description: '',
    },
    educationData: [
      {
        institutionName: '',
        degreeTitle: '',
        startingDate: '',
        endingDate: '',
        id: crypto.randomUUID(),
      },
    ],
    jobExperienceData: [
      {
        position: '',
        company: '',
        location: '',
        startingDate: '',
        endingDate: '',
        description: '',
        id: crypto.randomUUID(),
      },
    ],
  },
}
