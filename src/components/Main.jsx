import { Box, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Main() {
  return (
    <main id="home">
      <aside data-aos="fade-down">
        <h1>Ahmed Atef</h1>
        <h2>A Civil Engineer You Can Trust</h2>
      </aside>

      <div className="about" data-aos="fade-down" data-aos-delay="250">
        <h3>Who Am I ..?</h3>
        <p>
          I am a highly skilled and experienced civil engineer with a passion
          for creating innovative solutions. My expertise spans various areas of
          engineering, including bridge design, structural engineering.
        </p>

        <Box className="btns" data-aos="fade-down" data-aos-delay="450">
          <Button
            onClick={() => window.open("https://wa.me/+201125425194", "_blank")}
            variant="contained"
            sx={{ background: "#000", fontSize: "1rem", mr: "1rem" }}
          >
            <WhatsAppIcon sx={{ mr: "0.3rem", color: "#25d366" }} />
            WhatsApp
          </Button>

          <Button
            onClick={() =>
              window.open("https://t.me/YourTelegramUsername", "_blank")
            }
            variant="contained"
            sx={{ background: "#000", fontSize: "1rem" }}
          >
            <TelegramIcon sx={{ mr: "0.3rem", color: "#0088cc" }} />
            Telegram
          </Button>
        </Box>
      </div>
    </main>
  );
}
