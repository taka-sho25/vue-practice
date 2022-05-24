import { useForm, useField } from 'vee-validate'
import { string, ref as yupRef, object } from 'yup'

type FormSchema = {
  name: string
  email: string
  password: string
  passwordConfirm: string
}

const schema = object().shape({
  name: string().required(),
  email: string().email().required(),
  password: string().min(5).required(),
  passwordConfirm: string()
    .min(5)
    .test('isEqual', 'Passwords do not match!', function (v) {
      const ref = yupRef('password')
      return v === this.resolve(ref)
    })
    .required(),
})

export const useFormValidate = () => {
  const { meta, errors, handleSubmit } = useForm<FormSchema>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validationSchema: schema,
  })
  const { value: name } = useField<string>('name')
  const { value: email } = useField<string>('email')
  const { value: password } = useField<string>('password')
  const { value: passwordConfirm } = useField<string>('passwordConfirm')

  const onSubmit = handleSubmit((values) => {
    console.log({ ...values })
  })

  return {
    meta,
    errors,
    name,
    email,
    password,
    passwordConfirm,
    onSubmit,
  }
}
