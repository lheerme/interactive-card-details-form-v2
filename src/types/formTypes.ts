import { z } from 'zod'

export const creditCardSchema = z.object({
  name: z
    .string()
    .min(1, { message: `Cant't be blank` })
    .refine((str) => !/\d/.test(str), { message: 'Type a valid name' }),
  cardNumber: z.coerce
    .number({ invalid_type_error: 'Wrong format, number only' })
    .min(1, { message: `Cant't be blank` })
    .gte(1000000000000000, { message: `Type a valid credit card number` })
    // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
    .lte(9999999999999999, { message: `Type a valid credit card number` }),
  cardCvc: z.coerce
    .number()
    .int()
    .min(1, { message: `Cant't be blank` })
    .gte(100, { message: `Type a valid CVC` })
    .lte(999, { message: `Type a valid CVC` }),
  expDate: z.object({
    month: z.coerce
      .number()
      .int()
      .min(1, { message: `Cant't be blank` })
      .gte(1, { message: `Type a valid month` })
      .lte(12, { message: `Type a valid month` }),
    year: z.coerce
      .number()
      .int()
      .min(1, { message: `Cant't be blank` })
      .gte(1, { message: `Type a valid year` })
      .lte(99, { message: `Type a valid year` }),
  }),
})

export type CreditCardSchema = z.infer<typeof creditCardSchema>
