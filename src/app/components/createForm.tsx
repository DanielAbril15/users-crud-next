import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
export default function CreateForm() {
  const { register, handleSubmit, reset } = useForm();
  const [value, setValue] = useState(null);

  const createUser = (data: any) => {
    const sendData = {
      name: data.name,
      birthdate: dayjs(value).format("MM/DD//YYYY"),
      gender: data.gender,
    };
    if (
      sendData.name === "" ||
      sendData.birthdate === "" ||
      sendData.gender === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please complete all fields ",
      });
    } else {
      axios
        .post("https://users-crud-k0xm.onrender.com/api/users/", sendData)
        .then((response) => {
          if (response.status === 201) {
            reset({
              name: "",
              birthdate: "",
              gender: "",
            });
            setValue(null);
          }
          console.log(response);
          Swal.fire({
            title: "Good job!",
            text: "User Created",
            icon: "success",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  //   const errorClick = () => {

  //   };

  return (
    <section>
      <form className="form-container" onSubmit={handleSubmit(createUser)}>
        <UserCircleIcon className="w-40 icon-user" />
        <div className="inputs-container">
          <h1 className="title text-center">Create User</h1>
          <TextField
            {...register("name")}
            id="name"
            label="Name"
            variant="outlined"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
            {/* guarde el valor del datepicker */}
            <TextField
              {...register("birthname")}
              id="birthname"
              label="birthname"
              variant="outlined"
              value={value}
              className="input-none"
            />
          </LocalizationProvider>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              {...register("gender")}
              id="gender"
              labelId="genderlabel"
              label="gender"
            >
              <MenuItem value={""}>none</MenuItem>
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Rather not say"}>Rather not say</MenuItem>
            </Select>
          </FormControl>
          <Button
            onClick={handleSubmit(createUser)}
            className="bg-blue-400"
            variant="contained"
          >
            Create
          </Button>
        </div>
      </form>
    </section>
  );
}
