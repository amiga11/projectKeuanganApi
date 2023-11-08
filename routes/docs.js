import express from 'express'
const router = express.Router()

import fs from "fs";
import swaggerUi from 'swagger-ui-express'
// import apiDocs from '../documentations/apiDocs-1.json' assert { type: "json" };

const apiDocsDTO1 = JSON.parse(
    fs.readFileSync(new URL("../documentations/apiDocsDTO-1.json", import.meta.url), {
        encoding: "utf-8",
    })
)

// DTO-PUSDATIN
router.use('/faskes/apidocs-1-dto', swaggerUi.serve, (req, res) => {
    let html = swaggerUi.generateHTML(apiDocsDTO1);
    res.send(html);
})


export default router