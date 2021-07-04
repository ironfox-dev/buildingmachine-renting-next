import * as Yup from 'yup';

export const validateEmail = (email: string): boolean => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
};

export const validatePassword = (password: string): boolean => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z-@./$!%^*()#~&{}?<>=+\w\s]{8,}$/;
  return re.test(password);
};

export const yupEqualTo = (ref: any, msg: string) =>
  Yup.mixed().test({
    name: 'equalTo',
    exclusive: false,
    message: msg,
    params: {
      reference: ref.path,
    },
    test(value: any) {
      return value === this.resolve(ref);
    },
  });
