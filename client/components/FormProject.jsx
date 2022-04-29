import { Formik, Form, Field } from "formik";

const FormProject = () => {
  return (
    <div className="bg-color2 text-white w-6/12 m-auto justify-center mt-10 rounded-md shadow-md">
      <p className="text-2xl p-5">New Project</p>
      <Formik>
        <Form>
          <Field></Field>
        </Form>
      </Formik>
    </div>
  );
};

export default FormProject;
