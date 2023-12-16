import express, { response } from 'express';
import mongoose from 'mongoose';
import { Customer } from "./CustomerModel.js";
import { CUSTOMER_NOT_FOUND, DELETE_SUCCESS, ERROR_MESSAGE, INSERT_SUCCESS, UPDATE_SUCCESS } from './constants.js';
import {StatusCodes} from 'http-status-codes';

const app = express();
app.use(express.json());

const connectDb=async()=> {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/parkingsystem');
        console.log("Database Conntection Created");
    } catch (error) {
        console.log(error);
        
    }
}

app.post("/customer",async(request, response)=>{
    try {
        const reqData=request.body;
        const customer = new Customer(reqData);
        await customer.save();
        response.status(StatusCodes.CREATED).send({message:INSERT_SUCCESS})
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
        
    }
});


app.get("/customer",async(request, response)=>{
    try {
        const customers=await Customer.find();
        response.send({customers:customers});  
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});

app.get("/customer/:name",async(request, response)=>{
    try {
        const customer=await Customer.findOne({name:request.params.name});
        if (customer==null){
            response.status(StatusCodes.NOT_FOUND).send({message:CUSTOMER_NOT_FOUND});
        }
        else{
            response.send({customer:customer});
        }
        
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
        
    }

});


app.delete("/customer/:name",async(request, response)=>{
    try {
        await Customer.deleteOne({name:request.params.name});
        response.send({message:DELETE_SUCCESS});
        
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
        
    }

});

app.put("/customer/:name",async(request, response)=>{
    try {
        await Customer.updateOne({name:request.params.name},request.body);
        response.send({message:UPDATE_SUCCESS});
        
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
        
    }

});

app.listen(6001, ()=>{
    console.log("Server has started on 6001");
    connectDb();
    
});