import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

const FormProject = ({ project }) => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const data = await fetch("http://localhost:4000/projects", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const respuesta = await data.json();
    console.log(respuesta);
    navigate("/");
  };

  return (
    <div className="bg-color2 text-white w-6/12 m-auto justify-center mt-10 rounded-md shadow-md">
      <p className="text-2xl p-5 text-center">New Project</p>
      <Formik
        initialValues={{
          title: project?.title ?? "",
          description: project?.description ?? "",
        }}
        enableReinitialize={true}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
      >
        <Form>
          <label htmlFor="title">Project Title</label>
          <Field
            className="bg-gray-700"
            id="title"
            name="title"
            type="text"
            placeholder="Project Title"
          />
          <label htmlFor="description">Project Description</label>
          <Field
            className="bg-gray-700"
            id="description"
            name="description"
            placeholder="Project Description"
            type="text"
          />
          <input type="submit" value="Save Project" className="bg-gray-700" />
        </Form>
      </Formik>
    </div>
  );
};

FormProject.defaultProps = {
  project: {},
};

export default FormProject;
