class PostsController < ApplicationController
  def index
    # @post = Post.find(params[:id])
    @posts = Post.paginate(:page => params[:page], :per_page => 3)
    @thePosts = Post.all
    @archived_posts = @thePosts.where(archive: true)
    @unarchived_posts = @posts.where(archive: false)

    # adminMaker = User.find_by(email: "jobenscott@yahoo.com")
    # adminMaker.add_role :admin

    @aaron = User.find_by(email: "jobenscott@yahoo.com")
    @ray = User.find_by(email: "rayeveleth@yahoo.com")

  end

  def created_today?
    @archived_posts.created_at.to_date == Date.today
  end

  def show
    @post = Post.find(params[:id])
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])

    if @post.update(post_params)
      redirect_to root_path
    else
      render :new
    end
  end

  def archived
    @post = Post.find(params[:id])

    @post.update_attributes(archive: true)
    redirect_to root_path
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to root_path
  end

  private

    def post_params
      params.require(:post).permit(:subject, :content, :image, :archive, :user_id)
    end
end
