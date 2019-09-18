const blacklistedTokensSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('BlacklistedTokens', blacklistedTokensSchema);
//# sourceMappingURL=BlacklistedTokens.js.map
