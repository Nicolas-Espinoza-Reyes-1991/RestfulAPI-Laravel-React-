import React, { useEffect, useState } from 'react';

import employeeServices from "../../services/Formulario"

import { Link } from "react-router-dom";

function List(){
  const [ listFormulario, setListFormulario ] = useState([]);
  useEffect(()=>{
    async function fetchDataList(){
      const res = await employeeServices.listFormulario();
      console.log(res.data);
      setListFormulario(res.data)
    }
    fetchDataList();

  },[])

  const onClickDelete = async (i,id) => {
    var yes = confirm("are you sure to delete this item?");
    if (yes === true){
      const res = await employeeServices.delete(id)
      if (res.success) {
        alert(res.message) 
        const newList = listFormulario
        newList.splice(i,1)
        setListFormulario(newList);
      }
      else{
        alert(res.message);
      }
    }

  }
  return (
    <section>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">nombre</th>
            <th scope="col">Numero Trabajador</th>
            <th scope="col">Tipo Empresa</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {
          listFormulario.map((item,i)=>{
            return(
              <tr>
                <th scope="row">{item.id}</th>
                <th>{item.nombre}</th>
                <td>{item.numero_trabajador}</td>
                <td>{item.tipo_empresa.descripcion}</td>
                <td>
                  <Link class="btn btn-outline-info" to={"/formulario/edit/"+item.id}>Edit</Link>
                  <a href="#"  onClick={()=>onClickDelete(i,item.id)} class="btn btn-danger"> Delete </a>
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </section>
  )
}

export default List;