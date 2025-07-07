const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

/* Hey GitHub Copilot, please complete the code for the comments API 
route in an Express.js application. The route should handle creating,
retrieving, updating, and deleting comments. Make sure to include error
handling and validation where necessary. */

router.get("/:postId", async (req, res) => {
  try {
    /**
     * Retrieves all comments associated with a specific post.
     * @type {Array<Comment>}
     * @description Finds and returns all comments for the post with the given postId from the request parameters.
     */
    const comments = await Comment.find({ postId: req.params.postId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving comments", error });
  } 
});

//add another endpoint for deleting a comment
router.delete("/:commentId", async (req, res) => {
    try {
        /**
         * Retrieves a comment document from the database by its unique identifier.
         *
         * @type {Comment}
         * @const
         * @async
         * @param {Object} req - The Express request object.
         * @param {Object} req.params - The route parameters.
         * @param {string} req.params.commentId - The unique identifier of the comment to retrieve.
         * @returns {Promise<Comment|null>} The comment document if found, otherwise null.
         */
        const comment = await Comment.findById(req.params.commentId);
        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }
        await comment.deleteOne();
        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting comment", error });
    }
});