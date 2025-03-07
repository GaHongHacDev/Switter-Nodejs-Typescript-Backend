"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@gacluster.rdbwq.mongodb.net/?retryWrites=true&w=majority&appName=GaCluster`;
class DatabaseService {
    client;
    db;
    constructor() {
        this.client = new mongodb_1.MongoClient(uri, {
            serverApi: {
                version: mongodb_1.ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true
            }
        });
        this.db = this.client.db(process.env.DB_NAME);
    }
    async connect() {
        try {
            await this.client.connect();
            // Send a ping to confirm a successful connection
            await this.db.command({ ping: 1 });
            console.log('Pinged your deployment. You successfully connected to MongoDB!');
        }
        catch (error) {
            console.log('Error Database: ', error);
            throw error;
        }
    }
    get users() {
        return this.db.collection(process.env.DB_USERS_COLLECTION);
    }
}
const databaseService = new DatabaseService();
exports.default = databaseService;
