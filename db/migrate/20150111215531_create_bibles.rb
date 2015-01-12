class CreateBibles < ActiveRecord::Migration
  def change
    create_table :bibles do |t|
      t.json :reading_record
      t.timestamps null: false
    end
  end
end
