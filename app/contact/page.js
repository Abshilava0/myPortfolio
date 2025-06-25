"use client";

import DotGrid from "@/components/DotGrid.js";
import classes from "./page.module.css";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function Projects() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});


  function validate() {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required"; //name auth

    if (!formData.email.trim()) {
      //email auth
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    const message = formData.message.trim();

    if (!message) { //message auth
      newErrors.message = "Message is required";
    } else if(message.length < 5) {
      newErrors.message = 'Message must be at least of 5 characters'
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const [status, setStatus] = useState("");

  async function handleSubmit(event) {

     

    event.preventDefault();

    if (!validate()) {
      return;
    }

    const form = new FormData(event.target);
    const payload = Object.fromEntries(form.entries());
    setStatus("loading");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Clear form fields
      event.target.reset();

      // Hide success message after 3 seconds
      setTimeout(() => {
        setStatus("");
      }, 3000);
    } else {
      setStatus("error");

      // Hide error message after 3 seconds
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }

 

  return (
    <div className={classes.cont}>
      <DotGrid
        dotSize={10}
        gap={15}
        baseColor="black"
        activeColor="white"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />

      <div className={classes.formContainer}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <header className={classes.header}>
            <h1>Contact Me On Mail</h1>
            <p>Send Your Message Here</p>
          </header>
          <div className={classes.formField}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              error={!!errors.name} //textfield takes only boolean. 2 !! turns string into boolean
              helperText={errors.name}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray", // default border
                  },
                  "&:hover fieldset": {
                    borderColor: "darkgray", // on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // when clicked/focused
                  },
                },

                "& label": {
                  color: "white", // default label color
                },
                "& label.Mui-focused": {
                  color: "white", // optional: label color on focus
                },
                "& .MuiInputBase-input": {
                  color: "white", // <-- this makes the input text white
                },
              }}
            />
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray", // default border
                  },
                  "&:hover fieldset": {
                    borderColor: "darkgray", // on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // when clicked/focused
                  },
                },
                "& label": {
                  color: "white", // default label color
                },
                "& label.Mui-focused": {
                  color: "white", // optional: label color on focus
                },
                "& .MuiInputBase-input": {
                  color: "white", // <-- this makes the input text white
                },
              }}
            />
            <TextField
              label="Message"
              name="message"
              variant="outlined"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              error={!!errors.message}
              helperText={errors.message}
              fullWidth
              multiline
              rows={4}
              onKeyDown={(e) => {
                if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
                  e.preventDefault();
                  document.querySelector("form").requestSubmit();
                }
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray", // default border
                  },
                  "&:hover fieldset": {
                    borderColor: "darkgray", // on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // 👈 when clicked/focused
                  },
                },
                "& label": {
                  color: "white", // default label color
                },
                "& label.Mui-focused": {
                  color: "white", // optional: label color on focus
                },
                "& .MuiInputBase-input": {
                  color: "white", // <-- this makes the input text white
                },
              }}
            />
          </div>
          <footer className={classes.footer}>
            {status === "success" && <p>Message Sent Succesfully</p>}
            {status === "error" && <p>Something Went Wrong</p>}

            <button
              type="submit"
              disabled={status === "loading"}
              className={classes.button}
            >
              {status === "loading" ? "Sending" : "Send"}
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
}
