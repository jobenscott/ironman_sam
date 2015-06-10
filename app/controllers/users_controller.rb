class UsersController < ApplicationController
before_action :authenticate_user!

  # adminUser = User.find_by(email: "rayeveleth@gmail.com")
  # adminUser.add_role :admin

  # adminMaker = User.find_by(email: "jobenscott@yahoo.com")
  # adminMaker.add_role :admin

  adminMaker = User.find_by(email: "jobenscott@yahoo.com")
    adminMaker.add_role :admin
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      redirect_to root_path
    else
      render :new
    end
  end


  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to root_path
  end

  private

    def user_params
        params.require(:user).permit(:email)
    end

end
