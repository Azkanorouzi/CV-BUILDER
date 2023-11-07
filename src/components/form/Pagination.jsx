import { useNavigate } from 'react-router-dom'

export default function Pagination({ currentStep = 1 }) {
  const navigate = useNavigate()

  return (
    <div className="join mb-0 flex h-full w-full lg:w-auto order-1 lg:order-none">
      <button
        onClick={() => navigate('1')}
        className={`join-item btn bg-neutral text-secondary rounded-bl-none rounded-tl-none lg:rounded-tl-lg border-primary transition-transform ${
          currentStep == 1 && 'bg-primary lg:translate-y-8'
        }`}
      >
        1
      </button>
      <button
        onClick={() => navigate('2')}
        className={`join-item btn bg-neutral text-secondary rounded-bl-none border-primary h-full ${
          currentStep == 2 && 'bg-primary lg:translate-y-8'
        }`}
      >
        2
      </button>
      <button
        onClick={() => navigate('3')}
        className={`join-item btn bg-neutral text-secondary rounded-bl-none border-primary h-full ${
          currentStep == 3 && 'bg-primary lg:translate-y-8'
        }`}
      >
        3
      </button>
      <button
        onClick={() => navigate('4')}
        className={`join-item btn bg-neutral text-secondary rounded-bl-none border-primary h-full ${
          currentStep == 4 && 'bg-primary lg:translate-y-8'
        }`}
      >
        4
      </button>
      <button
        onClick={() => navigate('5')}
        className={`join-item btn bg-neutral text-secondary rounded-bl-none border-primary h-full ${
          currentStep == 5 && 'bg-primary lg:translate-y-8'
        }`}
      >
        5
      </button>
      <button
        onClick={() => navigate('6')}
        className={`join-item btn bg-neutral text-secondary rounded-bl-none border-primary  h-full ${
          currentStep == 6 && 'bg-primary lg:translate-y-8'
        }`}
      >
        6
      </button>
      <button
        onClick={() => navigate('7')}
        className={`join-item btn bg-neutral text-secondary rounded-bl-none border-primary h-full ${
          currentStep == 7 && 'bg-primary lg:translate-y-8'
        }`}
      >
        7
      </button>
      <button
        onClick={() => navigate('/resume')}
        className={`join-item btn bg-neutral text-secondary rounded-none border-primary h-full flex-1 lg:flex-none`}
      >
        <i className="fa-regular fa-eye"></i>
      </button>
    </div>
  )
}
