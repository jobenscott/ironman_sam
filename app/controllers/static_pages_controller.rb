class StaticPagesController < ApplicationController
  def home
    # @post = Post.find(params[:id])
    @posts = Post.paginate(:page => params[:page], :per_page => 3)
    @thePosts = Post.all
    @archived_posts = @thePosts.where(archive: true)
    @unarchived_posts = @posts.where(archive: false)
    # @user = User.find(params[:id])

    # adminUser = User.find_by(email: "rayeveleth@gmail.com")
    # adminUser.add_role :admin

    adminMaker = User.find_by(email: "jobenscott@yahoo.com")
    adminMaker.add_role :admin

    @aaron = User.find_by(email: "jobenscott@yahoo.com")
    @ray = User.find_by(email: "rayeveleth@yahoo.com")


  end

  

  def about
  end

  def show
    @post = Post.find(params[:id])
  end


  private
  
    def user_params
        params.require(:user).permit(:email)
    end
end
