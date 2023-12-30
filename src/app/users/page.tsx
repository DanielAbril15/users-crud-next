"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Avatar, IconButton, Modal } from "@mui/material";
import { PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    maxWidth: 400,
  }));

  const handleModal = () => {
    setOpen(!open);
  };

  useEffect(() => {
    axios
      .get(`https://users-crud-k0xm.onrender.com/api/users/`)
      .then((res: any) => {
        setUsers(res.data);
      })
      .catch((err: any) => console.log(err));
  }, []);

  if (!users) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  } else {
    return (
      <Box>
        {users.map((user: any) => (
          <>
            <Item
              key={user.id}
              sx={{
                my: 1,
                mx: "auto",
                p: 2,
              }}
            >
              <Stack className="card-row">
                <Avatar>{user.name[0]}</Avatar>
                <Typography>{user.name}</Typography>
                <Typography noWrap>{user.birthdate}</Typography>
                <Typography noWrap>{user.gender}</Typography>
                <Link href={`users/${user.id}`}>
                  <IconButton
                    onClick={handleModal}
                    color="primary"
                    className="edit-btn"
                  >
                    <PencilIcon />
                  </IconButton>
                </Link>
              </Stack>
            </Item>
          </>
        ))}
      </Box>
    );
  }
}
