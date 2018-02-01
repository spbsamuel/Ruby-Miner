export default function stateFromStorage(...keys) {
  const state = {};
  for (let key of keys){
    try{
      const value = JSON.parse(localStorage.getItem(key));

      if (value) state[key] = value;
    }
    catch(e){
      console.log(e)
    }
  }
  return state;
}