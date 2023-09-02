
const promptSchema = new Schema ({
    name: { type: String, required: true},
    promptTemplate: { type: String, required: true},
    completion: { type: String, required: true},
    type: { type: String, required: true}
})