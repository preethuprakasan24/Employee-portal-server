//import json server

const jsonServer = require('json-server')
const employeeServer = jsonServer.create()

const middleware = jsonServer.defaults()
const router = jsonServer.router('db.json')

employeeServer.use(middleware)
employeeServer.use(router)

const PORT = 4000 || process.env.PORT

employeeServer.listen(PORT, ()=>{
    console.log(`server is running successfully at ${PORT}`);    
})