import Select from "react-select";
import "./App.css";
import { useState } from "react";


const MultiValueRemove = (props:any) => {
    return null;
};

function App() {
  const [formula, setFormula] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);


  return (
    <>
      <h1>Formula Builder</h1>
      <div className="card">
        <Select
          styles={{
            input(base) {
              return {
                ...base,
                width: "50vw",
              };
            },
            multiValue(base) {
              return {
                ...base,
                padding: "0px",
                margin: "0px",
                backgroundColor: "white",
              };
            },
          }}
          value={formula}
          components={{
            MultiValueRemove,
          }}
          onChange={(selectedOption) => {
            const mutated = selectedOption.map((item, index) => {
              if (item?.value?.includes("_")) {
                return item;
              }
              return { value: `${item?.value}_${index}`, label: item.label };
            });
            setFormula(mutated);
          }}
          hideSelectedOptions={false}
          isMulti
          options={[
            { value: "(", label: "(" },
            { value: "+", label: "+" },
            { value: "/", label: "/" },
            { value: "*", label: "*" },
            { value: "-", label: "-" },
            { value: ")", label: ")" },
            { value: "basic", label: "Basic" },
            { value: "hra", label: "HRA" },
            { value: "da", label: "DA" },
            { value: "ot", label: "Bonus" },
            { value: "ta", label: "TA" },
          ]}
        />
        {
          <div>
            {formula.map((item, index) => {
              return (
                <span key={index} className="formula">
                  {item.value}
                </span>
              );
            })}
          </div>
        }
      </div>
    </>
  );
}

export default App;
