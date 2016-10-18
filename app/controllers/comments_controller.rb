class CommentsController < ApplicationController
  before_action :set_post

  def index
    @comments = @post.comments
    # It went to implicit rendering
    render :layout => false
    # render :json => @comments
  end

  def create
    @comment = @post.comments.build(comments_params)
    if @comment.save
      # render something that just has li I want
      # render 'comments/show', :layout => false
      render 'create.js', :layout => false
    else
      render "posts/show"
    end
  end

  private
    def set_post
      @post = Post.find(params[:post_id])
    end

    def comments_params
      params.require(:comment).permit(:content)
    end
end
