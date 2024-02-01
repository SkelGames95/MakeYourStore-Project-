import { createServer } from 'node:http'

const server = createServer((request, response) => {
    response.statusCode = 200
    response.setHeader = ('Content-type', 'application/json')
    response.end()
})

server.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
})