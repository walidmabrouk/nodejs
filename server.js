const http= require('http')
const server = http.createServer((req,res) =>{
    if (req.url==='/home'){
        
        res.write ('hello')

    } else if (req.url==='/contact') {
        res.status = 200
        res.write('hello from contact')
    }else {
        res.statusCode = 404
        res.write("Not Found")
    }
    
    res.end()

})

server.listen(3000)