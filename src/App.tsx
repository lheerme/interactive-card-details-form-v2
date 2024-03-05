import bgCardFront from './assets/bg-card-front.png'
import bgCardBack from './assets/bg-card-back.png'
import cardLogo from './assets/card-logo.svg'
import completeIcon from './assets/icon-complete.svg'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { twMerge } from 'tailwind-merge'
import { useState } from 'react'
import { CreditCardSchema, creditCardSchema } from './types/formTypes'
import { Form } from './components/Form'

function App() {
  const methods = useForm<CreditCardSchema>({
    resolver: zodResolver(creditCardSchema),
  })
  const [isComplete, setIsComplete] = useState(false)

  function handleConfirmComplete() {
    setIsComplete(false)
    reset()
  }

  const { watch, reset } = methods

  const values = watch()

  return (
    <main className="w-full min-h-dvh flex tablet:items-center justify-center bg-main-mobile tablet:bg-main-desktop bg-no-repeat bg-[length:100%_225px] tablet:bg-[length:35%_100%] px-3">
      <FormProvider {...methods}>
        <div className="flex flex-col tablet:flex-row items-center tablet:justify-between w-full max-w-5xl gap-6">
          {/* CREDIT CARD IMAGES */}
          <div className="flex flex-col-reverse tablet:flex-col tablet:gap-10 w-[320px] md:w-[500px] max-h-[250px] md:max-h-[350px] tablet:max-h-none mt-4 tablet:mt-0 animate-fade-in">
            {/* FRONT */}
            <div className="w-full max-w-[270px] md:max-w-[400px] relative z-[1]">
              <img
                src={bgCardFront}
                alt="Credit Card Front"
                className="w-full"
              />
              <img
                src={cardLogo}
                alt="Card Logo"
                className="w-[19%] md:w-[75px] absolute top-6 left-6"
              />
              <div className="text-icdWhite absolute left-0 right-0 bottom-11 md:bottom-16 px-6">
                <label
                  htmlFor="cardNumber"
                  className="text-sm md:text-2xl tracking-[0.18em] font-medium"
                >
                  {values.cardNumber
                    ? values.cardNumber
                        .toString()
                        .replace(/(\d{4}(?!\s))/g, '$1 ')
                    : '0000 0000 0000 0000'}
                </label>
              </div>
              <div className="flex justify-between text-icdWhite absolute left-0 right-0 bottom-0 px-6 pb-4 text-xxs md:text-xs tracking-[0.13em] md:font-medium">
                <label htmlFor="name">
                  {values.name ? values.name.toUpperCase() : 'JANE APPLESEED'}
                </label>
                <label htmlFor="expDate">
                  {values?.expDate?.month ? values.expDate.month : '00'}/
                  {values?.expDate?.year ? values.expDate.year : '00'}
                </label>
              </div>
            </div>
            {/* BACK */}
            <div className="w-full max-w-[270px] md:max-w-[400px] relative -bottom-[60px] md:-bottom-[90px] tablet:bottom-auto ml-auto">
              <img src={bgCardBack} alt="Credit Card Back" className="w-full" />
              <label
                htmlFor="cardCvc"
                className="text-xxs md:text-sm text-icdWhite tracking-[0.125em] md:font-medium absolute right-[33px] md:right-[50px] top-[65px] md:top-[98px]"
              >
                {values.cardCvc ? values.cardCvc : '000'}
              </label>
            </div>
          </div>
          {/* DATA */}
          <div className="w-full max-w-96 flex items-center justify-center pb-9">
            <Form isComplete={isComplete} setIsComplete={setIsComplete} />
            {/* SUCESS MESAGE */}
            <div
              className={twMerge(
                'hidden w-full flex-col gap-6 items-center animate-fade-in',
                isComplete && 'flex'
              )}
            >
              <img src={completeIcon} alt="complete icon" />
              <p className="font-medium text-3xl tracking-[0.125em]">
                THANK YOU!
              </p>
              <span className="font-semibold text-icdDarkGrayishViolet mb-4">
                We've added your card details
              </span>
              <button
                onClick={handleConfirmComplete}
                className="w-full p-3 bg-icdVeryDarkViolet text-icdWhite rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </FormProvider>
    </main>
  )
}

export default App
