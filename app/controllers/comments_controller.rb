class CommentsController < ApplicationController
  before_action :set_post

  def index
    @comments = @post.comments
    # It went to implicit rendering
    render :layout => false
    # render :json => @comments
  end

  private
    def set_post
      @post = Post.find(params[:post_id])
    end
end
