import React from "react";
import MaterialTable from "material-table";

export default function Table() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Id", field: "id" ,filtertype: "checkbox",},
      { title: "Description", field: "description" },
      { title: "Name", field: "name" },
      { title: "Price", field: "price" },
      { title: "Unit", field: "unit" },
      { title: "Tax", field: "tax" },
      { title: "Exchange Rate", field: "exchange" },
      { title: "Final Payment", field: "final" },
    ],
    data: [
      {
        id: 1,
        description: "Free in",
        name: "Mehmet",
        price: "14522",
        unit: "per container",
        tax: "-",
        exchange: "1.00",
        final: 20000,
      },
      {
        id: 2,
        description: "Free in",
        name: "Meher",
        price: "14522",
        unit: "per container",
        tax: "-",
        exchange: "1.00",
        final: 20000,
      },
    ],
  });
  const options = {
    filtertype: "checkbox",
    sort: true,
  };

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      options={options}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
