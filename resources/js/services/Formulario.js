const baseUrl = "http://localrestfulapi.com/api/formulario"
import axios from "axios";
const employee = {};

employee.listTipoEmpresa = async () => {
  const urlList = baseUrl+"/TipoEmpresa"
  const res = await axios.get(urlList)

  .then(response=> {return response.data })
  .catch(error=>{ return error; })
  return res;
}

employee.save = async (data) => {
  const urlSave= baseUrl+"/create"
  const res = await axios.post(urlSave,data)
  .then(response=> {return response.data })
  .catch(error=>{ return error; })
  return res;
}
employee.listFormulario = async (data) => {
  const urlList= baseUrl+"/list"
  const res = await axios.get(urlList)
  .then(response=> {return response.data })
  .catch(error=>{ return error; })
  return res;
}

employee.get = async (id) => {
  const urlGet = baseUrl+"/get/"+id
  const res = await axios.get(urlGet)
  .then(response=>{ return response.data })
  .catch(error => { return error })
  return res;
}

employee.update = async (data) => {
  const urlUpdate = baseUrl+"/update/"+data.id
  const res = await axios.put(urlUpdate,data)
  .then(response=>{ return response.data; })
  .catch(error =>{ return error; })
  return res;
}

employee.delete = async (id) => {
  const urlDelete = baseUrl+"/delete/"+id
  const res = await axios.delete(urlDelete)
  .then(response=> { return response.data })
  .catch(error =>{ return error })
  return res;
}

export default employee