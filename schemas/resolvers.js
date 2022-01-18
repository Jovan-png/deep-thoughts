const {User, Thought} = require('../models')

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('friends')
            .populate('thoughts');
        },
        user: async (parent, {username}) =>{
            return User.findOne({username})
            .select('-__v -password')
            .populate('friends')
            .populate('thoughts')
        },
        thoughts: async(parent,{_id}) =>{
            const params = username ? {username}: {};
            return Thought.findOne({_id});
        }
    }
}

module.exports = resolvers;