function isLoginValid(login, min = 4, max = 16) {
  // Write code under this line
  const loginLength = login.length;
  return loginLength >= min && loginLength <= max ? true : false;
}

function isLoginUnique(allLogins, login) {
  // Write code under this line
  return allLogins.includes(login) ? false : true;
}

function addLogin(allLogins, login) {
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  //let message;
  // Write code under this line
  if (isLoginValid(login) === true) {
    if (isLoginUnique(allLogins, login) === true) {
      logins.push(login);
      return SUCCESS;
    } else return REFUSAL;
  } else return ERROR;

  //   if (isLoginValid(login) === false) {
  //     message = ERROR;
  //     return message;
  //   }
  //   if (isLoginUnique === false) {
  //     message = REFUSAL;
  //     return REFUSAL;
  //   }
  //   logins.push(login);
  //   return (message = SUCCESS);
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// console.log(isLoginValid('Ajax'));

// console.log(isLoginUnique(logins, 'Ajax'));
// allLogins['1234', '12345'] и '1234'

console.log(addLogin(logins, 'Ajax'));
// 'Логин успешно добавлен!'
// console.log(isLoginUnique('Ajax'));

console.log(addLogin(logins, 'robotGoogles'));
// 'Такой логин уже используется!'

// console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, 'jqueryisextremelyfast'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'
