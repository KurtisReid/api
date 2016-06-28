var mongoose = require('mongoose');
var OutputKnowledgeItemsSchema = new mongoose.Schema({
  type : String,
  effectOnDistance: Number,
  title : String,
  when : Date,
  institution : String,
  where : String,
  contributes : String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Todo', OutputKnowledgeItemsSchema);

var inputKnowledgeItemsSchema = new mongoose.Schema([{
  AccountType: String,
  apikey: String,
}]);

module.exports = mongoose.model('Todo', inputKnowledgeItemsSchema);

var learningStateSchema = new mongoose.Schema([{
  learningGoal : {
    id: String,
    distenceToLearningGoal: Number,
  }]);

module.exports = mongoose.model('Todo', learningStateSchema);

var stateTransitionSchema = new mongoose.Schema([{
  id : Number,
  cause: String,
  distenceToLearningGoal: Number,
}]);

module.exports = mongoose.model('Todo', stateTransitionSchema);

var outputReccomendationsSchema = new mongoose.Schema([{
  reccomendationID: Number,
  causedBy: String,
  progressesTwoards: String,
}]);

module.exports = mongoose.model('Todo', outputReccomendationsSchema);
