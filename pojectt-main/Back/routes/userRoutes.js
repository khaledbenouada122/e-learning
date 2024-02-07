const express = require ("express")

const app = express()
const router = express.Router()
app.use(express.json())
const {registre} =require("../controler/registre") 
const {getetudiant} =require("../controler/getetudiant")
const {updatetudiant} = require("../controler/updatetudiant")
const {login} =require("../controler/login")
const {addadmin} =require("../admin_controler/addadmin")
const {adminget} = require("../admin_controler/adminget")
const {adminput} = require("../admin_controler/adminput")
const {deleteadmin} = require('../admin_controler/deleteadmin')
const {getimage} = require('../imagecontroler/getimage')
const {putimage} = require("../imagecontroler/putimage")
const { route } = require("./aploadRouter")
const {postfrancais} = require("../francais_contoller/postfrancais")
const {getfrancais} = require("../francais_contoller/getfrancais")
const {putfrancais} =require("../francais_contoller/putfrancais")
/*  CRUD For useres*/ 
router.post("/addUserAuth",registre)
router.get("/getuser",getetudiant)
router.put("/updateuser/:id",updatetudiant)
router.post("/login",login)
/*CRUD For admin */
router.post("/addadmin",addadmin)
router.get("/getadmin",adminget)
router.put("/updateadmin/:id",adminput)
router.delete("/deletadmine/:id",deleteadmin)
/* CRUD for images */
router.get("/getimage",getimage)
router.put("/putimage/:id",putimage)
/*CRUD for farncais */
router.post("/postfrancais",postfrancais)
router.get("/getfrancais",getfrancais)
router.put("/putfrancais/:id",putfrancais)









module.exports=router




