import { useForm } from "react-hook-form";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleClearClick = () => {
    reset();
  };
  const handleSubmitForm = (data) => {
    console.log(data);
  };

  console.log(errors)

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <label>
        Name
        <input
          type="text"
          name="name"
          {...register("name", { required: true })}
        />
      </label>
      <br />
      <label>
        Age
        <input
          type="number"
          min={2}
          name="age"
          {...register("age", { required: true })}
        />
      </label>
      <br />
      <label>
        Address
        <input
          type="email"
          name="address"
          {...register("address", { required: true })}
        />
      </label>
      <br />
      <label>
        Zipcode
        <input
          type="text"
          name="zipcode"
          {...register("zipcode", { required: true })}
        />
      </label>
      <br />
      <label>
        Phone
        <input
          type="number"
          name="phone"
          {...register("phone", { required: true })}
        />
      </label>
      <br />
      <div>
        <button type="button" onClick={handleClearClick}>
          Clear
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SignupForm;
