import app from "../config/app.js";
import env from "../config/env.js";

app.listen(env.PORT, () => console.log(`Server running at: http://localhost:${env.PORT}`));