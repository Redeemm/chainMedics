// import { handleSubmit } from "../../pages/start.vue";
const Moralis = require("moralis").default;
const fs = require("fs");
require("dotenv").config;

// const { formData } = handleSubmit();

const jsonString = JSON.stringify({
      "Name": "formData.Name",
      "DateOfBirth": "formData.DateOfBirth",
      "BloodType": "formData.BloodType",
      "Allergies": "formData.Allergies",
      "ChronicConditions": "formData.ChronicConditions"
    });


const recordUploads = [
    {
        path: "rerered",
        content: Buffer.from(jsonString).toString('base64')
    }
]

async function uploadToIpfs() {
    await Moralis.start({
        apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImJjNGJhMzJhLTExOGQtNDExZi04Yjc5LTRmYjc2ZWIzYzI0NyIsIm9yZ0lkIjoiMzU2MzcyIiwidXNlcklkIjoiMzY2MjcxIiwidHlwZUlkIjoiMTM0NGZmZGQtZDk3NS00ZWIwLThmZTUtMzM4NzE1ZjRjMWZlIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2OTQxNzM2MDQsImV4cCI6NDg0OTkzMzYwNH0.31T1wtg3ySD2WN1xMyHHoWz1F-GNVDI6EYdI3HpaQQU",
    })

    const res = await Moralis.EvmApi.ipfs.uploadFolder({
        abi: recordUploads
    })

    console.log(res.result)
    console.log('Form Data in otherFile.js:', formData);


}

uploadToIpfs()

