// promise antigo -> then....
// const listaClientes = () => {
//   return fetch(`http://localhost:3000/profile`)
//     .then(resposta => {
//       return resposta.json();
//     })
// }

const listaClientes = async () => {
  const resultado = await fetch(`http://localhost:3000/profile`)
  if (resultado.ok) {
    return resultado.json();
  }
  throw new Error('Não foi possível listar os clientes.');
}

const criaCliente = async (nome, email) => {
  const resultado = await fetch(`http://localhost:3000/profile`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome: nome,
      email: email
    })
  });
  if (resultado.ok) {
    return resultado.body;
  }
  throw new Error('Não foi possível criar o cliente.');
}

const removeCliente = async (id) => {
  const resultado = await fetch(`http://localhost:3000/profile/${id}`, {
    method: 'DELETE'
  });
  if (!resultado.ok) {
    throw new Error('Não foi possível remover o cliente.')
  }
  return resultado;
}

const detalhaCliente = async (id) => {
  const resultado = await fetch(`http://localhost:3000/profile/${id}`)
  if (resultado.ok) {
    return resultado.json();
  }
  throw new Error('Não foi possível detalhar o cliente.')
}

const atualizaCliente = async (id, nome, email) => {
  const resultado = await fetch(`http://localhost:3000/profile/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome: nome,
      email: email
    })
  })
  if (resultado.ok) {
    return resultado.json();
  }
  throw new Error('Não foi possível atualizar o cliente.')
}

export const clienteService = {
  listaClientes,
  criaCliente,
  removeCliente,
  detalhaCliente,
  atualizaCliente
}