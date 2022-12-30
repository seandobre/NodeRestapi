import express from 'express'
import {v4 as uuidv4} from 'uuid'

const Router = express.Router()
let users = []
Router.get("/",(req, res)=>{
    console.log(users)
res.send(users)
})
Router.post("/",(req,res)=>{
    let user = req.body

    users.push({ ...user, id: uuidv4()})



    console.log("POST MADE")

    res.send(`User made with ${user.name}`)
})
Router.get('/id/:id',(req,res)=>{
   res.send(users.find((user)=> user.id = req.params.id))

})
Router.get('/name/:id',(req,res)=>{
    res.send(users.find((user)=> user.name = req.params.id))
 
 })
Router.delete('/delete/:id',(req,res)=>{
    users = users.filter((user)=> user.id != req.params.id)
    res.send(`User With id ${req.params.id} Was Deleted`)
})
export default Router;