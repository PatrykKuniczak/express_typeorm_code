import logger from 'jet-logger';
import dotenv from "dotenv";
import {DataSource} from "typeorm";
import {User} from "@src/entities/User";
import express from "express";
import * as process from "process";


dotenv.config({path: "./.env"});

const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DB_URL,
    synchronize: true,
    entities: [User]
})

AppDataSource.initialize()
    .then(() => {
        logger.info("Data Source has been initialized!")
    })
    .catch((err: any) => {
        logger.err("Error during Data Source initialization", err)
    })

const PORT = process.env.PORT;

express().listen(PORT, () => logger.info(PORT));