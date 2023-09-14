import "./App.css";
import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div>
          <label for="">Login Form</label>
        </div>
        <div>
          <input
            type="text"
            {...register("id", {
              required: "값 입력해주세요",
            })}
          />
          {errors.id && <span>{errors.id.message}</span>}
        </div>
      </form>
    </>
  );
}

export default App;
