import React, { useEffect, useState  } from 'react';

import employeeServices from "../../services/Formulario"

function Form(){

  const [ nombre, setNombre ] = useState(null);
  const [ numero_trabajador, setNumerotrabajador ] = useState(null);
  const [ tipo_empresa, settTipoempresa ] = useState(null);
  const [ listRol, setListRol ] = useState([]);

  useEffect(() => {
    async function fetchDataRol() {
      // load data from API
      const res = await employeeServices.listTipoEmpresa();
      setListRol(res.data)
    }
    fetchDataRol();
  },[]);

  const saveEmployee = async () => {

    const data = {
      nombre, numero_trabajador, tipo_empresa
    }
    const res = await employeeServices.save(data);

    if (res.success) {
      alert(res.message)
    }
    else {
      alert(res.message)
    }
  }

  return(
    <div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="nombre">Nombre</label>
          <input type="text" class="form-control" placeholder="Ingrese aqui su nombre"
            onChange={(event)=>setNombre(event.target.value)} />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="numero_trabajador">Numero Trabajador</label>
          <input type="number" class="form-control" placeholder="Ingrese aqui numero de trabajador"
            onChange={(event)=>setNumerotrabajador(event.target.value)} />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="tipo_empresa">Tipo Empresa {tipo_empresa}</label>
          <select id="inputState" class="form-control" onChange={(event)=>settTipoempresa(event.target.value)}>
             <option selected>Seleccione...</option>
             {
               listRol.map((item)=>{
                 return(
                   <option value={item.tipo_empresa_id}>{item.descripcion}</option>
                 )
               })
             }
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <button class="btn btn-primary btn-block" type="submit"
          onClick={()=>saveEmployee()}>Guardar</button>
        </div>
      </div>
    </div>



  )
}

export default Form;