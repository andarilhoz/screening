const ComputerData = require('../model/ComputerData')

module.exports = {
    async store(request, response) {        
        console.log("Received request at %s", new Date())
        const {uptime} = request.body

        const createdComputerData = await ComputerData.create({
            uptime
        })

        return response.json(createdComputerData)
    },

    async display(request, response) {
        let paginationSkip = request.query.skip ?? 0
        let paginationLimit = request.query.limit ?? 10

        const savedData = await ComputerData.find({}, null, {skip: paginationSkip, limit: paginationLimit})
        const lastIndex = parseInt(paginationSkip) + savedData.length
        
        formatted = '' 
        savedData.forEach(item => formatted += `Request time: ${item['createdAt']} - uptime: ${item['uptime']}</br>`)
        formatted += `lastIndex: ${lastIndex}`
        
        return response.send(formatted)
    }
}
