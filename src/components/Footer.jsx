import { Box, Stack } from "@mui/material";
import { useForm, ValidationError } from "@formspree/react";

export default function Footer() {
  const [state, handleSubmit] = useForm("xyzgrgpk");
  if (state.succeeded) {
    return (
      <Stack
        sx={{
          width: "100%",
          height: "100px",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.8rem",
          bgcolor: "#272525",
        }}
      >
        Form Is Submitted !
      </Stack>
    );
  }

  return (
    <footer id="contact">
      <h3 data-aos="fade-down">Contact Me</h3>
      <form onSubmit={handleSubmit} data-aos="fade-down">
        <Box className="input-group" data-aos="fade-down">
          <input
            type="text"
            name="name"
            placeholder="Your Name Please"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Please"
            required
          />
        </Box>
        <textarea
          name="message"
          placeholder="Your Message"
          required
          data-aos="fade-down"
        ></textarea>

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </footer>
  );
}
