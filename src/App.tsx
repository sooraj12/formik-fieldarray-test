import * as React from "react";
import { Formik, FieldArray, FieldMetaProps } from "formik";
import { Row } from "./Row";

import "./styles.css";

interface FormValues {
  fields: Field[];
}

export interface Field {
  id: number;
  name: string;
  number: string;
}

export default function App() {
  const values: FormValues = {
    fields: [],
  };

  return (
    <div className="App">
      <Formik initialValues={values} onSubmit={() => {}}>
        {() => (
          <div>
            <FieldArray name="fields">
              {({ push, remove, form: { getFieldMeta } }) => {
                const { value }: FieldMetaProps<FormValues["fields"]> =
                  getFieldMeta("fields");
                return (
                  <>
                    <button
                      type="button"
                      className="row__add"
                      onClick={() =>
                        push({ id: value.length + 1, name: "", number: "" })
                      }
                    >
                      Add Row
                    </button>
                    {value.map((val: Field, i: number) => {
                      return (
                        <Row key={val.id} row={val} remove={remove} index={i} />
                      );
                    })}
                  </>
                );
              }}
            </FieldArray>
          </div>
        )}
      </Formik>
    </div>
  );
}
