const ComputerData = require('../model/ComputerData')

module.exports = {
    async store(request, response) {        
   
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
        
        responseBody = {requests: savedData, lastIndex: parseInt(paginationSkip) + parseInt(paginationLimit)}
        return response.json(responseBody)
    }
}
