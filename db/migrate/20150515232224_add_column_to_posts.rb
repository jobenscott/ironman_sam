class AddColumnToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :archive, :boolean, default: false
  end
end
