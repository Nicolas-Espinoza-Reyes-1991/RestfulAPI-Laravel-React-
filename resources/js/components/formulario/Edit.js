import React, { useEffect, useState  } from 'react';

import employeeServices from "../../services/Formulario"

function Edit(props){

  const [id, setId ] = useState(null);
  const [ nombre, setNombre ] = useState(null);
  const [ numero_trabajador, setNumerotrabajador ] = useState(null);
  const [ tipo_empresa, settTipoempresa ] = useState(null);
  const [ listRol, setListRol ] = useState([]);

    useEffect(()=>{
      async function fetchDataEmployee(){
        let id = props.match.params.id;
        const res = await employeeServices.get(id);

          if (res.succes) {
            console.log(res.data);
            const data= res.data
            setId(data.id)
            setNombre(data.nombre)
            setNumerotrabajador(data.numero_trabajador)
            settTipoempresa(data.tipo_empresa.tipo_empresa_id)
          }else{
            alert(res.masage)

          }
      }
    fetchDataEmployee();


    async function fetchDataRol() {
      // load data from API
      const res = await employeeServices.listTipoEmpresa();
      setListRol(res.data)
    }
    fetchDataRol();

    },[])


    const updateEmployee = async()=>{
      const data ={
        id,nombre,numero_trabajador,tipo_empresa
      }
    const res = await employeeServices.update(data);

    if (res.success) {
      alert(res.message)
    }
    else {
      alert(res.message)
    }

  }
  return (
    <div>
      <h4>Edit customer    </h4>
      <hr/>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="firstName">Nombre</label>
          <input type="text" class="form-control" onChange={(event)=>setNombre(event.target.value)} value={nombre}/>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="numero_trabajador">Numero Trabajador</label>
          <input type="email" class="form-control" value={numero_trabajador} placeholder="Ingrese aqui numero de trabajador"
            onChange={(event)=>setNumerotrabajador(event.target.value)} />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="tipo_empresa">Tipo Empresa {tipo_empresa}</label>
          <select id="inputState" class="form-control" onChange={(event)=>settTipoempresa(event.target.value)} value={tipo_empresa}>
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
          <button onClick={()=>updateEmployee()} class="btn btn-primary btn-block" type="submit">Editar</button>
        </div>
      </div>
    </div>
  )

}

export default Edit;