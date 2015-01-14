class CreateVerses < ActiveRecord::Migration
  def change
    create_table :verses do |t|
      t.string :number

      t.timestamps null: false
    end
  end
end
