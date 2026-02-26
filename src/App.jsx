import React from 'react';
import Input from './Form/Input';
import useForm from './Hooks/useForm';

const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm();
  const sobrenome = useForm(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log('enviou');
    } else {
      console.log('Não Enviou');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="NOME" id="nome" type="text" {...nome} />
      <Input label="SOBRENOME" id="sobrenome" type="text" {...sobrenome} />
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <Input label="EMAIL" id="email" type="email" {...email} />

      <button>Enviar</button>
    </form>
  );
};

export default App;
