import { useState, useEffect } from "react";
import { notification } from "antd";
import { firestore } from "../../firebase";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useForm = (validate: any) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Success",
      description: "Your message has been sent!",
    });
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validate(values));
  
    const isFormValid = Object.keys(validate(values)).length === 0;
  
    if (isFormValid) {
      try { 
        await firestore.collection("contactFormSubmissions").add(values);

        setValues({});
        setShouldSubmit(true);
      } catch (error) {
        console.error("Error submitting form: ", error);
      }
    } else {
      console.log("Please fill in all required fields.");
    }
  };
  
  
  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues("");
      openNotificationWithIcon();
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};
