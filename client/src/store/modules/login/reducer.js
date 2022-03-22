const stateInicial = {
  logado: false 
};

export default function (state = stateInicial, action){
  switch(action.type){
  case "USUARIO_LOGADO":
    const novoState = { ...state };
    novoState.logado = !novoState.logado;
    return novoState;
  default:
    return state;
  }
}