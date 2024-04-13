import { Input, FormLabel, FormControl, Button } from "@mui/material";
import React, { useEffect } from "react";
import { MdOutlineEmail, MdPhone } from "react-icons/md";
import { useFormik } from "formik";
import Aos from "aos";
import 'aos/dist/aos.css';

const Contact = ({darkmode}) => {

  useEffect(() =>{
    Aos.init();
  })

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbyZRrLmRHhGqbWtgqkopd45BL7cclqcOT6rePUus0rkeK_HWsjalW1x_xfI9Fxouj94/exec",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        if (response.ok) {
          // Handle success
          console.log("Data successfully submitted");
        } else {
          // Handle error
          console.error("Failed to submit data");
        }
      } catch (error) {
        console.error("Error submitting data", error);
      }

      // Reset form fields after submission
      formik.resetForm();

      
    },
  });

  return (
    <div className="lg:h-screen lg:flex justify-center m-auto items-center gap-20 lg:pt-28 p-10 lg:p-2">
      <div data-aos= 'fade-right' data-aos-delay= '100'>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className={`${darkmode ? "text-white" : "text-gray-600"}`}>Lets get to know each other</p>
        <div className="flex items-center mt-8 gap-2">
          <MdOutlineEmail size={24} />
          <p>mh070940@gmail.com</p>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <MdPhone size={24} />
          <p>+62 831 9245 3815</p>
        </div>
      </div>
      <div className="lg:w-1/2 mt-10 lg:mt-0" data-aos= 'fade-left' data-aos-delay= '100'>
        <form onSubmit={formik.handleSubmit}>
          <FormControl className="w-full mb-3">
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              type="text"
              className="border border-indigo-600 p-2 rounded-lg"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </FormControl>
          <FormControl className="w-full mb-3">
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              className="border border-indigo-600 p-2 rounded-lg"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </FormControl>
          <FormControl className="w-full mb-3">
            <FormLabel htmlFor="message">Message</FormLabel>
            <textarea
              id="message"
              type="text"
              className="border border-indigo-600 p-2 rounded-lg h-44"
              onChange={formik.handleChange}
              value={formik.values.message}
            />
          </FormControl>
          <Button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
