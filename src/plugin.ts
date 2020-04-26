import getVerifyConditions from './steps/verify-conditions';
import getAnalyzeCommits from './steps/analyze-commits';
import getGenerateNotes from './steps/generate-notes';

// Data shared between functions with default props
// Preferably replace with such object from semantic-release once/if they
// support it, see:
// https://spectrum.chat/semantic-release/plugins/pass-data-between-plugin-functions-and-plugins~99192f5c-509c-43e0-ba5a-42d5e0381f46
const meta = {};

module.exports = {
  verifyConditions: getVerifyConditions(meta),
  analyzeCommits: getAnalyzeCommits(meta),
  generateNotes: getGenerateNotes(meta),
};
