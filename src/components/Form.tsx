import { FormHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { CreditCardSchema } from '../types/formTypes'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  isComplete: boolean
  setIsComplete: (arg0: boolean) => void
}

export function Form(props: FormProps) {
  const { isComplete, setIsComplete, ...rest } = props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<CreditCardSchema>()

  function newCreditCard() {
    setIsComplete(true)
  }

  return (
    <form
      onSubmit={handleSubmit(newCreditCard)}
      className={twMerge('space-y-5 animate-fade-in', isComplete && 'hidden')}
      {...rest}
    >
      {/* NAME */}
      <div className="flex flex-col gap-2 cursor-pointer sm:w-full max-w-[320px] sm:max-w-none m-auto">
        <label
          htmlFor="name"
          className="text-xs font-bold tracking-[0.13em] cursor-pointer"
        >
          CARDHOLDER NAME
        </label>
        <input
          id="name"
          type="text"
          className={twMerge(
            'outline-none ring-1 ring-icdLightGrayishViolet focus-visible:ring-icdBorder text-icdVeryDarkViolet rounded-md font-medium tracking-wide p-2 transition-shadow cursor-pointer',
            errors.name && 'ring-icdRedError focus-visible:ring-icdRedError'
          )}
          placeholder="e.g. Jane Appleseed"
          {...register('name')}
        />
        {errors.name && (
          <span className="text-icdRedError text-xs font-bold">
            {errors.name.message}
          </span>
        )}
      </div>
      {/* NUMBER */}
      <div className="flex flex-col gap-2 cursor-pointer sm:w-full max-w-[320px] sm:max-w-none m-auto">
        <label
          htmlFor="cardNumber"
          className="text-xs font-bold tracking-[0.13em] cursor-pointer"
        >
          CARD NUMBER
        </label>
        <input
          id="cardNumber"
          type="text"
          maxLength={16}
          className={twMerge(
            'outline-none ring-1 ring-icdLightGrayishViolet focus-visible:ring-icdBorder text-icdVeryDarkViolet rounded-md font-medium tracking-wide p-2 transition-shadow cursor-pointer',
            errors.cardNumber &&
              'ring-icdRedError focus-visible:ring-icdRedError'
          )}
          placeholder="e.g. 1234 5678 9123 0000"
          {...register('cardNumber')}
        />
        {errors.cardNumber && (
          <span className="text-icdRedError text-xs font-bold">
            {errors.cardNumber.message}
          </span>
        )}
      </div>
      <div className="w-full flex gap-5">
        {/* EXP. DATE */}
        <div className="flex flex-col gap-2 w-full cursor-pointer">
          <label
            htmlFor="expDate"
            className="text-xxs min-[340px]:text-xs font-bold tracking-[0.13em] cursor-pointer"
          >
            EXP. DATE (MM/YY)
          </label>
          <div className="flex gap-3">
            <input
              id="expDate"
              min={1}
              max={12}
              type="number"
              className={twMerge(
                'outline-none w-full ring-1 ring-icdLightGrayishViolet focus-visible:ring-icdBorder text-icdVeryDarkViolet rounded-md font-medium tracking-wide p-2 transition-shadow cursor-pointer',
                errors.expDate?.month &&
                  'ring-icdRedError focus-visible:ring-icdRedError'
              )}
              placeholder="MM"
              {...register('expDate.month')}
            />
            <input
              id="expDate"
              min={1}
              max={99}
              type="number"
              className={twMerge(
                'outline-none w-full ring-1 ring-icdLightGrayishViolet focus-visible:ring-icdBorder text-icdVeryDarkViolet rounded-md font-medium tracking-wide p-2 transition-shadow cursor-pointer',
                errors.expDate?.year &&
                  'ring-icdRedError focus-visible:ring-icdRedError'
              )}
              placeholder="YY"
              {...register('expDate.year')}
            />
          </div>
          {errors.expDate?.month && (
            <span className="text-icdRedError text-xs font-bold">
              {errors.expDate.month.message}
            </span>
          )}
          {errors.expDate?.year && (
            <span className="text-icdRedError text-xs font-bold">
              {errors.expDate.year.message}
            </span>
          )}
        </div>
        {/* CVC */}
        <div className="flex flex-col gap-2 w-full max-w-[160px] sm:max-w-none cursor-pointer">
          <label
            htmlFor="cardCvc"
            className="text-xs font-bold tracking-[0.13em] cursor-pointer"
          >
            CVC
          </label>
          <input
            id="cardCvc"
            type="text"
            maxLength={3}
            className={twMerge(
              'outline-none ring-1 ring-icdLightGrayishViolet focus-visible:ring-icdBorder text-icdVeryDarkViolet rounded-md font-medium tracking-wide p-2 transition-shadow cursor-pointer',
              errors.cardCvc &&
                'ring-icdRedError focus-visible:ring-icdRedError'
            )}
            placeholder="e.g. 123"
            {...register('cardCvc')}
          />
          {errors.cardCvc && (
            <span className="text-icdRedError text-xs font-bold">
              {errors.cardCvc.message}
            </span>
          )}
        </div>
      </div>
      <button className="w-full p-3 bg-icdVeryDarkViolet text-icdWhite rounded-md font-medium hover:opacity-90 transition-opacity">
        Confirm
      </button>
    </form>
  )
}
