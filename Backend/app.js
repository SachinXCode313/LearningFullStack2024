import express from 'express'
// const express = require('express');

import GoogleSheetConnectivity from "./src/GoogleSheetConnectivity.js"

import {google} from 'googleapis'

const app = express()

app.use(GoogleSheetConnectivity)

app.listen(3000 , ()=> {
    console.log("Server is running on 3000 port")
}) 


