"use client";
import {
  Avatar,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function User({ params }: any) {
  const { register, handleSubmit, reset } = useForm();
  const [value, setValue] = useState(null);
  const [editUser, setEditUser] = useState<any>([]);
  const { user } = params;
  const router = useRouter();

  useEffect(() => {
    axios
      .get(`https://users-crud-k0xm.onrender.com/api/users/${user}`)
      .then((response: any) => {
        const date: any = dayjs(response.data.birthdate);
        setValue(date);
        setEditUser(response.data);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteUser = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://users-crud-k0xm.onrender.com/api/users/${user}`)
          .then((response) => {
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
            router.push("/users");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  const handlerEdit = (data: any) => {
    const editData = {
      name: data.name !== "" ? data.name : editUser.name,
      birthdate: data.birthdate !== "" ? data.birthdate : editUser.birthdate,
      gender: data.gender !== "" ? data.gender : editUser.gender,
    };

    axios
      .patch(`https://users-crud-k0xm.onrender.com/api/users/${user}`, editData)
      .then((res) => {
        Swal.fire({
          title: "Edited!",
          text: "User has been edited successfully.",
          icon: "success",
        });
        setEditUser(editData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className="form-container form-container-edit">
      <div className="inputs-container">
        <Avatar className="avatar-edit">{editUser.name?.[0]}</Avatar>
        <h1 className="title text-center">{editUser.name}</h1>
        <h3 className=" text-center">{editUser.gender}</h3>
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
          onClick={handleSubmit(handlerEdit)}
          className="bg-green-400 hover:bg-green-600"
          variant="contained"
        >
          Edit
        </Button>
        <Button
          onClick={deleteUser}
          className="bg-red-400 hover:bg-red-600"
          variant="contained"
        >
          Delete
        </Button>
      </div>
    </form>
  );
}
