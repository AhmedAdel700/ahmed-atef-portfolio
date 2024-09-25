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
          fontSize: "2rem",
          bgcolor: "#272525",
        }}
      >
        Form Is Submitted !
      </Stack>
    );
  }

  return (
    <footer id="contact">
      <h3>Contact Me</h3>
      <form onSubmit={handleSubmit}>
        <Box className="input-group">
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
        <textarea name="message" placeholder="Your Message" required></textarea>

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
