import React from "react";
import { Formik } from "formik";
import { Field } from "./App";

interface RowProps {
  row: Field;
  index: number;
  remove: <T>(index: number) => T | undefined;
}

function Row({ remove, index, row }: RowProps) {
  const initialValue = row;

  return (
    <Formik
      initialValues={initialValue}
      enableReinitialize={true}
      onSubmit={() => {}}
    >
      {({ setFieldValue, values }) => {
        return (
          <div className="form__wrapper">
            <div>
              <input
                type="text"
                name={`name`}
                value={values.name}
                onChange={(e) => {
                  setFieldValue(`name`, e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="number"
                name={`number`}
                value={values.number}
                onChange={(e) => {
                  setFieldValue(`number`, e.target.value);
                }}
              />
            </div>
            <div>
              <button
                type="button"
                className="row__delete"
                onClick={() => {
                  remove(index);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export { Row };
