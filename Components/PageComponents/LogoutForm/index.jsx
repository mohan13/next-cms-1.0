import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { LogoutData } from "./logoutData";
import * as yup from "yup";
import Link from "next/link";
export const Schema = yup.object().shape({
  username: yup.string().required("usernasme is required !"),
  password: yup.string().required("password is empty!"),
});
const Index = () => {
  return (
    <div className="flex bg-gray-100 justify-center h-screen items-center">
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={Schema}
        render={({ handleSubmit }) => {
          return (
            <div
              className="border py-32 bg-Headline px-24 rounded-lg
            "
            >
              <Form onSubmit={handleSubmit}>
                {LogoutData?.map((val, i) => {
                  return (
                    <div key={i} className="grid ">
                      <Field
                        className="mt-4  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        type={val.Name}
                        placeholder={val.placeHolder}
                        name={val.Name}
                      />
                      <ErrorMessage
                        className="text-red-500"
                        name={val.Name}
                        component="div"
                      />
                    </div>
                  );
                })}
                <div className="flex mt-4 justify-between items-center">
                  <div className="text-indigo-500 hover:text-indigo-600 mr-4 cursor-pointer">
                    Create new account
                  </div>
                  <Link href="/Home">
                    <button
                      type="submit"
                      className="flex mr-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                      Login
                    </button>
                  </Link>
                </div>
              </Form>
            </div>
          );
        }}
      />
    </div>
  );
};

export default Index;
