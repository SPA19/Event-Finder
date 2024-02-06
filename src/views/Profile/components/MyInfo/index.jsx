import { useForm } from "react-hook-form";
import styles from "./Myinfo.module.css";
import { useEffect } from "react";

const USER_DATA = "userData";

const MyInfo = () => {
  const { handleSubmit, register, setValue } = useForm();

  useEffect(() => {
    try {
      const userData = JSON.parse(localStorage.getItem(USER_DATA)) || {};
      setValue("name", userData?.name);
      setValue("email", userData?.email);
      setValue("age", userData?.age);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleFormSubmit = (data) => {
    try {
      localStorage.setItem(USER_DATA, JSON.stringify(data));
      alert("Usuario Actualizado");
    } catch (error) {
      alert("Ha  ocurrido un error al guardar los datos");
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          {...register("name", {
            required: true,
            minLength: 1,
            maxLength: 120,
          })}
        />
      </label>
      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          {...register("email", {
            required: true,
            minLength: 1,
            maxLength: 200,
          })}
        />
      </label>
      <label className={styles.label}>
        Age
        <input
          type="number"
          className={styles.input}
          {...register("age", {
            required: true,
            min: 1,
            max: 120,
            valueAsNumber: true,
          })}
        />
      </label>
      <button type="submit" className={styles.submitButton}>
        Save
      </button>
    </form>
  );
};

export default MyInfo;
