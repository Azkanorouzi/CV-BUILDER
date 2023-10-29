export default {
  state: {
    currentStep: 8,
    err: false,
  },
  data: {
    img: '',
    skills: ['JS', 'HTML', 'CSS', 'REACT', 'NODE JS'],
    languages: ['Persian', 'English'],
    interests: [
      '🎥 Watching movies and series',
      '🎯 Reading self-help',
      '🔴 watching youtube',
      '🏋️Body building',
      '💸 Crypto currencies',
    ],
    generalData: {
      firstName: 'Azka',
      lastName: 'Norouzi',
      profession: 'Fullstack Web Developer',
      cityOrCountry: 'Tehran/Ir',
    },
    contactData: {
      linkedinUserName: 'Coming soon',
      portfolioUrl: 'https://github.com/Azkanorouzi',
      email: 'a.azkazzz@gmail.com',
      phoneNumber: '+98 910923456',
      description:
        "Hey there, I am Azka, a passionate and eager web developer, I've been studying programming and web development technologies for a long time now, It all started out from just a humble hello world, now It's exciting to see how far I come, still there's a long way to go ... But I am confident to say though as much as web development industry is volatile, I can keep up man :)",
    },
    educationData: [
      {
        institutionName: 'Odin projects',
        degreeTitle: 'Full stack web development certification',
        startingDate: '2021-8-18',
        endingDate: ' 2024-3-12',
        id: crypto.randomUUID(),
      },
    ],
    jobExperienceData: [
      {
        position: 'Content manager / Website support',
        company: 'Elisteam',
        location: 'Tehran/Ir',
        startingDate: '2022-1-5',
        endingDate: '2024-2-15',
        description: "I've Been working with Elisteam :)",
        id: crypto.randomUUID(),
      },
    ],
  },
}
